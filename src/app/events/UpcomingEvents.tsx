import React from "react";
import Image from "next/image";
import coders from "../images/cfc.png";
const UpcomingEvents = () => {
  return (
    <div className="grid p-4 bg-slate-100 border border-gray-200 rounded-lg shadow sm:p-8 mx-8">
      <a
        href="https://www.eventbrite.com/o/cork-female-coders-76848549443"
        className="text-right text-sm font-medium text-violet-700 hover:underline"
        target="_blank"
      >
        Go to Eventbrite
      </a>

      <ul role="list" className="divide-y divide-gray-700">
        <li className="py-3 sm:py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                className="w-8 h-8 rounded-full"
                src={coders}
                alt="avatar"
              />
            </div>
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-semibold text-gray-900 truncate">
                Code & Coffee Meetup 4
              </p>
              <p className="text-xs sm:text-sm text-gray-500 truncate">
                📍 To Be Confirmed
              </p>
              <p className="text-xs sm:text-sm text-gray-500 truncate">
                🗓️ 6pm-8pm, 23/04/2024
              </p>
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                className="w-8 h-8 rounded-full"
                src={coders}
                alt="avatar"
              />
            </div>
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-semibold text-gray-900 truncate">
                IT talks
              </p>
              <p className="text-xs sm:text-sm text-gray-500 truncate">
                📍 To Be Confirmed
              </p>
              <p className="text-xs sm:text-sm text-gray-500 truncate">
                🗓️ To Be Confirmed
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UpcomingEvents;
