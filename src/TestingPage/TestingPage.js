import React from "react";
import Newsletter from "../components/Newsletter";
import { useGlobalContext } from "../context";
import TestingProducts from "../Product/TestingProducts";

const TestingPage = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <React.Fragment>
      <section className="faq-hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="faq-info">
            <h2 className="faq-main-title">try page</h2>
            {/* <React.Fragment>
              <div key={one.id} className="guitar-intro-each">
                <Link to={`/products/${one.id}`}>
                  <img
                    src={one.image.url}
                    alt={one.name}
                    className="guitar-intro-pics"
                  />
                </Link>
                <h4 className="guitar-intro-name">{one.name}</h4>
                <p className="guitar-intro-price">$ {one.price} AUD</p>
                <Link to={`/products/${one.id}`}>
                  <button className="guitar-intro-btn">show detail</button>
                </Link>
              </div>
            </React.Fragment> */}
          </article>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TestingPage;
