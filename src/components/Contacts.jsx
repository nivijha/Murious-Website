// import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { curve } from "../assets";
// import Tagline from "./Tagline";
// import { roadmap } from "../constants";
// import { check2, grid, loading1 } from "../assets";
// import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10 mt-8">
      <div className="relative w-fit mx-auto">
        <Heading title="Contact Us" className="text-4xl"  />
        <img
          src={curve}
          className="absolute top-full left-0 w-full xl:-mt-2"
          width={624}
          height={28}
          alt="Curve"
        />
      </div>

      <div className="flex flex-col gap-2 p-8 py-16 mx-auto mt-20 bg-n-11 max-w-2xl">
        <Heading
          className="userName text-xl text-left w-full"
          title="Srizan Sarswat"
          tag={"head of tmp"}
          text="(>'-'<)"
        />
        <p className="mobileNumber text-xl text-gray-200">1234567889</p>
        <p className="email text-xl text-gray-200">
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </p>
      </div>
    </div>
  </Section>
);

export default Roadmap;
