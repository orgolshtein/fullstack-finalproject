import { useContext, useState } from "react";
import * as api from "../../api/app.api";
// import slider_data from "../../data/slider-data.json"
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/useOncePostMount";
import { GalleryDiv } from "../../styles/containersMain";
import LoadingIcon from "../LoadingIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WelcomeBonusOverlay from "../WelcomeBonusOverlay";
import { JoinGalleryBtn, JoinGalleryBtnActive } from "../../styles/buttons";

export default function BannerGallery () {
  const [isSliderLoading, setIsSliderLoading] = useState(true);
  const [sliderList, setSliderList] = useState([]);  
  const [ctaActive, setCtaActive] = useState(false);
  const [sliderErrorMessage, setSliderErrorMessage] = useState("");
  const { width,
          updateRegBlockDisplay,
          updateLoginDisplay,
          updateGameOverlayDisplay
        } = useContext(AppContext);

  useOncePostMount(() => {
    (async () => {
      try {
        const slider_data = await api.fetchSliderData();
        const datalist = slider_data.map((item)=>({...item, show: true}));
        setSliderList(datalist);
      } catch {
        setSliderErrorMessage("Connection error: cannot display content");
      } finally {
        setIsSliderLoading(false);
      }
    })();
  });

  const bannerClickHandler = () => {
    updateGameOverlayDisplay(false);
    updateLoginDisplay(true);
  };

  const ctaClickHandler = () => {
    updateGameOverlayDisplay(false);
    setCtaActive(true);
    setTimeout(()=>{
        updateRegBlockDisplay(true);
        setCtaActive(false);
    }, Math.floor(Math.random() * (2000-1000)+1000));
};

  return (
  <GalleryDiv>
   {
    sliderErrorMessage ? 
      <h1>{sliderErrorMessage}</h1>
     : isSliderLoading ? 
      <LoadingIcon 
        $size="20%" 
        $position="relative" 
        $left="38%" 
      />
     :
    <Swiper
      autoplay={{ delay: 3500, disableOnInteraction: false, }}
      pagination={{ clickable: true, }}
      modules={[Autoplay, Pagination, Navigation]}
      >
         {
         sliderList?.map((item) => (
              <SwiperSlide key={item.id}><img 
                src={width > 768 ? item.srcbig : item.srcsmall} 
                alt={item.title} onClick={bannerClickHandler} 
              /></SwiperSlide>
                ))
          }
        <div>
            <WelcomeBonusOverlay 
              $position="absolute"
              $topwide="2rem" $topbig="3rem" $topmedium="3rem" $topsmall="2rem"
              $widthwide="23rem" $widthbig="18rem" $widthmedium="18rem" $widthsmall="12rem"
              $leftwide="14.5%" $leftbig="12%" $leftmedium="1rem" $leftsmall="2.5rem"
              $zindex="1"
            />
            {
              ctaActive ?
              <JoinGalleryBtnActive>JOIN NOW</JoinGalleryBtnActive> :
              <JoinGalleryBtn onClick={ctaClickHandler}>JOIN NOW</JoinGalleryBtn>
            }
        </div>
    </Swiper>
   }
  </GalleryDiv>
  );
};
