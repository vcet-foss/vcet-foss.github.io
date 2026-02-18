import React from "react";
import { NavLink } from "react-router-dom";
import RevealOnScroll from "../components/RevealOnScroll";
import GlitchText from "../components/GlitchText";

// type EventType = "Workshop" | "Meetup" | "Conference" | "Webinar" | "All";

// interface Event {
//     id: string;
//     title: string;
//     date: string;
//     type: EventType;
//     location: string;
//     description: string;
//     registrationLink?: string;
//     status: "upcoming" | "past";
//     attendees?: number;
// }

// Sample data - replace with actual data source
// const EVENTS: Event[] = [
//     {
//         id: "1",
//         title: "Open Source Workshop: Git & GitHub",
//         date: "2026-03-15",
//         type: "Workshop",
//         location: "VCET Campus, Lab 301",
//         description: "Learn the fundamentals of Git version control and GitHub collaboration. Hands-on session covering branching, pull requests, and open source contribution workflows.",
//         registrationLink: "#",
//         status: "upcoming",
//         attendees: 45,
//     },
//     {
//         id: "2",
//         title: "FOSS Community Meetup",
//         date: "2026-02-20",
//         type: "Meetup",
//         location: "VCET Auditorium",
//         description: "Monthly community gathering to discuss ongoing projects, share experiences, and plan future initiatives. Open to all students and faculty.",
//         status: "past",
//         attendees: 32,
//     },
// ];

const Events: React.FC = () => {

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 jersey-25-regular">
                            <GlitchText text="Events" speed={40} />
                        </h1>
                        <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
                            Join us for workshops, meetups, and conferences. Learn, connect, and grow with the FOSS community.
                        </p>
                    </RevealOnScroll>
                </div>

                {/* Filter */}
                {/* <div className="mb-12 border border-white/10 bg-white/[0.02] p-5">
                    <div className="flex items-center gap-3 mb-3">
                        <Filter className="w-4 h-4 text-gray-500" />
                        <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                            Filter by Type
                        </span>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {(["All", "Workshop", "Meetup", "Conference", "Webinar"] as EventType[]).map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`px-4 py-2 text-sm font-mono border whitespace-nowrap transition-all duration-200 ${filterType === type
                                        ? "bg-foss-green text-black border-foss-green shadow-[0_0_12px_rgba(0,255,127,0.2)]"
                                        : "text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div> */}

                {/* Upcoming Events */}
                {/* {upcomingEvents.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-foss-green"></span>
                            Upcoming Events
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {upcomingEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    </section>
                )} */}

                {/* Past Events */}
                {/* {pastEvents.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-gray-600"></span>
                            Past Events
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pastEvents.map((event) => (
                                <EventCard key={event.id} event={event} compact />
                            ))}
                        </div>
                    </section>
                )} */}

                {/* Empty State */}
                {/* {filteredEvents.length === 0 && (
                    <div className="text-center py-20 border border-dashed border-white/10">
                        <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-500 font-mono text-lg mb-2">
                            No {filterType !== "All" ? filterType.toLowerCase() : ""} events found
                        </p>
                        <p className="text-gray-600 text-sm font-sans">
                            Check back soon for upcoming events!
                        </p>
                    </div>
                )} */}

                {/* Call to Action */}
                <RevealOnScroll delay={200}>
                    <div className="mt-16 border border-foss-green/20 bg-foss-green/[0.05] p-8 text-center">
                        <h3 className="text-2xl font-display font-bold text-white mb-4 jersey-25-regular">
                            Want to organize an event?
                        </h3>
                        <p className="text-gray-400 font-sans mb-6 max-w-2xl mx-auto">
                            We're always looking for community members to lead workshops and talks.
                            Have an idea? Let's make it happen!
                        </p>
                        <NavLink
                            to="mailto:vcetopensource@gmail.com"
                            className="inline-block px-6 py-3 bg-foss-green text-black font-mono text-sm hover:bg-foss-green/90 transition-colors"
                        >
                            Propose an Event
                        </NavLink>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

// Event Card Component - Commented out as event display is not yet implemented
// const EventCard: React.FC<{ event: Event; compact?: boolean }> = ({
//     event,
//     compact = false,
// }) => {
//     const isPast = event.status === "past";
//     const eventDate = new Date(event.date);
//     const formattedDate = eventDate.toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//     });
//
//     return (
//         <div
//             className={`border border-white/10 bg-white/[0.02] p-6 hover:border-foss-green/30 transition-all ${isPast ? "opacity-70" : ""
//                 }`}
//         >
//             {/* Type badge */}
//             <div className="flex items-center justify-between mb-4">
//                 <span className="px-2 py-1 text-xs font-mono bg-foss-green/10 text-foss-green border border-foss-green/20">
//                     {event.type}
//                 </span>
//                 {isPast && (
//                     <span className="text-xs text-gray-600 font-mono">Past Event</span>
//                 )}
//             </div>
//
//             {/* Title */}
//             <h3 className="text-xl font-display font-bold text-white mb-3">
//                 {event.title}
//             </h3>
//
//             {/* Date & Location */}
//             <div className="space-y-2 mb-4 text-sm text-gray-400 font-mono">
//                 <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4 text-foss-green" />
//                     {formattedDate}
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4 text-foss-green" />
//                     {event.location}
//                 </div>
//                 {event.attendees && (
//                     <div className="flex items-center gap-2">
//                         <Users className="w-4 h-4 text-foss-green" />
//                         {event.attendees} attendees
//                     </div>
//                 )}
//             </div>
//
//             {/* Description */}
//             {!compact && (
//                 <p className="text-gray-400 font-sans text-sm mb-4 leading-relaxed">
//                     {event.description}
//                 </p>
//             )}
//
//             {/* Registration Link */}
//             {event.registrationLink && !isPast && (
//                 <a
//                     href={event.registrationLink}
//                     className="inline-flex items-center gap-2 text-foss-green hover:text-foss-green/80 font-mono text-sm transition-colors"
//                 >
//                     Register Now <ExternalLink className="w-3 h-3" />
//                 </a>
//             )}
//         </div>
//     );
// };

export default Events;
