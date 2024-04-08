import React from "react";
import PastActivities from "./PastActivities";
import UpcomingEvents from "./UpcomingEvents";
import { pastEvents } from "../data/pastEvents";
const Events = () => {
  return (
    <div className="md:container flex flex-col text-stone-50 mt-6">
      <section className="mb-14">
        <h2 className="text-4xl font-bold xl:text-left text-center">
          Past Coding Challenges
        </h2>
        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-10 items-start p-6">
          {pastEvents.map((past, i) => {
            return <PastActivities key={i} {...past} />;
          })}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-4xl font-bold xl:text-left text-center mb-6">
          Upcoming Events
        </h2>
        <UpcomingEvents />
      </section>
    </div>
  );
};
export default Events;
