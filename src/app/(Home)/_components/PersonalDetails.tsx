import { faPenToSquare, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PersonalDetails = () => {
  return (
    <div className="sm:w-full px-8">
      <div className="shadow rounded  bg-white w-full">
        <div className="flex p-8 gap-3 items-center ">
          <i className="text-lg py-1">
            <FontAwesomeIcon
              className="w-4 h-4 text-orange-500 "
              icon={faUsers}
            />{" "}
          </i>
          <h4 className="text-lg font-semibold ">Personal Details</h4>
          <i className="flex px-1 text-xs">
            <FontAwesomeIcon className="w-4 h-4" icon={faPenToSquare} />{" "}
          </i>
        </div>
        <div className="px-8 pb-4">
          <div className="text-gray-400 text-sm">Date of Birth</div>
          <div className=" text-sm">10 June 1992</div>
          <div className="text-gray-400 text-sm">Address</div>
          <div className=" text-sm">
            J-1306 Bhoomi Acropolis Global city virar west.
          </div>
          <div className="text-gray-400 text-sm">Gender</div>
          <div className=" text-sm">Male </div>

          <div className="text-gray-400 text-sm">Language Known</div>
          <div className=" text-sm">Hindi,Marathi,English </div>

          <div className="text-gray-400 text-sm">State</div>
          <div className=" text-sm">Maharashtra </div>
          <div className="text-gray-400 text-sm">Country</div>
          <div className=" text-sm">Bharat </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
