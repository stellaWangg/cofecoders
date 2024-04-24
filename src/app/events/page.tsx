"use client";
import React from "react";
import PastActivities from "./PastActivities";
import UpcomingEvents from "./UpcomingEvents";

import axios from "axios";
const Events = () => {
  return (
    <div className="md:container flex flex-col text-stone-50 mt-6">
      <section className="mb-14">
        <h2 className="text-4xl font-bold xl:text-left text-center">
          Past Coding Challenges
        </h2>
        <PastActivities />
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
