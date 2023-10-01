import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Navbar, NavbarMenu, Link, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";



const NavBar = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "home",
      to: "#home", 
    },
    {
      label: "projects",
      to: '#projects'
    },
    {
      label: "aboutme",
      to: "#abotme", 
    },
    {
      label: "contactme",
      to: "#contacme", 
    }
  ];

  const { t } = useTranslation(["navbar"]);

  return (
    <Navbar aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      shouldHideOnScroll className='xl:bg-fixed bg-black xl:h-20 xl:w-full xl:flex '>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden text-white "
      />
      <NavbarMenu className="bg-black h-[11.625rem]">
        {menuItems.map((item, index) => {
          return (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <p
                className="w-full text-white bg-black"
                size="lg"
              >
                {t(item.label)}
              </p>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
      <div className="flex items-center gap-1 mr-1">
        <img className='h-8 xl:self-center xl:h-9' src="data:image/png;base64,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" />
        <p className='text-xs
          lg:flex lg:flex-auto lg:text-base xl:ml-2 font-bold xl:text-base xl:h-20 xl:w-60 xl:flex xl:items-center text-white'>
          MyPortfolio
        </p>
      </div>
      <div className='gap-10 hidden sm:hidden md:flex xl:text-base xl:w-full font-bold xl:h-20 xl:items-center xl:justify-end xl:mr-5'>
        <div className='flex'>
          <p className='text-pink lg:self-center'>#</p>
          <Link href="home">
            <p className='text-white'>{t("home")}</p>
          </Link>
        </div>
        <div className='flex'>
          <p className='text-pink lg:self-center'>#</p>
          <Link href="#projects">
            <p className='text-white'>{t("projects")}
            </p>
          </Link>
        </div>

        <div className='flex'>
          <p className='text-pink lg:self-center'>#</p>
          <Link href="#aboutme">
            <p className='text-white'>
              {t("aboutme")}
            </p>
          </Link>
        </div>
        <div className='flex'>
          <p className='text-pink lg:self-center'>#</p>
          <Link href="#contactme">
            <p className='text-white'>
              {t("contactme")}
            </p>
          </Link>
        </div>

      </div>
      <div className="flex gap-1 xl:ml-3 xl:self-center">
        <button className="xl:p-1" onClick={() => i18next.changeLanguage("es")}><img className="w-7 h-[1.875rem] lg:w-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVR4nO2YuRHAQAgDlbkZ+s8pRLXI6Y0bwNi7M+QIBPdIAAAAX8ClbAohoOhAsNDJtCXMENfyNZq+simEgKYDwUIn05YIQ9zzVQ1rtOcrGw6y3hF6Mp1Qfi/AL7gim1+JWvyg8QuSMgJqvrLGQrV0iAEAALSQG87JQyXPr+IVAAAAAElFTkSuQmCC" /></button>
        <button className="xl:p-1 " onClick={() => i18next.changeLanguage("en")}><img className="w-7 h-[1.875rem] after:lg:w-[2.313rem]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO1XC1NTRxTmT/VhrSD4oCNUHorWWrBVKWilIOoMFTClQxkqLyFl2lrbTm07aNGCTAiPEuRtlBbCI4iERwLkYS4JIY+bEEi+zm7ITa4EpAIzdJpv5szcubt79jt7ds9+GxISRBBBBBFESHWtIrlviJnxWvsjzcQHn7SJQmNF1S+zrPwnkv5hw8zo9UrTZEoaS4x8k3+kbSM+iKVl9zQ/6dMpR8tuGSdSL7Aded8WcKl5fK2izlRSBJfFAi/sjmX8dGcM+xMaEBZXv6YJivpof+PVLKh3vUaNfBOQtvXGEot8r5HOw8rlYM58SMfrYqPRVll7m0eQNGij3wHb1Ah/TM9acVEg3RaCnxX0QqtkYCotgnr3G9Ds2YUFYTncrA0PGpWlHMEa8dR1m7ge2kMH6QTM+RQsTU5wJN1uoL5lBodP/bklBE+cewjp33rYOzugi4nyzJmaDOe4gpuTRzAsTpRAonmu0sNUWsxFQ75JNF6YLU4If5AjPF78SgQPHGvAj1VjYKeUmMtIo321kftgvVsFuFzcPKpZC74o7UvnESQODp1swj3RFBwjI779EBMFtrWFl/Zn4yakXOn6VwQzcqVQTszBfOsmNKG7oX7rdRjzBHDNz3N+HYsr+/4Y2feihFUEvXYmsxPypwbYav+AZv9eOqnh8kUsazScs+VlNw2moEK2LsH40y1oapuFvbsLuiMxtF2f+D4WhwZ5Qff0PsfxlFa/FV+HILG98fUoKJfBOKWhkRLHmvA9dAXcTqcv7VbnmgQbWmdgnvYbHxEKyy8/k+i48YzBTudZvVf9CF4S9KSSaANZoXAAf8kY2KVSGHOvwpid5SHpcPBWIBDBJZUS8/l5dIyp6CssM3pfBlxuelC+vCELOC/hxBEkJwabhDEAwc2Ad4rbS6uqSJSbMV1MNEeQfG/WH+HkK9Q5ZSKv851ij3PKRP8dgu07PcUPdvohubRGmSn+ZggyuYE30Dkih1GQQ6NcEJbDZTGvSXDOwC9FRC0tVAo9q3QtG47BAeq/8OvB9cvMi4U64qiY3rk2dsnPuXnVPa1WMvj13viaBD8v7qNFeH5hkfND6ueL151BqaP9yOXw0pskLfsRJlWeVfGClbRAGxXpUR3nPoZjfJxec5EnGjd0F0cnNtP+LiKLVrA0M+0TDAcjqGCQDTE49Wl7YILvJjajrklFpRXnRKXCXPoFTnWQu7l/kEFSWvsrqZnky114qjDxgqeSK9ZzwPQfJcEul9NgjqdKEjmCFd8PZxEpxaWBZeleIakkKTUVFUKvYpBX0r9pPRixsn2sNv/tY+FEq/rtN7FQcQPimgFhwFNMI4o/7Iko6STsQ4N0ZYkU20pFHb+icngHUDEGJvn06jpICBIpZbiS6UnngXBYq+/imcLI6b7tepNk5EqpQPUtpwvWmvvozr95nyPYUfLbHSKlqHNBDszTWo9yPuJTzttFMCyuHvuOivHd7VEsOl2B6yB54k2eT7cNVzXpJZ1qRUKypG6jz8WsLXp2Ejub2dnQ3aubIk/f3+smznIEgwgiiCD+x/gHqa9QfhslI28AAAAASUVORK5CYII=" /></button>
      </div>
    </Navbar>
  );
};

export default NavBar;
