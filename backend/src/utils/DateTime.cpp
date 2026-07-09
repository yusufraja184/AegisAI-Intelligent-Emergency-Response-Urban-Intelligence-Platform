#include "../../include/utils/DateTime.h"

#include <chrono>
#include <ctime>
#include <iomanip>
#include <sstream>

using namespace std;

string DateTime::getCurrentDate()
{
    auto now = chrono::system_clock::now();

    time_t current = chrono::system_clock::to_time_t(now);

    tm local = *localtime(&current);

    stringstream ss;

    ss << put_time(&local,"%d-%m-%Y");

    return ss.str();
}

string DateTime::getCurrentTime()
{
    auto now = chrono::system_clock::now();

    time_t current = chrono::system_clock::to_time_t(now);

    tm local = *localtime(&current);

    stringstream ss;

    ss << put_time(&local,"%H:%M:%S");

    return ss.str();
}

string DateTime::getCurrentDateTime()
{
    return getCurrentDate()+" "+getCurrentTime();
}