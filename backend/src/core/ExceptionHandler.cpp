#include "../../include/core/ExceptionHandler.h"
#include "../../include/core/Logger.h"

void ExceptionHandler::handle(const std::string& message)
{
    Logger::error(message);
}