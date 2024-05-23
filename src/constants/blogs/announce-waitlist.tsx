import type { BlogSchema } from "@/types";

export const announceWaitlist: BlogSchema = {
  title: "Announcing our waitlist",
  description: "Our waitlist is live now",
  author: {
    name: "Suhas Sumukh",
    designation: "Co-founder & CEO",
    image: "/team/suhas.png",
    twitter: "https://x.com/suhasasumukh",
    linkedin: "https://www.linkedin.com/in/suhasasumukh"
  },
  slug: "announcing-our-waitlist",
  category: {
    name: "Announcement",
    slug: "/blog/announcement"
  },
  date: new Date("2024-05-23"),
  image: "/blog/announcing-our-waitlist.png",
  content: "We are excited to announce that we are opening our waitlist for our upcoming product. We are building a platform that will help you to manage your tasks and projects in a more efficient way. We are looking for early adopters who are interested in trying out our product and providing us with feedback. If you are interested in joining our waitlist, please sign up below. We will be sending out invites to the waitlist in the coming weeks. We are looking forward to hearing from you!"
}