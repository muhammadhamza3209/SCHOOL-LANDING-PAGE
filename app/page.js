import Image from "next/image";

import Link from "next/link";

import a from "../public/logo.png";

import b from "../public/Frame imag 1 sec.png";

import hr from "../public/cliend imag.png";

import { FaBars } from "react-icons/fa";

import Card from "./(compoments)/card/card";

import Div from "./(compoments)/div/div";

export default function Home() {
  return (
    <>
      <nav>
        <div>
          <Image src={a} className="w-[85px]" alt="l" />
        </div>
        <input type="checkbox" id="click" />
        <label for="click">
          <FaBars />
        </label>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">
              <button className="bg-green-500 text-white px-3 py-2 rounded-3xl">
                Sigen up
              </button>
            </a>
          </li>
        </ul>
      </nav>

      {/* section 2 start */}

      <div className="max-w-[1400px] mt-14 lg:flex lg:flex-row justify-center gap-20 ">
        <div className="max-w-[470px]">
          <p className="text-red-600">Are you ready to Learn?</p>

          <p className="lg:text-5xl md:text-4xl text-4xl mt-5 font-bold leading-[70px]">
            Learn With fun on
            <span className="text-green-600"> any schedule</span>
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            blandit facilisis quam netus
          </p>

          <button className="bg-green-600 text-white rounded-3xl px-3 py-2 mt-5">
            Get start
          </button>
        </div>

        <div className="max-w-[600px]">
          <Image className="justify-center mx-auto" src={b} alt="l" />
        </div>
      </div>

      {/* card */}

      <div className="max-w-[1500px] lg:grid  lg:grid-cols-4  md:grid md:grid-cols-2 mx-auto justify-center    mt-10  ">
        <Card sr={require("../public/image 1 card.png")} title="1500+ Topic" />
        <Card
          sr={require("../public/image 2 card.png")}
          title="1800+ Students"
        />
        <Card
          sr={require("../public/image 3 card.png")}
          title="9K+ Test Token"
        />
        <Card
          sr={require("../public/image 4 card.png")}
          title="2000+ Student"
        />
      </div>

      <div className="max-w-[400px] mx-auto mt-10 mb-5 justify-center">
        <p className="text-4xl font-bold">Online Courses</p>
      </div>

      <div className="max-w-[1500px] lg:grid lg:grid-cols-3  mg:grid md:grid-cols-2 mx-auto justify-center  mt-16 mb-10 ">
        <Div hr={require("../public/card 2 1 imag.png")} />
        <Div hr={require("../public/card 2 2 imag.png")} />
        <Div hr={require("../public/card 3 3 imag.png")} />
      </div>

      <div className="max-w-[400px] mx-auto mt-10 mb-5 justify-center">
        <p className="text-4xl font-bold">Testimonial</p>
      </div>

      {/* Client Section Start */}

      <div className="max-w-[800px] mx-auto mt-10">
        <div className="lg:flex lg:flex-row gap-10">
          <Image
            className="mx-auto"
            height={100}
            width={170}
            src={hr}
            alt="kkk"
          />
          <p className="pt-8 mx-auto text-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>

      {/* Client Section Close  */}

      {/* footer start */}

      <div className="w-[100%] bg-black mt-10 text-white py-5 px-9 ">
        <div className="max-w-[1400px] lg:grid lg:grid-cols-4 md:grid-cols-2 mx-auto justify-center mt-10 mb-10 space-y-5 ">
          <div className="max-w-[300px] justify-center mx-auto">
            <p className="text-center mt-4">
              Millions of people of all ages and from around the world are
              improving their lives with us
            </p>
          </div>
          <div className="max-w-[300px] justify-center text-center mx-auto">
            <p className="text-3xl font-bold mb-3 text-center">Course</p>
            <p>Graphic Design</p>
            <p>Web Design</p>
            <p>Business</p>
            <p>Marketing</p>
            <p>Engineering</p>
          </div>
          <div className="max-w-[300px] justify-center text-center mx-auto">
            <p className="text-3xl font-bold mb-3 text-center">Terms</p>
            <p>Graphic Design</p>
            <p>Web Design</p>
            <p>Business</p>
            <p>Marketing</p>
            <p>Engineering</p>
          </div>
          <div className="max-w-[300px] justify-center text-center mx-auto">
            <p className="text-3xl font-bold mb-3 text-center">Useful Link</p>
            <p>Graphic Design</p>
            <p>Web Design</p>
            <p>Business</p>
            <p>Marketing</p>
            <p>Engineering</p>
          </div>
        </div>

        <div className="max-w-[500px] mx-auto justify-center mt-36 mb-8">
          <p className="text-center ">Copyright © 2020 Rokomari.com</p>
        </div>
      </div>
    </>
  );
}
