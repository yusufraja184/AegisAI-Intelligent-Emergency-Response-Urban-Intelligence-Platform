#ifndef APPLICATION_H
#define APPLICATION_H

#include "../controllers/EmergencyController.h"

class Application
{
private:
    EmergencyController emergencyController;

public:
    Application();

    void initialize();

    void run();

    void shutdown();
};

#endif