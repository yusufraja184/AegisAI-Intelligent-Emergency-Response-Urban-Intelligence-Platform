#include "../../include/core/Application.h"
#include "../../include/core/Logger.h"
#include "../../include/core/Config.h"
#include "../../include/utils/DateTime.h"
#include "../../include/utils/FileManager.h"
#include "../../include/core/ExceptionHandler.h"

Application::Application()
{
}

void Application::initialize()
{
    try
    {
        if(Config::load("../config/settings.conf"))
        {
            Logger::info("Configuration loaded successfully.");
        }
        else
        {
            ExceptionHandler::handle("Configuration file not found!");
            return;
        }

        Logger::info("Initializing AegisAI");

        Logger::info("Application : " + Config::get("APP_NAME"));
        Logger::info("Version : " + Config::get("VERSION"));
        Logger::info("City : " + Config::get("CITY"));

        Logger::info("Current Time : " + DateTime::getCurrentDateTime());

        if(!FileManager::exists("../logs/system.log"))
        {
            FileManager::create("../logs/system.log");

            Logger::info("System log created.");
        }
        else
        {
            Logger::info("System log found.");
        }

        FileManager::append(
            "../logs/system.log",
            DateTime::getCurrentDateTime() +
            " | Application Started"
        );
    }
    catch(const std::exception& e)
    {
        ExceptionHandler::handle(e.what());
    }
    catch(...)
    {
        ExceptionHandler::handle("Unknown initialization error.");
    }
}

void Application::run()
{
    Logger::info("Application Running...");
}

void Application::shutdown()
{
    Logger::info("Shutting Down...");
}