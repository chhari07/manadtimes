"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Authors = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
        );
        const data = await response.json();

        if (Array.isArray(data.articles)) {
          const fetchedTestimonials = data.articles.map(
            (article: { title: string; author: string | null }) => ({
              quote: article.title || "No Quote Available", // Fallback quote
              designation: "Health Writer", // Placeholder
              src: "https://via.placeholder.com/150", // Placeholder image
            })
          );
          setTestimonials(fetchedTestimonials);
        } else {
          console.error("No articles found in the API response");
        }
      } catch (error) {
        console.error("Error fetching the API:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="text-3xl mt-28 mb-5 lg:mt-1 md:text-7xl font-bold dark:text-white text-center">
        Top Authors
      </div>
      {/* Ensure testimonials are loaded before rendering */}
      {testimonials.length > 0 && (
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      )}
    </div>
  );
};

export default Authors;
