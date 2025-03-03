import { Calendar, ArrowRight, CheckCircle, Clock } from "lucide-react";


function TimelineEvent({ event, isEven }) {
  return (
    <div className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
      <div
        className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 ${getStatusColor(event.status)}`}
      ></div>

      <div className={`w-full md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
        <div
          className={`p-6 shadow-md border rounded-xl border-blue-600 ${event.isActive ? "ring-2 ring-primary" : ""}`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{event.date}</span>
            </div>
            <StatusBadge status={event.status} />
          </div>
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-gray-600 mb-4">{event.description}</p>

          <button className="mt-4 inline-flex items-center text-primary hover:underline">
            Learn more <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2"></div>
    </div>
  );
}

function StatusBadge({ status }) {
  const statusInfo = {
    past: {
      label: "Past",
      icon: <CheckCircle className="w-3 h-3 mr-1" />,
      className: "bg-gray-100 text-gray-700",
    },
    present: {
      label: "Current",
      icon: <Clock className="w-3 h-3 mr-1" />,
      className: "bg-green-100 text-green-700",
    },
    upcoming: {
      label: "Upcoming",
      icon: <Calendar className="w-3 h-3 mr-1" />,
      className: "bg-blue-100 text-blue-700",
    },
  };

  const info = statusInfo[status];

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${info.className}`}>
      {info.icon}
      {info.label}
    </span>
  );
}

function getStatusColor(status) {
  const statusColors = {
    past: "bg-gray-400",
    present: "bg-green-500",
    upcoming: "bg-blue-500",
  };
  return statusColors[status] || "bg-gray-400";
}

export { TimelineEvent };
