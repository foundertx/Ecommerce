import React from "react";
import { Product, FooterBanner, HeroBanner } from "../component";
import {client} from "../lib/client";

const Home = ({ products, bannerData }) => (
  <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Marketing Material For Your</h2>
      <p>Let Your Customers Know That You Are On SwiftlyBox</p>
    </div>
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </>
);
  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
      props: { products, bannerData },
    };
  };

  export default Home;