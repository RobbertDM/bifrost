# syntax = docker/dockerfile:1.4
FROM python:3.11-slim
ARG POETRY_VERSION=1.5.1
ARG UVICORN_VERSION=0.22.0
ENV POETRY_NO_INTERACTION=1
ENV POETRY_VIRTUALENVS_CREATE=false

WORKDIR /app
RUN pip install poetry=="${POETRY_VERSION}" \
    uvicorn=="${UVICORN_VERSION}" \
    --no-cache-dir

COPY pyproject.toml poetry.lock ./
# Install dependencies
RUN poetry install --no-root --without dev
# Install the backend itself
COPY ./ ./
#RUN poetry install --only-root

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]


