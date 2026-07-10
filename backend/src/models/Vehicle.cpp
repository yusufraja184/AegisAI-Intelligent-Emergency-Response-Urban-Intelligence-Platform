#include "../../include/models/Vehicle.h"
#include <iostream>

using namespace std;

// Constructor
Vehicle::Vehicle()
{
    vehicleId = 0;
    vehicleType = "";
    driverName = "";
    latitude = 0.0;
    longitude = 0.0;
    available = true;
    capacity = 0;
    speed = 0.0;
}

// Setters
void Vehicle::setVehicleId(int id)
{
    vehicleId = id;
}

void Vehicle::setVehicleType(const string& type)
{
    vehicleType = type;
}

void Vehicle::setDriverName(const string& driver)
{
    driverName = driver;
}

void Vehicle::setLatitude(double lat)
{
    latitude = lat;
}

void Vehicle::setLongitude(double lon)
{
    longitude = lon;
}

void Vehicle::setAvailable(bool status)
{
    available = status;
}

void Vehicle::setCapacity(int cap)
{
    capacity = cap;
}

void Vehicle::setSpeed(double spd)
{
    speed = spd;
}

// Getters
int Vehicle::getVehicleId() const
{
    return vehicleId;
}

string Vehicle::getVehicleType() const
{
    return vehicleType;
}

string Vehicle::getDriverName() const
{
    return driverName;
}

double Vehicle::getLatitude() const
{
    return latitude;
}

double Vehicle::getLongitude() const
{
    return longitude;
}

bool Vehicle::isAvailable() const
{
    return available;
}

int Vehicle::getCapacity() const
{
    return capacity;
}

double Vehicle::getSpeed() const
{
    return speed;
}

// Display
void Vehicle::display() const
{
    cout << "Vehicle ID   : " << vehicleId << endl;
    cout << "Type         : " << vehicleType << endl;
    cout << "Driver       : " << driverName << endl;
    cout << "Latitude     : " << latitude << endl;
    cout << "Longitude    : " << longitude << endl;
    cout << "Available    : " << (available ? "Yes" : "No") << endl;
    cout << "Capacity     : " << capacity << endl;
    cout << "Speed        : " << speed << " km/h" << endl;
}