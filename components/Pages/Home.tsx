import React from "react";
import Header from "components/common/header";
import { MdOutlineEmail } from "react-icons/md";

import { FaGraduationCap, FaMobileAlt } from "react-icons/fa";
import { IoLocationOutline, IoLogoGithub } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <div className="Home_container ">
        <div className="!px-2 bg-white container md:!p-0 relative mx-auto">
          <Header />
          <div className="flex gap-6 flex-col md:flex-row rounded-xl">
            <div className="block md:hidden">
              <div>
                <h1 className="mt-2 text-4xl font-semibold">Hridoy Ahmed</h1>
                <h4 className="mt-2 text-primary-green font-semibold text-xl">
                  Software Engineer, Frontend
                </h4>
                <p className="mt-3 text-base text-black">
                  I am an enthusiastic frontend engineer with a passion for
                  learning new technologies and applying this knowledge to solve
                  problems. I strive to write clean, suitable, and readable code
                  to enhance user experiences and improve application
                  performance.
                </p>
              </div>
            </div>
            <div className="xs:overflow-hidden text-black xs:rounded-xl relative bg-[#fff] pt-10 pb-4 px-8 md:w-[312px] min-h-screen">
              <div
                className="top-6 right-0 bottom-0 w-[2px] bg-[#A1C9CC] absolute h-[97%]"
                style={{ backgroundColor: "rgb(193, 196, 202)" }}
              >
                <div
                  className="w-4 h-4 -left-[7px] background-size-[16px 16px] absolute -top-2 "
                  style={{
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="rgba(193, 196, 202,1)" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" xml:space="preserve"><g id="text">	<path class="st0" d="M15.3,1.2l8.5,8.5c1.6,1.6,1.6,4.1,0,5.7l-8.5,8.5c-1.6,1.6-4.1,1.6-5.7,0l-8.5-8.5c-1.6-1.6-1.6-4.1,0-5.7 l8.5-8.5C11.2-0.4,13.8-0.4,15.3,1.2z"/></g></svg>')`,
                  }}
                />
                <div
                  className="w-4 h-4  -left-[7px] background-size-[16px 16px] absolute -bottom-2 "
                  style={{
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="rgba(193, 196, 202,1)" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" xml:space="preserve"><g id="text">	<path class="st0" d="M15.3,1.2l8.5,8.5c1.6,1.6,1.6,4.1,0,5.7l-8.5,8.5c-1.6,1.6-4.1,1.6-5.7,0l-8.5-8.5c-1.6-1.6-1.6-4.1,0-5.7 l8.5-8.5C11.2-0.4,13.8-0.4,15.3,1.2z"/></g></svg>')`,
                  }}
                />
              </div>
              <div className="flex flex-col gap-5 mb-14">
                <div className="flex gap-3 justify-start items-center text-sm">
                  <MdOutlineEmail className="w-5 h-5" />

                  <span className="">hridoyahmed150@gmail.com</span>
                </div>
                <div className="flex justify-start gap-3 items-start text-sm">
                  <FaMobileAlt className="w-5 h-5" />

                  <span className="">+8801681101130</span>
                </div>
                <div className="flex justify-start gap-3 items-start text-sm">
                  <IoLocationOutline className="w-5 h-5" />

                  <span className="">Dhaka, Bangladesh</span>
                </div>
                <div className="flex justify-start gap-3 items-start text-sm">
                  <CiLinkedin className="w-5 h-5" />

                  <a
                    href="https://www.linkedin.com/in/hridoyahmed150/"
                    target="_blank"
                    className=""
                  >
                    linkedin.com/in/hridoyahmed150
                  </a>
                </div>
                <div className="flex justify-start gap-3 items-start text-sm">
                  <IoLogoGithub className="w-5 h-5" />

                  <a
                    href="https://github.com/hridoyahmed150"
                    target="_blank"
                    className=""
                  >
                    github.com/hridoyahmed150
                  </a>
                </div>
              </div>
              <div className="mb-10">
                <div className="flex justify-start items-center gap-4 font-bold text-2xl">
                  <div className="rounded-full">
                    <GiSkills className="scale-[1.1]" />
                  </div>
                  SKILLS
                </div>
                <div className="mt-6 flex gap-2 flex-wrap">
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    JavaScript
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    TypeScript
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    Angular
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    Angular Material
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    React.JS
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    Next.JS
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    React-Hook-Form
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    Tailwind-CSS
                  </div>

                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    HTML
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    CSS
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    Git
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    REST API
                  </div>
                </div>
              </div>
              <div className="mb-10 relative">
                <div className="flex justify-start items-center gap-4 font-bold text-xl">
                  <div className="rounded-full">
                    <FaGraduationCap className="scale-[1.1] w-6 h-6" />
                  </div>
                  Education
                </div>
                <div className="absolute bg-gray-500 w-[1px] h-[38px] top-6 left-[10px]" />
                <div className="absolute bg-gray-500 w-[1px] h-[90px] top-[72px] left-[10px]" />
                <div className="mt-6 pl-[5px] flex-col flex gap-6 flex-wrap">
                  <div className="flex w-full gap-4">
                    <div className="bg-gray-500 mt-2 w-3 h-3 rounded-full" />
                    <div className="">
                      <h3 className="mb-1">M.B.A</h3>
                      <p className="text-sm mb-1">GOVT. TOLARAM COLLEGE</p>
                      <p className="text-xs">
                        <i>06/2015 - 06/2017</i>
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-4">
                    <div className=" bg-gray-500 mt-2 w-3 h-3 rounded-full" />
                    <div className="">
                      <h3 className="mb-1">B.B.A</h3>
                      <p className="text-sm mb-1">T & T University College</p>
                      <p className="text-xs">
                        <i>06/2011 - 06/2015</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <div className="flex items-center gap-3 font-bold text-xl">
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: 12,
                      height: 35,
                      width: 35,
                    }}
                    className="rounded-full"
                  >
                    <img
                      src="https://d.novoresume.com/yna_pub/svg/section/lang/a-1.svg"
                      alt=""
                      className="scale-[2]"
                    />
                  </div>
                  LANGUAGES
                </div>
                <div className="mt-6">
                  <div className="mb-2">
                    <h3 className="mb-1">English</h3>
                    <p className="text-sm">
                      <i>Full Professional Proficiency</i>
                    </p>
                  </div>
                  <div className="">
                    <h3 className="mb-1">Bengali</h3>
                    <p className="text-sm">
                      <i>Native Proficiency</i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <div className="flex items-center gap-3 font-bold text-xl">
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: 12,
                      height: 35,
                      width: 35,
                    }}
                    className="rounded-full"
                  >
                    <img
                      src="https://d.novoresume.com/yna_pub/svg/section/interests/a-1.svg"
                      alt=""
                      className="scale-[2]"
                    />
                  </div>
                  INTERESTS
                </div>
                <div className="mt-6 flex gap-2 flex-wrap">
                  <div className="text-white px-3 rounded text-sm py-1 bg-transparent border border-white">
                    Problem Solving
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 bg-transparent border border-white">
                    Reading Books
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 bg-transparent border border-white">
                    Playing Video Games
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 bg-transparent border border-white">
                    History
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 bg-transparent border border-white">
                    Travel
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 pb-14 pr-6">
              <div className="hidden md:block">
                <div>
                  <h1 className="mt-2 text-4xl font-semibold">Hridoy Ahmed</h1>
                  <h4 className="mt-2 text-primary-green font-semibold text-xl">
                    Software Engineer, Frontend
                  </h4>
                  <p className="mt-3 text-base text-black">
                    I am an enthusiastic frontend engineer with a passion for
                    learning new technologies and applying this knowledge to
                    solve problems. I strive to write clean, suitable, and
                    readable code to enhance user experiences and improve
                    application performance.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 font-bold text-xl">
                  <div
                    style={{
                      backgroundColor: "#313C4E",
                      padding: 12,
                      height: 35,
                      width: 35,
                    }}
                    className="rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      className="scale-[2] w-[11px] h-[11px] fill-current"
                    >
                      <path
                        data-name="Path 2840"
                        d="m-16.734 22.909-.716-6.987a3.491 3.491 0 0 0-3.482-3.143h-5.937V9.5a3.5 3.5 0 0 0-3.5-3.5h-8.053a3.5 3.5 0 0 0-3.5 3.5v3.279h-5.937a3.491 3.491 0 0 0-3.482 3.143l-.716 6.987a3.488 3.488 0 0 0 1.474 3.214V38.5a3.5 3.5 0 0 0 3.5 3.5h25.376a3.5 3.5 0 0 0 3.5-3.5V26.123a3.49 3.49 0 0 0 1.473-3.214zM-38.922 9.5a.5.5 0 0 1 .5-.5h8.053a.5.5 0 0 1 .5.5v3.279h-9.053zm-9.434 6.728a.5.5 0 0 1 .5-.449h26.927a.5.5 0 0 1 .5.449l.715 6.985a.5.5 0 0 1-.394.541l-9.231 1.946v-1.4a3.5 3.5 0 0 0-3.5-3.5h-3.113a3.5 3.5 0 0 0-3.5 3.5v1.4l-9.225-1.95a.5.5 0 0 1-.4-.541zm16.017 8.08v5.779a.5.5 0 0 1-.5.5h-3.113a.5.5 0 0 1-.5-.5v-5.779a.5.5 0 0 1 .5-.5h3.113a.5.5 0 0 1 .5.5zM-21.707 39h-25.376a.5.5 0 0 1-.5-.5V27.053l8.131 1.719v1.315a3.5 3.5 0 0 0 3.5 3.5h3.113a3.5 3.5 0 0 0 3.5-3.5v-1.315l8.132-1.72V38.5a.5.5 0 0 1-.5.5z"
                        style={{ fill: "#fff" }}
                        transform="translate(58.395)"
                      />
                    </svg>
                  </div>
                  <div className="flex md:items-center flex-col md:flex-row">
                    WORK EXPERIENCE
                    <span className="text-primary-green font-semibold">
                      {" "}
                      ( 5 years+ )
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="mt-4 pl-[11px] flex-col flex gap-3 flex-wrap">
                    <div className="flex w-full gap-6">
                      <div className="bg-primary-green mt-2 w-3 h-3 rounded-full" />
                      <div className="hidden md:block absolute bg-primary w-[1px] h-[18px] -top-4 left-[16px]" />
                      <div className="hidden md:block absolute bg-primary w-[1px] h-[400px] top-[26px] left-[16px]" />
                      <div className="w-full">
                        <div className="w-full mb-2">
                          <div className="flex flex-col mb-2 md:mb-0 md:flex-row w-full gap-1 justify-between md:items-center">
                            <div className="flex items-center gap-2">
                              <h2 className="text-lg font-semibold text-black">
                                10 minute school
                              </h2>{" "}
                              <a
                                href="https://10minuteschool.com/"
                                target="_blank"
                              >
                                <img
                                  src="https://d.novoresume.com/yna_pub/svg/hyperlink/hyperlink/b-1.svg"
                                  alt=""
                                  className="h-4 w-4"
                                />
                              </a>
                            </div>
                          </div>
                          <p className="text-black font-semibold">
                            Software Engineer Frontend
                          </p>
                          <div className="flex my-1 w-full justify-between items-center">
                            <p className="italic text-primary-green text-sm">
                              11/2019 - Present
                            </p>
                            <p className="italic text-primary-green text-sm">
                              Dhaka, Bangladesh
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="italic text-primary-green text-sm">
                            Achievements/Tasks
                          </p>
                          <ul className="list-disc marker:text-primary-green">
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  Created in house UI library from scratch for
                                  having better developer experience, used{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    Storybook
                                  </span>{" "}
                                  for documentation and{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    Shadcn &amp; Tailwind CSS
                                  </span>{" "}
                                  for styling the components. Published the
                                  package in{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    Github Packages
                                  </span>{" "}
                                  for better version control and easy to use in
                                  other projects.
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  Developing a robust procurement system using{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    React.js
                                  </span>{" "}
                                  and enforced strict{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    TypeScript with Zod schema validation and
                                    React-Query
                                  </span>{" "}
                                  for enhanced code quality.
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  In this procurement system it is totally
                                  dynamic form depended site. Using{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    React-Hook-Form with Zod schema
                                  </span>{" "}
                                  for achieving perfect validation in all{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    dynamic forms
                                  </span>
                                  .
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  Created dynamic expense and integration module
                                  that enables the creation of versatile expense
                                  categories usable across different areas of
                                  the platform for expense.
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  Integrated the{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    Contentful headless CMS
                                  </span>{" "}
                                  to enable efficient content management.
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  Designed a fully dynamic website experience
                                  using{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    Astro and Tailwind CSS
                                  </span>
                                  , where content such as blogs, text, buttons,
                                  images etc. are totally driven by the{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    Contentful CMS
                                  </span>
                                  . This website is so dynamic that it has
                                  almost near about{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    5-6% developer dependency
                                  </span>{" "}
                                  , everything is handing by content team using
                                  Contentful CMS.
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
