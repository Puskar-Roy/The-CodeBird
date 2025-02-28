import { robot } from "../assets";
//check^^
import Heading from "./Heading";
import { collabApps } from "../constants";
//collabContent^^
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container">
      <div className="container relative z-2">
      <Heading
          className="mx-auto text-center md:max-w-md lg:max-w-2xl"
          title="Collaborated With"
/>


          {/* <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul> */}
        </div>

        <div className="lg:ml-auto xl:w-[44rem] mt-10">

        <div className="relative left-16 flex w-full max-w-[32rem] mt-12 aspect-square border border-n-6 rounded-full translate-x-[-50%] scale-100 sm:scale-55 md:scale-50 lg:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[8rem] aspect-square m-auto p-[0.1rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={robot}
                    width={100}
                    height={100}
                    alt="codebird"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[4.2rem] h-[4.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto rounded-xl"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
            
          </div>
          <Button className="mt-[6rem]" href="/contact">Collab with Us</Button>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
