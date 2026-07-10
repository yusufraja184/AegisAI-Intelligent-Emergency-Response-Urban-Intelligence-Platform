#include "../../include/models/Route.h"
#include <iostream>

using namespace std;

// Constructor
Route::Route()
{
    routeId = 0;
    source = "";
    destination = "";
    distance = 0.0;
    estimatedTime = 0.0;
    status = "Pending";
}

// Setters
void Route::setRouteId(int id)
{
    routeId = id;
}

void Route::setSource(const string& src)
{
    source = src;
}

void Route::setDestination(const string& dest)
{
    destination = dest;
}

void Route::setDistance(double dist)
{
    distance = dist;
}

void Route::setEstimatedTime(double time)
{
    estimatedTime = time;
}

void Route::setStatus(const string& stat)
{
    status = stat;
}

// Getters
int Route::getRouteId() const
{
    return routeId;
}

string Route::getSource() const
{
    return source;
}

string Route::getDestination() const
{
    return destination;
}

double Route::getDistance() const
{
    return distance;
}

double Route::getEstimatedTime() const
{
    return estimatedTime;
}

string Route::getStatus() const
{
    return status;
}

// Display
void Route::display() const
{
    cout << "Route ID        : " << routeId << endl;
    cout << "Source          : " << source << endl;
    cout << "Destination     : " << destination << endl;
    cout << "Distance        : " << distance << " km" << endl;
    cout << "Estimated Time  : " << estimatedTime << " min" << endl;
    cout << "Status          : " << status << endl;
}