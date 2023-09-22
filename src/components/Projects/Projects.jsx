import { useState } from "react";
import projectDogs from "../../assets/ProjectDogs.png";
import projectPig from "../../assets/projectPigCommander.png";
import {Divider} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
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
                    className=" text-white h-screen mt-10 ">
            <div className=" flex flex-row text-3xl">
                <p className="text-pink font-bold">#</p>
                <p className="text-white font-bold">{t("title")}</p>
            </div>
            <div className="flex gap-6 place-content-center mt-20">
                <div>
                    <div className="flex">
                        <h1 className="text-white text-xl flex mb-2">The Dogs App</h1>
                        <Divider className="my-4 bg-slowGray w-60 ml-3"/>
                    </div>
                    <img className="h-[16rem] w-[24.625rem] rounded-3xl" src={projectDogs} alt="" />
                    <div className="flex">
                        <Divider className="my-4 bg-slowGray w-[19rem] mt-[1.75rem] " />
                        <button className="bg-green-700 text-xs rounded-lg mt-2 ml-4 font-bold pl-1 pr-1">
                            {t("seeitlive")}
                        </button> 
                    </div>
                    
                    <p className="w-[24rem] mt-2 text-justify" style={isOpenDogs ? null : paragraphsStyles}>
                        <span className="text-orange-400 font-bold">{t("individual")} </span> 
                        {t("individualDevelopment")}
                    </p>
                    <button 
                        className="mt-2" onClick={() => setIsOpenDogs(!isOpenDogs)}>
                        {isOpenDogs ? <p className="text-slowGray italic">{t("readLess")}</p> :
                            <p className="text-slowGray italic">{t("readMore")}</p>}
                    </button>
                </div>
                <div>
                    <div className="flex">
                        <h1 className="text-white text-xl flex mb-2">Pig Commander</h1>
                        <Divider className="my-4 bg-slowGray w-[14rem] ml-3" />
                    </div>
                    <img className="h-[16rem] w-[24.625rem] rounded-3xl"  src={projectPig} alt="" />
                    <div className="flex">
                        <Divider className="my-4 bg-slowGray w-[19rem] mt-[1.75rem] " />
                        <Link  color="foreground" className="bg-green-700 text-xs rounded-lg mt-2 ml-4 font-bold pl-1 pr-1 text-white " href="https://pig-commander-client-beta.vercel.app/">
                            {t("seeitlive")}
                        </Link>
                    </div>
                    <p className="w-[24rem] mt-2 text-justify"  style={isOpenPig ? null : paragraphsStyles} >
                    <span className="text-pinkStrong font-bold">{t("group")}</span> {t("gruopDevelopment")}
                    </p>
                    <button className="mt-2" onClick={() => setIsOpenPig(!isOpenPig)}>{
                        isOpenPig ? <p className="text-slowGray italic">{t("readLess")}</p> : <p className="text-slowGray italic">{t("readMore")}</p>
                    }</button>
                </div>
            </div>
        </motion.div>
    );
};
  
  export default Projects;
  