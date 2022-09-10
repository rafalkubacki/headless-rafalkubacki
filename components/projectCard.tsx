import Image from "next/image";
import parse from "html-react-parser";
import client from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import useTranslation from "next-translate/useTranslation";

const builder = imageUrlBuilder(client);

function urlFor(source: object) {
  return builder.image(source);
}

export default function ProjectCard({
  node,
}: {
  node: {
    externalUrl: string;
    cardTitle: string;
    cardImage: object;
    title: string;
    casePlanned: boolean;
  };
}) {
  const { t } = useTranslation("common");
  if (node.externalUrl) {
    return (
      <a
        className="project"
        href={node.externalUrl}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <Image
          className="projectImage"
          src={urlFor(node.cardImage).url()}
          alt={node.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="projectContent">
          {node.cardTitle ? (
            <h2 className="projectName">{parse(node.cardTitle)}</h2>
          ) : (
            <h2 className="projectName">{parse(node.title)}</h2>
          )}
          <div className="projectLink">{parse(t("visit-live"))}</div>
          {node.casePlanned === true ? (
            <div className="projectCase">{parse(t("case-study"))}</div>
          ) : (
            ""
          )}
        </div>
      </a>
    );
  } else {
    return (
      <div className="project">
        <Image
          className="projectImage"
          src={urlFor(node.cardImage).url()}
          alt={node.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="projectContent">
          {node.cardTitle ? (
            <h2 className="projectName">{parse(node.cardTitle)}</h2>
          ) : (
            <h2 className="projectName">{parse(node.title)}</h2>
          )}
          {node.casePlanned === true ? (
            <div className="projectCase">{parse(t("case-study"))}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
