function Banner() {
  return (
    <>
      <div className="bg-dark p-5 text-white d-flex justify-content-center my-5">
        <div>
          <h1 className="text-center" style={{ fontSize: "3.5rem" }}>
            <strong>Exclusive prices for our cars right now</strong>
          </h1>
          <p className="text-center" style={{ fontSize: "2.1rem" }}>
            Try the <span className="text-primary">24/7</span> support for more
            info
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
