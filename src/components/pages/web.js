import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ViewHeader from '../../components/elements/view/ViewHeader';
import ViewContent from '../../components/elements/view/ViewContent';
import ViewFooter from '../../components/elements/view/ViewFooter';
import './web.css';

const View = () => (
  <ParallaxProvider>
    <ViewHeader />
    <ViewContent />
    <ViewFooter />
  </ParallaxProvider>
);

export default View;
