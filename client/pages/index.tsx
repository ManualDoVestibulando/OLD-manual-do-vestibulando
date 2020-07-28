import React, { Fragment } from 'react';
import Head from 'next/head';
import { Container, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className="spacer"></div>
      <Container maxWidth="sm">
        <Typography variant="h3">Texto</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Container>

      <style jsx>
        {`
          .spacer {
            margin-top: 100px;
          }
        `}
      </style>
    </Fragment>
  );
}
