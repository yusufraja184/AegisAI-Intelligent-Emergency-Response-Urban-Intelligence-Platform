#ifndef HOSPITAL_H
#define HOSPITAL_H

#include <string>

class Hospital
{
private:

    int hospitalId;
    std::string hospitalName;
    std::string address;
    double latitude;
    double longitude;
    int totalBeds;
    int availableBeds;
    std::string contactNumber;

public:

    Hospital();

    // Setters
    void setHospitalId(int id);
    void setHospitalName(const std::string& name);
    void setAddress(const std::string& addr);
    void setLatitude(double lat);
    void setLongitude(double lon);
    void setTotalBeds(int beds);
    void setAvailableBeds(int beds);
    void setContactNumber(const std::string& number);

    // Getters
    int getHospitalId() const;
    std::string getHospitalName() const;
    std::string getAddress() const;
    double getLatitude() const;
    double getLongitude() const;
    int getTotalBeds() const;
    int getAvailableBeds() const;
    std::string getContactNumber() const;

    void display() const;
};

#endif