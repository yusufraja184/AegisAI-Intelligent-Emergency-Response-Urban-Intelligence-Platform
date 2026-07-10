#ifndef DISPATCHER_H
#define DISPATCHER_H

#include <string>

class Dispatcher
{
private:

    int dispatcherId;
    std::string name;
    std::string shift;
    std::string contactNumber;
    bool available;

public:

    Dispatcher();

    // Setters
    void setDispatcherId(int id);
    void setName(const std::string& name);
    void setShift(const std::string& shift);
    void setContactNumber(const std::string& number);
    void setAvailable(bool status);

    // Getters
    int getDispatcherId() const;
    std::string getName() const;
    std::string getShift() const;
    std::string getContactNumber() const;
    bool isAvailable() const;

    void display() const;
};

#endif