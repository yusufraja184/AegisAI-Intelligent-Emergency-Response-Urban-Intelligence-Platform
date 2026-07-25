#ifndef EMERGENCY_PRIORITY_QUEUE_H
#define EMERGENCY_PRIORITY_QUEUE_H

#include "../models/Emergency.h"
#include <queue>
#include <vector>

class EmergencyPriorityQueue
{
private:
    struct CompareEmergency
    {
        bool operator()(const Emergency& a,
                        const Emergency& b)
        {
            return a.getSeverity() < b.getSeverity();
        }
    };

    std::priority_queue<
        Emergency,
        std::vector<Emergency>,
        CompareEmergency
    > emergencyQueue;

public:
    void push(const Emergency& emergency);

    void pop();

    Emergency top();

    bool empty() const;

    int size() const;
};

#endif