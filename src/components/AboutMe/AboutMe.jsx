import { Divider } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import gif from "../../assets/Down Arrow.gif";
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion";


const AboutMe = () => {

    const {t} = useTranslation("aboutme");

    return (
        <motion.div initial={{ opacity: 0, y: 50, }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}   
                    id="aboutme"
                    className="text-white h-screen mt-[33rem] ml-2 mr-2">
            <div className="flex flex-row mb-2 xl:text-3xl xl:mb-8">
                <p className="text-pink font-bold">#</p>
                <p className="text-white font-bold mr-2">{t("title")}</p>
                <Divider className="w-[10.563rem] flex self-center xl:w-[54rem] bg-white xl:ml-[2rem] xl:mb-5 xl:mt-5"/>
            </div>
            <div className="mt-6 xl:flex xl:flex-col xl:justify-center">
                <p className="xl:text-2xl xl:w-[59.188rem] text-white xl:mt-[1rem] xl:self-center">
                    {t("text")}
                </p>
                <div className="flex flex-col mt-5 xl:mt-14 self-center">
                    <Divider className="hidden xl:w-32 bg-white xl:self-center"/>
                    <p className=" text-slowGray w-56 flex self-center xl:text-xl xl:ml-5 font-bold xl:mr-1">{t("last")}</p>
                    <p className="text-pink font-bold xl:text-xl xl:mr-5">{t("contactme")}</p>
                    <Divider className="hidden xl:w-32 bg-white xl:self-center"/>
                </div>
            </div>
            <div className="flex justify-center mt-3 xl:mt-10">
               <Image className="w-20 xl:h-28 " src={gif}/>
            </div>
           
          
        </motion.div>
    )
}

export default AboutMe; 