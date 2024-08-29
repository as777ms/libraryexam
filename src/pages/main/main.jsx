import Gether from "../../components/book3d/gether"
import ButtonR from "../../components/buttonR/buttonR"
import Elements from "../../components/elements/elements"
import Perevod from "../../components/perevod/perevod"
import "./main.css"
import { useTranslation } from 'react-i18next'

const Main = ({hoopla, prime}) => {
  
  const { t, i18n } = useTranslation()
  
  return (
    <>
      <div className="banner">
      <Gether />
        <div style={{width: "80%", display: "flex", paddingTop: "100px", margin: "auto", justifyContent: "space-between"}}>
          <div style={{width: "10%", marginTop: "160px"}}>
            <img src={hoopla} alt="" style={{width: "100%"}}/>
          </div>
          <div style={{width: "10%", marginTop: "170px"}}>
          </div>
        </div>
        <div style={{ 
          width: "80%", 
          margin: "auto", 
          textAlign: "center", 
          color: "white", 
          padding: "100px 0", 
          backgroundImage: `url("https://example.com/your-background-image.jpg")`, // Replace with your actual background image URL
          backgroundSize: "cover", 
          backgroundPosition: "center",
        }}>
          <ButtonR buttonText={t('button_text')} />
          
        </div>
      </div>  
      <Elements prime={prime}/>
    </>
  )
}

export default Main
