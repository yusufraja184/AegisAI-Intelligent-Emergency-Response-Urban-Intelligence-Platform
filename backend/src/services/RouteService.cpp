#include "../../include/algorithms/Dijkstra.h"
#include "../../include/services/RouteService.h"
#include <cmath>

double RouteService::calculateDistance(
    double lat1,
    double lon1,
    double lat2,
    double lon2)
{
    double dx = lat2 - lat1;
    double dy = lon2 - lon1;

    return std::sqrt(dx * dx + dy * dy);
}


std::vector<int> RouteService::findShortestRoute(
    const std::vector<std::vector<int>>& graph,
    int source)
{
    Dijkstra dijkstra;

    return dijkstra.shortestPath(graph, source);
}