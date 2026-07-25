#ifndef EMERGENCY_SERVICE_H
#define EMERGENCY_SERVICE_H

#include "../database/DatabaseManager.h"
#include "../models/Emergency.h"
#include <vector>
#include "../algorithms/EmergencyPriorityQueue.h"

class EmergencyService
{
private:
    std::vector<Emergency> emergencies;
    EmergencyPriorityQueue priorityQueue;

    DatabaseManager database;

public:
    EmergencyService();
    void addEmergency(const Emergency& emergency);

    Emergency getNextEmergency();

    void processNextEmergency();

    bool hasPendingEmergency() const;

    bool removeEmergency(int emergencyId);

    Emergency* findEmergencyById(int emergencyId);

    bool updateEmergencyStatus(
    int emergencyId,
    const std::string& newStatus
);

std::vector<Emergency> getPendingEmergencies() const;

std::vector<Emergency> getHighPriorityEmergencies(
    int minimumSeverity
) const;

    void displayAllEmergencies();

    int getEmergencyCount() const;
};

#endif