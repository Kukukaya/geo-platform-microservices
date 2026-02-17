# Platform Microservices || CyberSecurity-HomeLab

A backend authentication microservice built with ASP.NET Core (.NET 8), implementing secure user registration and login using JWT, BCrypt password hashing, and SQLite via Entity Framework Core.

---

## Project Structure

```
geo-platform-microservices/
│
├── services/
│   └── auth-service/        # ASP.NET Core Authentication Service(JWT)
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

Built as a personal backend project to strengthen understanding of Cybersecurity knowledge especially authentication flows, stateless security, and microservice design.
