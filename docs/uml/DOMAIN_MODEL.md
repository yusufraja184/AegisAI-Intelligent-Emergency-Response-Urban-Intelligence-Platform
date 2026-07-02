# Domain Model

## User

### Attributes

- userId
- name
- email
- phone
- password
- role

### Methods

- login()
- logout()
- updateProfile()
- changePassword()

---

## Citizen

Inherits User

### Methods

- reportEmergency()
- trackEmergency()
- viewEmergencyHistory()

---

## Dispatcher

Inherits User

### Methods

- assignVehicle()
- updateEmergency()
- closeEmergency()

---

## Emergency

### Attributes

- emergencyId
- emergencyType
- priority
- status
- location
- description
- timestamp

### Methods

- calculatePriority()
- assignVehicle()
- updateStatus()

---

## Vehicle

### Attributes

- vehicleId
- type
- status
- location
- speed

### Methods

- dispatch()
- updateLocation()
- markAvailable()

---

## Hospital

### Attributes

- hospitalId
- name
- location
- beds
- icuBeds

### Methods

- allocateBed()
- releaseBed()