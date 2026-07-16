#ifndef EMERGENCY_CONTROLLER_H
#define EMERGENCY_CONTROLLER_H

#include "../services/EmergencyService.h"
#include "../services/DispatchService.h"
#include "../services/HospitalService.h"
#include "../services/RouteService.h"

class EmergencyController
{
private:
    EmergencyService emergencyService;
    DispatchService dispatchService;
    HospitalService hospitalService;
    RouteService routeService;

public:
    void processEmergency();
};

#endif