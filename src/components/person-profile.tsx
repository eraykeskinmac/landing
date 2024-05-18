import { Icons } from "./icons"
import type { PersonProfile as PersonProfileProps } from "@/types"

export default function PersonProfile({ name, designation, image, twitter, linkedin }: PersonProfileProps) {
  return (
    <div className="max-w-[12rem]">
      <div className="w-full max-w-40 aspect-square rounded-lg overflow-hidden group">
        <img src={image} className="w-full group-hover:scale-110 duration-200 transition-all transform-gpu ease-in-out" alt={name} />
      </div>
      <h2 className="font-semibold text-lg mt-2">{name}</h2>
      <h3 className="text-muted-foreground">{designation}</h3>
      <div className="flex items-center gap-1 mt-1">
        <a href={twitter} target="_blank" className="grayscale hover:scale-110 duration-100 ease-in-out transition-all transform-gpu">
          <Icons.Twitter width={16} height={16} />
        </a>
        <a href={linkedin} target="_blank" className="grayscale hover:scale-110 duration-100 ease-in-out transition-all transform-gpu">
          <Icons.LinkedIn width={20} height={20} />
        </a>
      </div>
    </div>
  )
}