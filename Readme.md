# Authentication, Authorization, and Role-Based Access Control (RBAC) System

## **Overview**

This project implements a secure **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)** system to demonstrate understanding of these critical concepts. The system allows users to register, log in, and log out securely, while role-based permissions restrict access to resources according to assigned roles.

## **Features**

### **Core Functionality**

- **Authentication**:

  - User registration, login, and logout functionalities using secure methods (e.g., password hashing).
  - Token-based authentication with **JSON Web Tokens (JWT)** for managing sessions.

- **Authorization**:

  - Fine-grained access control based on roles (e.g., Admin, User).
  - API endpoints are protected, ensuring only authorized roles can access specific resources or perform certain actions.

- **Role-Based Access Control (RBAC)**:
  - Flexibly manage roles and permissions to control access to system resources.
  - Scalable system to add or modify roles and permissions without significant changes to the architecture.

### **Security Best Practices**

- Passwords hashed using **bcrypt** for secure storage.
- JWT tokens secured with proper expiration policies and secret keys.
- Role and permission validation enforced at the API level.

### **Technologies Used**

- **Backend**: Node.js, Express.js
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Database**: MongoDB

## **Setup Instructions**

install express , mongoose , nodemon , dotenv , bcrypt , jsonwebtoken

- **Environment Variables**: Prepare a `.env` file with the following variables:
  ```env
  PORT=5000
  JWT_SECRET=your_jwt_secret
  MONGO_URI=your_mongodb_connection_string
  ```
