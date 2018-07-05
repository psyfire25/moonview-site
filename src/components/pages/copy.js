import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MoonHeader from '../../components/elements/moon/MoonHeader';
import MoonContent from '../../components/elements/moon/MoonContent';
import MoonFooter from '../../components/elements/moon/MoonFooter';
import './copy.css';

const Moon = () => (
      <ParallaxProvider>
        <MoonHeader />
        <MoonContent />
        <MoonFooter />
      </ParallaxProvider>
);

export default Moon;
