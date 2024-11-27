"use client";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "./context/LanguageContext";

export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { translations, toggleLanguage } = useLanguage();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <header className="w-full bg-black text-white sm:p-0 px-2">
      <div className="container mx-auto flex flex-col items-center justify-center text-center  sm:h-[270px] h-[310px] gap-4">
        <div className="w-full sm:w-[70%] max-w-s p-4 pl-0 pr-0 rounded-lg flex justify-between items-center">
          <div className="flex sm:space-x-3 space-x-1 ">
            <Image
              src="/icons/logo.svg"
              alt="Logo Icon"
              width={67}
              height={23}
              className="mr-[0px]"
            />
            <Image
              src="/icons/div.svg"
              alt="Div Icon"
              width={0.5}
              height={24}
              className="mr-0"
            />
            <p className="font-inter font-normal text-[14px]  text-center">
              {translations.education}
            </p>
          </div>
          <div className="flex space-x-6">
            <div className="hidden md:flex items-center space-x-1">
              <Image
                src="/icons/world.svg"
                alt="TR Icon"
                width={20}
                height={20}
              />
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm   "
                id="menu-button"
                aria-expanded="true"
                onClick={toggleLanguage}
                aria-haspopup="true"
              >
                {translations.language}
                <svg
                  className="-mr-1 size-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    // fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    // clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex items-center">
              <a href="/login" className="text-white ">
                {translations.login}
              </a>
            </div>
            <button className="md:hidden text-white">
              <Image
                src="/icons/navbar.svg"
                alt="Menu Icon"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>

        <div className="w-full sm:w-[70%] max-w-s p-4 pl-0 rounded-lg">
          <p className="font-inter font-medium text-[28px] leading-[34px] tracking-[-0.25px] text-left text-white">
            {translations.header_title}
          </p>
        </div>

        <div className="w-full sm:w-[70%] max-w-s p-4 bg-[#414141] rounded-lg flex items-center">
          <Image
            src="/icons/search.svg"
            alt="Search Icon"
            width={24}
            height={24}
            className="mr-[10px]"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder={translations.search_placeholder}
            className="w-full bg-transparent text-white placeholder-white text-[16.88px] leading-[20.42px] font-inter font-medium border-none outline-none"
          />
        </div>
      </div>
    </header>
  );
}
