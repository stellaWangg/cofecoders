import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Loading from "../components/Loading";
type Props = {
  title: string;
  date: string;
  tags: string[];
  img: string;
  url: string;
  alt: string;
};
const PastActivities = () => {
  const [pastEvents, setPastEvents] = useState<Props[]>([]);
  const [loading, setLoading] = useState(true);

  const pastEventsURL =
    "https://gist.githubusercontent.com/stellaWangg/ec21df7bea7c6f35c8a22c5cafeab178/raw";
  useEffect(() => {
    axios
      .get(pastEventsURL)
      .then((res) => {
        setPastEvents(res.data);
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
    <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-10 items-start p-6">
      {pastEvents.map((past, i) => {
        return (
          <li
            className="relative flex flex-col sm:flex-row xl:flex-col items-start"
            key={i}
          >
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h4 className="mb-2 text-white font-semibold">
                <span className="block text-sm leading-5 ">{past.title}</span>
                <span className="text-xs font-poppins text-gray-200">
                  {past.date}
                </span>
              </h4>
              <div className="prose prose-slate prose-sm text-slate-600">
                {past.tags && past.tags.length > 0 && (
                  <div className="flex flex-wrap flex-grow gap-2 text-sm">
                    {past.tags.map((tag: any, index: any) => (
                      <span
                        key={`${tag + index}`}
                        className="border self-start px-2 rounded-xl bg-stone-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-6 focus:outline-none focus:ring-2 text-slate-100 bg-black hover:bg-slate-100 hover:text-black focus:ring-black mt-6"
                href={past.url}
                target="_blank"
              >
                Try it
                <svg
                  className="overflow-visible ml-3 text-slate-100 group-hover:text-black"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <Image
              src={past.img}
              alt={past.alt}
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-5 xl:w-full"
              width={1216}
              height={540}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PastActivities;
