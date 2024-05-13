import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import ImageCard from '../ImageCard';
import Choose from '../Choose';
import Footer from '../Footer';


function Home() {
  return (
    <>
      <HeroSection />
      <ImageCard/>
      <Choose/>
      <Footer />
    </>
  );
}

export default Home;