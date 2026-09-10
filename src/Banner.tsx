import Banner2 from '../src/assets/banner-stack.png'


function Banner() {
      return (
    <section>
      <h1>Build Your Ideal</h1>
      <h1>Development Stack</h1>
      <h4>
        Explore frontend, backend, database, and tooling options, compare them
        side by side, and put together the stack that fits your next project.
      </h4>
      <button>Explore Technologies</button>
      <button>Learn More</button>
      <div>
        <img src={Banner2} alt="bannerimage" />
      </div>
    </section>
  );
}

export default Banner;
