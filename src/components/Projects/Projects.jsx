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
                    className=" text-white h-screen mt-10 ml-2 mr-2 ">
            <div className="flex flex-row xl:text-3xl">
                <p className="text-pink font-bold">#</p>
                <p className="text-white font-bold">{t("title")}</p>
            </div>
            <div className="xl:flex xl:gap-6 xl:place-content-center xl:mt-20">
                <div className="mt-6">
                    <div className="flex mt-1 justify-center">

                        <Divider className="sm:hidden w-[4.5rem] bg-slowGray flex self-center mr-2"/>
                        <h1 className="text-white xl:text-xl xl:flex xl:mb-2">The Dogs App</h1>
                        <Divider className="sm:hidden w-[4.5rem] bg-slowGray flex self-center ml-2"/>
 
                        <Divider className="hidden xl:my-4 bg-slowGray xl:w-60 xl:ml-3"/>
                    </div>
                    <img className="xl:h-[16rem] xl:w-[24.625rem] rounded-3xl" src={projectDogs} alt="" />
                    <div className="flex justify-center">
                        <Divider className="xl:my-4 hidden bg-slowGray xl:w-[19rem] xl:mt-[1.75rem] " />
                        
                        <Divider className="bg-slowGray sm:hidden flex w-[5.125rem] self-center mt-[0.438rem]" />
                        <button className="bg-green-700 text-xs rounded-lg p-1 mt-2 ml-2 mr-2 xl:ml-4 font-bold pl-1 pr-1">
                            {t("seeitlive")}
                        </button> 
                        <Divider className="bg-slowGray sm:hidden flex w-[5.125rem] self-center mt-[0.438rem]" />
                    </div>
                    
                    <p className="xl:w-[24rem] xl:mt-2 xl:text-justify mt-3" style={isOpenDogs ? null : paragraphsStyles}>
                        <span className="text-orange-400 font-bold">{t("individual")} </span> 
                        {t("individualDevelopment")}
                    </p>
                    <button 
                        className="xl:mt-2" onClick={() => setIsOpenDogs(!isOpenDogs)}>
                        {isOpenDogs ? <p className="text-slowGray italic">{t("readLess")}</p> :
                            <p className="text-slowGray italic">{t("readMore")}</p>}
                    </button>
                </div>
                <div>
                    <div className="flex mt-6 justify-center">
                        <Divider className="sm:hidden w-16 bg-slowGray flex self-center mr-2" />
                        <h1 className="text-white xl:text-xl xl:flex xl:mb-2">Pig Commander</h1>
                        <Divider className="sm:hidden w-16 bg-slowGray flex self-center ml-2" />


                        <Divider className="hidden xl:my-4 bg-slowGray xl:w-[14rem] xl:ml-3" />
                    </div>
                    <img className="xl:h-[16rem] xl:w-[24.625rem] rounded-3xl"  src={projectPig} alt="" />
                    <div className="flex justify-center">
                        <Divider className="xl:my-4 hidden bg-slowGray xl:w-[19rem] xl:mt-[1.75rem] " />
                        
                        <Divider className="bg-slowGray sm:hidden flex w-[5.125rem] self-center mt-[0.438rem]" />
                        <button className="bg-green-700 text-xs rounded-lg p-1 mt-2 ml-2 mr-2 xl:ml-4 font-bold pl-1 pr-1">
                            {t("seeitlive")}
                        </button> 
                        <Divider className="bg-slowGray sm:hidden flex w-[5.125rem] self-center mt-[0.438rem]" />
                    </div>
                    <p className="xl:w-[24rem] xl:mt-2 xl:text-justify mt-3"  style={isOpenPig ? null : paragraphsStyles} >
                    <span className="text-pinkStrong font-bold">{t("group")}</span> {t("gruopDevelopment")}
                    </p>
                    <button className="xl:mt-2" onClick={() => setIsOpenPig(!isOpenPig)}>{
                        isOpenPig ? <p className="text-slowGray italic">{t("readLess")}</p> : <p className="text-slowGray italic">{t("readMore")}</p>
                    }</button>
                </div>
            </div>
        </motion.div>
    );
};
  
  export default Projects;
  