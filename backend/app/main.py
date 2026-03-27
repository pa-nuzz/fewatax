from fastapi import FastAPI

app = FastAPI(title="Fewa Tax Consultancy API")

@app.get("/")
def root():
    return {"message": "Fewa Tax Consultancy API is running."}
