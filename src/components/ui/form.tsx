import { useState } from "react";
import { PostgrestError } from "@supabase/supabase-js";
import supabase from "../utils/supabaseClient";

export default function Form() {
    const [input, setInput] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsLoading(true);
        console.log("input",input)
        const { error }: { data: any; error: PostgrestError | null } = await supabase
            .from('waitlist')
            .insert({email: input});
        if (error) {
            setError(error.message);
        } else {
            setError('');
            setInput('');
        }
        setIsLoading(false);
    };

    return (
        <div className="bg-transparent ">
            <form onSubmit={handleSubmit} className="bg-transparent">
                <div className="relative bg-transparent">
                    <input
                        type="email"
                        id="default-search"
                        className="block w-full p-3 lg:p-4 ps-4 text-sm text-gray-900 rounded-full focus:ring-transparent dark:bg-[#242424] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:font-Inter"
                        placeholder="Enter your email..."
                        required
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" className="text-white absolute end-2.5 bottom-1.5 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">
                        <img src="/send.svg" className='lg:w-6 w-4 bg-transparent' alt="long-arrow-right" />
                    </button>
                </div>
            </form>
            {/* {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>} */}
        </div>
    );
}
