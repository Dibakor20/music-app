import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import MusicCard from "../card/MusicCard";

const musicData = [
  {
    id: 1,
    title: "patan",
    artist: "Visal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir8QEJlLYhYX-r7ufpWN6uwhHIJw-qOvO3g&usqp=CAU",
  },
  {
    id: 2,
    title: "patan",
    artist: "Visal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir8QEJlLYhYX-r7ufpWN6uwhHIJw-qOvO3g&usqp=CAU",
  },
  {
    id: 3,
    title: "patan",
    artist: "Visal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir8QEJlLYhYX-r7ufpWN6uwhHIJw-qOvO3g&usqp=CAU",
  },
  {
    id: 4,
    title: "patan",
    artist: "Visal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir8QEJlLYhYX-r7ufpWN6uwhHIJw-qOvO3g&usqp=CAU",
  },
  {
    id: 5,
    title: "patan",
    artist: "Visal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir8QEJlLYhYX-r7ufpWN6uwhHIJw-qOvO3g&usqp=CAU",
  },
  {
    id: 3,
    title: "patan",
    artist: "Visal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir8QEJlLYhYX-r7ufpWN6uwhHIJw-qOvO3g&usqp=CAU",
  },
  {
    id: 4,
    title: "patan",
    artist: "Visal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir8QEJlLYhYX-r7ufpWN6uwhHIJw-qOvO3g&usqp=CAU",
  },
  {
    id: 5,
    title: "patan",
    artist: "Visal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir8QEJlLYhYX-r7ufpWN6uwhHIJw-qOvO3g&usqp=CAU",
  },
];

const UserPlayList = () => {
  const allPlayList = useSelector(
    (state: RootState) => state.playlists.playlists
  );
  console.log(allPlayList);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <div className="container">
        <div className="cardBg">
          <h2 className="layoutTitle">User PlayList</h2>
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {allPlayList.map((item) => (
              <>
                <div className="image-container increase-size mx-2 pb-2">
                  <MusicCard
                    title={item?.title}
                    id={item?.id}
                  />
                </div>
              </>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default UserPlayList;
