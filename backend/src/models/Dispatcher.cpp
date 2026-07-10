#include "../../include/models/Dispatcher.h"
#include <iostream>

using namespace std;

// Constructor
Dispatcher::Dispatcher()
{
    dispatcherId = 0;
    name = "";
    shift = "";
    contactNumber = "";
    available = true;
}

// Setters
void Dispatcher::setDispatcherId(int id)
{
    dispatcherId = id;
}

void Dispatcher::setName(const string& n)
{
    name = n;
}

void Dispatcher::setShift(const string& s)
{
    shift = s;
}

void Dispatcher::setContactNumber(const string& number)
{
    contactNumber = number;
}

void Dispatcher::setAvailable(bool status)
{
    available = status;
}

// Getters
int Dispatcher::getDispatcherId() const
{
    return dispatcherId;
}

string Dispatcher::getName() const
{
    return name;
}

string Dispatcher::getShift() const
{
    return shift;
}

string Dispatcher::getContactNumber() const
{
    return contactNumber;
}

bool Dispatcher::isAvailable() const
{
    return available;
}

// Display
void Dispatcher::display() const
{
    cout << "Dispatcher ID : " << dispatcherId << endl;
    cout << "Name          : " << name << endl;
    cout << "Shift         : " << shift << endl;
    cout << "Contact       : " << contactNumber << endl;
    cout << "Available     : " << (available ? "Yes" : "No") << endl;
}