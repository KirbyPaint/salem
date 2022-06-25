import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getEvents } from "../../models/event.server";
import { Container } from "../../styles/styles";

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  events: Awaited<ReturnType<typeof getEvents>>;
};

export const loader = async () => {
  return json<LoaderData>({
    events: await getEvents(),
  });
};

export default function Events() {
  const { events } = useLoaderData() as LoaderData;
  return (
    <main>
      <span className="content-center content-between text-center text-xl">
        <h1>Events</h1>
      </span>
      {events.map((event) => (
        // eslint-disable-next-line react/jsx-key
        <Container>
          <div key={event.slug}>
            <div className="mb-2 text-xl font-bold text-gray-900">
              {event.title}
            </div>
            <p className="text-base text-gray-700">{event.location}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="leading-none text-gray-900">{event.organizer}</p>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        </Container>
      ))}
    </main>
  );
}
