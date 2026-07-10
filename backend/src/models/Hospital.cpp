#include "../../include/models/Hospital.h"
#include <iostream>

using namespace std;

// Constructor
Hospital::Hospital()
{
    hospitalId = 0;
    hospitalName = "";
    address = "";
    latitude = 0.0;
    longitude = 0.0;
    totalBeds = 0;
    availableBeds = 0;
    contactNumber = "";
}

// Setters
void Hospital::setHospitalId(int id)
{
    hospitalId = id;
}

void Hospital::setHospitalName(const string& name)
{
    hospitalName = name;
}

void Hospital::setAddress(const string& addr)
{
    address = addr;
}

void Hospital::setLatitude(double lat)
{
    latitude = lat;
}

void Hospital::setLongitude(double lon)
{
    longitude = lon;
}

void Hospital::setTotalBeds(int beds)
{
    totalBeds = beds;
}

void Hospital::setAvailableBeds(int beds)
{
    availableBeds = beds;
}

void Hospital::setContactNumber(const string& number)
{
    contactNumber = number;
}

// Getters
int Hospital::getHospitalId() const
{
    return hospitalId;
}

string Hospital::getHospitalName() const
{
    return hospitalName;
}

string Hospital::getAddress() const
{
    return address;
}

double Hospital::getLatitude() const
{
    return latitude;
}

double Hospital::getLongitude() const
{
    return longitude;
}

int Hospital::getTotalBeds() const
{
    return totalBeds;
}

int Hospital::getAvailableBeds() const
{
    return availableBeds;
}

string Hospital::getContactNumber() const
{
    return contactNumber;
}

// Display
void Hospital::display() const
{
    cout << "Hospital ID      : " << hospitalId << endl;
    cout << "Hospital Name    : " << hospitalName << endl;
    cout << "Address          : " << address << endl;
    cout << "Latitude         : " << latitude << endl;
    cout << "Longitude        : " << longitude << endl;
    cout << "Total Beds       : " << totalBeds << endl;
    cout << "Available Beds   : " << availableBeds << endl;
    cout << "Contact Number   : " << contactNumber << endl;
}