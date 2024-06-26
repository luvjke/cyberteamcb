import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLink } from "../../types/globalTypes";
import SpoilerBlock from "./spoilerBlock";

import IconTwitch from "../icons-svg/IconTwitch";
import IconDiscord from "../icons-svg/IconDiscord";
import IconVk from "../icons-svg/IconVk";
import IconTelegram from "../icons-svg/IconTelegram";
import LogoFooter from "/public/icons/halfLogoFooter.svg";

import { linkSocial1 } from "../../testData/staticData";
import { navLinks as navList } from "../../utils/headerData";

const Info = () => {
  return (
    <>
      <div className="flex flex-col self-center">
        <Image
          className="z-20"
          src="/icons/logo.svg"
          alt="logo"
          width={60}
          height={60}
        />
        <span className="text-purpule font-heading text-[20px] block text-center">
          CyberDOGS
        </span>
      </div>
      <p className="text-[#6B6B72] text-[16px]">CyberDogs SGTU</p>
    </>
  );
};

const Contacts = ({}) => {
  const [isOpenContacts, setIsOpenContacts] = useState<boolean>(false);

  return (
    <>
      <h5
        className="text-purpule text-[24px] font-heading mb-2"
        onClick={() => setIsOpenContacts(!isOpenContacts)}
      >
        соц. сети
      </h5>
      <SpoilerBlock isShow={isOpenContacts}>
        <div className="grid grid-cols-2 gap-5">
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer">
            <a
              className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointe group"
              href={linkSocial1.twitch}
              target="_blank"
              rel="noreferrer"
            >
              <IconTwitch className="group-hover:fill-purpule" />
            </a>
          </div>
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer">
            <a
              className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer group"
              href={linkSocial1.discrod}
              target="_blank"
              rel="noreferrer"
            >
              <IconDiscord className="group-hover:fill-purpule" />
            </a>
          </div>
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer">
            <a
              className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer group"
              href={linkSocial1.vk}
              target="_blank"
              rel="noreferrer"
            >
              <IconVk className="group-hover:fill-purpule" />
            </a>
          </div>
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer">
            <a
              className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer group"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <IconTelegram className="group-hover:fill-purpule" />
            </a>
          </div>
        </div>
      </SpoilerBlock>
    </>
  );
};

const Navigation = ({ navList }: any) => {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

  return (
    <>
      <h5
        className="text-purpule text-[24px] font-heading mb-0"
        onClick={() => setIsOpenNav(!isOpenNav)}
      >
        Сайт
      </h5>
      <SpoilerBlock isShow={isOpenNav}>
        <ul className="mb-2">
          {navList.map((item: navLink) => (
            <li
              key={`link-${item.name}`}
              className="font-heading text-[20px] hover:text-purpule"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </SpoilerBlock>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-main-bg overflow-y-scroll bottom-0 z-[-1] fixed h-[372px]">
      <div className="relative h-full">
        <div className="container mx-auto max-w-[1360px] px-5 pb-[70px]">
          <div
            className="flex flex-col gap-0
            sm:flex-row sm:gap-[45px] sm:flex-wrap
            "
          >
            <div
              className="order-3 self-center w-full 
              lg:order-1 lg:self-start lg:mr-[140px] lg:max-w-[215px]
              "
            >
              <Info />
            </div>
            <nav className="order-1">
              <Navigation navList={navList} />
            </nav>
            <div className="order-2 mb-10 basis-1/3 max-w-fit">
              <Contacts />
            </div>
          </div>
          <div className="right-0 bottom-0 -z-[1] hidden xl:block xl:absolute">
            <Image src={LogoFooter} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
