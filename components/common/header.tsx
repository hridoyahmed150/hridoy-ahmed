import React from "react";
import { BsCloudDownloadFill } from "react-icons/bs";

export default function header() {
  return (
    <div className="mb-0 text-white flex justify-center items-center bg-[#989DA6] py-2 md:py-3 sticky top-0 z-[2] -mx-2 md:mx-0 md:px-0 px-4 left-0">
      {/* <div className="md:inline-block">
        <a
          className="flex justify-center items-center gap-2"
          download="hridoy-ahmed.pdf"
          href="/hridoy-ahmed.pdf"
        >
          <h2 className="md:text-xl">Download My CV</h2>
          <BsCloudDownloadFill className="w-6 h-6" />
        </a>
      </div> */}
    </div>
  );
}
