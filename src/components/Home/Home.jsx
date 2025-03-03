
import Benefits from "../Benefits";
import Collaboration from "../Collaboration";
import Hero from "../Hero";
// import Pricing from "../Pricing";
import Roadmap from "../Roadmap";
// import Services from "../Services";
import TestimonialSlider from "../Testimonials/TestimonialSlider";

const Home = () => {
  return (
    <div>
      <Hero />
        <Benefits />
        <Collaboration />
        <TestimonialSlider/>
        {/* <Services />
        <Pricing /> */}
        <Roadmap />
    </div>
  )
}

export default Home
