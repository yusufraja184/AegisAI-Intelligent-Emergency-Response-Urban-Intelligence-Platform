#include "../../include/algorithms/EmergencyPriorityQueue.h"

void EmergencyPriorityQueue::push(const Emergency& emergency)
{
    emergencyQueue.push(emergency);
}

void EmergencyPriorityQueue::pop()
{
    if(!emergencyQueue.empty())
    {
        emergencyQueue.pop();
    }
}

Emergency EmergencyPriorityQueue::top()
{
    return emergencyQueue.top();
}

bool EmergencyPriorityQueue::empty() const
{
    return emergencyQueue.empty();
}

int EmergencyPriorityQueue::size() const
{
    return emergencyQueue.size();
}