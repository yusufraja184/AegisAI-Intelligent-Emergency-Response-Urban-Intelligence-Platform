#ifndef DATABASE_MANAGER_H
#define DATABASE_MANAGER_H

#include <string>
#include <sqlite3.h>

class DatabaseManager
{
private:
    sqlite3* database;
    std::string databaseName;

public:
    DatabaseManager(const std::string& dbName);

    ~DatabaseManager();

    bool connect();

    void disconnect();

    bool isConnected() const;

    sqlite3* getDatabase();

bool createEmergencyTable();

bool insertEmergency(
    int emergencyId,
    int citizenId,
    const std::string& type,
    int severity,
    double latitude,
    double longitude,
    const std::string& status,
    const std::string& timestamp
);
void displayAllEmergencies();
bool updateEmergencyStatus(
    int emergencyId,
    const std::string& newStatus
);
bool deleteEmergency(int emergencyId);
  
};

#endif