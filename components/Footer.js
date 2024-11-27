import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

function Footer() {
  const { translations } = useLanguage();

  return (
    <footer className="w-full bg-white text-white sm:p-0 px-2">
      <div className="container mx-auto flex flex-col items-center justify-center text-center  sm:h-[270px] h-[310px] gap-4">
        <Image
          src="/icons/footerlogo.svg"
          alt="Logo Icon"
          width={126}
          height={32}
        />
        <div className="hidden sm:flex w-full flex sm:w-[15%] justify-between sm:px-0 px-2 mt-1">
          <p className="text-[#6B7280] text-[14px]">
            {" "}
            {translations.footer_feedback}
          </p>
          <p className="text-[#6B7280] text-[14px]">
            {translations.footer_error}
          </p>
        </div>
        <div className="w-[50%] flex sm:w-[10%] justify-between sm:px-0 px-2 mt-1">
          <Image src="/icons/xicon.svg" alt="X Icon" width={16} height={16} />
          <Image
            src="/icons/instagram.svg"
            alt="İnstagram Icon"
            width={16}
            height={16}
          />
          <Image
            src="/icons/linkedin.svg"
            alt="Linkedin Icon"
            width={16}
            height={16}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
