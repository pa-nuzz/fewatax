--
# PostgreSQL schema for Fewa Tax Consultancy

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    is_staff BOOLEAN DEFAULT FALSE,
    is_superadmin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(50),
    address VARCHAR(255),
    user_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id),
    service_type VARCHAR(100),
    consultant VARCHAR(100),
    date_bs VARCHAR(20),
    date_ad VARCHAR(20),
    status VARCHAR(50),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE cases (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id),
    service_type VARCHAR(100),
    status VARCHAR(50),
    notes TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id),
    name VARCHAR(255),
    type VARCHAR(50),
    size INTEGER,
    uploaded_at TIMESTAMP,
    status VARCHAR(50),
    url VARCHAR(255)
);

CREATE TABLE resources (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    url VARCHAR(255),
    uploaded_at TIMESTAMP
);
