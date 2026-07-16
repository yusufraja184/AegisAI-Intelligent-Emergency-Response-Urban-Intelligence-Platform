#include "../../include/services/HospitalService.h"
#include "../../include/services/RouteService.h"
#include <limits>

Hospital* HospitalService::findNearestHospital(
    double emergencyLatitude,
    double emergencyLongitude,
    std::vector<Hospital>& hospitals)
{
    RouteService routeService;

    Hospital* nearestHospital = nullptr;

    double minimumDistance =
        std::numeric_limits<double>::max();

    for(auto& hospital : hospitals)
    {
        if(hospital.getAvailableBeds() > 0)
        {
            double distance =
                routeService.calculateDistance(
                    emergencyLatitude,
                    emergencyLongitude,
                    hospital.getLatitude(),
                    hospital.getLongitude()
                );

            if(distance < minimumDistance)
            {
                minimumDistance = distance;
                nearestHospital = &hospital;
            }
        }
    }

    return nearestHospital;
}

bool HospitalService::assignHospital(
    double emergencyLatitude,
    double emergencyLongitude,
    std::vector<Hospital>& hospitals)
{
    Hospital* hospital = findNearestHospital(
        emergencyLatitude,
        emergencyLongitude,
        hospitals
    );

    if(hospital == nullptr)
        return false;

    hospital->setAvailableBeds(
        hospital->getAvailableBeds() - 1
    );

    return true;
}