import { ArrowRight } from "lucide-react"

export default function AnnouncementBar() {
  return (
    <div className="bg-[#171F05] border-[#364C09] border border-b-0 rounded-full flex justify-between p-1 text-xs items-center gap-2 shine shine-hover hover:scale-105 duration-100 transition-transform transform-gpu ease-in-out cursor-pointer group">
      <div className="px-[0.35rem] py-[0.125rem] bg-[#5661F6] rounded-xl">New</div>
      <p>Announcing our waitlist</p>
      <ArrowRight size={14} className="-translate-x-1 group-hover:translate-x-0 duration-100 transition-transform transform-gpu ease-in-out" />
    </div>
  )
}