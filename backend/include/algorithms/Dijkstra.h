#ifndef DIJKSTRA_H
#define DIJKSTRA_H

#include <vector>

class Dijkstra
{
public:

    std::vector<int> shortestPath(
        const std::vector<std::vector<int>>& graph,
        int source
    );
};

#endif