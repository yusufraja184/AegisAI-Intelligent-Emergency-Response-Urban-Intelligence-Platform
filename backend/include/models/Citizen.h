#ifndef CITIZEN_H
#define CITIZEN_H

#include <string>

class Citizen
{
private:

    int citizenId;
    std::string name;
    int age;
    std::string gender;
    std::string phoneNumber;
    std::string address;

public:

    Citizen();

    // Setters
    void setCitizenId(int id);
    void setName(const std::string& name);
    void setAge(int age);
    void setGender(const std::string& gender);
    void setPhoneNumber(const std::string& phone);
    void setAddress(const std::string& address);

    // Getters
    int getCitizenId() const;
    std::string getName() const;
    int getAge() const;
    std::string getGender() const;
    std::string getPhoneNumber() const;
    std::string getAddress() const;

    void display() const;
};

#endif