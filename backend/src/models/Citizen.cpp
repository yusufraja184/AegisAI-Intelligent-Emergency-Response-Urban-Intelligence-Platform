#include "../../include/models/Citizen.h"
#include <iostream>

using namespace std;

// Constructor
Citizen::Citizen()
{
    citizenId = 0;
    name = "";
    age = 0;
    gender = "";
    phoneNumber = "";
    address = "";
}

// Setters
void Citizen::setCitizenId(int id)
{
    citizenId = id;
}

void Citizen::setName(const string& n)
{
    name = n;
}

void Citizen::setAge(int a)
{
    age = a;
}

void Citizen::setGender(const string& g)
{
    gender = g;
}

void Citizen::setPhoneNumber(const string& phone)
{
    phoneNumber = phone;
}

void Citizen::setAddress(const string& addr)
{
    address = addr;
}

// Getters
int Citizen::getCitizenId() const
{
    return citizenId;
}

string Citizen::getName() const
{
    return name;
}

int Citizen::getAge() const
{
    return age;
}

string Citizen::getGender() const
{
    return gender;
}

string Citizen::getPhoneNumber() const
{
    return phoneNumber;
}

string Citizen::getAddress() const
{
    return address;
}

// Display
void Citizen::display() const
{
    cout << "Citizen ID   : " << citizenId << endl;
    cout << "Name         : " << name << endl;
    cout << "Age          : " << age << endl;
    cout << "Gender       : " << gender << endl;
    cout << "Phone Number : " << phoneNumber << endl;
    cout << "Address      : " << address << endl;
}