import React from "react";

import Image from "next/image";

import a from "../../../public/card 2 11.png";
import b from "../../../public/card 2 111.png";

export default function Div(props) {
  return (
    <>
      <div className="max-w-[450px] justify-center mx-auto border-2 py-4 px-5">
        <Image src={props.hr} alt="" />
        <p className="pt-3 text-3xl font-bold">Modern Psychology</p>
        <p className="pt-5">Designation</p>
        <button className="bg-green-700 text-white px-4 py-2 rounded-3xl mt-5">
          Buy courese
        </button>
        <div className="flex justify-between mt-5 mb-5">
          <div>
            <img src={a} alt="" />
            <p>Start 20 April, 2021</p>
          </div>

          <div>
            <img src={b} alt="" />
            <p>Start 20 April, 2021</p>
          </div>
        </div>
      </div>
    </>
  );
}
