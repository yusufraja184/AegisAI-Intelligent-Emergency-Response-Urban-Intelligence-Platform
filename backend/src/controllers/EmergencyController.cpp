#include "../../include/controllers/EmergencyController.h"

#include <iostream>
#include <vector>

using namespace std;

void EmergencyController::processEmergency()
{
    Emergency emergency;

    emergency.setEmergencyId(1);
    emergency.setCitizenId(101);
    emergency.setEmergencyType("Road Accident");
    emergency.setSeverity(5);
    emergency.setLatitude(10.0);
    emergency.setLongitude(20.0);
    emergency.setStatus("Pending");

    emergencyService.addEmergency(emergency);

    cout << "\nEmergency Created Successfully\n";

    emergencyService.displayAllEmergencies();
}