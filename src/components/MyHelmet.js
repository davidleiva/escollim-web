import * as React from "react";
import { Helmet } from 'react-helmet'

const MyHelmet = ({title}) => (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"></link>
      <link href="./../css/styles.css" rel="stylesheet" />
    </Helmet>
);

export default MyHelmet;