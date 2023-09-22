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
                    className="text-white h-screen mt-60 ">
            <div   className=" flex flex-row text-3xl mb-8">
                <p className="text-pink font-bold">#</p>
                <p className="text-white font-bold">{t("title")}</p>
                <Divider className="w-[54rem] bg-white ml-[2rem] mb-5 mt-5"/>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-2xl w-[59.188rem] text-white mt-[1rem] self-center">
                    {t("text")}
                </p>
                <div className="flex flex-row mt-14 self-center">
                    <Divider className="w-32 bg-white self-center"/>
                    <p className=" text-slowGray text-xl ml-5 font-bold mr-1">{t("last")}</p>
                    <p className="text-pink font-bold text-xl mr-5">{t("contactme")}</p>
                    <Divider className="w-32 bg-white self-center"/>
                </div>
            </div>
            <div className="flex justify-center mt-10">
               <Image className="h-28 " src={gif}/>
            </div>
           
          
        </motion.div>
    )
}

export default AboutMe; 