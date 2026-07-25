#ifndef ROUTE_SERVICE_H
#define ROUTE_SERVICE_H

#include <vector>

class RouteService
{
public:

    double calculateDistance(
        double lat1,
        double lon1,
        double lat2,
        double lon2
    );

     std::vector<int> findShortestRoute(
        const std::vector<std::vector<int>>& graph,
        int source
    );
};

#endif