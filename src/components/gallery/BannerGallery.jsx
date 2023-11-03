import { useContext, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/UseOnce";
import { GalleryDiv } from "../../styles/ContainersMain";
import loadingIcon from "../../assets/icons/loading.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WelcomeBonusOverlay from "../WelcomeBonusOverlay";
import { JoinGalleryBtn, JoinGalleryBtnActive } from "../../styles/Buttons";

export default function BannerGallery () {
  const [ctaActive, setCtaActive] = useState(false);
  const { width,
          sliderList, 
          getSliderList, 
          sliderErrorMessage,
          fetchSliderError,
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
        fetchSliderError("cannot display content");
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
  <GalleryDiv>
   {
    sliderErrorMessage ? (
      <h1 className="loading-failed">{sliderErrorMessage}</h1>
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
              $topwide="2rem"
              $topbig="3rem"
              $topmedium="3rem"
              $topsmall="2rem"
              $widthwide="23rem"
              $widthbig="18rem"
              $widthmedium="18rem"
              $widthsmall="12rem"
              $leftwide="14.5%"
              $leftbig="12%"
              $leftmedium="1rem"
              $leftsmall="2.5rem"
              $zindex="1"
              alt="Welcome Bonus"
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
