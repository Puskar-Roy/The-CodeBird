import { useState } from "react";
import { TimelineEvent } from "./TimelineEvent";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { EventGallery } from "./EventGallery";

function EventTimeline({ events }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents = activeFilter === "all" ? events : events.filter(event => event.status === activeFilter);

  return (
    <div className="space-y-16">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <FilterButton label="All Events" isActive={activeFilter === "all"} onClick={() => setActiveFilter("all")} icon={null} />
        <FilterButton label="Past" isActive={activeFilter === "past"} onClick={() => setActiveFilter("past")} icon={<CheckCircle className="w-4 h-4 mr-2" />} />
        <FilterButton label="Present" isActive={activeFilter === "present"} onClick={() => setActiveFilter("present")} icon={<Clock className="w-4 h-4 mr-2" />} />
        <FilterButton label="Upcoming" isActive={activeFilter === "upcoming"} onClick={() => setActiveFilter("upcoming")} icon={<Calendar className="w-4 h-4 mr-2" />} />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

        <div className="flex flex-col space-y-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => <TimelineEvent key={event.id} event={event} isEven={index % 2 === 0} />)
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No events to display in this category.</p>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-16">
        <EventGallery events={events} activeFilter={activeFilter} />
      </div>
    </div>
  );
}

function FilterButton({ label, isActive, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-full transition-colors ${
        isActive ? "bg-primary text-primary-foreground" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

export { EventTimeline };
