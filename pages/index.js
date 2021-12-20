import Head from 'next/head';
import styles from '../styles/Books.module.css';
import axios from 'axios';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import SingleBook from './SingleBook';
import Router, { withRouter } from 'next/router'

export const getStaticProps = async () => {
  const res = await axios('http://www.mocky.io/v2/5cc008de310000440a035fdf');
  const { data } = res;

  return {
      props: {books: data.book_array}
  }
}

export default function Home({books}) {
  return (

    <div>
      <h1>All Books</h1>
      {books.map(book => (
        <Link href={{
        pathname: "/SingleBook",
        query: { name : book.book_title,
        author : book.author,
        image : book.image },
      }} 
        key={book.book_title}>
          <a className={styles.single}>
            <h3>{ book.book_title }</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}
