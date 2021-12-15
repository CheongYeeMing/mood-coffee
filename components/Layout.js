import React, { Children } from 'react';
import NextLink from 'next/link';
import { AppBar, Container, Toolbar, Typography, Link } from '@mui/material';
import Head from 'next/head';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      {/* <Head><title>Mood Coffee</title></Head> */}
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Mood Coffee</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography fontWeight={'500'}>
          All rights reserved. Mood Coffee
        </Typography>
      </footer>
    </div>
  );
}
