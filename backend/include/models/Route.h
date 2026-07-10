#ifndef ROUTE_H
#define ROUTE_H

#include <string>

class Route
{
private:

    int routeId;
    std::string source;
    std::string destination;
    double distance;
    double estimatedTime;
    std::string status;

public:

    Route();

    // Setters
    void setRouteId(int id);
    void setSource(const std::string& src);
    void setDestination(const std::string& dest);
    void setDistance(double dist);
    void setEstimatedTime(double time);
    void setStatus(const std::string& status);

    // Getters
    int getRouteId() const;
    std::string getSource() const;
    std::string getDestination() const;
    double getDistance() const;
    double getEstimatedTime() const;
    std::string getStatus() const;

    void display() const;
};

#endif