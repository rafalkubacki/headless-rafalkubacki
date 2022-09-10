import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import client from "../lib/client";
import Hero from "../components/hero";
import ProjectsList from "../components/projectsList";
import LangSwitcher from "../components/langSwitcher";

export default function Home({
  page,
}: {
  page: {
    metaTitle: string;
    metaDescription: string;
    sections: Array<{
      _key: string;
      _type: string;
      title: string;
      links: Array<{ title: string; url: string; external: boolean }>;
      description: Array<{ children: Array<{ _type: string; text: string }> }>;
      showAll: boolean;
      projects: Array<{
        externalUrl: string;
        cardTitle: string;
        cardImage: object;
        title: string;
        casePlanned: boolean;
      }>;
    }>;
  };
}) {
  return (
    <>
      <Head>
        {page?.metaTitle && <title>{page.metaTitle}</title>}
        {page?.metaDescription && (
          <meta name="description" content={page.metaDescription} />
        )}
      </Head>
      <LangSwitcher />
      <main className="main">
        {page?.sections?.map((node, i) => {
          if (node._type == "hero") {
            return <Hero key={node._key} node={node} />;
          } else if (node._type == "projectsList") {
            return <ProjectsList key={node._key} node={node} />;
          }
        })}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await client.fetch(
    `*[_type == "project"] | order(order) { 
      _id, title, casePlanned, cardTitle, cardImage, externalUrl, 
      agency->{_id, title}
    }`
  );

  const page = await client.fetch(
    `*[_type == "page" && slug == "/" && __i18n_lang == "${context.locale}"][0] {
      metaTitle, metaDescription, sections
    }`
  );

  page?.sections?.map(
    (section: { _type: string; showAll: boolean; projects: [] }) => {
      if (section._type == "projectsList" && section.showAll === true) {
        section.projects = projects;
      }
    }
  );

  return {
    props: {
      page,
      projects,
    },
  };
};
