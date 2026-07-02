# Class Relationships

Citizen
    |
    | creates
    ▼
Emergency
    |
    | assigned to
    ▼
Dispatcher
    |
    | dispatches
    ▼
Vehicle
    |
    | follows
    ▼
Route
    |
    | calculated by
    ▼
Graph

Emergency
    |
    | transported to
    ▼
Hospital

Emergency
    |
    | stored by
    ▼
DatabaseManager

Emergency
    |
    | logged by
    ▼
Logger

Emergency
    |
    | analyzed by
    ▼
PredictionEngine