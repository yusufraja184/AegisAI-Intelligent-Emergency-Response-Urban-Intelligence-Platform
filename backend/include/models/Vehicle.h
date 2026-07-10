#ifndef VEHICLE_H
#define VEHICLE_H

#include <string>

class Vehicle
{
private:

    int vehicleId;
    std::string vehicleType;
    std::string driverName;
    double latitude;
    double longitude;
    bool available;
    int capacity;
    double speed;

public:

    Vehicle();

    // Setters
    void setVehicleId(int id);
    void setVehicleType(const std::string& type);
    void setDriverName(const std::string& driver);
    void setLatitude(double lat);
    void setLongitude(double lon);
    void setAvailable(bool status);
    void setCapacity(int cap);
    void setSpeed(double spd);

    // Getters
    int getVehicleId() const;
    std::string getVehicleType() const;
    std::string getDriverName() const;
    double getLatitude() const;
    double getLongitude() const;
    bool isAvailable() const;
    int getCapacity() const;
    double getSpeed() const;

    void display() const;
};

#endif