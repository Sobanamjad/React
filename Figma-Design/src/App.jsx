import navbar from "./assets/1.png";
import logo from "./assets/logo.png";
import thumbs from "./assets/thumbs.png";
import plain from "./assets/plain.png";
import medal from "./assets/medal.png";
import refresh from "./assets/refresh.png";
import cream from "./assets/cream.png";
import { Star, Check, Lock } from "lucide-react";
import dermatology from "./assets/dermatology.png";
import madeinUSA from "./assets/madeinUSA.png";
import GPM from "./assets/GPM.png";
import comment from "./assets/comment.jpg";
import Group from "./assets/Group.png";
import skincare from "./assets/skincare 1.png";
import skin from "./assets/skin 1.png";
import Rectangle from "./assets/Rectangle 24.png";
import Rectangle25 from "./assets/Rectangle 25.png";
import Rectangle26 from "./assets/Rectangle 26.png";
import Result4 from "./assets/4result.png";
import creams from "./assets/cream1.png";

const text = "Achieve Visibly Younger Looking Skin!";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <section>
        <span className="flex flex-col sm:flex-row items-center justify-center bg-black py-2 px-4 text-center">
          <p className="text-white text-md font-bold">ATTENTION:</p>
          <p className="sm:ml-2 text-white text-sm sm:text-base">
            Due to increased demand for our product we cannot guarantee supply.
          </p>
        </span>

        <div className="w-full bg-gradient-to-tl from-pink-600 to-pink-950">
          <div className="flex items-center justify-between px-4 sm:px-8 py-4">
            <div className="flex-shrink-0">
              <img className="h-8 sm:h-12 w-auto" src={logo} alt="logo" />
            </div>
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="flex items-center space-x-8 text-white text-lg leading-none">
                <li>Benefits</li>
                <li>Features</li>
                <li>About</li>
                <li>Science</li>
                <li>Reviews</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img className="h-8 sm:h-12 w-auto" src={navbar} alt="navbar" />
            </div>
          </div>
          <div className="py-2 border-t border-b border-white overflow-x-auto">
            <ul className="flex justify-start lg:justify-center items-center space-x-4 sm:space-x-8 text-white text-xs sm:text-sm px-4 min-w-max">
              <li className="flex items-center space-x-1 sm:space-x-2">
                <img
                  className="h-4 sm:h-6 w-4 sm:w-6"
                  src={thumbs}
                  alt="#1 Rated"
                />
                <span>#1 Rated Solution</span>
              </li>
              <li className="flex items-center space-x-1 sm:space-x-2">
                <img
                  className="h-4 sm:h-6 w-4 sm:w-6"
                  src={plain}
                  alt="Free Shipping"
                />
                <span>Free Worldwide Shipping</span>
              </li>
              <li className="flex items-center space-x-1 sm:space-x-2">
                <img
                  className="h-4 sm:h-6 w-4 sm:w-6"
                  src={medal}
                  alt="Ship Fast"
                />
                <span>Ship within 24 hours</span>
              </li>
              <li className="flex items-center space-x-1 sm:space-x-2">
                <img
                  className="h-4 sm:h-6 w-4 sm:w-6"
                  src={refresh}
                  alt="Hassle Free"
                />
                <span>30 days hassle free return</span>
              </li>
            </ul>
          </div>

          {/* Hero Content */}
          <div className="relative px-4 sm:px-8 py-8 sm:py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="flex-1 space-y-4 sm:space-y-6 text-white">
                <div className="flex items-center space-x-1">
                  <Star size={16} color="#c09316" strokeWidth={1.5} />
                  <Star size={16} color="#c09316" strokeWidth={1.5} />
                  <Star size={16} color="#c09316" strokeWidth={1.5} />
                  <span className="ml-2 sm:ml-3 text-sm sm:text-base">
                    Rated 4.5/5 Based on XXX+ Happy Customers
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Achieve Visibly <br /> Younger Looking Skin
                </h1>

                <p className="text-sm sm:text-base">
                  Seventy five percent of our skin is comprised of water and
                  collagen.
                </p>

                <ol className="space-y-2 sm:space-y-4">
                  <li className="flex items-center space-x-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border-2 border-white">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base">
                      Brighten Skin's Appearance
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border-2 border-white">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base">
                      Restore Your Radiant, Firmer Skin
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border-2 border-white">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base">
                      Smooth Look Of Stubborn Fine Lines
                    </span>
                  </li>
                </ol>

                {/* Testimonial */}
                <div className="flex items-start space-x-3 mt-4 sm:mt-6">
                  <img
                    className="h-12 sm:h-20 rounded-full"
                    src={comment}
                    alt="customer"
                  />
                  <div>
                    <p className="text-xs sm:text-sm">
                      "Lorem ipsum dolor sit amet, consectetur adipiscin gelit.
                      <br className="hidden sm:block" /> Nullam vulputate sapien
                      sit amet velit elem entum pharetr."
                    </p>
                    <p className="text-xs mt-1">
                      <span className="font-semibold">- Jane Smit</span>
                      <span className="text-gray-300 ml-2">
                        verified customer
                      </span>
                    </p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <img
                    className="h-8 sm:h-auto"
                    src={dermatology}
                    alt="dermatology"
                  />
                  <img
                    className="h-8 sm:h-auto"
                    src={madeinUSA}
                    alt="madeinUSA"
                  />
                  <img className="h-8 sm:h-auto" src={GPM} alt="GPM" />
                </div>
              </div>

              <div className="lg:flex-1 relative mt-8 lg:mt-0">
                <div
                  className="absolute -top-3 -left-3 flex items-center justify-center rounded-full text-white font-bold shadow-lg -rotate-15 text-xs sm:text-base z-20"
                  style={{
                    backgroundColor: "#F6AF45",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  LIMITED
                  <br />
                  Supply!
                </div>
                <img
                  src={cream}
                  alt="Product"
                  className="hidden lg:block absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] xl:w-[550px] rounded-lg"
                />
                <div className="relative bg-white p-4 sm:p-6 rounded-lg text-black">

                  <div className="bg-pink-900 p-3 sm:p-4 rounded-md mb-4 text-center">
                    <h2 className="text-base sm:text-lg font-bold text-white mb-1">
                      Tell Us Where To Send
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      YOUR BOTTLE!
                    </p>
                  </div>

                  <form className="space-y-3 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full border border-gray-300 px-3 py-2 rounded"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full border border-gray-300 px-3 py-2 rounded"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full border border-gray-300 px-3 py-2 rounded"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full border border-gray-300 px-3 py-2 rounded"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        className="w-full border border-gray-300 px-3 py-2 rounded"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <select className="w-full border border-gray-300 px-3 py-2 rounded">
                        <option value="Country">Country</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Zip Code"
                        className="w-full border border-gray-300 px-3 py-2 rounded"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 px-3 py-2 rounded"
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full border border-gray-300 px-3 py-2 rounded"
                      />
                    </div>

                    <button
                      className="w-full text-black text-lg sm:text-2xl py-2 sm:py-3 rounded-full font-bold"
                      style={{ backgroundColor: "#F6AF45" }}
                    >
                      RUSH MY ORDER!
                    </button>

                    <span className="flex items-center justify-center gap-2 text-xs">
                      <Lock className="w-4 h-4" />
                      Secure 256 bit encrypted connection
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-screen px-4 sm:px-8 py-12 sm:py-16">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-950 text-2xl sm:text-3xl lg:text-4xl font-bold pt-10 pb-2">
              Emotive Heading For 3 Steps
            </h1>
            <p className="text-black text-sm sm:text-base font-light max-w-2xl mx-auto">
              Our skin is exposed to harsh UVA and UVB radiation resulting in
              age spots, fine lines, and wrinkles.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="relative bg-gray-100 rounded-2xl p-6 pt-16"
              >
                <div className="absolute -top-8 left-6 w-16 h-16 rounded-full bg-gradient-to-tl from-pink-600 to-pink-950 flex items-center justify-center">
                  <img
                    src={num === 1 ? Group : num === 2 ? skincare : skin}
                    alt={`step-${num}`}
                    className="w-8 h-8"
                  />
                </div>
                <span className="absolute -top-24 sm:-top-36 right-6 text-8xl sm:text-[12rem] text-gray-200 font-bold">
                  {num}
                </span>
                <h3 className="text-lg font-semibold mb-2">
                  {num === 1
                    ? "Vitalize"
                    : num === 2
                      ? "Replenish"
                      : "Moisturize"}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisc ing elit.
                  Nullam vulputate sapien sit amet velit elemen tum pharetra.
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[Rectangle, Rectangle25, Rectangle26, Result4].map(
              (img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt={`result-${index + 1}`}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-4">
                    <button className="px-3 sm:px-6 py-1 sm:py-2 text-white bg-gray-600 rounded-full text-xs sm:text-sm">
                      Before
                    </button>
                    <button className="px-3 sm:px-8 py-1 sm:py-2 bg-pink-600 rounded-full text-white text-xs sm:text-sm">
                      After
                    </button>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <div className="flex flex-col ml-5 md:flex-row items-center gap-8 p-8">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold
         bg-gradient-to-l from-pink-600 to-pink-950
         text-transparent bg-clip-text
         leading-tight"
          >
            {text
              .split(" ")
              .reduce((lines, word, index) => {
                if (index % 2 === 0) lines.push([word]);
                else lines[lines.length - 1].push(word);
                return lines;
              }, [])
              .map((line, i) => (
                <span key={i} className="block">
                  {line.join(" ")}
                </span>
              ))}
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Elixir Vie Anti Aging Formula Supplies are limited.
            <br />
            Get It Today!
          </p>
          <button className="bg-[#F29D1C] text-white px-6 py-3 rounded-full font-bold transition">
            GET MY ELIXIR VIE NOW
          </button>
          <p className="text-xs text-gray-500 flex items-center justify-center md:justify-start gap-2">
            <Lock className="w-4 h-4" />
            Secure 256 bit encrypted connection
          </p>
        </div>
        <div className="flex-1 relative">
          <img
            src={creams}
            alt="Product"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl relative z-10"
          />

\          <img
            src={creams} 
            alt="Overlay Product"
            className="absolute -top-10 right-100 top-30 w-1/2 max-w-[600px] rounded-lg shadow-2xl z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
