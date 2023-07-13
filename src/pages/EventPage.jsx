import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

const showData = data.meetups;
const EventPage = () => {
  const [modal, setModaal] = useState(false);
  const [rsvp, setRSVP] = useState(false);
  const eId = useParams();
  // eId = meet001
  console.log(useParams());
  console.log("id", eId.eId);
  console.log("data", showData);

  const domData = showData.find((item) =>
    item.id.toLowerCase().includes(eId.eId.toLowerCase())
  );
  console.log("found", domData);

  const {
    id,
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    hostedBy,
    eventType,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation,
  } = domData;

  return (
    <div>
      <div className="w-full h-full flex justify-between p-8">
        {modal && (
          <div className="bg-transparent backdrop-blur-xl fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="text-black bg-white flex flex-col items-center text-white font-semibold pb-10 rounded-xl justify-between">
              <h1 className="text-4xl font-bolder pt-8">Add your RSVP</h1>
              <div className="p-20 flex flex-col justify-center border-t-4 mt-2">
                <div className="py-6 flex justify-between text-xl">
                  <p className="text-xl">Name:</p>
                  <textarea
                    name="message"
                    placeholder="Enter your Name"
                    rows="1"
                    className="font-normal resize-none w-[300px] p-2 bg-white text-black border-2 rounded-md focus:outline-none md:border-2 md:rounded-md md:text-textPrimaryDesktop md:border-textPrimaryDesktop md:focus:border-textPrimaryDesktopHover"
                  ></textarea>
                </div>
                <div className="flex justify-between text-xl">
                  <p className="text-xl">Email</p>
                  <textarea
                    name="message"
                    placeholder="Enter your Review"
                    rows="1"
                    className="font-normal resize-none w-[300px] p-2 bg-white text-black border-2 rounded-md focus:outline-none md:border-2 md:rounded-md md:text-textPrimaryDesktop md:border-textPrimaryDesktop md:focus:border-textPrimaryDesktopHover"
                  ></textarea>
                </div>
              </div>
              <button
                onClick={() => {
                  setModaal(false);
                  setRSVP(true);
                  handleReview();
                }}
                className=" bg-red-400 px-3 py-2 text-lg font-semibold uppercase rounded-lg  text-black hover:bg-red-300 "
              >
                RSVP
              </button>
            </div>
          </div>
        )}
        {/* left side */}
        <div className="w-[60%] flex flex-col">
          <p className="text-5xl font-bold">{title}</p>
          <p className="my-6 text-2xl ">
            Hosted by: <span className="  font-bold ">{hostedBy}</span>
          </p>
          <img src={eventThumbnail} className="w-[50%] h-[40%] my-3" />
          <p className="my-2 text-2xl font-bold  ">Details:</p>
          <p className="my-2">{eventDescription}</p>
          <p className="my-2 text-2xl font-bold  ">Additional Information:</p>
          <p className=" text-xl font-bold  ">
            Dress Code:
            <span className="ml-2 font-normal ">
              {additionalInformation.dressCode}
            </span>
          </p>
          <p className="text-xl font-bold  ">
            Age Restrictions:
            <span className="ml-2 font-normal">
              {additionalInformation.ageRestrictions}
            </span>
          </p>
          <p className="my-4 text-2xl font-bold  ">Event Tags:</p>
          <div className="flex justify-start">
            {eventTags.map((item) => {
              return (
                <div className="bg-red-400 flex justify-start flex-col text-2xl mx-4 p-2 px-4 rounded-lg">
                  <p className="capitalize ">{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* right side */}
        <div className="w-[30%] flex flex-col items-center">
          <div className="bg-gray-200 p-4 my-6 font-semibold rounded-lg">
            <div className="my-5">
              <p>
                {Date(eventStartTime).toLocaleString("en-US")} to{" "}
                {Date(eventEndTime).toLocaleString("en-US")}
              </p>
            </div>
            <div className="my-5">
              <p>{location}</p>
              <p>{address}</p>
            </div>
            <div className="my-5">
              <p>Rs {price}</p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl capitalize ">
              Speakers(<span>{speakers.length})</span>
            </h1>
            <div className="flex my-2">
              {speakers.map(({ name, image, designation }) => {
                return (
                  <div className="w-[40%] mx-2 bg-gray-200 flex flex-col justify-center items-center rounded-lg">
                    <img
                      src={image}
                      className="w-[50%] h-[50%] rounded-[50%]"
                    />
                    <p className="font-bold ">{name} </p>
                    <p className="">{designation} </p>
                  </div>
                );
              })}
            </div>
          </div>
          {rsvp ? (
            <button
              onClick={() => setModaal(false)}
              className="bg-red-200 w-[30%] my-6 p-2 text-2xl font-semibold rounded-lg disabled"
            >
              RSVPed
            </button>
          ) : (
            <button
              onClick={() => setModaal(true)}
              className="bg-red-400 w-[30%] my-6 p-2 text-2xl font-semibold rounded-lg"
            >
              RSVP
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
