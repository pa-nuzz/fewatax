# Fewa Tax Consultancy Backend (FastAPI)

This is the backend skeleton for Fewa Tax Consultancy, built with FastAPI and PostgreSQL.

## Features
- JWT authentication (access + refresh tokens)
- User, client, appointment, case, document, and resource management
- Secure file upload/download (signed URLs)
- Email (Resend/SendGrid) and SMS (Sparrow SMS) integration

## Getting Started

1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the server:
   ```bash
   uvicorn app.main:app --reload
   ```

## Project Structure
- `app/` — FastAPI app code
- `app/models/` — SQLAlchemy models
- `app/routes/` — API routes
- `app/schemas/` — Pydantic schemas
- `app/core/` — Auth, config, utils

## Environment Variables
- `DATABASE_URL` — PostgreSQL connection string
- `SECRET_KEY` — JWT secret
- `EMAIL_API_KEY` — Resend/SendGrid
- `SMS_API_KEY` — Sparrow SMS

---

See the main project README for deployment and integration details.
