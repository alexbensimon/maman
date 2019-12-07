import React from 'react';
import { Layout } from '../components/layout';
import { Header } from '../components/header';
import { Content } from '../components/content';

export default () => {
  return (
    <Layout>
      <Header />
      <Content>
        <h1>Contact</h1>
      </Content>
    </Layout>
  );
};
