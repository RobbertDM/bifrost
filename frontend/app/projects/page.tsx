"use client";
import "gridjs/dist/theme/mermaid.css";
import "../globals.css";
import Image from "next/image";
import { Grid, _ } from "gridjs-react";
import React, { useEffect, useRef } from "react";
import Navbar from "../navbar";
import Header from "../header";

const ProjectLink = ({ name }) => <a href={"/projects/" + name}>{name}</a>;
const UserLink = ({ name }) => <a href={"/users/" + name}>{name}</a>;

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="w-full">
        <Navbar />
        <Header pageName="Projects" />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="relative flex place-items-center">
          <Grid
            columns={[
              {
                name: "Name",
                formatter: (cell) => _(<ProjectLink name={cell} />),
              },
              {
                name: "Owner",
                formatter: (cell) => _(<UserLink name={cell} />),
              },
            ]}
            data={[
              ["wind_power", "Kris Veters"],
              ["wind_offshore", "Pristof Kartens"],
              ["audit", "Velle Je Deminck"],
              ["price_forecast", "Ban Vanjuel"],
            ]}
            search={true}
            sort={true}
            pagination={{ limit: 10 }}
            className={{
              //'container': 'relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border',
              table: "w-full text-left table-auto",
              th: "p-4 border-b border-blue-gray-100 bg-blue-gray-50",
              search: "w-full",
              header: "w-full",
            }}
          />
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
