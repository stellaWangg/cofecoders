import React, { useEffect, useState } from "react";
import Image from "next/image";
import coders from "../images/cfc.png";
import axios from "axios";
import Loading from "../components/Loading";
type UpcomingEvent = {
  title: string;
  location: string;
  time: string;
};
const UpcomingEvents = () => {
  const [newEvents, setNewEvents] = useState<UpcomingEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const newEventsURL =
    "https://gist.githubusercontent.com/stellaWangg/927c46323b40a3249e73b861293a8a7c/raw";
  useEffect(() => {
    axios
      .get(newEventsURL)
      .then((res) => {
        setNewEvents(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from GitHub Gist:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid p-4 bg-slate-100 border border-gray-200 rounded-lg shadow sm:p-8 mx-8">
      <a
        href="https://www.eventbrite.com/o/cork-female-coders-76848549443"
        className="text-right text-sm font-medium text-violet-700 hover:underline"
        target="_blank"
      >
        Go to Eventbrite
      </a>
      {loading ? (
        <Loading />
      ) : (
        <ul role="list" className="divide-y divide-gray-700">
          {newEvents.map((event, i) => {
            return (
              <li className="py-3 sm:py-4" key={i}>
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
                      {event.title}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {event.location}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {event.time}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default UpcomingEvents;
