import React from "react";

import data from "../fakejson/news.json";
import Container from "../Components/Container";

import NewsItems from "../Components/NewsItems";
// import img from "../assets/Hero-xs.png";
function News() {
  return (
    <>
   
      <Container>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {data.map((e) => {
            return (
              <NewsItems
                imgUrl={e.img}
                title={e.title}
                date={e.date}
                url={e.url}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default News;
