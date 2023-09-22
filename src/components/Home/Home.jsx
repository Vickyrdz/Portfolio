import imagen from "../../assets/rocket-spaceship.png"
import ScrollDown from "../ScrollDown/ScrollDown";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; 


const Home = () => {

    const {t} = useTranslation(["home"]);

    return (
        <motion.div exit={{opacity: 0}} className="flex w-full h-[31.25rem] flex-row mt-10">
            <div className="flex flex-col w-2/4 justify-center items-center ml-7">
                <div id="home"  className="flex gap-3 text-4xl">
                    <motion.p initial={{ opacity: 0, y: 50, }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
                        className="text-white font-bold">{t("hi")}
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 50, }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
                        className="text-pink font-bold"> Victoria Rodríguez
                    </motion.p>
                </div>
                <div className="flex text-4xl">
                    <motion.p initial={{ opacity: 0, y: 50, }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.01 } }}
                        className="text-pink font-bold">Frontend Developer!
                    </motion.p>
                </div>
                <div>
                    <motion.p initial={{ opacity: 0, y: 50, }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.3 } }}
                        className="text-slowGray text-xl mt-8">{t("continuos")}
                    </motion.p>
                </div>
                <motion.div initial={{ opacity: 0, y: 50, }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.3 } }}>
                    <ScrollDown />
                </motion.div>
            </div>
            <div className="flex flex-col w-2/4 justify-center ml-24 mb-5">
                <motion.img initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.01 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="ml-28" src={imagen} />
            </div>
        </motion.div>
    );
};
  
  export default Home;
  