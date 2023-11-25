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
        $left_medium="20%"
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
                  src={width > 850 ? item.srcbig : item.srcsmall} 
                  alt={item.title} onClick={()=>openLoginPopup(setIsGameOverlayDisplayed)} 
                />
              </SwiperSlide>
                ))
          }
        <div>
            <WelcomeBonusOverlay 
              $position="absolute"
              $top_wide="2rem" $top_big="3rem" $top_medium="3rem" $top_small="2rem"
              $width_wide="23rem" $width_big="18rem" $width_medium="18rem" $width_small="12rem"
              $left_wide="14.5%" $left_big="12%" $left_medium="1rem" $left_small="2.5rem"
              $z_index="1"
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
