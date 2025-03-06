import { EventTimeline } from "./EventTimeLine";

const events = [
  {
    id: "1",
    date: "August 26, 2016",
    title: "CodeBird Founded",
    description: "We officially launched our club with our first team.",
    isActive: true,
    status: "past",
  },
  {
    id: "2",
    date: "September 25, 2024",
    title: "Hand Over < Batch'22-26/>",
    description: "Successfully batch'25 team handed over the responsibility to the new team of batch'26 .",
    status: "past",
  },
  {
    id: "3",
    date: "September 28, 2024",
    title: "New Team Formed<Batch'22-26/>",
    description: "Formed the new Core Team, Semi Core Team and the Tech Teams.",
    status: "past",
  },
  {
    id: "4",
    date: "2024",
    title: "Freshers Orientation <Batch'24-28/>",
    description: "We have sucessfully hosted our 1st Event & presents Our Codebird with the Freshie Of Our CodeBird",
    status: "past",
  },
  {
    id: "5",
    date: "October 2024",
    title: "Tech Sessions <1st Wave/>",
    description: "Hosting our first wave of tech sessions of all the domains with the Tech leaders and Executive members.",
    isActive: true,
    status: "past",
  },
  {
    id: "6",
    date: "Dec 22, 2024 - Mar 15, 2025",
    title: "CodeBird Winter of Code <CWoC'24-25/> ",
    description: "Launching our first event CWoC, a kind of an open source project bootcamp. On that day bootcamp was started",
    status: "present",
  },
  {
    id: "7",
    date: "March 7,2025 - March 15,2025  ",
    title: "GamiZ <Season 4/>",
    description: "GamiZ 4.0, our Second Event, a kind of Esports for Uitians",
    status: "upcoming",
  },
  {
    id: "8",
    date: " March 18, 2025",
    title: "Closing Ceremony <CWoC'24-25/> ",
    description: "Launching our first event CWoC, a kind of an open source project bootcamp. On that day bootcamp was started",
    status: "upcoming",
  },
  {
    id: "9",
    date: "March 25, 2025",
    title: "Ideathon",
    description: "Hosting a paper prestentation event for the researchers to build innovative solutions.",
    status: "upcoming",
  },
  {
    id: "9",
    date: "Counting....",
    title: "Coming Soon ......",
    description: "Coming Soon........",
    status: "upcoming",
  },
];



const allEvents = [...events];

export default function Event() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Our Journey of 2024-25</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow our path from inception to where we are today. Each milestone represents a significant achievement in
            our Team history.
          </p>
        </div>
        <EventTimeline events={allEvents} />
      </div>
    </main>
  );
}
