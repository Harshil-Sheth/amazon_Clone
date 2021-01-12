import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon-banner"
        />

        <div className="home__row">
          <Product
          id="111"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={999}
            image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
          id="112" 
              title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait &amp; Landscape, Tilt, and HDMI &amp; VGA Ports (1KL30AA) - Black"
            price={49990}
            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
        <Product
        id="113"
            title="Cloudstyle Men's 3-Piece 2 Buttons Slim Fit Solid Color Jacket Smart Wedding Formal Suit"
            price={6590}
            image="https://images-na.ssl-images-amazon.com/images/I/618BjtF76sL._AC_UX342_.jpg"
            rating={4}
          />
          <Product
          id="114" 
              title="Nikon D3500 DX-Format DSLR Two Lens Kit with AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR & AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED, Black"
            price={69990}
            image="https://images-na.ssl-images-amazon.com/images/I/61A4tg5IFhL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
          id="115" 
              title="SONY PlayStation 4 Slim 1TB Console, Light & Slim PS4 System, 1TB Hard Drive, All the Greatest Games, TV, Music & More"
            price={45890}
            image="https://images-na.ssl-images-amazon.com/images/I/61OL2zIliML._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product 
          id="116"
              title="AmazonBasics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black"
            price={3999}
            image="https://images-na.ssl-images-amazon.com/images/I/71i08qnZeDL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
