#include <iostream>

#include "../include/core/Application.h"
#include "../include/services/EmergencyService.h"
#include "../include/services/DispatchService.h"

using namespace std;

int main()
{
    Application app;
    app.initialize();

    Emergency emergency;
    emergency.setEmergencyId(101);
    emergency.setEmergencyType("Road Accident");
    emergency.setSeverity(5);
    emergency.setStatus("Pending");

    emergency.setLatitude(11.0);
    emergency.setLongitude(20.0);

    Vehicle ambulance;
    ambulance.setVehicleId(1);
    ambulance.setVehicleType("Ambulance");
    ambulance.setAvailable(true);

    ambulance.setLatitude(12.5);
    ambulance.setLongitude(20.3);

    Vehicle fireTruck;
    fireTruck.setVehicleId(2);
    fireTruck.setVehicleType("Fire Truck");
    fireTruck.setAvailable(true);

    fireTruck.setLatitude(18.0);
    fireTruck.setLongitude(25.0);

    Vehicle policeCar;
    policeCar.setVehicleId(3);
    policeCar.setVehicleType("Police");
    policeCar.setAvailable(true);

    policeCar.setLatitude(10.0);
    policeCar.setLongitude(19.0);

    vector<Vehicle> vehicles;

    vehicles.push_back(ambulance);
    vehicles.push_back(fireTruck);
    vehicles.push_back(policeCar);

    DispatchService dispatcher;

    if(dispatcher.assignVehicle(
        emergency,
        vehicles,
        "Ambulance"))
    {
        cout << "\nVehicle Assigned Successfully\n";
    }
    else
    {
        cout << "\nNo Vehicle Available\n";
    }

    cout << "\nEmergency Details\n";
    emergency.display();

    return 0;
}