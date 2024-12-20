"use client";

import { PlaceholdersAndVanishInput } from "../components/ui/placeholder-and-vanish-input"
export function SearchPages() {
  const placeholders = [
    " INDIA NEWS  ",
    " WORLD NEWS ",
    " TECH NEWS",
    " LIFE STYLE NEWS",
    " RANDOM NEWS",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
       Search  ?
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
