import face from "../../../images/dodge.png";
import loo from "../../../images/wheels-logo.png";
import { IoIosCall } from "react-icons/io";

export default function Profile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Card 1 */}
      <a
        href="#"
        className="block p-6 bg-white   dark:bg-gray-800  dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          B.JOTHIPRAKASH
        </h5>
        <p className="font-normal text-gray-700 ">
          Dream Wheel Motors
        </p>
        {/* <h4 className="text-lg text-gray-900 font-medium mb-7">Contact Us</h4> */}
        <a
          href="https://wa.me/9025760713" target='_blank'
          className="flex items-center justify-center gap-2 border border-indigo-600 rounded-full py-2 px-6 w-fit mt-5 lg:mx-0  text-sm text-indigo-600 font-semibold transition-all duration-500 hover:bg-indigo-50"
        >
          Contact
          <svg
            width={12}
            height={8}
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
              stroke="#4F46E5"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </a>

      {/* Card 2 */}
      <a
        href="#"
        className="block p-6 bg-white   dark:bg-gray-800  dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          E.ASHOK
        </h5>
        <p className="font-normal text-gray-700 ">
          Dream Wheel Motors
        </p>
        {/* <h4 className="text-lg text-gray-900 font-medium mb-7">Contact Us</h4> */}
        <a
          href="https://wa.me/8838620347" target='_blank'
          className="flex items-center justify-center gap-2 border border-indigo-600 rounded-full py-2 px-6 w-fit mt-5 lg:mx-0  text-sm text-indigo-600 font-semibold transition-all duration-500 hover:bg-indigo-50"
        >
          Contact
          <svg
            width={12}
            height={8}
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
              stroke="#4F46E5"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </a>
    </div>
  );
}
