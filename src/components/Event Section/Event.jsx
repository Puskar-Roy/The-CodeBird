import { EventTimeline } from "./EventTimeLine";

const events = [
  {
    id: "1",
    date: "January 15, 2023",
    title: "Company Launch",
    description: "We officially launched our company with our first product release.",
    isActive: true,
    status: "past",
  },
  {
    id: "2",
    date: "March 22, 2023",
    title: "Series A Funding",
    description: "Successfully secured $5 million in Series A funding to accelerate growth.",
    status: "past",
  },
  {
    id: "3",
    date: "June 10, 2023",
    title: "New Office Opening",
    description: "Opened our new headquarters in downtown to accommodate our growing team.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    status: "past",
  },
  {
    id: "4",
    date: "October 5, 2023",
    title: "Product Milestone",
    description: "Reached 100,000 active users on our platform.",
    status: "past",
  },
  {
    id: "5",
    date: "March 3, 2024",
    title: "Annual Conference",
    description: "Hosting our annual tech conference with industry leaders and innovators.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    isActive: true,
    status: "present",
  },
  {
    id: "6",
    date: "April 15, 2024",
    title: "Product Launch",
    description: "Launching our new flagship product with enhanced features and capabilities.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    status: "upcoming",
  },
  {
    id: "7",
    date: "June 30, 2024",
    title: "International Expansion",
    description: "Opening our first international office to serve global customers.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    status: "upcoming",
  },
  {
    id: "8",
    date: "September 12, 2024",
    title: "Developer Hackathon",
    description: "Hosting a 48-hour hackathon for developers to build innovative solutions.",
    status: "upcoming",
  },
  {
    id: "9",
    date: "December 31, 2024",
    title: "Year-End Celebration",
    description: "Celebrating our achievements and setting ambitious goals for the coming year.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    status: "upcoming",
  },
];

const allEvents = [...events];

export default function Event() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Our Journey</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow our path from inception to where we are today. Each milestone represents a significant achievement in
            our company history.
          </p>
        </div>
        <EventTimeline events={allEvents} />
      </div>
    </main>
  );
}
