import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FavouriteCard from "../card/FavouriteCard";

const FavouritePlayList = () => {
  const allFavourite = useSelector(
    (state: RootState) => state.favourites.favourite
  );
  console.log(allFavourite,"testing");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
          <h2 className="layoutTitle">Favourite PlayList</h2>
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {allFavourite.filter(item=>item.isFavourite).map((song) => (
                <>
                   
                     <div className="image-container increase-size mx-2 pb-2">
                     <FavouriteCard  coverImg={song?.coverImg}
                         songTitle={song?.songTitle}
                         url={song?.url}
                         id={song?.id}
                         isFavourite={song?.isFavourite}
                         mp3Url={song?.mp3Url}/>
                   </div>
               
              </>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default FavouritePlayList;
