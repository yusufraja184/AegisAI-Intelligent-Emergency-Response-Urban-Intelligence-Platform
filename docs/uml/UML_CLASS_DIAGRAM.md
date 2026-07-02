# UML Class Diagram

User
│
├── Citizen
│
├── Dispatcher
│
└── Admin

Citizen
    |
    | creates
    ▼

Emergency

Emergency
    |
    | assigned to
    ▼

Vehicle

Vehicle
    |
    | transports to
    ▼

Hospital

Emergency
    |
    | route calculated by
    ▼

Graph

Emergency
    |
    | analyzed by
    ▼

PredictionEngine

Emergency
    |
    | stored by
    ▼

DatabaseManager

DatabaseManager
    |
    | logs through
    ▼

Logger