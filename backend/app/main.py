from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional

from app.core.database import engine, get_db, Base
from app.models.models import ContactMessage, Appointment

# Create tables if not exist
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Fewa Tax Consultancy API")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Schemas
class ContactMsgCreate(BaseModel):
    name: str
    email: str
    subject: Optional[str] = ""
    message: str

class AppointmentCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    service_type: str
    date: str
    time: str
    notes: Optional[str] = ""

@app.get("/")
def root():
    return {"status": "online", "message": "Fewa Tax Consultancy Full Stack API is running."}

@app.post("/api/contact")
def create_contact_message(msg: ContactMsgCreate, db: Session = Depends(get_db)):
    db_msg = ContactMessage(
        name=msg.name,
        email=msg.email,
        subject=msg.subject,
        message=msg.message
    )
    db.add(db_msg)
    db.commit()
    db.refresh(db_msg)
    return {"message": "Message sent successfully.", "id": db_msg.id}

@app.post("/api/appointments")
def create_appointment(appt: AppointmentCreate, db: Session = Depends(get_db)):
    db_appt = Appointment(
        name=appt.name,
        email=appt.email,
        phone=appt.phone,
        service_type=appt.service_type,
        date_val=appt.date,
        time_val=appt.time,
        notes=appt.notes
    )
    db.add(db_appt)
    db.commit()
    db.refresh(db_appt)
    return {"message": "Appointment scheduled successfully.", "id": db_appt.id}
