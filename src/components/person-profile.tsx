import { Icons } from "./icons"
import type { PersonProfile as PersonProfileProps } from "@/types"

export default function PersonProfile({ name, designation, image, twitter, linkedin }: PersonProfileProps) {
  return (
    <div className="max-w-32">
      <img src={image} className="w-full aspect-square" alt={name} />
      <h2 className="font-semibold text-lg">{name}</h2>
      <h3 className="text-muted-foreground">{designation}</h3>
      <div className="flex items-center gap-2">
        <a href={twitter} target="_blank">
          <Icons.Twitter />
        </a>
        <a href={linkedin} target="_blank">
          <Icons.LinkedIn />
        </a>
      </div>
    </div>
  )
}