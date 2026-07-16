add_executable(AegisAI
    backend/src/main.cpp

    backend/src/core/Application.cpp
    backend/src/core/Logger.cpp
    backend/src/core/Config.cpp
    backend/src/core/ExceptionHandler.cpp

    backend/src/utils/DateTime.cpp
    backend/src/utils/FileManager.cpp

    backend/src/models/Emergency.cpp
    backend/src/models/Citizen.cpp
    backend/src/models/Vehicle.cpp
    backend/src/models/Hospital.cpp
    backend/src/models/Dispatcher.cpp
    backend/src/models/Route.cpp
    backend/src/services/EmergencyService.cpp
    backend/src/services/DispatchService.cpp
    backend/src/services/RouteService.cpp
    backend/src/services/HospitalService.cpp
    backend/src/controllers/EmergencyController.cpp
)