import { Divider } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import useValidation from "./useValidation";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"; 



const ContactMe = () => {

    const {t} = useTranslation("contactme");


    const {
        userLogin,
        handleChange,
        inputInvalidFields,
        someFieldEmpty,
        inputInvalidTextarea,
        focusedNameInput,
        focusedTextareaInput,
        allowEmailErrorMessage,
        allowNameErrorMessage,
        allowTextareaErrorMessage
    } = useValidation()


    return (
        <motion.div initial={{ opacity: 0, y: 50, }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}     
                    id="contactme" 
                    className=" text-white h-screen mt-[10.625rem] ml-2 mr-2 sm:mt-0 ">
            <div className="flex flex-row sm:text-xl xl:text-3xl">
                <p className="text-pink font-bold">#</p>
                <p className="text-white font-bold mr-2">{t("title")}</p>
                <Divider className="w-[8.625rem] self-center xl:w-[49rem] bg-white sm:w-[29.625rem] sm:ml-2 xl:ml-[2rem] xl:mb-5 xl:mt-5"/>
            </div>
            <div className="mt-5 sm:mt-12 xl:mt-12">
                    <form  className="flex flex-col gap-3" target="_blank" action="https://formsubmit.co/vickyrodriguez544@gmail.com" method="POST">
                        <div >
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <div>
                                    <input className="bg-strongGray w-60 text-xs p-3 focus:outline-none active:outline-none rounded-2xl sm:w-[11.75rem] xl:w-[15rem]" 
                                            value={userLogin.name} autoComplete="off"
                                            type="text" 
                                            name="name" 
                                            placeholder={t("name")}
                                            onChange={handleChange}
                                            onFocus={allowNameErrorMessage}  />
                                </div>
                                <div>
                                    <input className="bg-strongGray w-60 text-xs p-3 focus:outline-none active:outline-none rounded-2xl  sm:w-[11.75rem] xl:w-[15rem]" 
                                           value={userLogin.email} 
                                           autoComplete="off" 
                                           type="email" 
                                           name="email"  
                                           placeholder="Email..."  
                                           onChange={handleChange}
                                           onFocus={allowEmailErrorMessage}  />
                                </div>
                            </div>
                            {inputInvalidFields && focusedNameInput && (
                                <p className="text-xs  mt-2 text-mediumGray ">{t("both")}
                                </p>
                            )}
                        </div>
                        <div >
                            <textarea className="bg-strongGray p-3 h-32 w-60 focus:outline-none active:outline-none rounded-2xl sm:w-96 xl:h-[10.938rem] xl:w-[31.25rem]" 
                                      value={userLogin.textarea} 
                                      autoComplete="off"  
                                      placeholder="..."  
                                      name="textarea" 
                                      rows="10" 
                                      onChange={handleChange}
                                      onFocus={allowTextareaErrorMessage}>
                            </textarea>
                            {inputInvalidTextarea && focusedTextareaInput && (
                                <p className="text-xs text-mediumGray">{t("field")}
                                </p>
                            )}
                        </div>
                       
                        <div className="flex self-center  ">
                            <button className={`bg-pink p-3 rounded-2xl w-24 font-bold mb-6  ${
                                someFieldEmpty ? "bg-slate-400 disabled:cursor-no-drop" : "bg-pink"
                            }`} 
                            type="submit"
                            disabled={someFieldEmpty}>{t("send")}</button>
                        </div>
                    </form>
                </div>
                <div className="flex sm:mt-5 xl:mt-7 justify-center">
                    <Divider className="md:hidden sm:w-[29rem] sm:self-center sm:mr-4 xl:w-[45rem] bg-white xl:mb-5 xl:mt-5"/>

                    <Divider className="sm:hidden self-center w-16 mr-2 bg-white xl:mb-5 xl:mt-5"/>
                    <Link href="https://github.com/Vickyrdz">
                        <img className="w-7 xl:h-10 xl:ml-10" src="data:image/png;base64,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">
                        </img>
                    </Link>
                    <Link href="https://www.linkedin.com/in/victoriabelenrodriguez/">
                        <img className="w-7 xl:h-10 xl:ml-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2aPWsUURSGrxoFxSSmS2JhJVpoFRG0t4qYKrG1SOEPSCJYiKDYKDb6CywFtRMEV0QRgim0iqBgYVBQJCRRkoiaR87yBoZhZ3J3Zid7B+9TJee83HvevR8zmxPnIpFIIYCzQAP4Sff5oVpG2zVxnXC51s5KGOvAFDDkugwwBEyrJrxWBngm8ZQLDGBGtTV8xLYfjUEXGMCgalvxETdxgYJvff+FEeAU8Bj4CnwBHgHHqii4MiO6zf60uA7XgBFXIyNvlbJnzAFgv93pij2tqvAqjCwrtS8R6/O+RQIy8lypG0C/TFxVbLaqwqswMgKstjgj9rQ94Wp2ax0G7gGfgM+1vLVCgQ5srVdk89JHA+wGzgMPgAVtyyXdiLeAo9thJBcfDfBui/xv4DbQU7mRvLjnhzAPTAKHgD1AL3AauAv8kuYhsDNEI/b03wCuZBUo3Ungm4aZCdHIODCR+H1XzvxnNIydnb6gjChnrzV3gO+S2UvnTdtaLbRPpLkYlBF7rQHeJM7J38TPc8DelP6CcvdDM3JZqffAcbuVdB4+tjoPwBHFP4RmxD5141wqPqb461S8X/Gl0IwsKjWQig8ovpiK71B8IzQjmZOXmS+XaMTFFWlSdme4sgMk40UmLzNfLtGIiyvSpOzOcGUHSMaLTF5mvly2GiALX02RcTttxL5zZ/HCV1Nk3I4aCQXaMLIibddbbmmAg6pt2Uds3VNj2gUGcKmd1tuoxOvq2Q1vS5X5NQ3LxOZfWfza1Il2QX3b06mVaSSao/X7h4FIJOI2+Qcr3dTGXC5RnAAAAABJRU5ErkJggg==">
                        </img>
                    </Link>
                    <Link href="mailto:vickyrodriguez544@gmail.com">
                            <img className="w-[1.875rem] xl:h-10 xl:ml-2 xl:cursor-pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQUlEQVR4nO2ZS0iUURTHRzNTLDHBngoiREK2iCAIoqcSUQRmbVq0DArBZbustStpUxD02BRuIiKLqBZZQdGiNkFaKUVEZk8qekz+4tq5cPrmfOM3OU/4/jAwc+55/e8999z7zZdIxIgRI0aMQgKoBo4CT4EkxYuk5HjE5WyRuEvp4TZQpYm4lXAYBbYCp5TyFWBxAYpkCi625OBxWnIck9+9WvmZCDco2S7grcgngN2JPAPokthILl1qbJPIh7WB3xPzA44WAYNqNs4AtXkgUCsz7zEYrAqXq4wltdDjJFAeMCgDDgBfRWdMr1wOSKyXEkdiHnQ5BHTKJdcpWEQcrgNLjQAtsrkcJoF+YE4WCcyWTuSr4z6w3NBbCFzWCVtExlU9dhpOKqQx/BK9h0BbFki0iS/Et4tRYeh1qn07no7IAuCS+n0WmGs4XAM8EZ3vwKFgSUYk4Mp2vyrb58A6Q69aKsDjGrAklIhy3q2Mhl3ihvMa4LiUmcNNoCkDEk3ADbGdFF81IZPmcvDo9nsmLZGgTC23q99ZRiDX01+J3ic3wxFI7AHeic0bYKehUw70AD90IlaOUYn0Ab/l+xDQbARtAC4om/NAvaFXL2MezqbB0GuWWEjsvhkTke+bgZfTzbrM9AfRew1sV2PtyofbEz1pfLxXPrZFyTESETWbA2o2zwF1Edt0v9pLbqzFsKsTnx4DelWzRiRk1l8AGyPWd7p9tlZdkz5bK551IqqGbwVmvdLQWwk8Ah4Dq0POJX0I3gOWhcTMPhGVRK86HB8ArSFnQLUhbxUbv1rOV8ohmHMiIX3+m5RU2TQ2+4AvYjNqHYJ5JyK684ATaj9ctZ5hpE1fDGzouogxck8k8AwzoQ66HWqsQx2cH4G9GfrOHxGxa5QbtG8Ex+Tj268ba/wPv/klou5rPXKh9PgpHSrjy2XBiCgfK1T7XTVDX1NIK8sVkXTtt+SIZAvERASJIgFGPimySEoFBjERQaJIgJFPiiySUokQSYqsslSIAJXWX6bufYPDljDDIiTSYf2J7e5A/n/ddsW26IjwN7cO9VrhcPAacYfSw9A/L3qETJU8bo6UwKu3EbcSKSRixIgRI0Yiz/gDF1AbSb5rw/kAAAAASUVORK5CYII=">
                            </img>
                    </Link>
                    <Link href="https://drive.google.com/file/d/19JdTWIMC8seuhJUwvYwKT3YGaY_k8jyz/view">
                        <img className="w-[1.875rem] xl:h-10 xl:ml-2 xl:cursor-pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD+ElEQVR4nO2aWahNURjHN9ccmSMyZHgw30LGBzOhDOWBi05kSKFupuLhIkNevFCS8kCUEh6QiCdDESWZdR/IgyEyX8P96XO+w+e459y9991nn721/7Uevv/61lrffw9rrW/t7TgJEiRI8L8A6AssBJbGpEisff2K3QpUEz9IzFv83Nlq4BWwG9gZkyKxvtbY+3gRXKZXa5cTM0jMGnuZl0YpbVRhuKHAJqCe4RYDM4zdTF+F3obrD2wGGhhurhRjN1Sf/obrrX01M9wMYJGx62lMQwxXobGn6ir4mHL9DPcVeGjsadlPBrBfuVGGeyHF2KPUZ38Nd2qa4R7KmMbupz7HCiH4hHKlhhNUGnumcrsNd1C5MYZ7I8XYY9TnoOHkfRTMNFylEMYuVZ8ThRC8A3gHtDPcXeCMsQcAVbJEGG498BnoZrirwBVjd1OfdYZbpn3Zx/ysjGnsdsB7YHvgggVAU8cAaAyU5PPJ0U7e2YY+2pXImLX4BCc4DghFMOk7vQG4rxPZM2Av0MHDmNJHa4+lZeiCSQd68c9G5/fCL3gKdHfRRyfgLf6wK2zBFep7K7OPBdoCR5W/6KKP5sBp4IbHch2YH7bgp8APoGcW3wh4rP30cEJCQQWT3lkJHuWoP6D1U12MOQKY47HMBlqFKbhV5nHOUf/P5iGHXy/841CYgluo350c9Xu0fnot/cj6usZHdiSbocGhCRborCw7ohZOFoBr2s9AJySEIXif+h4Bmhh+tfL3bIbl4Q5vlNnbddAhPdLDdDnKQGbs48Btw73S/XQDH+/w+MgIJr2zkuVI8AA4BXw3wcqFOGfsCza3raG/4Vkz8FigfiQEA2u1/pP6/goMaCOTiN1dqS0XRHDcKTACFwwMAr4BH2TtdNmf7Lxuap8LnJgJvqR1qzwG0gf4AjzJ9z7XFUHnw101Maj0+X5JBuXtgK3IgpdnH+F4DGactj/pp30xBI8GLvs93df1VrKocj/tXY6RnHjUiuSIR6HHKrN9pHGuUjyZCHXDUZPfwGK8w4cpDH6leMCEPD5V+XZqhRI8WFOyID+A/U7x9KhnYw6/JS5jTyatqN3hXKX46SFwiHBR3PSQ9BlW0LN0rhKd9LAYAEbqE3a+liLJiWBebAWrWHu44AZj4yw4M3eUy6F+npJJbl7W9DUyToIzOXj7PD6yafmo6escrwOk4iQYmKjHTSJ2hZ8BUhEV/M/nV2BSncRGXHDHwMVGXHCnLLGf6yw24oI7qz05MLERF9wFmBKo2Cj+emgEr9Sj3mq36aLXn0vly+A2/TZUzJLZLhK42AzkF9wI/j78HJjlFAqkvxZE4QfxlGZPf/2UliBBggTO/46fg5HI2ZXQ7gUAAAAASUVORK5CYII=" />
                    </Link>
                    <Divider className="sm:hidden w-16 ml-2 self-center bg-white xl:mb-5 xl:mt-5"/>

                </div>
        </motion.div>
    );
};
  
export default ContactMe;
  