#ifndef DATETIME_H
#define DATETIME_H

#include <string>

class DateTime
{
public:

    static std::string getCurrentDate();

    static std::string getCurrentTime();

    static std::string getCurrentDateTime();
};

#endif