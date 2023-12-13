import {
  faGraduationCap,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectLinks = () => {
  return (
    <div className="py-8 sm:w-full px-8 p-8 ">
      <div className="shadow rounded  bg-white w-full pb-4">
        <div className="flex p-5 gap-3 items-center ">
          <i className="text-lg py-1">
            <FontAwesomeIcon
              className="w-4 h-4 text-orange-700"
              icon={faGraduationCap}
            />{" "}
          </i>
          <h4 className="text-lg font-semibold ">Project Links</h4>
          <i className="flex px-1 text-xs">
            <FontAwesomeIcon className="w-4 h-4" icon={faPenToSquare} />{" "}
          </i>
        </div>
        <ul className="list-disc block px-8 pb-4">
          <li>findusonweb.com </li>
          <li>b2bgrowthexpo.org </li>
          <li>apps.globalhrin.com </li>
          <li>bushidosocialimpactcic.org </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectLinks;
