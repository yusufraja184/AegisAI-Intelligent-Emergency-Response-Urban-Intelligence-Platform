#include "../../include/services/EmergencyService.h"
#include <iostream>

using namespace std;

EmergencyService::EmergencyService()
    : database("AegisAI.db")
{
    database.connect();

    database.createEmergencyTable();
}

void EmergencyService::addEmergency(const Emergency& emergency)
{
    // Store in memory
    emergencies.push_back(emergency);

    // Add to priority queue
    priorityQueue.push(emergency);

    // Save to database
    database.insertEmergency(
        emergency.getEmergencyId(),
        emergency.getCitizenId(),
        emergency.getEmergencyType(),
        emergency.getSeverity(),
        emergency.getLatitude(),
        emergency.getLongitude(),
        emergency.getStatus(),
        emergency.getTimestamp()
    );
}

bool EmergencyService::removeEmergency(int emergencyId)
{
    return database.deleteEmergency(emergencyId);
}

Emergency* EmergencyService::findEmergencyById(int emergencyId)
{
    for(auto& emergency : emergencies)
    {
        if(emergency.getEmergencyId() == emergencyId)
        {
            return &emergency;
        }
    }

    return nullptr;
}

bool EmergencyService::updateEmergencyStatus(
    int emergencyId,
    const std::string& newStatus)
{
    return database.updateEmergencyStatus(
        emergencyId,
        newStatus
    );
}

vector<Emergency> EmergencyService::getPendingEmergencies() const
{
    vector<Emergency> result;

    for(const auto& emergency : emergencies)
    {
        if(emergency.getStatus() == "Pending")
            result.push_back(emergency);
    }

    return result;
}

vector<Emergency> EmergencyService::getHighPriorityEmergencies(
    int minimumSeverity) const
{
    vector<Emergency> result;

    for(const auto& emergency : emergencies)
    {
        if(emergency.getSeverity() >= minimumSeverity)
            result.push_back(emergency);
    }

    return result;
}


void EmergencyService::displayAllEmergencies()
{
    database.displayAllEmergencies();
}



Emergency EmergencyService::getNextEmergency()
{
    Emergency emergency = priorityQueue.top();

    priorityQueue.pop();

    return emergency;
}

void EmergencyService::processNextEmergency()
{
    if(priorityQueue.empty())
    {
        std::cout << "No pending emergencies.\n";
        return;
    }

    Emergency emergency = priorityQueue.top();
    priorityQueue.pop();

    std::cout << "\nProcessing Emergency\n";
    emergency.display();
}

bool EmergencyService::hasPendingEmergency() const
{
    return !priorityQueue.empty();
}