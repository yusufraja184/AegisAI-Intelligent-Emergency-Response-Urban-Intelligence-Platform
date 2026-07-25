#include "../../include/algorithms/Dijkstra.h"

#include <vector>
#include <queue>
#include <limits>

using namespace std;

vector<int> Dijkstra::shortestPath(
    const vector<vector<int>>& graph,
    int source)
{
    int n = graph.size();

    vector<int> distance(n, numeric_limits<int>::max());

    priority_queue<
        pair<int,int>,
        vector<pair<int,int>>,
        greater<pair<int,int>>
    > pq;

    distance[source] = 0;

    pq.push({0, source});

    while(!pq.empty())
    {
        int currentDistance = pq.top().first;
        int currentNode = pq.top().second;

        pq.pop();

        if(currentDistance > distance[currentNode])
            continue;

        for(int neighbour = 0; neighbour < n; neighbour++)
        {
            if(graph[currentNode][neighbour] == 0)
                continue;

            int newDistance =
                distance[currentNode] +
                graph[currentNode][neighbour];

            if(newDistance < distance[neighbour])
            {
                distance[neighbour] = newDistance;

                pq.push({newDistance, neighbour});
            }
        }
    }

    return distance;
}