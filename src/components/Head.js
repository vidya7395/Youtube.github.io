import React, { useEffect, useState } from "react";
import {
  MERGE_WITH_SEARCH,
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_LIST,
  bellIcon,
  hamburger,
  imageAddress,
  recorderIcon,
  searchIcon,
  youtubeLogo,
} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/Store/toggleSidebarSlice";
import { addToCacheList } from "../utils/Store/searchSlice";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
// import { addToCacheList } from "../utils/Store/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchCache = useSelector((store) => {
    return store.search;
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchList(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   *
   * key - ip (pressed another key before 200ms)
   * - destroy the component (useEffect return method)- cleared the timer
   * - re-render the component
   * - start timer => make api call after 200ms
   */

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchList(json[1]);
    dispatch(addToCacheList({ [searchQuery]: json[1] }));
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className="flex justify-between items-center px-3 py-1">
      {/*start: first section  */}
      <div className="flex items-center">
        <button
          className="h-[32px] w-[32px] hover:bg-gray-300 rounded-full flex items-center justify-center"
          onClick={() => toggleMenuHandler()}
        >
          <img
            className="h-[24px] w-[24px]"
            src={hamburger}
            alt="Hamburger menu icon"
          />
        </button>
        <a href="/" className="">
          <img className="h-[50px]" src={youtubeLogo} alt="Logo of youtube" />
        </a>
      </div>
      {/*end: first section  */}

      {/*start:  middle section */}
      <div className="relative">
        <div className="w-[500px] flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 p-3 h-[40px] w-full rounded-l-3xl border-r-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => {
              setShowSuggestion(false);
            }}
          />
          <button className="rounded-r-3xl border border-gray-300 h-[40px] px-6 text-xl bg-gray-200">
            <img className="w-[24px]" src={searchIcon} alt="" />
          </button>

          {showSuggestion && (
            <div className="absolute bg-white w-full border rounded top-[100%] mt-1  shadow border-gray-100">
              <ul>
                {searchList.map((item) => (
                  // <Link to={"/search_query?s=" + searchQuery}>
                  <li
                    className="px-3 py-2 hover:bg-neutral-100 cursor-pointer flex items-center"
                    key={item}
                    onMouseDown={(e) => {
                      setSearchQuery(item);
                      navigate("/search_query?s=" + item);
                      // updateTheUrl(item);
                    }}
                  >
                    <img className="h-[12px] me-3" src={searchIcon} alt="" />
                    {item}
                  </li>
                  // </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/*end:   middle section*/}

      {/*start: last section   */}
      <div className="flex items-center">
        <button className="w-[32px] h-[32px]  rounded-full hover:bg-gray-100 text-3xl me-3 flex items-center justify-center">
          <img className="w-[20px]" src={recorderIcon} alt="" />
        </button>
        <button className="w-[32px] h-[32px]  rounded-full hover:bg-gray-50 text-2xl me-3 flex items-center justify-center">
          <img className="w-[20px]" src={bellIcon} alt="" />
        </button>
        <button className="w-[32px] h-[32px]  text-2xl rounded-full">
          <img src={imageAddress} alt="" />
        </button>
      </div>

      {/*end:  section */}
    </header>
  );
};

export default Head;
