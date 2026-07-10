#include "../../include/models/Emergency.h"
#include <iostream>

using namespace std;

// Constructor
Emergency::Emergency()
{
    emergencyId = 0;
    citizenId = 0;
    emergencyType = "";
    severity = 0;
    latitude = 0.0;
    longitude = 0.0;
    status = "Pending";
    timestamp = "";
}

// Setter Functions
void Emergency::setEmergencyId(int id)
{
    emergencyId = id;
}

void Emergency::setCitizenId(int id)
{
    citizenId = id;
}

void Emergency::setEmergencyType(const string& type)
{
    emergencyType = type;
}

void Emergency::setSeverity(int sev)
{
    severity = sev;
}

void Emergency::setLatitude(double lat)
{
    latitude = lat;
}

void Emergency::setLongitude(double lon)
{
    longitude = lon;
}

void Emergency::setStatus(const string& stat)
{
    status = stat;
}

void Emergency::setTimestamp(const string& time)
{
    timestamp = time;
}

void Emergency::setCitizen(const Citizen& c)
{
    citizen = c;
}

void Emergency::setVehicle(const Vehicle& v)
{
    assignedVehicle = v;
}

void Emergency::setHospital(const Hospital& h)
{
    assignedHospital = h;
}

void Emergency::setDispatcher(const Dispatcher& d)
{
    dispatcher = d;
}

void Emergency::setRoute(const Route& r)
{
    route = r;
}

// Getter Functions
int Emergency::getEmergencyId() const
{
    return emergencyId;
}

int Emergency::getCitizenId() const
{
    return citizenId;
}

string Emergency::getEmergencyType() const
{
    return emergencyType;
}

int Emergency::getSeverity() const
{
    return severity;
}

double Emergency::getLatitude() const
{
    return latitude;
}

double Emergency::getLongitude() const
{
    return longitude;
}

string Emergency::getStatus() const
{
    return status;
}

string Emergency::getTimestamp() const
{
    return timestamp;
}

Citizen Emergency::getCitizen() const
{
    return citizen;
}

Vehicle Emergency::getVehicle() const
{
    return assignedVehicle;
}

Hospital Emergency::getHospital() const
{
    return assignedHospital;
}

Dispatcher Emergency::getDispatcher() const
{
    return dispatcher;
}

Route Emergency::getRoute() const
{
    return route;
}


// Display Function
void Emergency::display() const
{
    cout << "Emergency ID : " << emergencyId << endl;
    cout << "Citizen ID   : " << citizenId << endl;
    cout << "Type         : " << emergencyType << endl;
    cout << "Severity     : " << severity << endl;
    cout << "Latitude     : " << latitude << endl;
    cout << "Longitude    : " << longitude << endl;
    cout << "Status       : " << status << endl;
    cout << "Timestamp    : " << timestamp << endl;
}