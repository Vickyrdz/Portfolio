import { useState } from "react";
import projectDogs from "../../assets/ProjectDogs.png";
import projectPig from "../../assets/projectPigCommander.png";
import {Divider} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion";



const Projects = () => {

    const {t} = useTranslation("projects");


    const [isOpenDogs, setIsOpenDogs] = useState(false); 
    const [isOpenPig, setIsOpenPig] = useState(false); 

    const paragraphsStyles = {
        WebkitLineClamp: 4, 
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        display: '-webkit-box',
    }


    return (
        <motion.div initial={{ opacity: 0, y: 50, }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}  
                    id="projects" 
                    className=" text-white h-screen mt-10 ml-2 mr-2">
            <div className="flex flex-row sm:text-xl lg:text-2xl lg:ml-6">
                <p className="text-pink font-bold">#</p>
                <p className="text-white font-bold">{t("title")}</p>
            </div>
            <div className="lg:flex lg:gap-6 lg:place-content-center lg:mt-[3rem]">
                <div className="mt-6">
                    <div className="flex mt-1 justify-center sm:mb-2 lg:justify-start lg:flex">

                        <Divider className="md:hidden w-[4.5rem] bg-slowGray flex self-center mr-2 sm:w-60"/>
                        <h1 className="text-white sm:text-base sm:font-bold lg:font-medium lg:text-xl lg:flex lg:mb-2">The Dogs App</h1>
                        <Divider className="visible md:hidden w-[4.5rem] bg-slowGray flex self-center ml-2 sm:w-60"/>
 
                        <Divider className="hidden lg:flex lg:my-4 lg:bg-slowGray lg:w-60 lg:ml-3"/>
                    </div>
                    <img className="lg:h-[16rem] lg:w-[24.625rem] rounded-3xl" src={projectDogs} alt="" />
                    <div className="flex justify-center">
                        <Divider className="lg:my-4 hidden bg-slowGray lg:flex  lg:w-[19rem] lg:mt-[1.75rem] " />
                        
                        <Divider className="bg-slowGray md:hidden flex w-[5.125rem] self-center mt-[0.438rem] sm:w-[16rem]" />
                        <button className="bg-green-700 text-xs rounded-lg p-1 mt-2 ml-2 mr-2 lg:ml-4 font-bold pl-1 pr-1">
                            {t("seeitlive")}
                        </button> 
                        <Divider className="bg-slowGray md:hidden flex w-[5.125rem] self-center mt-[0.438rem] sm:w-[16rem]" />
                    </div>
                    
                    <p className="lg:w-[24rem] lg:mt-2 text-justify mt-3" style={isOpenDogs ? null : paragraphsStyles}>
                        <span className="text-orange-400 font-bold">{t("individual")} </span> 
                        {t("individualDevelopment")}
                    </p>
                    <button 
                        className="lg:mt-2" onClick={() => setIsOpenDogs(!isOpenDogs)}>
                        {isOpenDogs ? <p className="text-slowGray italic">{t("readLess")}</p> :
                            <p className="text-slowGray italic">{t("readMore")}</p>}
                    </button>
                </div>
                <div>
                    <div className="flex mt-6 justify-center sm:mb-2 sm:mt-10 lg:mt-[1.813rem] lg:justify-start lg:flex">

                        <Divider className="md:hidden w-16 bg-slowGray flex self-center mr-2 sm:w-[15rem]" />
                        <h1 className="text-white sm:font-bold lg:text-xl lg:font-medium  lg:flex lg:mb-2">Pig Commander</h1>
                        <Divider className="md:hidden w-16 bg-slowGray flex self-center ml-2 sm:w-[15rem]" />

                        <Divider className="hidden lg:flex lg:my-4 bg-slowGray lg:w-[14rem] lg:ml-3" />
                    </div>
                    <img className="lg:h-[16rem] lg:w-[24.625rem] rounded-3xl"  src={projectPig} alt="" />
                    <div className="flex justify-center">
                        <Divider className="lg:my-4 hidden bg-slowGray lg:w-[19rem] lg:mt-[1.75rem] lg:flex  " />
                        
                        <Divider className="bg-slowGray md:hidden  flex w-[5.125rem] self-center mt-[0.438rem] sm:w-[16rem]" />
                        <button className="bg-green-700 text-xs rounded-lg p-1 mt-2 ml-2 mr-2 lg:ml-4 font-bold pl-1 pr-1">
                            {t("seeitlive")}
                        </button> 
                        <Divider className="bg-slowGray md:hidden flex w-[5.125rem] self-center mt-[0.438rem] sm:w-[16rem]" />
                    </div>
                    <p className="lg:w-[24rem] lg:mt-2 lg:text-justify mt-3"  style={isOpenPig ? null : paragraphsStyles} >
                    <span className="text-pinkStrong font-bold">{t("group")}</span> {t("gruopDevelopment")}
                    </p>
                    <button className="lg:mt-2" onClick={() => setIsOpenPig(!isOpenPig)}>{
                        isOpenPig ? <p className="text-slowGray italic">{t("readLess")}</p> : <p className="text-slowGray italic">{t("readMore")}</p>
                    }</button>
                </div>
            </div>
        </motion.div>
    );
};
  
  export default Projects;
  