import ProjectCard from "./projectCard";

export default function ProjectsList({
  node,
}: {
  node: {
    _type: string;
    showAll: boolean;
    projects: Array<{
      externalUrl: string;
      cardTitle: string;
      cardImage: object;
      title: string;
      casePlanned: boolean;
    }>;
  };
}) {
  return (
    <section>
      <ul className="list">
        {node.projects.map((node, i) => (
          <li key={i} className="listItem">
            <ProjectCard node={node} />
          </li>
        ))}
      </ul>
    </section>
  );
}
