import { prisma } from "~/db.server";

export type { Event } from "@prisma/client";

export async function getEvents() {
  const events = await prisma?.event?.findMany({});
  console.log(events);
  return [
    {
      slug: "event-1",
      title: "Event 1",
      date: new Date(),
      location: "Location 1",
      organizer: "Organizer 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      slug: "event-2",
      title: "Event 2",
      date: new Date(),
      location: "Location 2",
      organizer: "Organizer 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Pharetra diam sit amet nisl. Rhoncus dolor purus non enim praesent. Quisque non tellus orci ac. Ultrices sagittis orci a scelerisque purus semper eget. Ultricies leo integer malesuada nunc vel risus commodo viverra. Egestas dui id ornare arcu odio. Pulvinar neque laoreet suspendisse interdum consectetur. Maecenas accumsan lacus vel facilisis. Vitae turpis massa sed elementum tempus egestas sed sed.",
    },
  ];
}
