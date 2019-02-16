import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Button, IconButton, Section, Main } from '../components/Element';
import { Card } from 'rebass';
import { Search } from 'styled-icons/feather';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <Main
      flex
      justifyContent='space-evenly'
      fontSize={5}
      textTransform='uppercase'
      color='#ffffff'
      fontWeight='bold'
      alignItems='center'
      width={[1, 1]}
      px={4}
      py={4}
      my={10}
      mx={10}
      bg='#000000'
    >
      <Card
        flex
        fontSize={6}
        justifyContent='space-evenly'
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

    <Section flex justifyContent='space-evenly' p={4}>
      <Link to='/page-2'>
        <Button varient='primary' width={1}>
          Button Response
        </Button>
      </Link>
      <IconButton icon={<Search />} />
    </Section>
  </Layout>
);

export default IndexPage;
