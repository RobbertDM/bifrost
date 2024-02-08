from fastapi import FastAPI, APIRouter
from pathlib import Path
from database import SessionLocal, engine
from models import User, Project
import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json"
)


@app.get("/api/users")
async def get_users():
    return [{"name": "Kris Zweters", "projects": ['payroll', 'invoices']},
            {"name": "Kris Veters", "projects": ['audit', 'finance']},
            {"name": "Kris Miereneters", "projects": ['machine_utilization', 'production']},
            {"name": "Kris Beters", "projects": ['sales', 'inventory']},
            {"name": "Velle Je Deminck", "projects": ['project_pipeline']},
            {"name": "Ban Vanjuel", "projects": ['ingestion']}
        ]

@app.get("/api/users_from_db")
async def get_users_from_db():
    session = SessionLocal()
    users_query = session.query(User)
    return users_query.all()

@app.post("/api/create")
async def create_user(name: str, email: str):
    session = SessionLocal()
    user = User(name=name, email=email)
    session.add(user)
    session.commit()
    return {"User created": user.name}

@app.get("/api/projects")
async def get_projects():
    session = SessionLocal()
    projects_query = session.query(Project)
    return projects_query.all()

@app.get("/api/projects/{project_id}")
async def get_project(project_id: int):
    session = SessionLocal()
    project = session.query(Project).filter(Project.id == project_id).first()
    return project

@app.put("/api/projects/{id}")
async def update_project(
    id: int, title: str, description: str
):
    session = SessionLocal()
    project_query = session.query(Project).filter(Project.id==id)
    project = project_query.first()
    project.title = title
    project.description = description
    session.add(project)
    session.commit()
    return project
