import React from "react";

function NewsItems(props) {
  return (
    <div className="flex mt-8 mx-4">
      <img src={props.imgUrl} alt="img" className="mr-5 object-contain h-24" />
      <div className="flex flex-col flex-wrap content-between">
        <div className="text-sm font-semibold">{props.title}</div>
        <div className="mt-4">
          <div className="text-xs text-gray-400 font-light">{props.date}</div>
          <div className="text-sm font-medium text-blue-500">
            <a href={props.url}>Дэлгэрэнгүй</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
