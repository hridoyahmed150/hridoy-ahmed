import React from "react";
import Header from "components/common/header";
import { MdOutlineEmail } from "react-icons/md";

import { FaGraduationCap, FaMobileAlt } from "react-icons/fa";
import { IoLocationOutline, IoLogoGithub } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { TbMessageLanguage } from "react-icons/tb";
import { PiPhosphorLogoBold } from "react-icons/pi";

export default function Home() {
  const booletPoint = {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 22.2 22.2" style="enable-background:new 0 0 22.2 22.2;" xml:space="preserve" fill="%23c1c4ca"><g id="text"><path class="st0" d="M11.1,22.2c-1.5,0-2.9-0.6-3.9-1.6L1.6,15c-2.1-2.1-2.1-5.6,0-7.8c0,0,0,0,0,0l5.6-5.6c2.1-2.1,5.6-2.1,7.8,0 c0,0,0,0,0,0l5.6,5.6c2.1,2.1,2.1,5.6,0,7.8c0,0,0,0,0,0L15,20.6C13.9,21.6,12.5,22.2,11.1,22.2z M9.3,18.4c1,1,2.6,1,3.5,0 l5.6-5.6c1-1,1-2.5,0-3.5c0,0,0,0,0,0l-5.6-5.6c-1-1-2.6-1-3.5,0L3.7,9.3c-1,1-1,2.5,0,3.5c0,0,0,0,0,0L9.3,18.4z"/></g></svg>')`,
    backgroundSize: "12px 12px",
  };
  return (
    <>
      <div className="Home_container ">
        <div className="!px-2 bg-[#FAF9F6] container md:!p-0 relative mx-auto">
          <Header />
          <div className="flex gap-6 flex-col md:flex-row rounded-xl ">
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
            <div className="xs:overflow-hidden text-black xs:rounded-xl relative bg-[#FAF9F6] pt-10 pb-4 px-8 md:w-[312px] ">
              <div
                className="top-6 right-0 bottom-0 w-[2px] bg-[#A1C9CC] absolute h-[97%] hidden md:block"
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
                    Git
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    jQuery
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    Tailwind-CSS
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    Laravel
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    PHP
                  </div>

                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    HTML
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#989da6]">
                    CSS
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
                  EDUCATION
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
                <div className="flex justify-start items-center gap-4 font-bold text-xl">
                  <div>
                    <TbMessageLanguage className="scale-[1.1] w-6 h-6" />
                  </div>
                  LANGUAGES
                </div>
                <div className="mt-6 pl-10">
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
                <div className="flex justify-start items-center gap-4 font-bold text-xl">
                  <div>
                    <PiPhosphorLogoBold className="scale-[1.1] w-6 h-6" />
                  </div>
                  INTERESTS
                </div>
                <div className="mt-6 flex gap-2 flex-wrap">
                  <div className=" px-3 rounded text-sm py-1 bg-transparent border border-[#b2b2b2]">
                    Problem Solving
                  </div>
                  <div className=" px-3 rounded text-sm py-1 bg-transparent border border-[#b2b2b2]">
                    Traveling
                  </div>
                  <div className=" px-3 rounded text-sm py-1 bg-transparent border border-[#b2b2b2]">
                    Playing Video Games
                  </div>
                  <div className=" px-3 rounded text-sm py-1 bg-transparent border border-[#b2b2b2]">
                    Playing Football
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
                  <div className="rounded-full bg-[#313C4E] p-3 h-[35px] w-[35px]">
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
                    WORK EXPERIENCE{" "}
                    <span className="text-primary-green font-semibold pl-2">
                      {" "}
                      ( 5 years+ )
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="mt-4 pl-[11px] flex-col flex gap-3 flex-wrap">
                    <div className="flex w-full gap-6 relative">
                      <div className="bg-primary-green mt-2 w-3 h-3 rounded-full" />
                      <div
                        className="hidden md:block absolute  w-[1px] h-[18px] -top-4 left-[5px]"
                        style={{ backgroundColor: "rgb(193, 196, 202)" }}
                      />
                      <div
                        className="hidden md:block absolute  w-[1px] h-[640px] top-[26px] left-[5px]"
                        style={{ backgroundColor: "rgb(193, 196, 202)" }}
                      />
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
                          <ul className="list-disc marker:text-primary-green mt-4 space-y-2">
                            <li className="flex items-start">
                              <div
                                className="w-3 h-3 bg-no-repeat mr-2 mt-1.5"
                                style={booletPoint}
                              ></div>
                              <div className="w-full">
                                <span>
                                  Worked on{" "}
                                  <span className="text-black font-bold">
                                    10 Minute School
                                  </span>{" "}
                                  platform, using{" "}
                                  <span className="text-black font-bold">
                                    Angular
                                  </span>{" "}
                                  for course display, progress tracking, and
                                  certificates. Also collaborated on{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    Next.js{" "}
                                  </span>{" "}
                                  for managing landing page content, ensuring a
                                  seamless user experience.
                                </span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <div
                                className="w-3 h-3 bg-no-repeat mr-2 mt-1.5"
                                style={booletPoint}
                              ></div>
                              <div className="w-full">
                                <span>
                                  Implemented{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    Mixpanel{" "}
                                  </span>{" "}
                                  tracking within the 10 Minute School platform,
                                  enabling advanced{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    analytics{" "}
                                  </span>{" "}
                                  and user behavior{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    tracking
                                  </span>{" "}
                                  to enhance engagement, refine content
                                  strategies, and improve overall platform
                                  performance.
                                </span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <div
                                className="w-3 h-3 bg-no-repeat mr-2 mt-1.5"
                                style={booletPoint}
                              ></div>
                              <div className="w-full">
                                <span>
                                  Designed and developed the{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    Affiliation Program{" "}
                                  </span>
                                  website from scratch using Angular, ensuring a
                                  seamless user experience and modern interface.
                                </span>
                              </div>
                            </li>

                            <li className="flex items-start">
                              <div
                                className="w-3 h-3 bg-no-repeat mr-2 mt-1.5"
                                style={booletPoint}
                              ></div>
                              <div className="w-full">
                                <span>
                                  Developed a{" "}
                                  <span className="text-black font-bold">
                                    Progressive Web App (PWA){" "}
                                  </span>{" "}
                                  for the Affiliation Program website, enhancing
                                  user engagement and providing an app-like
                                  experience on mobile devices.
                                </span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <div
                                className="w-3 h-3 bg-no-repeat mr-2 mt-1.5"
                                style={booletPoint}
                              ></div>
                              <div className="w-full">
                                <span>
                                  Designed and developed a comprehensive{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    teacher dashboard{" "}
                                  </span>
                                  , enabling functionalities such as{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    exam creation{" "}
                                  </span>
                                  ,{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    class management{" "}
                                  </span>
                                  , teacher assignment, teacher assistant
                                  assignment, and doubt solver assignment,
                                  improving overall efficiency for educators.
                                </span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <div
                                className="w-3 h-3 bg-no-repeat mr-2 mt-1.5"
                                style={booletPoint}
                              ></div>
                              <div className="w-full">
                                <span>
                                  Developed an{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    advisor dashboard{" "}
                                  </span>{" "}
                                  enabling SMS communication, transaction
                                  monitoring, product exchange, extension, and
                                  <span className="text-black font-bold">
                                    {" "}
                                    payment validation{" "}
                                  </span>
                                  , optimizing advisor workflows for increased
                                  efficiency.
                                </span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <div
                                className="w-3 h-3 bg-no-repeat mr-2 mt-1.5"
                                style={booletPoint}
                              ></div>
                              <div className="w-full">
                                <span>
                                  Developed a{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    CMS{" "}
                                  </span>{" "}
                                  with{" "}
                                  <span className="text-black font-bold">
                                    Angular{" "}
                                  </span>{" "}
                                  and{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    Angular Material{" "}
                                  </span>{" "}
                                  for K12 and Skill Up sections, simplifying
                                  course, quizzes, and lessons management, and
                                  streamlining content updating and assignment
                                  processes for improved educational delivery.
                                </span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <div
                                className="w-3 h-3 bg-no-repeat mr-2 mt-1.5"
                                style={booletPoint}
                              ></div>
                              <div className="w-full">
                                <span>
                                  Developed a{" "}
                                  <span className="text-black font-bold">
                                    sales dashboard{" "}
                                  </span>{" "}
                                  using Angular,
                                  <span className="text-black font-bold">
                                    {" "}
                                    Chart.js{" "}
                                  </span>
                                  , and{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    Tailwind CSS{" "}
                                  </span>
                                  , showcasing sales, affiliate, and product
                                  reports, facilitating data-driven
                                  decision-making for enhanced business
                                  performance.
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full gap-6 relative">
                      <div className="bg-primary-green mt-2 w-3 h-3 rounded-full" />
                      <div
                        className="hidden md:block absolute  w-[1px] h-[200px] top-[26px] left-[5px]"
                        style={{ backgroundColor: "rgb(193, 196, 202)" }}
                      />
                      <div className="w-full">
                        <div className="w-full mb-2">
                          <div className="flex flex-col mb-2 md:mb-0 md:flex-row w-full gap-1 justify-between md:items-center">
                            <div className="flex items-center gap-2">
                              <h2 className="text-lg font-semibold text-black">
                                CLIP N TOUCH
                              </h2>{" "}
                              <a href="https://clipntouch.com/" target="_blank">
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
                              07/2018 - 11/2019
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
                          <ul className="list-disc marker:text-primary-green mt-4 space-y-2">
                            <li className="flex items-start">
                              <div
                                className="w-3 h-3 bg-no-repeat mr-2 mt-1.5"
                                style={booletPoint}
                              ></div>
                              <div className="w-full">
                                <span>
                                  Developed an{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    inventory management system{" "}
                                  </span>{" "}
                                  using{" "}
                                  <span className="text-black font-bold">
                                    {" "}
                                    AngularJS{" "}
                                  </span>
                                  , handling all aspects of the project from
                                  start to finish as the sole developer.
                                </span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <div
                                className="w-3 h-3 bg-no-repeat mr-2 mt-1.5"
                                style={booletPoint}
                              ></div>
                              <div className="w-full">
                                <span>
                                  Collaborated closely with team members to
                                  <span className="text-black font-bold">
                                    {" "}
                                    design{" "}
                                  </span>{" "}
                                  intuitive interfaces and implement robust
                                  features, fostering effective communication
                                  and continuous learning.
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
