import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import DailyLeaderBoardsSlide from "../assets/slides/DailyLeaderboard.jpg";
import GodOfStormsSlide from "../assets/slides/GodOfStorms.jpg";
import GreenWizardSlide from "../assets/slides/GreenWizard.jpg";
import EuropeanRouletteSlide from "../assets/slides/EuropeanRoulette.jpg";
import SilverBulletBanditSlide from "../assets/slides/SilverBulletBandit.jpg";
import JokerRushSlide from "../assets/slides/JokerRush.jpg";
import WelcomeBonusOverlay from "../assets/overlays/WelcomeBonus.png";
import * as AppColor from "../styles/Colors";
import { lighten, darken } from "polished";


export default function BannerGallery () {
    
    return (
    <GalleryDIV>
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
          <SwiperSlide><img src={DailyLeaderBoardsSlide} alt="Daily LeaderBoards"></img></SwiperSlide>
          <SwiperSlide><img src={GodOfStormsSlide} alt="God Of Storms"></img></SwiperSlide>
          <SwiperSlide><img src={GreenWizardSlide} alt="Green Wizard"></img></SwiperSlide>
          <SwiperSlide><img src={EuropeanRouletteSlide} alt="European Roulette"></img></SwiperSlide>
          <SwiperSlide><img src={SilverBulletBanditSlide} alt="Silver Bullet Bandit"></img></SwiperSlide>
          <SwiperSlide><img src={JokerRushSlide} alt="Joker Rush"></img></SwiperSlide>
          <div>
            <img src={WelcomeBonusOverlay} alt="Welcome Bonus" className="welcome-bonus-overlay"></img>
            <button /* onClick={openRegistrationError} */>JOIN NOW</button>
          </div>
      </Swiper>
    </GalleryDIV>
    );
} 
const GalleryDIV = styled.div`
    margin-top: 9.5rem;
    position: relative;
    width: 100%;
    background:#000000;

    .swiper {
      width: 90rem;
      height: 18rem;
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
      background: #f2f2f2;
      opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.4);
    }

    .swiper-pagination-bullet-active {
      opacity: var(--swiper-pagination-bullet-opacity, 1);
      background: var(--swiper-pagination-color, var(--swiper-theme-color));
    }

   .welcome-bonus-overlay{
        position: absolute;
        top: 2rem;
        z-index: 1;
        width: 25rem;
        left: 13%;
    }

    button{
      display: block;
      font-family: 'Gotham Bold',sans-serif;
      background-color:${AppColor.JoinBtn};
      position: absolute;
      top: 12rem;
      z-index: 1;
      width: 25rem;
      left: 13%;
      width: 21.4rem;
      max-width: 100%;
      margin-left: 2.2rem;
      margin-top: 1.1rem;
      font-size: 1.714rem;
      box-shadow: none;
      cursor: pointer;
      padding-top: 0.1em;
      line-height: 1.7;
      border-radius: 0.2rem;
      font-weight: 700;
      color: #ffffff;
      border: none;
      transition: background-color .15s ease-out;
      transition: color .15s ease-out;
    }

    button:hover {
      background-color: ${darken(0.1, AppColor.JoinBtn)};
    }

    button:active {
        color: ${darken(0.8, "#ffffff")};
        background-color: ${lighten(0.1, AppColor.JoinBtn)};
    }
`