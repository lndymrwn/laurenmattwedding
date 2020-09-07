import React from "react";
import Map from "./Map";
import {Row, Col, Container} from 'react-bootstrap'
import ThingCard from './ThingCard';
import ScrollAnimation from 'react-animate-on-scroll';
import './thingstodo.css';

function ThingsToDo() {
  return (
    <div className="section text-center">
      <h2>Things To Do</h2>
      <hr />
      <ScrollAnimation animateOnce animateIn="fadeIn" delay={500}>
        <Map />
      </ScrollAnimation>
        <Row className="mx-5" style={{marginTop: 673}}>
          <Col>
          <ScrollAnimation animateOnce  animateIn="fadeInDown">
            <ThingCard
              image="https://cdn.getyourguide.com/img/tour/57519b09f16ea.jpeg/146.jpg"
              title="Where to Explore"
              items={[
                "Archeological Zone of Tulum",
                "Gran Cenote",
                "Cenote Calavera",
                "Escondido Cenote",
                "Cenotes Tankah",
                "Cenote Tamcach-Ha & Choo-Ha",
                "Valladolid",
                "Kaan Luum Lagoon",
                "Rent Bikes",
                "Hotel Zone",
                "Xel-Ha",
                "Xcaret",
                "Tulum Yacht and Catamaran Rental",
              ]}
              itemUrls={[
                "https://www.tripadvisor.com/Attraction_Review-g150813-d153186-Reviews-Tulum_Archaeological_Site-Tulum_Yucatan_Peninsula.html",
                "https://www.tripadvisor.com/Attraction_Review-g150813-d669578-Reviews-Gran_Cenote-Tulum_Yucatan_Peninsula.html",
                "https://www.tripadvisor.com/Attraction_Review-g150813-d10750550-Reviews-Cenote_Calavera-Tulum_Yucatan_Peninsula.html",
                "https://www.tripadvisor.com/ShowUserReviews-g150813-d1150241-r173357082-Cenote_Crystal-Tulum_Yucatan_Peninsula.html",
                "https://www.tripadvisor.com/Attraction_Review-g150813-d4089869-Reviews-Tankah-Tulum_Yucatan_Peninsula.html",
                "https://www.tripadvisor.com/Attraction_Review-g499447-d3784125-Reviews-Cenotes_Tamcach_Ha_Choo_Ha-Coba_Yucatan_Peninsula.html",
                "https://www.tripadvisor.com/Tourism-g499453-Valladolid_Yucatan_Peninsula-Vacations.html",
                "https://www.tripadvisor.com/Attraction_Review-g150813-d8288993-Reviews-Laguna_Kaan_Luum-Tulum_Yucatan_Peninsula.html",
                "https://www.olabiketulum.com/",
                "https://www.google.com/maps/place/Zona+Hotelera+Tulum,+Q.R.,+M%C3%A9xico/@20.1723804,-87.4828578,13z/data=!3m1!4b1!4m5!3m4!1s0x8f4fd6d3d151f13b:0x5bfe1089f9d52667!8m2!3d20.1866833!4d-87.4435216",
                "https://www.xelha.com/",
                "https://www.xcaret.com",
                "https://www.getmyboat.com/boat-rental/Tulum--Quintana-Roo--Mexico/",
              ]}
            />
            </ScrollAnimation>
          </Col>
          <Col>
          <ScrollAnimation animateOnce  animateIn="fadeInDown" delay={500}>
            <ThingCard
              image="https://stories.cheapcaribbean.com/wp-content/uploads/2017/04/Gitano-tulum-entrance-@lila.avatara.jpg"
              title="Where to Eat"
              items={[
                "Posada Margherita",
                "Archive",
                "Hartwood",
                "Verdant",
                "BAL NAK",
                "Mezze",
                "Burrito Amor",
              ]}
              itemUrls={[
                "https://www.posadamargherita.com/",
                "",
                "https://www.hartwoodtulum.com/",
                "https://verdant.mx/",
                "https://www.instagram.com/balnaktulum/?hl=es",
                "https://grupogitano.com/meze",
                "http://www.burrito-amor.com/",
              ]}
            />
            </ScrollAnimation>
          </Col>
          <Col>
          <ScrollAnimation animateOnce  animateIn="fadeInDown" delay={1000}>
            <ThingCard
              image="https://cdn.forbes.com.mx/2019/11/Ahau.jpg"
              title="Where to Drink"
              items={[
                "Gitano - Friday",
                "Casa Jaguar - Thursday",
                "Papaya Playa - Saturday",
                "Pasito Tun Tun",
                "Kin Toh",
                "Mezze",
                "Mur Mur",
              ]}
              itemUrls={[
                "https://grupogitano.com/gitanotulum-gallery",
                "https://www.casajaguartulum.com/",
                "https://www.papayaplayaproject.com/",
                "https://www.instagram.com/pasitotulum/",
                "https://www.azulik.com/gastronomy/kin-toh",
                "https://grupogitano.com/meze",
                "http://www.murmurtulum.com/",
              ]}
            />
            </ScrollAnimation>
          </Col>
          <Col>
          <ScrollAnimation animateOnce animateIn="fadeInDown" delay={1500}>
            <ThingCard
              image="https://departmentofwandering.com/wp-content/uploads/2016/04/papaya_playa_project_tulum-0939-750x500.jpg"
              title="Beach Clubs"
              items={[
                "Coco Tulum",
                "Boa - Sunday",
                "Mia Restaurant and Beach Club",
                "Papaya Playa",
                "Nomade",
                "Los Amigos",
                "Taboo",
              ]}
              itemUrls={[
                "https://cocotulum.com/",
                "https://www.tripadvisor.com/Restaurant_Review-g150813-d13559341-Reviews-Boa_Tulum-Tulum_Yucatan_Peninsula.html",
                "https://www.tripadvisor.com/Restaurant_Review-g150813-d13722373-Reviews-Mia_Restaurant_Beach_Club-Tulum_Yucatan_Peninsula.html",
                "https://www.papayaplayaproject.com/",
                "https://www.nomadetulum.com/",
                "https://www.losamigostulum.com/",
                "https://taboobeachclub.com.mx/es",
              ]}
            />
            </ScrollAnimation>
          </Col>
        </Row>
    </div>
  );
}

export default ThingsToDo;
