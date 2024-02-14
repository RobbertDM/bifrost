"use client";
import React from 'react';
import '../globals.css'
import Navbar from "../navbar.tsx";
import Header from "../header.tsx";
// import dynamic from "next/dynamic";
import  Graph  from "@/components/graph";

export default function Lineage() {

const project_nodes = [
  {
    id: "project/mdm",
    label: "mdm",
    subLabel: "project",
    size: 20,
    icon: "image.png",
  },
  {
    id: "project/wind",
    label: "wind",
    subLabel: "project",
    size: 20,
    icon: "image.png",
    },
  {
    id: "project/audit",
    label: "audit",
    subLabel: "project",
    size: 20,
    icon: "image.png",
    },
  {
    id: "project/customer",
    label: "customer" ,
    subLabel: "project",
    size: 20,
    icon: "image.png",
  }
];

const data_id_nodes = [
  {
    id: "data_id/b2b_customers",
    label: "b2b_customers",
    subLabel: "data_id",
    size: 10
  },
{
id: "data_id/b2c_customers",
    label: "b2c_customers",
    subLabel: "data_id",
    size: 10
},
{ id: "data_id/audit_log",
label: "audit_log",
       subLabel: "data_id",
       size: 10
},
{ id: "data_id/wind_forecast",
label: "wind_forecast",
       subLabel: "data_id",
       size: 10
},
{ id: "data_id/mdm_historic",
label: "mdm_historic",
       subLabel: "data_id",
       size: 10
},
{ id: "root",
label: "ingestion",
size: 10
}

];

const nodes = project_nodes.concat(data_id_nodes);

const edges = [
  { id: "root0", source: "root",    target: "project/customer",    label: "" },
  { id: "root1", source: "root",    target: "project/wind",    label: "" },
  { id: "e1-2", source: "project/mdm",    target: "data_id/mdm_historic",    label: "writes" }, // project writes data_id
  { id: "e1-3", source: "project/wind",    target: "data_id/wind_forecast",     label: "writes" }, // project writes data_id
  { id: "e1-4", source: "project/audit",  target: "data_id/audit_log", label: "writes" }, // project writes data_id
  { id: "e1-5", source: "project/customer",    target: "data_id/b2b_customers", label: "writes" }, // project writes data_id
  { id: "e1-6", source: "project/customer",    target: "data_id/b2c_customers", label: "writes" }, // project writes data_id
  { id: "e2-0", source: "data_id/b2b_customers",    target: "project/audit", label: "read by" }, // project reads data_id
  { id: "e2-1", source: "data_id/b2c_customers",    target: "project/audit", label: "" }, // project reads data_id
  { id: "e2-2", source: "data_id/audit_log",    target: "project/mdm", label: "" }, // project reads data_id
  { id: "e2-3", source: "data_id/b2b_customers",    target: "project/mdm", label: "" }, // project reads data_id
  { id: "e2-4", source: "data_id/b2c_customers",    target: "project/mdm", label: "" }, // project reads data_id

];

  return (
    <main className="min-h-screen flex-col items-center justify-between p-0">

      <div className="w-full"> 
        <Navbar />
        <Header pageName="Lineage" />
      </div>

      <div className="w-100 min-w-100 h-100 min-h-100">
        <div style={{ height: 600 }}>
          <Graph nodes={nodes} edges={edges}/>
        </div>
      </div>

    </main>
    );
}
