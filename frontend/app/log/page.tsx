"use client";
import "gridjs/dist/theme/mermaid.css";
import '../globals.css';
import Image from "next/image";
import { Grid, _ } from 'gridjs-react';
import React, { useEffect, useRef } from "react";
import Navbar from "../navbar.tsx";
import Header from "../header.tsx";

const ProjectLink = ({name}) => <a href={"/projects/"+name}>{name}</a>;
const UserLink = ({name}) => <a href={"/users/"+name}>{name}</a>;

export default function ProjectLog() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="w-full"> 
      <Navbar />
      <Header pageName="Project Log / wind_power" badge="Pending changes"/>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="relative flex place-items-center">
          <Grid
            columns={[
              {name:'Timestamp', formatter: (cell) => _(<ProjectLink name={cell}/>)},
              {name:'User', formatter: (cell) => _(<UserLink name={cell}/>)},
              {name:'Role', formatter: (cell) => _(<UserLink name={cell}/>)},
              {name:'Request', formatter: (cell) => _(<UserLink name={cell}/>)},
              {name:'Status', formatter: (cell) => _(<UserLink name={cell}/>)},
            ]}
            data={[
              ['2023-02-09 10:36:13 CET', 'Gergely Snoti',          'Purpose member', 'Remove member', 'Pending'],
              ['2023-02-08 22:36:33 CET', 'Kris Veters',            'Data Owner', 'Read Access', 'Granted'],
              ['2023-02-07 10:36:13 CET', 'Gergely Snoti',          'Purpose member', 'Read Access', 'Pending'],
              ['2023-02-06 14:17:11 CET', 'Kris Veters',            'Purpose owner',   'Add member', 'Granted'],
              ['2023-02-06 09:26:45 CET', 'Gergely Snoti',          'Purpose member', 'Add member', 'Pending'],
              ['2023-01-02 03:14:15 CET', 'Jonathan Merelvenster',  'Platform member' ,'New project', 'Granted'],
              ['2023-01-01 09:00:00 CET', 'Gergely Snoti',          'Purpose member',   'New project', 'Pending'],
              ]}
            search={true}
            sort={true}
            className={{
              //'container': 'relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border',
              'table': 'w-full text-left table-auto',
              'th': "p-4 border-b border-blue-gray-100 bg-blue-gray-50",
              'search': "w-full",
              'header': 'w-full',
            }
            }
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
