import info from './images/wedding_invitation_info.png';
import photo from './images/wedding_invitations.jpeg';
import Rsvp from './Rsvp.js';
import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectFlip, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/autoplay';
import './App.css';


function App() {
  return (
    <div className="App">
        <Swiper
          effect={'flip'}
          grabCursor={true}
          loop= {true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={photo} className='card-side' alt="Wedding Couple Side" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={info} className='card-side' alt="Wedding Info Side" />
          </SwiperSlide>
        </Swiper>
        <Rsvp />
    </div>
  );
}

export default App;
