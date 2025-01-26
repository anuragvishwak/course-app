import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "./FirebaseConfig";

function Products() {
  const [coursesDetails, setcoursesDetails] = useState([]);

  async function gatheringcoursesDetails() {
    try {
      const courseDetails = await getDocs(
        collection(database, "course_details")
      );

      let multipleArray = courseDetails.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setcoursesDetails(multipleArray);
      console.log("Fetched Data:", multipleArray);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  }

  useEffect(() => {
    gatheringcoursesDetails();
  }, []);

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {coursesDetails.map((course) => (
        <div className="bg-white border border-gray-300 p-3 rounded-xl" key={course.id}>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold">{course.courseName}</p>
            <p className="text-[#333333] bg-gray-50 py-1 px-4 rounded-full">
              {course.courseLevel}
            </p>
          </div>

          <p>{course.courseType}</p>

          <p>{course.courseDuration}</p>

          <div className="bg-blue-50 p-3 rounded-xl border border-blue-400 my-3">
            <p className="font-semibold text-blue-500">Description</p>
           <p className="text-sm text-blue-400 line-clamp-2">
           {course.courseDescription}
           </p>
          </div>

          <div className="flex justify-between items-center">
            <p>{course.coursePrice}</p>
            <button className="text-white bg-[#333333] px-4 py-1 rounded-full">
              Enroll
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
