#include <iostream>
#include "../../include/core/Application.h"

using namespace std;

Application::Application()
{
}

void Application::initialize()
{
    cout << "Initializing AegisAI..." << endl;
}

void Application::run()
{
    cout << "Application Running..." << endl;
}

void Application::shutdown()
{
    cout << "Shutting Down..." << endl;
}