#ifndef DISPATCH_SERVICE_H
#define DISPATCH_SERVICE_H

#include "../models/Emergency.h"
#include "../models/Vehicle.h"
#include <vector>

class DispatchService
{
public:
    bool assignVehicle(
    Emergency& emergency,
    std::vector<Vehicle>& vehicles,
    const std::string& requiredVehicleType
    );
};

#endif