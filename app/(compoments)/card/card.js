import React from "react";

import Image from "next/image";

export default function Card(props) {
  return (
    <>
      <div className="max-w-[300px] hover:shadow-2xl border-2 mx-auto justify-center text-center py-5 px-3">
        <Image width={60} className="mx-auto" src={props.sr} alt="k" />
        <p className="pt-3 text-3xl">{props.title}</p>
        <p className="pt-4">Learn Anythings</p>
      </div>
    </>
  );
}
