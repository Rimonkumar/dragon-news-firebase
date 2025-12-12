import React from "react";
import { FaShareAlt, FaEye, FaStar, FaRegBookmark } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router";


const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    author,
    image_url,
    rating,
    total_view,
  } = news;

  return (
    <div className="border rounded-xl shadow-sm p-5 mb-6 bg-base-200 ">

      {/* TOP AREA — AUTHOR + SHARE */}
      <div className="flex items-center justify-between mb-4">
        
        {/* Author info */}
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-gray-500 text-sm">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        {/* Share Icon */}
        <div className="flex gap-3 "><FaRegBookmark></FaRegBookmark>
        <FaShareAlt className="text-gray-500 text-xl cursor-pointer hover:text-gray-700" /></div>
      </div>

      {/* TITLE */}
      <h2 className="font-bold text-xl mb-3 text-gray-900 leading-snug">
        {title}
      </h2>

      {/* IMAGE */}
      <img
        src={image_url}
        alt="news"
        className="w-full rounded-lg mb-4"
      />

      {/* DETAILS TEXT */}
      <p className="text-[#F75B5F] leading-relaxed">
        {details.slice(0, 200)}...
        <Link to={`/news-details/${id}`} className="text-blue-500 cursor-pointer font-semibold ml-1">
          Read More
        </Link>
      </p>

      {/* FOOTER — RATING + VIEWS */}
      <div className="flex items-center justify-between mt-4">

        {/* Rating stars */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 ml-2 font-medium">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye className="text-lg" />
          <span>{total_view}</span>
        </div>

      </div>

    </div>
  );
};

export default NewsCard;
