import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faMoneyBill,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PersonalInfo = () => {
  const skills = [
    { value: "Core PHP" },
    { value: "Codeigniter" },
    { value: "Mysql" },
    { value: "React" },
    { value: "Mongo DB" },
    { value: "Javascript" },
    { value: "Tailwind CSS" },
    { value: "Boostrap" },
    { value: "HTML" },
    { value: "Rest API" },
    { value: "Git" },
  ];

  return (
    <>
      {/* <div className="w-full relative bg-white shadow px-4 lg:px-6 pt-3 pb-4 rounded-md">
        <div className="grid gap-2">
          <div></div>
          <div className="flex gap-3 overflow-scroll lg:overflow-hidden">
            {skills.map((_) => (
              <div
                className="px-4 py-1 bg-red-800 rounded-full text-white"
                key={_.value}
              >
                {_.value}
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            <div className="flex gap-3 items-center">
              <h2 className="text-lg font-semibold">Prefered Location: </h2>
              <p className="text-base font-medium">
                Mumbai, Bangaluru, Hydrabad, Delhi, Noida
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-3 items-center">
              <h2 className="text-lg font-semibold">Willing To Relocation: </h2>
              <p className="text-base font-medium">YES</p>
            </div>
            <div className="flex gap-3 items-center">
              <h2 className="text-lg font-semibold">Open For: </h2>
              <p className="text-base font-medium">
                Full-Stack Full-time, Part-time
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="gap-4 p-8 ">
        <div className="shadow rounded p-8 bg-white w-full 	 sm:w-full">
          <div className="flex sm:gap-6">
            <img
              className="flex w-14 h-14 rounded-full object-cover"
              src="https://apps.globalhrin.com/upload/employee_image/angad.jpg"
            />
            <div className="mx-2 text-base text-slate-900 font-semibold dark:text-slate-300">
              <a href="#">
                <span className=""></span>Angad Kanojia
              </a>
              <div className="mt-0.5 ">Full-Stack Developer</div>
              <div className="mt-0.5 flex gap-5 flex-wrap">
                <i className="flex text-xs gap-1">
                  <FontAwesomeIcon className="w-4 h-4" icon={faPhone} />{" "}
                  8983495184/9325138290
                </i>
                <i className="flex text-xs gap-1">
                  <FontAwesomeIcon className="w-4 h-4" icon={faEnvelope} />{" "}
                  angadkanojia@gmail.com
                </i>
                <i className="flex text-xs gap-1">
                  <FontAwesomeIcon className="w-4 h-4" icon={faLocationDot} />{" "}
                  Mumbai
                </i>
                <i className="flex text-xs gap-1">
                  <FontAwesomeIcon className="w-4 h-4" icon={faMoneyBill} />{" "}
                  4.22 LPA
                </i>
              </div>
            </div>
            <i className="flex px-1 text-xs">
              <FontAwesomeIcon className="w-4 h-4" icon={faPenToSquare} />{" "}
            </i>
          </div>
          <div className="py-3 gap-1 flex flex-wrap">
            <a
              href="#"
              className="text-xs rounded-full bg-red-600 py-1 px-3 text-white"
            >
              Core PHP
            </a>
            <a
              href="#"
              className="text-xs rounded-full bg-red-600 py-1 px-3 text-white"
            >
              CodeIgniter
            </a>
            <a
              href="#"
              className="text-xs rounded-full bg-red-600 py-1 px-3 text-white"
            >
              Mysql
            </a>
            <a
              href="#"
              className="text-xs rounded-full bg-red-600 py-1 px-3 text-white"
            >
              React
            </a>
            <a
              href="#"
              className="text-xs rounded-full bg-red-600 py-1 px-3 text-white"
            >
              Mongo DB
            </a>
            <a
              href="#"
              className="text-xs rounded-full bg-red-600 py-1 px-3 text-white"
            >
              Java Script
            </a>

            <a
              href="#"
              className="text-xs rounded-full bg-red-600 py-1 px-3 text-white"
            >
              Tailwind css
            </a>
            <a
              href="#"
              className="text-xs rounded-full bg-red-600 py-1 px-3 text-white"
            >
              Bootstrap css
            </a>
            <a
              href="#"
              className="text-xs rounded-full bg-red-600 py-1 px-3 text-white"
            >
              Html
            </a>
            <a
              href="#"
              className="text-xs rounded-full bg-red-600 py-1 px-3 text-white"
            >
              Rest API
            </a>
            <a
              href="#"
              className="text-xs rounded-full bg-red-600 py-1 px-3 text-white"
            >
              Git
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            <p className="text-gray-400 text-sm">
              Prefered Location:
              <span className="text-black flex flex-wrap md:flex-no-wrap gap-1">
                <div>Mumbai,</div>
                <div>Bangaluru,</div>
                <div>Hydrabad,</div>
                <div>Delhi,</div>
                <div>Noida</div>
              </span>
            </p>
          </div>

          <div className="text-gray-400 text-sm">
            <p className="text-gray-400 text-sm">
              Willing To Relocation:
              <span className="text-black"> Yes</span>
            </p>
            <p className="text-gray-400 text-sm">
              Open For:
              <span className="text-black">
                {" "}
                Full-Stack Full-time, Part-time
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
