import {
  faGraduationCap,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = () => {
  return (
    <div className="px-8 pb-4">
      <div className="shadow rounded p-8 bg-white  w-full sm:w-full">
        <div className="flex gap-2">
          <i className="text-lg py-1">
            <FontAwesomeIcon
              className="w-4 h-4  text-purple-900"
              icon={faGraduationCap}
            />{" "}
          </i>
          <h4 className="text-lg font-semibold">Education</h4>
          <i className="flex px-1 text-xs">
            <FontAwesomeIcon className="w-4 h-4" icon={faPenToSquare} />{" "}
          </i>
        </div>
        <div className="">Mumbai University</div>
        <ul className="list-disc flex gap-5">
          <li>B.Sc IT(2015)</li>
          <li>MCA (2018)</li>
          <li>Full time</li>
          <li>cgpa : 7.9</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
