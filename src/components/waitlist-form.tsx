import { HeroInput } from "./hero-input";
import { useState } from "react";
import supabase from "@/lib/supabase";
import { toast } from "sonner";
import useDimension from "@/lib/hooks/useDimension";
import ConfettiExplosion from 'react-confetti-explosion';

export default function WaitlistForm() {
  const { width, height } = useDimension()
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    toast.loading("Adding you to the waitlist...");
    const { error } = await supabase.from("waitlist").insert({ email });
    if (error) {
      if (error.code == "23505") {
        toast.info("You're already on the waitlist!");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.success("You're on the waitlist!");
      setSuccess(true);
      setEmail("");
    }
    toast.dismiss();
  };

  return (
    <div className="px-2 lg:px-0 w-full flex justify-center items-center z-20">
      <HeroInput
        placeholders={placeholders}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        onSubmit={(e) => handleSubmit(e)}
        type="email"
        id="waitlist-form"
      />
      <div className="absolute top-20 left-1/2 -translate-x-1/2">
        {success && <ConfettiExplosion width={width} height={height} duration={3000} particleCount={200} onComplete={() => setSuccess(false)} />}
      </div>
    </div>
  );
}

const placeholders = ["Join the waitlist..."];
