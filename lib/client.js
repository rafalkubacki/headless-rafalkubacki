import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "qpwue3ap",
  dataset: "production",
  apiVersion: "2022-02-03",
  useCdn: true,
});
