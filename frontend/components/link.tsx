"use client";

export const UserLink = ({ name }: { name: string }) => (
  <a href={"/users/" + name}>{name}</a>
);

export const ProjectLink = ({ name }: { name: string }) => (
  <a href={"/projects/" + name}>{name}</a>
);

// Custom component to render Projects as badges
export const ProjectBadges = ({ values }: { values: Array<any> }) => {
  return (
    <div>
      {(values as Array<any>).map((project: string, idx: number) => {
        return (
          <span
            key={idx}
            className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2"
          >
            <ProjectLink name={project} />
          </span>
        );
      })}
    </div>
  );
};
