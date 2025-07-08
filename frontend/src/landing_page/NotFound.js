import React from "react";

function NotFound() {
  return (
    <>
      <div className="container p-5 mb-5 mt-5">
        <div className="row text-center">
          <h1 className="mt-5" style={{ color: "#42425A", fontSize: "2.6vw" }}>
            404 Not Found
          </h1>
          <p style={{ color: "#424242", fontSize: "1.5vw" }}>
           Sorry, the page you are looking for does not exist.
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
