import { useContext, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/UseOnce";
import styled from "styled-components";
import * as AppColor from "../../styles/Colors";
import loadingIcon from "../../assets/icons/loading.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WelcomeBonusOverlay from "../WelcomeBonusOverlay";
import { JoinGalleryBtn, JoinGalleryBtnActive, JoinGalleryBtnSmall, JoinGalleryBtnSmallActive } from "../../styles/Buttons";

export default function BannerGallery () {
  const [ctaActive, setCtaActive] = useState(false);
  const { width,
          sliderList, 
          getSliderList, 
          errorMessage,
          fetchErrorHandler,
          isLoading, 
          loadingIsFinished, 
          updateRegBlockDisplay,
          updateLoginDisplay,
          updateGameOverlayDisplay
        } = useContext(AppContext);

  useOncePostMount(() => {
    (async () => {
      try {
        await getSliderList();
      } catch {
        fetchErrorHandler(errorMessage);
      } finally {
        loadingIsFinished();
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
  <GalleryDIV $swiperheight={width > 525 ? "18rem" : "15rem"}>
   {
    errorMessage ? (
      <h1 className="loading-failed">{errorMessage}</h1>
    ) : isLoading ? (
      <img src={loadingIcon} width="200rem" height="200rem" style = {{ position : "relative", left : "45%"}}/>
    ) :
    <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      >
         {
          width > 525 ?
         sliderList
            ?.map((item) => (
              <SwiperSlide key={item.id}><img src={item.srcbig} alt={item.title} onClick={bannerClickHandler}></img></SwiperSlide>
                ))
                :
                sliderList
                ?.map((item) => (
                  <SwiperSlide key={item.id}><img src={item.srcsmall} alt={item.title} onClick={bannerClickHandler}></img></SwiperSlide>
                    ))
              }
        {
          width > 600 ?
          <div>
            <WelcomeBonusOverlay 
              $position="absolute"
              $top="2rem"
              $zindex="1"
              width="23rem"
              $left="14.5%" 
              alt="Welcome Bonus"
            />
            {
              ctaActive ?
              <JoinGalleryBtnActive>JOIN NOW</JoinGalleryBtnActive> :
              <JoinGalleryBtn onClick={ctaClickHandler}>JOIN NOW</JoinGalleryBtn>
            }
          </div>
          :
          <div>
            <WelcomeBonusOverlay 
              $position="absolute"
              $top="3rem"
              $zindex="1"
              width="15rem"
              $left="5%" 
              alt="Welcome Bonus"
            />
            {
              ctaActive ?
              <JoinGalleryBtnSmallActive>JOIN NOW</JoinGalleryBtnSmallActive> :
              <JoinGalleryBtnSmall onClick={ctaClickHandler}>JOIN NOW</JoinGalleryBtnSmall>
            }
          </div>
        }
    </Swiper>
   }
  </GalleryDIV>
  );
} 
const GalleryDIV = styled.div`
    margin-top: 7.8rem;
    position: relative;
    width: 100%;
    background: ${AppColor.GalleryBackground};

    .swiper {
      width: 90rem;
      height: ${(props)=>props.$swiperheight};
    }

    .swiper-slide img {
        cursor: pointer;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
        height: 100%;
        width: 100%;
        object-fit: fill;

        @media only screen and (max-width: 600px) {
                width: fit-content;
                height: 15rem;                
            }
    }

    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: var(--swiper-pagination-bottom, 10px);
      top: var(--swiper-pagination-top, auto);
      left: 0;
      width: 100%;
    }

    .swiper-pagination-bullet {
      width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 12px));
      height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 12px));
      display: inline-block;
      border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
      background: ${AppColor.MainText};
      opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.4);

      @media only screen and (max-width: 600px) {
        display: none;            
      }
    }

    .swiper-pagination-bullet-active {
      opacity: var(--swiper-pagination-bullet-opacity, 1);
      background: var(--swiper-pagination-color, var(--swiper-theme-color));
    }
`