#include "../../include/controllers/EmergencyController.h"

#include <iostream>
#include <vector>

using namespace std;

bool EmergencyController::processEmergency()
{
    int choice;

    cout << "\n========== AegisAI ==========\n";
    cout << "1. Add Emergency\n";
    cout << "2. View All Emergencies\n";
    cout << "3. Update Emergency Status\n";
    cout << "4. Delete Emergency\n";
    cout << "5. Exit\n";

    cout << "Enter your choice: ";
    cin >> choice;

    switch (choice)
    {
    case 1:
        addEmergency();
        return true;

    case 2:
        emergencyService.displayAllEmergencies();
        return true;

    case 3:
        updateEmergencyStatus();
        return true;

    case 4:
        deleteEmergency();
        return true;

    case 5:
        cout << "Exiting AegisAI...\n";
        return false;

    default:
    cout << "\nInvalid choice! Please select a number between 1 and 5.\n";
    return true;
    }
}

void EmergencyController::addEmergency()
{

    Emergency emergency;

    int emergencyId;
    int citizenId;
    string type;
    int severity;
    double latitude;
    double longitude;

    cout << "Enter Emergency ID: ";
    cin >> emergencyId;

    cout << "Enter Citizen ID: ";
    cin >> citizenId;

    cin.ignore();

    cout << "Enter Emergency Type: ";
    getline(cin, type);

    do
{
    cout << "Enter Severity (1-5): ";
    cin >> severity;

    if(severity < 1 || severity > 5)
    {
        cout << "Invalid severity! Please enter a value between 1 and 5.\n";
    }

} while(severity < 1 || severity > 5);

    cout << "Enter Latitude: ";
    cin >> latitude;

    cout << "Enter Longitude: ";
    cin >> longitude;

    emergency.setEmergencyId(emergencyId);
    emergency.setCitizenId(citizenId);
    emergency.setEmergencyType(type);
    emergency.setSeverity(severity);
    emergency.setLatitude(latitude);
    emergency.setLongitude(longitude);
    emergency.setStatus("Pending");
    emergency.setTimestamp("2026-07-23 15:00:00");

    emergencyService.addEmergency(emergency);

    cout << "\nEmergency Created Successfully\n";

    emergencyService.displayAllEmergencies();

}
void EmergencyController::updateEmergencyStatus()
{
    int emergencyId;
    string status;

    cout << "\n===== Update Emergency Status =====\n";

    cout << "Enter Emergency ID: ";
    cin >> emergencyId;

    cin.ignore();

    cout << "Enter New Status: ";
    getline(cin, status);

    bool success = emergencyService.updateEmergencyStatus(
        emergencyId,
        status
    );

    if(success)
    {
        cout << "\nEmergency Status Updated Successfully!\n";
    }
    else
    {
        cout << "\nEmergency Not Found!\n";
    }
}

void EmergencyController::deleteEmergency()
{
    int emergencyId;

    cout << "\n===== Delete Emergency =====\n";

    cout << "Enter Emergency ID: ";
    cin >> emergencyId;

    bool success = emergencyService.removeEmergency(emergencyId);

    if(success)
    {
        cout << "\nEmergency Deleted Successfully!\n";
    }
    else
    {
        cout << "\nEmergency Not Found!\n";
    }
}