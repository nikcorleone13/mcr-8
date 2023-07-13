import React, { useEffect, useState } from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

const Home = () => {
  const [showData, setShowData] = useState("");
  const [textFilter, setTextFilter] = useState("");

  useEffect(() => {
    setShowData(data.meetups);
  }, []);
  console.log(showData);

  //   handle drop

  const handleTypeChange = (e) => {
    const type = e.toLowerCase();
    console.log("TYPE", type);
    const opData = data.meetups;
    console.log("op", opData);
    let filterData = [];
    if (type === "online") {
      filterData = opData.filter(
        (item) => type === item.eventType.toLocaleLowerCase()
      );
      console.log("online", filterData);
      setShowData(filterData);
    } else if (type === "offline") {
      filterData = opData.filter(
        (item) => type === item.eventType.toLocaleLowerCase()
      );
      console.log("offline", filterData);
      setShowData(filterData);
    } else setShowData(opData);
  };

  const handleTextFilter = (text) => {
    const filData = data.meetups;
    const filterTextData = filData.filter(({ title }) =>
      title.toLocaleLowerCase().includes(text)
    );
    console.log("text", filterTextData);
    setShowData(filterTextData);
  };
  const handleTextInput = (e) => {
    setTextFilter(e);
    handleTextFilter(textFilter);
  };

  return (
    <div className="w-screen h-full ">
      <div className="bg-gray-200 flex flex-col justify-center items-center p-4 ">
        {/* navbar */}
        <div className=" p-2 w-[90%] flex justify-between">
          <h1 className="text-red-400 font-sans font-bold text-4xl">MEETUP</h1>
          <input
            type="text"
            placeholder="Search by title and tags"
            className="bg-white text-black p-2 rounded-lg focus:outline-none "
            onChange={(e) => handleTextInput(e.target.value)}
          />
        </div>

        {/* mainpage */}
        <div className="w-screen mt-10 p-10 flex flex-col justify-center items-center">
          {/* heading and filter */}
          <div className="w-[90%] flex flex-row   p-4 justify-between  ">
            <h1 className="uppercase text-4xl font-bold ">MEetup Events</h1>

            <select
              className="text-xl p-2 rounded-xl"
              lable="Select"
              onChange={(e) => handleTypeChange(e.target.value)}
            >
              <option value="both">Select Filter</option>
              <option value="offline">Offline</option>
              <option value="online">Online</option>
              <option value="both">Both</option>
            </select>
          </div>

          {/* events list */}
          <div className="w-[80%] h-full flex justify-center flex-wrap ">
            {Object.values(showData).map(
              ({ id, title, eventStartTime, eventType, eventThumbnail }) => {
                return (
                  <Link
                    key={id}
                    className="bg-red-200 w-[30%] h-[350px] mx-4 my-8 rounded-lg hover:scale-105 duration-200 "
                    to={`/events/${id}`}
                  >
                    {" "}
                    <div>
                      <p className="absolute p-2 bg-slate-50 m-2 font-bold ">
                        {eventType}
                      </p>
                      <img src={eventThumbnail} className="rounded-t-lg " />
                      <div className="flex flex-col justify-start ">
                        <p className="text-gray-600  ">
                          {Date(eventStartTime).toLocaleString("en-US")}
                        </p>
                        <p className="text-2xl font-bold my-2">{title}</p>
                      </div>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
