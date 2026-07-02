# Database Design

Tables

## Users

- userId
- name
- email
- password
- role

---

## Citizens

- citizenId
- userId

---

## Emergencies

- emergencyId
- citizenId
- vehicleId
- hospitalId
- type
- priority
- location
- status
- timestamp

---

## Vehicles

- vehicleId
- driver
- type
- status
- location

---

## Hospitals

- hospitalId
- name
- location
- totalBeds
- availableBeds