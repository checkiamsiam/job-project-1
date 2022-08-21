import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import FeaturedOfGrowth from "./FeaturedOfGrowth/FeaturedOfGrowth";
import OurChoice from "./OurChoice/OurChoice";
import TrendingFreelencer from "./TrendingFreelencer/TrendingFreelencer";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurChoice></OurChoice>
      <TrendingFreelencer></TrendingFreelencer>
      <WhatWeOffer></WhatWeOffer>
      <FeaturedOfGrowth></FeaturedOfGrowth>
      <Contact></Contact>
    </div>
  );
};

export default Home;
