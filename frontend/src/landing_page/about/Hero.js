import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row p-5 mt-5 mb-5">
        <h1
          className="fs-2 text-center"
          style={{ color: "#424242", lineHeight: "1.5" }}
        >
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top"
        style={{ lineHeight: "1.8", fontSize: "1em" }}
      >
        <div
          className="col-6 p-5"
          style={{ color: "#424548", fontSize: "1.2vw" }}
        >
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div
          className="col-6 p-5"
          style={{ color: "#424548", fontSize: "1.2vw" }}
        >
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a
              href=""
              style={{
                textDecoration: "none",
                fontWeight: "500",
                color: "#387ED1",
              }}
            >
              Rainmatter,
            </a>{" "}
            our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a
              href=""
              style={{
                textDecoration: "none",
                fontWeight: "500",
                color: "#387ED1",
              }}
            >
              {" "}
              blog{" "}
            </a>{" "}
            or see what the media is{" "}
            <a
              href=""
              style={{
                textDecoration: "none",
                fontWeight: "500",
                color: "#387ED1",
              }}
            >
              {" "}
              saying about us{" "}
            </a>{" "}
            or learn more about our business and product{" "}
            <a
              href=""
              style={{
                textDecoration: "none",
                fontWeight: "500",
                color: "#387ED1",
              }}
            >
              philosophies.{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
