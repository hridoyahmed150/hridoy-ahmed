import React from "react";

export default function Home() {
  return (
    <>
      <div className="Home_container">
        <div className="!px-2 bg-[#FAF9F6] container md:!p-0 relative mx-auto">
          <div className="mb-0 text-white flex justify-center items-center bg-primary py-2 md:py-3 sticky top-0 z-[2] -mx-2 md:mx-0 md:px-0 px-4 left-0">
            <div className="md:inline-block">
              <a
                className="flex justify-center items-center gap-2"
                download=""
                href="/Khandaker_Habibul_Amin_Resume.pdf"
              >
                <h2 className="md:text-xl">Download My CV</h2>
                <img src="/download-img.png" alt="" className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div className="flex gap-6 flex-col md:flex-row rounded-xl">
            <div className="block md:hidden">
              <div>
                <h1 className="mt-2 text-4xl font-semibold">
                  Khandaker Habibul Amin
                </h1>
                <h4 className="mt-2 text-primary-green font-semibold text-xl">
                  Software Engineer, Frontend
                </h4>
                <p className="mt-3 text-base text-black">
                  I am an enthusiastic frontend engineer who likes to learn new
                  technologies and using these knowledges in problem solving by
                  writing more suitable and readable code.
                </p>
              </div>
            </div>
            <div className="xs:overflow-hidden text-white border-l xs:rounded-xl relative bg-[#313C4E] pt-10 pb-4 px-8 md:w-[300px] min-h-screen">
              <div className="absolute top-0 right-[10px] bottom-0 w-[10px] bg-[#449399]" />
              <div className="absolute top-0 right-0 bottom-0 w-[10px] bg-[#A1C9CC]" />
              <div className="flex flex-col gap-5 mb-14">
                <div className="flex gap-3 items-start text-sm">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height={22}
                    width={22}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="">khandakerhabibul@gmail.com</span>
                </div>
                <div className="flex gap-3 items-start text-sm">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={22}
                    width={22}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
                    <line x1={12} y1={18} x2="12.01" y2={18} />
                  </svg>
                  <span className="">+8801718509393</span>
                </div>
                <div className="flex gap-3 items-start text-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height={22}
                    width={22}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                    />
                    <circle
                      cx={256}
                      cy={192}
                      r={48}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                    />
                  </svg>
                  <span className="">Dhaka, Bangladesh</span>
                </div>
                <div className="flex gap-3 items-start text-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height={22}
                    width={22}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/khandaker-habibul-amin/"
                    target="_blank"
                    className=""
                  >
                    linkedin.com/in/khandaker-habibul-amin
                  </a>
                </div>
                <div className="flex gap-3 items-start text-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height={22}
                    width={22}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                  </svg>
                  <a
                    href="https://github.com/khandakerhabibul"
                    target="_blank"
                    className=""
                  >
                    github.com/khandakerhabibul
                  </a>
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
                      src="https://d.novoresume.com/yna_pub/svg/section/skills/a-1.svg"
                      alt=""
                      className="scale-[2]"
                    />
                  </div>
                  SKILLS
                </div>
                <div className="mt-6 flex gap-2 flex-wrap">
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    TypeScript
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    JavaScript
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    React.JS
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    Next.JS
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    React-Query
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    React-Hook-Form
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    Storybook
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    Shadcn
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    Tailwind-CSS
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    MUI
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    Redux
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    Redux-Toolkit
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    Zustand
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    Recharts
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    HTML
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    CSS
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    Git
                  </div>
                  <div className="text-white px-3 rounded text-sm py-1 font-medium bg-[#449399]">
                    REST API
                  </div>
                </div>
              </div>
              <div className="mb-10 relative">
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
                      src="https://d.novoresume.com/yna_pub/svg/section/skills/a-1.svg"
                      alt=""
                      className="scale-[2]"
                    />
                  </div>
                  Education
                </div>
                <div className="absolute bg-white w-[1px] h-[38px] top-8 left-[16px]" />
                <div className="absolute bg-white w-[1px] h-[90px] top-[78px] left-[16px]" />
                <div className="mt-6 pl-[11px] flex-col flex gap-6 flex-wrap">
                  <div className="flex w-full gap-4">
                    <div className="bg-white mt-2 w-3 h-3 rounded-full" />
                    <div className="">
                      <h3 className="mb-1">M.Sc. in CSE</h3>
                      <p className="text-sm mb-1">Jahangirnagar University</p>
                      <p className="text-xs">
                        <i>04/2021 - 06/2022</i>
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-4">
                    <div className="bg-white mt-2 w-3 h-3 rounded-full" />
                    <div className="">
                      <h3 className="mb-1">B.Sc. in CSE</h3>
                      <p className="text-sm mb-1">Brac University</p>
                      <p className="text-xs">
                        <i>01/2016 - 04/2020</i>
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
                  <h1 className="mt-2 text-4xl font-semibold">
                    Khandaker Habibul Amin
                  </h1>
                  <h4 className="mt-2 text-primary-green font-semibold text-xl">
                    Software Engineer, Frontend
                  </h4>
                  <p className="mt-3 text-base text-black">
                    I am an enthusiastic frontend engineer who likes to learn
                    new technologies and using these knowledges in problem
                    solving by writing more suitable and readable code.
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
                    <img
                      src="https://d.novoresume.com/yna_pub/svg/section/work/white.svg"
                      alt=""
                      className="scale-[2]"
                    />
                  </div>
                  <div className="flex md:items-center flex-col md:flex-row">
                    WORK EXPERIENCE
                    <span className="text-primary-green font-semibold">
                      {" "}
                      {/* */}( 4 years+ )
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="mt-4 pl-[11px] flex-col flex gap-3 flex-wrap">
                    <div className="flex w-full gap-6">
                      <div className="bg-primary-green mt-2 w-3 h-3 rounded-full" />
                      <div className="hidden desktop-view:block absolute bg-primary w-[1px] h-[18px] -top-4 left-[16px]" />
                      <div className="hidden desktop-view:block absolute bg-primary w-[1px] h-[400px] top-[26px] left-[16px]" />
                      <div className="w-full">
                        <div className="w-full mb-2">
                          <div className="flex flex-col mb-2 md:mb-0 md:flex-row w-full gap-1 justify-between md:items-center">
                            <div className="flex items-center gap-2">
                              <h2 className="text-lg font-semibold text-black">
                                Zapro.ai
                              </h2>{" "}
                              <a href="https://zapro.ai/" target="_blank">
                                <img
                                  src="https://d.novoresume.com/yna_pub/svg/hyperlink/hyperlink/b-1.svg"
                                  alt=""
                                  className="h-4 w-4"
                                />
                              </a>
                            </div>
                            <div>
                              <div className="text-white bg-primary inline-block px-2 py-1 rounded text-xs">
                                Remote
                              </div>
                            </div>
                          </div>
                          <p className="text-black font-semibold">
                            Software Engineer Frontend
                          </p>
                          <div className="flex my-1 w-full justify-between items-center">
                            <p className="italic text-primary-green text-sm">
                              07/2023 - Present
                            </p>
                            <p className="italic text-primary-green text-sm">
                              Bengaluru, Karnataka, India
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
                    <div className="flex w-full gap-6">
                      <div className="bg-primary-green mt-2 w-3 h-3 rounded-full" />
                      <div className="hidden desktop-view:block absolute bg-primary w-[1px] h-[350px] top-[457px] left-[16px]" />
                      <div className="w-full">
                        <div className="w-full mb-2">
                          <div className="flex flex-col mb-2 md:mb-0 md:flex-row w-full gap-1 justify-between md:items-center">
                            <div className="flex items-center gap-2">
                              <h2 className="text-lg font-semibold text-black">
                                10 Minute School
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
                              06/2022 - 07/2023
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
                                  Worked on{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    Teacher Studio Live Streaming V2
                                  </span>
                                  , used{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    AWS Chime SDK, Next.JS, Zustand &amp;
                                    Tailwind CSS
                                  </span>
                                  . It is being used by teachers{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    to teach students
                                  </span>
                                  .
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  Created a{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    chat web application
                                  </span>{" "}
                                  for teachers to connect with students which is
                                  helping around{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    8 lac (approx) students
                                  </span>{" "}
                                  to solve their problem, integrated Pubnub's
                                  chat service.
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  Designed a{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    dynamic billing service that serves in
                                    Android &amp; IOS app web view
                                  </span>
                                  , as well as serving the Web App purchase
                                  purpose, is being used by almost{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    6 lac users
                                  </span>{" "}
                                  per day to buy courses.
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  Created a module for creating MCQ &amp; CQ
                                  questions for all types of{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    Exam Service in 10MS (including IELTS
                                    Preparation Exam)
                                  </span>
                                  , used{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    SWR with Next.JS
                                  </span>{" "}
                                  for data fetching.
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  Developed{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    custom hooks for accessing generic UIs &amp;
                                    functions
                                  </span>
                                  , and created{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    reusable components with the help of
                                    Tailwind CSS
                                  </span>
                                  .
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  Worked on{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    10MS version 2 web in Next.js
                                  </span>
                                  , and optimizing its performance.
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full gap-6">
                      <div className="bg-primary-green mt-2 w-3 h-3 rounded-full" />
                      <div className="hidden desktop-view:block absolute bg-primary w-[1px] h-[323px] top-[837px] left-[16px]" />
                      <div className="w-full">
                        <div className="w-full mb-2">
                          <div className="flex flex-col mb-2 md:mb-0 md:flex-row w-full gap-1 justify-between md:items-center">
                            <div className="flex items-center gap-2">
                              <h2 className="text-lg font-semibold text-black">
                                Beanstalkedu Services Pvt. Ltd.
                              </h2>{" "}
                              <a
                                href="https://beanstalkedu.com/"
                                target="_blank"
                              >
                                <img
                                  src="https://d.novoresume.com/yna_pub/svg/hyperlink/hyperlink/b-1.svg"
                                  alt=""
                                  className="h-4 w-4"
                                />
                              </a>
                            </div>
                            <div>
                              <div className="text-white bg-primary inline-block px-2 py-1 rounded text-xs">
                                Remote
                              </div>
                            </div>
                          </div>
                          <p className="text-black font-semibold">
                            Software Engineer Frontend
                          </p>
                          <div className="flex my-1 w-full justify-between items-center">
                            <p className="italic text-primary-green text-sm">
                              04/2021 - 05/2022
                            </p>
                            <p className="italic text-primary-green text-sm">
                              Kolkata, India
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
                                  <span
                                    style={{
                                      fontWeight: 700,
                                      textDecoration: "underline",
                                      textUnderlineOffset: 3,
                                    }}
                                  >
                                    BuzzApp Web
                                  </span>{" "}
                                  -{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    School management ERP solution
                                  </span>{" "}
                                  enriched with creating{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    dynamic admission form generation
                                  </span>{" "}
                                  to build your own{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    custom PWA
                                  </span>{" "}
                                  for each school with just few clicks. Buzzapp
                                  web is the main admin panel for school
                                  management. Used{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    React.JS, Redux-toolkit, Recharts &amp;
                                    Material-UI
                                  </span>
                                  .{" "}
                                  <a
                                    href="https://app.buzzapp.tech/signin"
                                    target="_blank"
                                    style={{
                                      color: "#449399",
                                      textDecoration: "underline",
                                      textUnderlineOffset: 3,
                                    }}
                                  >
                                    Go to website
                                  </a>
                                  ,{" "}
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  <span
                                    style={{
                                      fontWeight: 700,
                                      textDecoration: "underline",
                                      textUnderlineOffset: 3,
                                    }}
                                  >
                                    Custom PWA
                                  </span>{" "}
                                  - Created custom{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    PWA
                                  </span>{" "}
                                  which is integrated in Buzzapp web. It is a{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    template based PWA
                                  </span>
                                  . Contents of this PWA will be decided from
                                  Buzzapp web. Used{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    Next.JS and Material-UI
                                  </span>
                                  .
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  <span
                                    style={{
                                      fontWeight: 700,
                                      textDecoration: "underline",
                                      textUnderlineOffset: 3,
                                    }}
                                  >
                                    Parent &amp; School Marketing Website
                                  </span>{" "}
                                  - Created 2 marketing websites (Parent and
                                  School), one for Buzzapp-web and another for
                                  Buzzapp Mobile App. Here anyone can search
                                  school and get all info for admission and
                                  easily one can apply for that school as a
                                  student. Used{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    Next.js and MUI
                                  </span>
                                  .{" "}
                                  <a
                                    href="https://buzzapp.app/"
                                    target="_blank"
                                    style={{
                                      color: "#449399",
                                      textDecoration: "underline",
                                      textUnderlineOffset: 3,
                                    }}
                                  >
                                    Parent Marketing website
                                  </a>
                                  ,{" "}
                                  <a
                                    href="https://buzzapp.tech/"
                                    target="_blank"
                                    style={{
                                      color: "#449399",
                                      textDecoration: "underline",
                                      textUnderlineOffset: 3,
                                    }}
                                  >
                                    School Marketing website
                                  </a>
                                </span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span style={{ fontSize: 14 }}>
                                  <span
                                    style={{
                                      fontWeight: 700,
                                      textDecoration: "underline",
                                      textUnderlineOffset: 3,
                                    }}
                                  >
                                    Buzz Control Center
                                  </span>{" "}
                                  - Admin panel for the company to all of our
                                  webapps. Used{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    React.JS, Redux-toolkit &amp; MUI
                                  </span>{" "}
                                  here.{" "}
                                  <a
                                    href="https://bcc.buzzapp.tech/signin"
                                    target="_blank"
                                    style={{
                                      color: "#449399",
                                      textDecoration: "underline",
                                      textUnderlineOffset: 3,
                                    }}
                                  >
                                    Go to website
                                  </a>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full gap-6">
                      <div className="bg-primary-green mt-2 w-3 h-3 rounded-full" />
                      <div className="hidden desktop-view:block absolute bg-primary w-[1px] h-[123px] bottom-[0px] left-[16px]" />
                      <div className="w-full">
                        <div className="w-full mb-2">
                          <div className="flex flex-col mb-2 md:mb-0 md:flex-row w-full gap-1 justify-between md:items-center">
                            <div className="flex items-center gap-2">
                              <h2 className="text-lg font-semibold text-black">
                                Brotecs Technologies Ltd.
                              </h2>{" "}
                              <a
                                href="https://www.brotecs.com/"
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
                          <p className="text-black font-semibold">Programmer</p>
                          <div className="flex my-1 w-full justify-between items-center">
                            <p className="italic text-primary-green text-sm">
                              08/2020 - 03/2021
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
                                  Worked on{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    CloudShrink
                                  </span>{" "}
                                  which is{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    optimizing cloud cost
                                  </span>
                                  . Used{" "}
                                  <span
                                    style={{ fontWeight: 700, color: "#000" }}
                                  >
                                    Next.JS, React-Bootstrap &amp; Recharts
                                  </span>{" "}
                                  ( for showing interactive charts &amp; graphs
                                  ).
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
