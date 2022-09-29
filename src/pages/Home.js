import React from "react";
import HomeFinal from "../components/HomeFinal";
import HomeHero from "../components/HomeHero";
import HomeMiddel from "../components/HomeMiddel";
function Home() {
  return (
    <div>
      <HomeHero/>
    <HomeMiddel/>
    <HomeFinal/>

      <section>News (api news atleast 6  )</section>
      <section>Our teams and reviews</section>
     
    </div>
  );
}

export default Home;
