import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import client from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Hero from "../components/hero";
import ProjectsList from "../components/projectsList";
import LangSwitcher from "../components/langSwitcher";
import { useRouter } from "next/router";

const builder = imageUrlBuilder(client);

function urlFor(source: object) {
  return builder.image(source);
}

export default function Home({
  page,
}: {
  page: {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    seoImage: object;
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
  const { locale, defaultLocale } = useRouter();
  return (
    <>
      <Head>
        {page?.seoTitle && <title>{page.seoTitle}</title>}
        {page?.seoDescription && (
          <meta name="description" content={page.seoDescription} />
        )}
        {page?.seoKeywords && (
          <meta name="keywords" content={page.seoKeywords} />
        )}
        {page?.seoImage && (
          <>
            <meta property="og:image:width" content="279" />
            <meta property="og:image:height" content="279" />
            <meta property="og:description" content={page.seoDescription} />
            <meta property="og:title" content={page.seoTitle} />
            <meta property="og:image" content={urlFor(page.seoImage).url()} />
            <meta
              property="og:url"
              content={`https://www.rafalkubacki.com/${
                locale != defaultLocale ? locale : ""
              }`}
            />
          </>
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
    `*[_type == "page" && slug.current == "/" && __i18n_lang == "${context.locale}"][0] {
      seoTitle, seoDescription, seoKeywords, seoImage, sections
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
