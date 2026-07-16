#ifndef HOSPITAL_SERVICE_H
#define HOSPITAL_SERVICE_H

#include "../models/Hospital.h"
#include <vector>

class HospitalService
{
public:
    Hospital* findNearestHospital(
    double emergencyLatitude,
    double emergencyLongitude,
    std::vector<Hospital>& hospitals
);

    bool assignHospital(
    double emergencyLatitude,
    double emergencyLongitude,
    std::vector<Hospital>& hospitals);
};

#endif