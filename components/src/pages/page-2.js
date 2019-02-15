import React from 'react';
import { Link } from 'gatsby';
import { LinkButton } from '../components/Element';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title='Page two' />
    <Link to='/'>
      <LinkButton variant='primary'>Back</LinkButton>
    </Link>
  </Layout>
);

export default SecondPage;
