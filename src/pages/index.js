import React from 'react';
import { Layout } from '../components/layout';
import { Header } from '../components/header';
import image from '../assets/img/test/IMG_3953_Original.jpg';
import { Content } from '../components/content';

export default () => {
  return (
    <Layout>
      <Header />
      <Content>
        <h1>Accueil</h1>
        <img src={image} height={200} alt=""></img>
      </Content>
    </Layout>
  );
};
