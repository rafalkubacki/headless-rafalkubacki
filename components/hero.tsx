import parse from "html-react-parser";
import Link from "next/link";

export default function Hero({
  node,
}: {
  node: {
    title: string;
    links: Array<{ title: string; url: string; external: boolean }>;
    description: Array<{ children: Array<{ _type: string; text: string }> }>;
  };
}) {
  return (
    <header className="header">
      <div className="container">
        {node.title && <h1>{parse(node.title)}</h1>}
        {node.description.map((item, i) => (
          <div key={i}>
            {item.children.map((sub, j) => (
              <p key={j}>{sub.text}</p>
            ))}
          </div>
        ))}
        <ul>
          {node.links.map((node, i) => (
            <li key={i}>
              {node.external ? (
                <a
                  href={node.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {node.title}
                </a>
              ) : (
                <Link href={node.url}>
                  <a>{node.title}</a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
