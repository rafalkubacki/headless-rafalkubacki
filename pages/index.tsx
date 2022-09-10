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
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d0d0f" />
        <meta name="msapplication-TileColor" content="#0d0d0f" />
        <meta name="theme-color" content="#0d0d0f" />
      </Head>
      <LangSwitcher />
      <main className="main">
        {page.sections.map((node, i) => {
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

  page.sections.map(
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
