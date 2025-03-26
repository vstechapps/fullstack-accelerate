# [Home](../) > Vehicle Container - Java Program Requirements

## Introduction
A simple Java program to manage a collection of vehicles in a container. The system allows users to add different types of vehicles, such as buses and cars, while ensuring that the container does not exceed a predefined maximum load capacity.

## Functional Requirements

### 1. Vehicle Management
- **Add Vehicle**: Users can add a vehicle by specifying type (bus, car), model, registration number, and weight.
- **View All Vehicles**: Display a list of all added vehicles.
- **Check Max Load Capacity**: Ensure that the total weight of all vehicles does not exceed the predefined limit.

### 2. Display & Interaction
- **Show Vehicle Details**: Display vehicle type, model, registration number, and weight.
- **Show Remaining Capacity**: Display the remaining allowable weight before reaching the container’s maximum load.
- **Simple Console Interface**: Provide a menu-driven interaction for ease of use.

### 3. Data Storage
- **Use File Storage**: Store vehicle details in a text file for lightweight and easy management.
- **Use MySQL Database**: Provide an option to store vehicle details in a MySQL database for structured and efficient data management.
- **Load & Save Data**: Ensure vehicle data persists between program runs, allowing users to choose between file-based or database storage.

## Conclusion
This Java program will offer a basic way to manage a collection of vehicles while maintaining a maximum load capacity, ensuring efficient organization and storage within the container. The system provides flexibility by supporting both file-based and database storage options.