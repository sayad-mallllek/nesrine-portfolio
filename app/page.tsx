"use client";
import { getScreenWidth } from "../Components/getScreenWidth";
import { useState, useEffect } from "react";
import Flexbox from "@/Components/Flexbox";
import Image from "next/image";
import Card from "../Components/Card";
import Devices from "../public/Images/Header.png";
import Comic from "../public/Images/project1.png";
import Shater from "../public/Images/project2.png";
import LIU from "../public/Images/project3.png";
import Caffe from "../public/Images/project4.png";
import Store from "../public/Images/project5.png";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(getScreenWidth());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMobile = () => {
      screenWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    };
    handleMobile();
  }, [screenWidth]);

  return (
    <main
      className={`flex min-h-screen flex-col items-start font-sans ${
        isMobile ? "px-4 gap-4" : "px-24 gap-6"
      } overflow-visible`}
    >
      <Flexbox align="center" justify="between" className="w-full py-7">
        <span className="font-bold">Portfolio</span>
      </Flexbox>

      <Flexbox justify="between" className="w-full">
        <Flexbox
          column
          align="start"
          className={`gap-4 ${isMobile ? "w-full" : "w-[40%]"} `}
        >
          <span className="text-pink">UI/UX Designer</span>
          <h1
            className={`font-bold text-lightblack ${
              isMobile
                ? "text-[3rem] leading-[3.5rem] "
                : "text-[4rem] leading-[4.5rem]"
            }`}
          >
            Hello, my
            <br /> name is <span className="text-pink">Nesrine Salameh</span>
          </h1>
          <p className={`text-grey ${isMobile ? "w-[20rem]" : "w-[27rem]"}`}>
            I am passionate about crafting intuitive and visually engaging user
            interfaces and user experiences, earn more knowledge & sharpen my
            skills.
          </p>
        </Flexbox>
        {!isMobile ? (
          <Image src={Devices} alt="devices" height={400} quality={100} />
        ) : (
          ""
        )}
      </Flexbox>

      <Flexbox column align="center" className="w-full">
        <Flexbox
          justify="center"
          className={`w-full ${isMobile ? "mt-6 py-4" : "mt-12 py-7"}`}
        >
          <span className="justify-center font-bold text-lightblack text-[2rem] projects">
            Projects
          </span>
        </Flexbox>
        <Flexbox justify="center" className="flex-wrap gap-4 py-10">
          <Card color={"bg-project1"} image={Comic} isMobile={isMobile} />
          <Card color={"bg-project2"} image={LIU} isMobile={isMobile} />
          <Card color={"bg-project3"} image={Shater} isMobile={isMobile} />
          <Card color={"bg-project4"} image={Caffe} isMobile={isMobile} />
          <Card color={"bg-project5"} image={Store} isMobile={isMobile} />
        </Flexbox>
      </Flexbox>
      <Flexbox
        column
        justify="center"
        align="center"
        className="w-full gap-8 mt-4 py-10"
      >
        <h1 className="text-4xl font-bold text-center text-lightblack">
          Hello again! Intrested?
        </h1>
        <button
          className={`bg-transparent rounded-xl border-solid border-lightblack text-lightblack font-bold border-2 p-2 ${
            isMobile ? "text-xs" : "text-sm"
          }`}
        >
          <a href="mailto:nesrinsalameh12@gmail.com">Send me an email!</a>
        </button>
      </Flexbox>
    </main>
  );
}
