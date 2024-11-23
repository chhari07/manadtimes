"use client";

import Link from "next/link";
import courseData from "../data/musics_courses.json";
import { Button } from "./ui/moving-boards";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <section className="py-12 bg-black">
      <div className="text-center">
        <h2 className="mt-20 md:mt-0 text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn with the best
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
        {featuredCourses.map((course: Course) => (
          <div
            key={course.id}
            className="flex justify-center group" // Apply group for hover
          >
            <div className="relative rounded-lg shadow-lg overflow-hidden p-6 bg-gray-800 group-hover:bg-gray-700 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white group-hover:text-neutral-100">
                {course.title}
              </h3>
              <p className="mt-2 text-white group-hover:text-neutral-300">
                {course.description}
              </p>
              <p className="mt-2 text-white group-hover:text-neutral-300">
                Price: ${course.price.toFixed(2)}
              </p>
              <Link href={`/courses/${course.slug}`} passHref>
                <Button className="bg-black text-white border-neutral-200 px-1 py-2 rounded-full group-hover:bg-neutral-800">
                  View Courses
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link href="/courses" passHref>
          <Button className="bg-black text-white border-neutral-200 px-6 py-3 rounded-full">
            View All Courses
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCourses;
