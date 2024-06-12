import React from "react";
import { BsCloudDownloadFill } from "react-icons/bs";

export default function header() {
  return (
    <>
      <a
        className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex justify-center items-center gap-2 rounded-sm"
        download="hridoy_ahmed.pdf"
        href="/hridoy_ahmed.pdf"
      >
        <div className="relative">
          <div className="text-white bg-[#449399] fixed md:p-3 w-[250px] top-1/2 z-[2] p-2 right-[-200px] hover:right-0 transition-all duration-300 ease-in-out rounded-sm">
            <div className="flex justify-start items-center gap-4">
              <BsCloudDownloadFill className="w-6 h-6" />
              <h2 className="md:text-xl">Download My CV</h2>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
