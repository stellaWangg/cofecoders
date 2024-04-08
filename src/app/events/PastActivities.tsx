import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  title: string;
  date: string;
  tags: string[];
  img: string;
  url: string;
  alt: string;
};
function PastActivities({ title, date, tags, img, url, alt }: Props) {
  return (
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h4 className="mb-2 text-white font-semibold">
          <span className="block text-sm leading-5 ">{title}</span>
          <span className="text-xs font-poppins text-gray-200">{date}</span>
        </h4>
        <div className="prose prose-slate prose-sm text-slate-600">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap flex-grow gap-2 text-sm">
              {tags.map((tag, index) => (
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
          href={url}
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
        src={img}
        alt={alt}
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-5 xl:w-full"
        width={1216}
        height={540}
      />
    </li>
  );
}

export default PastActivities;
