import imagen from "../../assets/rocket-spaceship.png"
import ScrollDown from "../ScrollDown/ScrollDown";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; 


const Home = () => {

    const { t } = useTranslation(["home"]);

    return (
        <motion.div exit={{ opacity: 0 }} className="flex w-full h-[31.25rem] justify-center flex-row sm:mt-2 lg:mt-[1rem] ">
            <div className="flex flex-col mt-[1.563rem] sm:ml-6 lg:w-2/4 lg:ml-24 justify-center items-center">
                <div id="home" className="flex gap-3 xl:text-4xl">
                    <motion.p initial={{ opacity: 0, y: 50, }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
                        className="text-white font-bold">{t("hi")}
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 50, }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
                        className="text-pink font-bold"> Victoria Rodríguez
                    </motion.p>
                </div>
                <div className="flex text-4xl mb-4">
                    <motion.p initial={{ opacity: 0, y: 50, }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.01 } }}
                        className="text-pink font-bold">Frontend Developer!
                    </motion.p>
                </div>
                <div className="rotate-[106deg] sm:hidden flex flex-col lg:w-2/4 justify-center lg:ml-24 lg:mb-5">
                    <motion.img initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1.01 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="h-24  xl:ml-28" src={imagen} />
                </div>
                <div>
                    <motion.p initial={{ opacity: 0, y: 50, }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.3 } }}
                        className="text-slowGray xl:text-xl xl:mt-8">{t("continuos")}
                    </motion.p>
                </div>
                <motion.div initial={{ opacity: 0, y: 50, }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.3 } }}
                    className="sm:ml-48 lg:ml-0">
                    <ScrollDown  />
                </motion.div>
            </div>
            <div className="hidden sm:flex sm:mb-24 sm:ml-5 lg:flex lg:w-2/4 lg:ml-24 lg:mb-5 xl:flex flex-col justify-center ">
                <motion.img initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.01 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="sm:h-52 lg:w-[20.625rem] lg:h-[20.25rem] xl:w-[22.625rem] xl:h-[22.25rem]  xl:ml-[3rem]" src={imagen} />
            </div>
            
        </motion.div>
    );
};
  
  export default Home;
  