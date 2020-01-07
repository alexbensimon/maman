import React from 'react';
import { Content } from '../components/content';
import { Header } from '../components/header';
import { Layout } from '../components/layout';

export default () => {
  return (
    <Layout>
      <Header />
      <Content>
        <h1>Qi Gong</h1>
      </Content>
    </Layout>
  );
};
