import imagen from "../../assets/rocket-spaceship.png"
import ScrollDown from "../ScrollDown/ScrollDown";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; 


const Home = () => {

    const { t } = useTranslation(["home"]);

    return (
        <motion.div exit={{ opacity: 0 }} className="flex w-full h-[31.25rem] justify-center flex-row lg:mt-32 ">
            <div className="flex flex-col mt-[1.563rem] lg:w-2/4 justify-center items-center lg:ml-7">
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
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.3 } }}>
                    <ScrollDown  />
                </motion.div>
            </div>
            <div className="hidden sm:flex lg:flex xl:flex flex-col lg:w-2/4 justify-center lg:ml-24 lg:mb-5">
                <motion.img initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.01 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="xl:ml-28" src={imagen} />
            </div>
        </motion.div>
    );
};
  
  export default Home;
  