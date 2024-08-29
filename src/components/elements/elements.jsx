import Acordionfooter from "../acordionfooter/acordionfooter"
import Amazonprime from "../amazonprime/amazonprime"
import Categorycard from "../categorycard/categorycard"
import { AnimatedCircularProgressBarDemo } from "../circle/circle"
import { MarqueeDemoVertical } from "../coments/coments"
import Creativity from "../creativity/creativity"
import Icons from "../icons/icons"
import Perevod from "../perevod/perevod"
import SSlider from "../slider/snider"
import Swipper from "../swipper/swipper"
import "./elements.css"
import { useTranslation } from 'react-i18next'

const Elements = ({ prime }) => {
  const { t } = useTranslation();

  return (
    <> 
      <div className="gradient-background">
        <div style={{width: "580px", margin: "auto", paddingTop: "150px"}}>
          <h1 style={{fontSize: "50px", fontWeight: "300", marginBottom: "1.25rem", lineHeight: "1.25", textAlign: "center"}}>
            {t('everyone_listening')}
          </h1>
          <p style={{width: "400px", marginLeft: "90px", margin: "auto"}}>
            {t('bestsellers_new_releases')}
          </p>
        </div>
        <Icons />
        <Swipper />
        <Categorycard />
        <SSlider />
        <Amazonprime prime={prime}/> 
        <Creativity />
      <Perevod />
        <div className="flex w-[900px] justify-between mx-auto mt-[100px]">
          <AnimatedCircularProgressBarDemo />
          <AnimatedCircularProgressBarDemo /> 
          <AnimatedCircularProgressBarDemo />
        </div>
        <div> 

          <MarqueeDemoVertical />  
        </div>
      </div>
    </>
  )
}

export default Elements;
