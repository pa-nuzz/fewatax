from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.core.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    is_staff = Column(Boolean, default=False)
    is_superadmin = Column(Boolean, default=False)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

class Client(Base):
    __tablename__ = "clients"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True)
    phone = Column(String)
    address = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User")
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

class Appointment(Base):
    __tablename__ = "appointments"
    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    service_type = Column(String)
    consultant = Column(String)
    date_bs = Column(String)
    date_ad = Column(String)
    status = Column(String)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

class Case(Base):
    __tablename__ = "cases"
    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    service_type = Column(String)
    status = Column(String)
    notes = Column(Text)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

class Document(Base):
    __tablename__ = "documents"
    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    name = Column(String)
    type = Column(String)
    size = Column(Integer)
    uploaded_at = Column(DateTime)
    status = Column(String)
    url = Column(String)

class Resource(Base):
    __tablename__ = "resources"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    url = Column(String)
    uploaded_at = Column(DateTime)
