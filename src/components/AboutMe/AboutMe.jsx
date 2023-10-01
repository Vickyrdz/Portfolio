import { Divider } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import gif from "../../assets/Down Arrow.gif";
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion";


const AboutMe = () => {

    const {t} = useTranslation("aboutme");

    return (
        <motion.div 
                    id="aboutme"
                    className="text-white h-screen mt-[33rem] ml-2 mr-2 sm:h-screen sm:mt-[38.75rem] lg:mt-[23.75rem]">
            <div className="flex flex-row mb-2 sm:text-xl lg:text-2xl lg:ml-6 lg:mb-8">
                <p className="text-pink font-bold">#</p>
                <p className="text-white font-bold mr-2">{t("title")}</p>
                <Divider className="bg-white w-[10.563rem] flex self-center sm:w-[31.563rem] lg:ml-4 lg:w-[51.563rem] xl:w-[54rem] xl:ml-[2rem] xl:mb-5 xl:mt-5"/>
            </div>
            <div className="mt-6 lg:flex lg:flex-col lg:justify-center">
                <p className="lg:text-xl lg:w-[59.188rem] text-white lg:mt-[1rem] lg:self-center">
                    {t("text")}
                </p>
                <div className="flex flex-col mt-5 sm:mt-11 lg:flex lg:flex-row lg:mt-14 self-center">
                    <Divider className="hidden bg-white lg:flex lg:w-[9rem] lg: mr-2 lg:self-center xl:w-[6rem]"/>
                    <p className=" text-slowGray w-56 flex self-center sm:w-[22rem] xl:w-[26rem] xl:text-xl  font-bold ">{t("last")}</p>
                    <p className="text-pink font-bold xl:text-xl xl:mr-2 ">{t("contactme")}</p>
                    <Divider className="hidden bg-white lg:w-[9rem] lg:flex lg:ml-2 lg:self-center xl:w-[6rem]"/>
                </div>
            </div>
            <div className="flex justify-center mt-3 lg:mt-10">
               <Image className="w-20" src={gif}/>
            </div>
           
          
        </motion.div>
    )
}

export default AboutMe; 