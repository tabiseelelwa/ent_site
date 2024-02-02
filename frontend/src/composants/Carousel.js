// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import "../css/App.scss";

export default function Carroussel() {
  const data = [
    {
      image: "image/student.svg",
      titre: "La formation territoriale",
      texte:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa id repudiandae earum adipisci nam ad recusandae cum nihil. Deleniti doloremque quam enim temporibus adipisci fugiat necessitatibus natus, harum commodi molestiae sint, labore odit in voluptatem consequuntur. Optio minus ex obcaecati impedit blanditiis recusandae? Atque numquam, totam maiores quidem delectus, maxime molestiae neque quibusdam quis dolorum tenetur eligendi nisi provident cum, praesentium sequi deleniti voluptatibus pariatur molestias sint? Maiores quia unde beatae facere nisi ab atque nostrum neque cum eos facilis, magnam totam minus fuga voluptas repellendus molestiae ut tempore quos qui odit, ipsum quasi nesciunt. Ipsum odit debitis ab provident dolorum facilis, velit, quasi repellat accusantium adipisci, nisi tenetur aut. Autem asperiores, facilis et ad officiis eveniet reiciendis cum tenetur mollitia nulla accusamus laudantium laboriosam alias perspiciatis incidunt officia ducimus minus esse. Asperiores, quam eius reiciendis ullam autem recusandae possimus fuga beatae nulla. Porro enim, autem cum quis officia debitis saepe magnam pariatur soluta quaerat doloremque obcaecati alias maiores iste similique nam ut repellendus maxime nesciunt. Cupiditate quod sint et esse ipsam repellat perferendis ipsa quo soluta incidunt, exercitationem rem odio ut pariatur laborum expedita aliquid ipsum harum? Assumenda magnam cumque repudiandae dignissimos dolorem commodi voluptatum excepturi corrupti in amet consequatur, beatae qui repellat itaque dicta dolore. At laudantium, fugiat molestiae labore porro ab voluptatibus enim consequatur. Obcaecati, ipsa distinctio rerum quod, suscipit nesciunt alias iste, unde cum culpa numquam dolorem enim ducimus consectetur. Dolor deserunt velit architecto vitae molestiae sunt perspiciatis possimus aspernatur unde asperiores officiis natus rem eos est, beatae saepe inventore cupiditate quibusdam esse. Impedit autem soluta quibusdam. Tempora neque vitae explicabo aliquam nihil beatae illum facilis, commodi facere omnis recusandae in perferendis voluptatum? Beatae quam maiores illo, iure rem exercitationem tempore error consequuntur ratione, provident pariatur. Iure enim minus nam distinctio quisquam, alias molestias ducimus rerum.",
    },

    {
      image: "image/webinar.svg",
      titre: "Atelier de mise à niveau",
      texte:
        "La formation des agents et cadres de la commune de Barumbu s'est passée dans un climat de paix La formation des agents et cadres de la commun",
    },
  ];

  return (
    <Swiper
      modules={[EffectFade, Pagination, Autoplay]}
      effect={"fade"}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="Swiper mySwiper"
    >
      {data.map((d, i) => {
        return (
          <SwiperSlide className="swiper" key={i}>
            <div className="image-hero">
              <img src={d.image} alt="" />
            </div>
            <div className="texte-hero">
              <h1>{d.titre}</h1>
              <p>
                {d.texte.length > 200
                  ? d.texte.substring(0, 200) + " ..."
                  : d.texte}{" "}
              </p>
              <Link to="/actualite/5">
                <button className="lire-plus">Lire plus</button>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
