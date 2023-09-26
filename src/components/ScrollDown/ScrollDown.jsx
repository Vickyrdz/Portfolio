import { useTranslation } from "react-i18next"; 
import animation from "../../assets/Animation.gif"

const ScrollDown = () => {

  const {t} = useTranslation(["home"]);

    return (
      <div className= 'text-white mt-10 '>
        <div className="text-sm sm:w-full  xl:mt-16 xl:text-xl xl:border-2 p-3 border-pink xl:rounded-3xl xl:flex">
           {t("scroll")}
           <img className="h-11 flex ml-4 xl:ml-2 xl:h-7 xl:self-center" src={animation}></img>
        </div>
      </div>
    );
  };
  
  export default ScrollDown;

  