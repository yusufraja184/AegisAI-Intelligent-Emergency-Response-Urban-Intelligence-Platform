#ifndef EXCEPTION_HANDLER_H
#define EXCEPTION_HANDLER_H

#include <string>

class ExceptionHandler
{
public:

    static void handle(const std::string& message);
};

#endif