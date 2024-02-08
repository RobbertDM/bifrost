"use client";
import '../globals.css'
import Image from "next/image";
import { Grid, _ } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../navbar.tsx";
import Header from "../header.tsx";

const UserLink = ({name}) => <a href={"/users/"+name}>{name}</a>;
const ProjectLink = ({name}) => <a href={"/projects/"+name}>{name}</a>;

// Custom component to render Projects as badges
const ProjectBadges = ({ values }) => {
  return (
    <div>
      {(values as Array).map((project, idx) => {
        return (
          <span key={idx} className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2">
            <ProjectLink name={project}/>
          </span> 
        );
      })}
    </div>
  );
};

export default function Home() {

  useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`http://localhost/api/users`);
    const newData = await response.json();
    console.log(newData);
    setData(newData);
  };
    fetchData();
  }, []); // [] means this effect will run once

  const [data, setData] = useState([['Fetching users...', 'Also fetching their projects...']]);

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="w-full"> 
      <Navbar />
      <Header pageName="Users" />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="relative flex place-items-center">
          <Grid
            columns={[
              {id: 'name', name:'User', formatter: (cell) => _(<UserLink name={cell} />)},
              {id: 'projects', name:'Projects', formatter: (cell) => _(<ProjectBadges values={cell} />) }
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
