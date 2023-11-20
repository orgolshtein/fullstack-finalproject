import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { AppContext } from "../../state/AppContext";
import { GalleryDiv, JoinGalleryBtn } from "../../styles/main.content";
import { Loader, WelcomeBonusOverlay } from "../../styles/global";

export default function BannerGallery () {
  const [isCtaActive, setIsCtaActive] = useState(false);
  const { width,
          sliderList,
          isSliderLoading,
          openLoginPopup,
          openRegBlockPopup,
          sliderErrorMessage,
          setIsGameOverlayDisplayed
        } = useContext(AppContext);

  return (
  <GalleryDiv>
   {
    sliderErrorMessage ? 
      <h1>{sliderErrorMessage}</h1>
     : isSliderLoading ? 
      <Loader 
        $size="20rem" 
        $position="relative" 
        $left="40%"
        $mediumleft="20%"
      />
     :
    <Swiper
      autoplay={{ delay: 3500, disableOnInteraction: false, }}
      pagination={{ clickable: true, }}
      modules={[Autoplay, Pagination, Navigation]}
      >
         {
         sliderList?.map((item) => (
              <SwiperSlide key={item.id}>
                <img 
                  src={width > 768 ? item.srcbig : item.srcsmall} 
                  alt={item.title} onClick={()=>openLoginPopup(setIsGameOverlayDisplayed)} 
                />
              </SwiperSlide>
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
            <JoinGalleryBtn 
              disabled={isCtaActive ? true : false} 
              onClick={()=>openRegBlockPopup(setIsCtaActive, setIsGameOverlayDisplayed)}
            >JOIN NOW</JoinGalleryBtn>
        </div>
    </Swiper>
   }
  </GalleryDiv>
  );
};
