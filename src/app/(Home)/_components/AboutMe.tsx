import { faFileText, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AboutMe = () => {
  return (
    <div className="px-8">
      <div className="shadow rounded p-8 bg-white  w-full sm:w-full">
        <div className="flex gap-2">
          <div className="flex gap-2 justify-between mb-2">
            <i className="text-lg py-1">
              <FontAwesomeIcon
                className="w-4 h-4 text-orange-700"
                icon={faFileText}
              />{" "}
            </i>
            <h4 className="text-lg font-semibold">About Me</h4>
          </div>
          <i className="flex px-1 text-xs">
            <FontAwesomeIcon className="w-4 h-4" icon={faPenToSquare} />{" "}
          </i>
        </div>
        <p className="text-md font-medium">
          I am well-versed in frontend frameworks such as React and have a good
          grasp of backend technologies including Php and Next.js. I have also
          gained exposure to databases like MongoDB and MySQL, enabling me to
          design and implement efficient data models. I am constantly learning
          and exploring new technologies to stay updated with the latest trends
          in the industry.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
