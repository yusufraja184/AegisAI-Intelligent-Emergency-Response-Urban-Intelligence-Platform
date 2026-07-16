#include "../../include/services/EmergencyService.h"
#include <iostream>

using namespace std;

void EmergencyService::addEmergency(const Emergency& emergency)
{
    emergencies.push_back(emergency);
}

bool EmergencyService::removeEmergency(int emergencyId)
{
    for(auto it = emergencies.begin(); it != emergencies.end(); it++)
    {
        if(it->getEmergencyId() == emergencyId)
        {
            emergencies.erase(it);
            return true;
        }
    }

    return false;
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
    const string& newStatus)
{
    Emergency* emergency = findEmergencyById(emergencyId);

    if(emergency == nullptr)
        return false;

    emergency->setStatus(newStatus);

    return true;
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


void EmergencyService::displayAllEmergencies() const
{
    cout << "\n===== Emergency List =====\n";

    for(const auto& emergency : emergencies)
    {
        emergency.display();
        cout << "--------------------------" << endl;
    }
}

int EmergencyService::getEmergencyCount() const
{
    return emergencies.size();
}