import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
<Head>
  <title>
    {pageTitle && `${pageTitle}` || `The Job Board`}
  </title>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta charset="UTF-8" />
  <meta name="description" content="Find skilled professionals and rewarding job opportunities in various industries. Our job board connects employers with talented candidates for different roles such as project managers, architects, engineers, developers, designers, marketers, and more. Explore candidate profiles, post job listings, and build your dream team today." />
  <meta name="keywords" content="job board, job opportunities, employers, candidates, professionals, project managers, architects, engineers, developers, designers, marketers, candidate profiles, job listings, dream team" />
</Head>

  </>
);

export default Seo;
