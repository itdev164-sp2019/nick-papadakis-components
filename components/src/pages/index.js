import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Button } from '../components/Element';
import { Footer } from '../components/Element';
import { Card } from 'rebass';
import { Main } from '../components/Element';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <Main
      fontSize={5}
      color='#ffffff'
      fontWeight='bold'
      width={[1, 1, 1 / 2]}
      alignItems='center'
      px={4}
      py={4}
      my={10}
      mx={10}
      bg='#000000'
    >
      <Card
        fontSize={6}
        fontWeight='bold'
        width={1}
        px={4}
        py={4}
        my={10}
        mx={10}
        bg='#cccccc'
        borderRadius={8}
        boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
      >
        <Image />
      </Card>
      <Link
        to='/page-2'
        style={{
          color: `#fffbbb`,
          textDecoration: `none`,
          fontFamily: `Electrolize`
        }}
      >
        This is Marilyn
      </Link>
    </Main>

    <Footer p={4}>
      <Link to='/page-2'>
        <Button width={1}>Button Response</Button>
      </Link>
    </Footer>
  </Layout>
);

export default IndexPage;
