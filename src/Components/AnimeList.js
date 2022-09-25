import React from "react";

export const AnimeList = ({ animelist, animeComponent, handleList }) => {
  const AddToList = animeComponent;
  return (
    <>
      {animelist
        ? animelist.map((anime, index) => {
            return (
              <div className="card">
                <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                <div className="anime-info">
                  <h4>{anime.title}</h4>
                  <h5 className="rating">{anime.score}</h5>
                  <div onClick={() => handleList(anime)}>
                    <AddToList />
                  </div>
                </div>
              </div>
            );
          })
        : "Not Found"}
    </>
  );
};
