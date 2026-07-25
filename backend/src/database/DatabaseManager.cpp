#include "../../include/database/DatabaseManager.h"

#include <iostream>

using namespace std;

DatabaseManager::DatabaseManager(const string& dbName)
{
    databaseName = dbName;
    database = nullptr;
}

DatabaseManager::~DatabaseManager()
{
    disconnect();
}

bool DatabaseManager::connect()
{
    int result = sqlite3_open(databaseName.c_str(), &database);

    if(result != SQLITE_OK)
    {
        cout << "Database Connection Failed\n";
        return false;
    }

    cout << "Database Connected Successfully\n";

    return true;
}

void DatabaseManager::disconnect()
{
    if(database != nullptr)
    {
        sqlite3_close(database);
        database = nullptr;

        cout << "Database Closed Successfully\n";
    }
}

bool DatabaseManager::isConnected() const
{
    return database != nullptr;
}

sqlite3* DatabaseManager::getDatabase()
{
    return database;
}

bool DatabaseManager::createEmergencyTable()
{
    const char* sql =
        "CREATE TABLE IF NOT EXISTS Emergency ("
        "EmergencyID INTEGER PRIMARY KEY,"
        "CitizenID INTEGER,"
        "Type TEXT,"
        "Severity INTEGER,"
        "Latitude REAL,"
        "Longitude REAL,"
        "Status TEXT,"
        "Timestamp TEXT"
        ");";

    char* errorMessage = nullptr;

    int result = sqlite3_exec(
        database,
        sql,
        nullptr,
        nullptr,
        &errorMessage
    );

    if(result != SQLITE_OK)
    {
        std::cout << "Table Creation Failed\n";

        sqlite3_free(errorMessage);

        return false;
    }

    std::cout << "Emergency Table Created Successfully\n";

    return true;
}

bool DatabaseManager::insertEmergency(
    int emergencyId,
    int citizenId,
    const std::string& type,
    int severity,
    double latitude,
    double longitude,
    const std::string& status,
    const std::string& timestamp)
{
    std::string sql =
        "INSERT INTO Emergency VALUES("
        + std::to_string(emergencyId) + ","
        + std::to_string(citizenId) + ",'"
        + type + "',"
        + std::to_string(severity) + ","
        + std::to_string(latitude) + ","
        + std::to_string(longitude) + ",'"
        + status + "','"
        + timestamp + "');";

    char* errorMessage = nullptr;

    int result =
        sqlite3_exec(
            database,
            sql.c_str(),
            nullptr,
            nullptr,
            &errorMessage
        );

    if(result != SQLITE_OK){
    std::cout << "Insert Failed\n";
    std::cout << "SQLite Error: " << errorMessage << std::endl;

    sqlite3_free(errorMessage);

    return false;
    }

    std::cout << "Emergency Inserted Successfully\n";

    return true;
}


void DatabaseManager::displayAllEmergencies()
{
    const char* sql = "SELECT * FROM Emergency;";

    sqlite3_stmt* statement;

    int result =
        sqlite3_prepare_v2(
            database,
            sql,
            -1,
            &statement,
            nullptr
        );

    if(result != SQLITE_OK)
    {
        std::cout << "Query Failed\n";
        return;
    }

    std::cout << "\n===== Emergency Records =====\n";

    while(sqlite3_step(statement) == SQLITE_ROW)
    {
        std::cout
            << "Emergency ID : "
            << sqlite3_column_int(statement,0)
            << std::endl;

        std::cout
            << "Citizen ID : "
            << sqlite3_column_int(statement,1)
            << std::endl;

        std::cout
            << "Type : "
            << sqlite3_column_text(statement,2)
            << std::endl;

        std::cout
            << "Severity : "
            << sqlite3_column_int(statement,3)
            << std::endl;

        std::cout
            << "Latitude : "
            << sqlite3_column_double(statement,4)
            << std::endl;

        std::cout
            << "Longitude : "
            << sqlite3_column_double(statement,5)
            << std::endl;

        std::cout
            << "Status : "
            << sqlite3_column_text(statement,6)
            << std::endl;

        std::cout
            << "Timestamp : "
            << sqlite3_column_text(statement,7)
            << std::endl;

        std::cout
            << "-----------------------------\n";
    }

    sqlite3_finalize(statement);
}


bool DatabaseManager::updateEmergencyStatus(
    int emergencyId,
    const std::string& newStatus)
{
    std::string sql =
        "UPDATE Emergency SET Status='"
        + newStatus
        + "' WHERE EmergencyID="
        + std::to_string(emergencyId)
        + ";";

    char* errorMessage = nullptr;

    int result =
        sqlite3_exec(
            database,
            sql.c_str(),
            nullptr,
            nullptr,
            &errorMessage
        );

    if(result != SQLITE_OK)
    {
        std::cout << "Update Failed\n";
        std::cout << errorMessage << std::endl;

        sqlite3_free(errorMessage);

        return false;
    }

    std::cout << "Emergency Updated Successfully\n";

    return true;
}

bool DatabaseManager::deleteEmergency(int emergencyId)
{
    std::string sql =
        "DELETE FROM Emergency WHERE EmergencyID="
        + std::to_string(emergencyId)
        + ";";

    char* errorMessage = nullptr;

    int result = sqlite3_exec(
        database,
        sql.c_str(),
        nullptr,
        nullptr,
        &errorMessage
    );

    if(result != SQLITE_OK)
    {
        std::cout << "Delete Failed\n";
        std::cout << errorMessage << std::endl;

        sqlite3_free(errorMessage);

        return false;
    }

    std::cout << "Emergency Deleted Successfully\n";

    return true;
}