import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSlider } from '../../store/reducers/todoSlider/sliderSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'; // Optional: Add custom styles
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Slider = () => {

  const { t } = useTranslation(); // Get the translation function
  const { items } = useSelector((store) => store.todoSlider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSlider());
  }, [dispatch]);

  return (
    <div className="">
      <div className="" style={{ width: "580px", margin: "auto", paddingTop: "50px" }}>
        <h1 style={{ fontSize: "50px", fontWeight: "300", marginBottom: "1.25rem", lineHeight: "1.25", textAlign: "center" }}>
          {t('onlyFromAudible')} {/* Translate "Only from Audible" */}
        </h1>
        <p style={{ width: "400px", marginLeft: "90px", margin: "auto", textAlign: "center" }}>
          {t('groundbreakingOriginals')} {/* Translate "Groundbreaking Originals and exclusives from A-list celebs and emerging talent." */}
        </p>
      </div>
      <div className="slllider-container">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        className="swwwiper-container"
      >
        {items.map((el) => (
         
          <SwiperSlide key={el.id} className="swippper-slide"> 
          <Link to={`/slider/${el.id}`}>
            <img src={el.img} alt={el.alt || ''} className="sllsider-image" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Slider;