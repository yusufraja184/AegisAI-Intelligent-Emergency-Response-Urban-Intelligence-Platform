#ifndef EMERGENCY_H
#define EMERGENCY_H

#include <string>
#include "Citizen.h"
#include "Vehicle.h"
#include "Hospital.h"
#include "Dispatcher.h"
#include "Route.h"

class Emergency
{
private:
    int emergencyId;
    int citizenId;
    std::string emergencyType;
    int severity;
    double latitude;
    double longitude;
    std::string status;
    std::string timestamp;

    Citizen citizen;

    Vehicle assignedVehicle;

    Hospital assignedHospital;

    Dispatcher dispatcher;

    Route route;

public:
    Emergency();

    // Setters
    void setEmergencyId(int id);
    void setCitizenId(int id);
    void setEmergencyType(const std::string& type);
    void setSeverity(int severity);
    void setLatitude(double latitude);
    void setLongitude(double longitude);
    void setStatus(const std::string& status);
    void setTimestamp(const std::string& timestamp);

    void setCitizen(const Citizen& citizen);
    void setVehicle(const Vehicle& vehicle);
    void setHospital(const Hospital& hospital);
    void setDispatcher(const Dispatcher& dispatcher);
    void setRoute(const Route& route);


    // Getters
    int getEmergencyId() const;
    int getCitizenId() const;
    std::string getEmergencyType() const;
    int getSeverity() const;
    double getLatitude() const;
    double getLongitude() const;
    std::string getStatus() const;
    std::string getTimestamp() const;

    Citizen getCitizen() const;
    Vehicle getVehicle() const;
    Hospital getHospital() const;
    Dispatcher getDispatcher() const;
    Route getRoute() const;

    void display() const;
};

#endif