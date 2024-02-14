"use client";
import { GraphCanvas, RadialMenu } from 'reagraph';
import { useEffect, useRef, useState } from "react";

export default function Graph({nodes, edges}) {
  console.log("rendering graph.tsx");
  // const [isBrowser, setIsBrowser] = useState(false);
  // useEffect(() => {
  //     console.log("ya");
  //     if (typeof window !== "undefined") {
  //       setIsBrowser(true);
  //     }
  //   }, []);

  //   if (!isBrowser) {
  //     console.log("is not browser");
  //     return <></>;
  //   }
  const [active, setActive] = useState<any>(null);


  return (

        <div className="relative flex place-items-center">
         <div
            style={{
              position: "relative",
              width: "99vw",
              height: "80vh",
              borderWidth: 1,
            }}
            id="graph-canvas-container"
            className="border-black border-1 center place-items-center flex justify-center m-auto mt-4"
          >
          yeah
  <div style={{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }}>
      <div style={{
      zIndex: 9,
      position: 'absolute',
      top: 15,
      right: 15,
      background: 'rgba(0, 0, 0, .5)',
      padding: 10,
      color: 'white'
    }}>
        <h3> </h3>
        {active ? <>
            Selected: {active.node.id}
            <br />
          </> : <>
            Click a node to see options
          </>}
      </div>
      <GraphCanvas
      sizingType="attribute"
      sizingAttribute="size"
      minNodeSize={5}
      maxNodeSize={20}
      //layoutType="treeLr2d"
      //layoutType="radialOut2d"
      //layoutType="forceatlas2"
      //layoutType="circular2d"
      layoutType="hierarchicalLr"
      labelType="all"
      draggable
      nodes={nodes}
      edges={edges}
      onNodeClick={(node, props) => setActive({ node, props })} 
      contextMenu={({ data, additional, onClose }) => (
      <RadialMenu
        onClose={onClose}
        items={[
          {
            label: 'project',
            onClick: () => {
              alert('Go to project page');
              onClose();
            }
          },
          {
            label: 'owner',
            onClick: () => {
              alert('Go to owner page');
              onClose();
            }
          },
          {
            label: 'topics',
            onClick: () => {
              alert('Go to topics page');
              onClose();
            }
          },
          {
            label: 'ids',
            onClick: () => {
              alert('Go to ids page');
              onClose();
            }
          },
        ]}
      />
    )}
    />
    </div>;
        </div>
      </div>
    );
}

