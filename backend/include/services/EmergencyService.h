#ifndef EMERGENCY_SERVICE_H
#define EMERGENCY_SERVICE_H

#include "../models/Emergency.h"
#include <vector>

class EmergencyService
{
private:
    std::vector<Emergency> emergencies;

public:
    void addEmergency(const Emergency& emergency);

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

    void displayAllEmergencies() const;

    int getEmergencyCount() const;
};

#endif