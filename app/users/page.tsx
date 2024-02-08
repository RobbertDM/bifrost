"use client";
import '../globals.css'
import Image from "next/image";
import { Grid, _ } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import React, { useEffect, useRef } from "react";
import Navbar from "../navbar.tsx";


var data = [['wind_power', 'Kris Veters'],
            ['wind_offshore', 'Pristof Kartens'],
            ['audit', 'Velle Je Deminck'],
            ['price_forecast', 'Ban Vanjuel']];

const ProjectLink = ({name}) => <a href={"/projects/"+name}>{name}</a>;
const UserLink = ({name}) => <a href={"/users/"+name}>{name}</a>;


export default function Home() {
  useEffect(() => {
    fetch("https://randomuser.me/api").then((response)  => {
          console.log(response);
          data.push(['wind_power', 'Kris Veters99']);
        })
  }, [data])

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="w-full"> 
      <Navbar />
      </div>
      <h2 className="h2">Users</h2>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="relative flex place-items-center">
          <Grid
            columns={[
              {name:'Name', formatter: (cell) => _(<ProjectLink name={cell}></ProjectLink>)},
              {name:'Owner', formatter: (cell) => _(<UserLink name={cell}></UserLink>)}
            ]}
            data={data}
            search={true}
            pagination={{ limit: 10, }}
          />
        </div>
      </div>


    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    </div>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    </div>
    </main>
    );
}
