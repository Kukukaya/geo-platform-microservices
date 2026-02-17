<<<<<<< HEAD
Geo Platform Microservices
Authentication Microservice (ASP.NET Core + JWT + SQLite)

Project Overview
----------------
This project is a backend-focused authentication microservice built using ASP.NET Core (.NET 8). 
It implements secure user registration and login using JWT authentication, BCrypt password hashing, 
and SQLite with Entity Framework Core.

The goal of this project is to demonstrate understanding of authentication flow, 
stateless security, and database integration within a microservice architecture.

------------------------------------------------------------

Project Structure
-----------------

geo-platform-microservices/
│
├── services/
│   └── auth-service/        ASP.NET Core Authentication Service
│
├── frontend/                Simple HTML + JavaScript client
│
└── README.md

------------------------------------------------------------

Authentication Flow
-------------------

1. Registration
   - User submits username and password.
   - Password is hashed using BCrypt.
   - User is stored in SQLite database.

2. Login
   - Credentials are validated against stored data.
   - If valid, a JWT token is generated.
   - Token is returned to the client.

3. Protected Endpoint
   - Client sends:
       Authorization: Bearer <JWT_TOKEN>
   - Server validates:
       - Token signature
       - Expiration time
       - Claims
   - If valid, protected data is returned.

------------------------------------------------------------

Technology Stack
----------------

- ASP.NET Core 8
- Entity Framework Core
- SQLite
- JWT (JSON Web Token)
- BCrypt.Net
- Swagger
- HTML + JavaScript (Frontend testing)

------------------------------------------------------------

Database Design
---------------

Database: SQLite  
ORM: Entity Framework Core  

Users Table:
- Id (Primary Key)
- Username
- PasswordHash
- Role

The database file (auth.db) is excluded from version control.

------------------------------------------------------------

How to Run
----------

1. Run Backend

   cd services/auth-service
   dotnet restore
   dotnet run

   API will run at:
   http://localhost:5080

2. Test Using cURL

   Register:
   curl -X POST http://localhost:5080/api/auth/register \
   -H "Content-Type: application/json" \
   -d '{"username":"testuser","passwordHash":"123456"}'

   Login:
   curl -X POST http://localhost:5080/api/auth/login \
   -H "Content-Type: application/json" \
   -d '{"username":"testuser","passwordHash":"123456"}'

   Access Protected Endpoint:
   curl http://localhost:5080/api/auth/me \
   -H "Authorization: Bearer YOUR_TOKEN"

------------------------------------------------------------

Learning Objectives
-------------------

This project demonstrates understanding of:

- Stateless authentication using JWT
- Secure password hashing with BCrypt
- RESTful API development
- Dependency Injection in ASP.NET Core
- Database integration using EF Core
- CORS configuration
- Basic microservice architecture principles

------------------------------------------------------------

Current Progress
----------------

- JWT authentication implemented
- SQLite database integrated
- EF Core auto-creation of database schema
- Protected endpoint working
- Frontend connected to backend

Future Improvements
-------------------

- Role-based authorization
- Refresh token implementation
- Docker containerization
- PostgreSQL integration
- API Gateway integration
- CI/CD pipeline

------------------------------------------------------------

Author
------

Built as a backend authentication microservice to strengthen understanding 
of security, authentication flow, and service architecture.
=======
# Geo Platform Microservices — Auth Service

A backend authentication microservice built with ASP.NET Core (.NET 8), implementing secure user registration and login using JWT, BCrypt password hashing, and SQLite via Entity Framework Core.

---

## Project Structure

```
geo-platform-microservices/
│
├── services/
│   └── auth-service/        # ASP.NET Core Authentication Service
│
├── frontend/                # Simple HTML + JavaScript client
│
└── README.md
```

---

## Authentication Flow

**1. Registration**
- User submits username and password.
- Password is hashed using BCrypt.
- User record is stored in the SQLite database.

**2. Login**
- Credentials are validated against stored data.
- On success, a signed JWT token is generated and returned.

**3. Protected Endpoint**
- Client attaches the token to the request header:
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- Server validates the token signature, expiration, and claims before returning protected data.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | ASP.NET Core 8 |
| ORM | Entity Framework Core |
| Database | SQLite |
| Authentication | JWT (JSON Web Token) |
| Password Hashing | BCrypt.Net |
| API Docs | Swagger |
| Frontend | HTML + JavaScript |

---

## Database Design

- **Database:** SQLite
- **ORM:** Entity Framework Core (auto-creates schema on startup)
- **`auth.db` is excluded from version control** — see `.gitignore`

**Users Table**

| Column | Type | Notes |
|---|---|---|
| Id | int | Primary Key |
| Username | string | Unique identifier |
| PasswordHash | string | BCrypt hashed |
| Role | string | e.g. `admin`, `user` |

---

## Getting Started

### 1. Run the Backend

```bash
cd services/auth-service
dotnet restore
dotnet run
```

API will be available at: `http://localhost:5080`  
Swagger UI: `http://localhost:5080/swagger`

### 2. Test with cURL

**Register a new user**
```bash
curl -X POST http://localhost:5080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","passwordHash":"123456"}'
```

**Login**
```bash
curl -X POST http://localhost:5080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","passwordHash":"123456"}'
```

**Access a protected endpoint**
```bash
curl http://localhost:5080/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Current Status

- [x] JWT authentication
- [x] BCrypt password hashing
- [x] SQLite + EF Core integration (auto schema creation)
- [x] Protected endpoint (`/api/auth/me`)
- [x] Frontend connected to backend
- [x] Swagger docs

---

## Roadmap

- [ ] Role-based authorization
- [ ] Refresh token implementation
- [ ] Docker containerization
- [ ] PostgreSQL migration
- [ ] API Gateway integration
- [ ] CI/CD pipeline

---

## Learning Objectives

This project covers:

- Stateless authentication with JWT
- Secure password hashing with BCrypt
- RESTful API design in ASP.NET Core
- Dependency Injection patterns
- EF Core database integration
- CORS configuration
- Foundational microservice architecture

---

## Author

Built as a personal backend project to strengthen understanding of authentication flows, stateless security, and microservice design.
>>>>>>> 1caba7d (feat: auth microservice with JWT and SQLite (db excluded for security))
