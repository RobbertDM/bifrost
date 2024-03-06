"use client";
import "../globals.css";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import React, { useEffect, useRef, useState } from "react";
import Header from "../header";
import BasicFlow from "./flow";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-0">
      <div className="w-full">
        <Header pageName="Lineage" />
      </div>
      <div className="w-100 min-w-100 h-100 min-h-100">
        <div style={{ height: 600 }}>
          <BasicFlow />
        </div>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="relative flex place-items-center"></div>
      </div>
    </main>
  );
}
