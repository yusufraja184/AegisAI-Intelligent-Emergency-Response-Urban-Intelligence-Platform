#include "../../include/core/Logger.h"

#include <iostream>

using namespace std;

void Logger::info(const string& message)
{
    cout << "[INFO] " << message << endl;
}

void Logger::warning(const string& message)
{
    cout << "[WARNING] " << message << endl;
}

void Logger::error(const string& message)
{
    cout << "[ERROR] " << message << endl;
}