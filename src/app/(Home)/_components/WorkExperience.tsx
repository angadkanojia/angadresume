import {
  faPenToSquare,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkExperience = () => {
  return (
    <div className="px-8 p-8">
      <div className="shadow rounded p-8 bg-white  w-full sm:w-full">
        <div className="flex gap-2">
          <i className="text-lg py-1">
            <FontAwesomeIcon
              className="w-4 h-4  text-green-600"
              icon={faShoppingBag}
            />{" "}
          </i>
          <h4 className="text-lg font-semibold">Work Experience</h4>
          <i className="flex px-1 text-xs">
            <FontAwesomeIcon className="w-4 h-4" icon={faPenToSquare} />{" "}
          </i>
        </div>
        <p className="text-md font-medium">
          In this internship, I was part of the UI Design team. I got to work
          closely with stakeholders of the company in doing the user research &
          creating mockups. I was working on the design changes to be made for
          the website by coding in html, css and javascript. I learned and
          gained a lot of experience and knowledge about the Payment Integration
          for strpie and paypal.
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
