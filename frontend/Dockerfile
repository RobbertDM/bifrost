# syntax = docker/dockerfile:1.4
FROM node:20.11-alpine as base

#FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

#FROM base AS prod-deps
#RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
#
#FROM base AS build
#RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
#RUN pnpm run build

FROM base
#COPY --from=prod-deps /app/node_modules /app/node_modules
#COPY --from=build /app/dist /app/dist
RUN pnpm install --frozen-lockfile
#EXPOSE 8000
CMD [ "pnpm", "run", "dev" ]
#CMD [ "pnpm", "start" ]

