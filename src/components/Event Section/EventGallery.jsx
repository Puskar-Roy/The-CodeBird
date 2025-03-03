import { useState } from "react";
import { X, Calendar, Clock, CheckCircle } from "lucide-react";
import {galleryImages} from "../../constants/index"

export function EventGallery({ events, activeFilter }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredEvents = galleryImages.filter(
    (galleryImages) => galleryImages.imageUrl && (activeFilter === "all" || galleryImages.status === activeFilter)
  );

  if (events.length === 0) {
    return null;
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "past":
        return <CheckCircle className="w-4 h-4" />;
      case "present":
        return <Clock className="w-4 h-4" />;
      case "upcoming":
        return <Calendar className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "past":
        return "bg-gray-100 text-gray-700";
      case "present":
        return "bg-green-100 text-green-700";
      case "upcoming":
        return "bg-blue-100 text-blue-700";
      default:
        return "";
    }
  };

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Event Gallery</h2>

      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={galleryImages.id}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
              onClick={() => setSelectedImage(galleryImages)}
            >
              <img
                src={galleryImages.imageUrl || "/placeholder.svg"}
                alt={galleryImages.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium w-fit mb-2 ${getStatusColor(event.status)}`}
                >
                  {getStatusIcon(galleryImages.status)}
                  <span className="capitalize">{event.status}</span>
                </div>
                <div className="text-white">
                  <h3 className="font-bold text-lg leading-tight mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{event.date}</p>
                  <p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No images available for {activeFilter === "all" ? "any events" : `${activeFilter} events`}.
          </p>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute -top-12 right-0 text-white p-2 hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-white rounded-xl overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={selectedImage.imageUrl || "/placeholder.svg"}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                  <div
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedImage.status)}`}
                  >
                    {getStatusIcon(selectedImage.status)}
                    <span className="capitalize">{selectedImage.status}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{selectedImage.date}</p>
                <p className="text-gray-700">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
