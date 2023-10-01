import { useTranslation } from "react-i18next"; 
import animation from "../../assets/Animation.gif"

const ScrollDown = () => {

  const {t} = useTranslation(["home"]);

    return (
      <div className= 'text-white mt-10 '>
        <div className="text-sm sm:w-full lg:border-2 lg:rounded-3xl lg:text-lg lg:flex lg:p-1 lg:place-items-center xl:text-xl p-3 border-pink ">
          <p className="lg:ml-2">
            {t("scroll")}
          </p>
           <img className="h-11 flex ml-4 lg:ml-1 xl:ml-2 xl:h-7 lg:self-center" src={animation}></img>
        </div>
      </div>
    );
  };
  
  export default ScrollDown; 

  