import React from "react";
import { useRouter } from "next/router"

export default function AboutPage({ name, author, image }) {
  return (
    <div>
      <h1>Book Info</h1>
      <div>
        <h3>Book Name: {name}</h3>
        <img src={image} />
        <h3>Author : {author}</h3>
      </div>
    </div>
  );
}

AboutPage.getInitialProps = ({ query: { name, author, image } }) => {
  return { name, author, image }
}