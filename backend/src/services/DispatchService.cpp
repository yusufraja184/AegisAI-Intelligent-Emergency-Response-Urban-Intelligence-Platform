#include "../../include/services/DispatchService.h"
#include "../../include/services/RouteService.h"

#include <limits>

bool DispatchService::assignVehicle(
    Emergency& emergency,
    std::vector<Vehicle>& vehicles,
    const std::string& requiredVehicleType)
{
    RouteService routeService;

    double minDistance = std::numeric_limits<double>::max();
    int selectedIndex = -1;

    for(int i = 0; i < vehicles.size(); i++)
    {
        if(vehicles[i].isAvailable() &&
           vehicles[i].getVehicleType() == requiredVehicleType)
        {
            double distance =
                routeService.calculateDistance(
                    emergency.getLatitude(),
                    emergency.getLongitude(),
                    vehicles[i].getLatitude(),
                    vehicles[i].getLongitude()
                );

            if(distance < minDistance)
            {
                minDistance = distance;
                selectedIndex = i;
            }
        }
    }

    if(selectedIndex == -1)
        return false;

    vehicles[selectedIndex].setAvailable(false);

    emergency.setStatus("Vehicle Assigned");

    return true;
}