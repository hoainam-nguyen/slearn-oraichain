// import React from "react";
// import tw from "twin.macro";

// const CourseBox = tw.div`
//   p-4
//   bg-white
//   rounded-lg
//   shadow-md
// `;

// const CourseName = tw.h3`
//   text-lg
//   font-bold
//   mb-2
// `;

// const CourseDescription = tw.p`
//   text-gray-600
// `;

// const CourseLink = tw.a`
//   inline-block
//   mt-2
//   text-blue-500
//   hover:text-blue-700
// `;

// const CourseList = ({ courses }) => {
//   return (
//     <div>
//       {courses.map((course) => (
//         <CourseBox key={course.name}>
//           <CourseName>{course.name}</CourseName>
//           <CourseDescription>{course.description}</CourseDescription>
//           <CourseLink href={course.link}>Learn more</CourseLink>
//         </CourseBox>
//       ))}
//     </div>
//   );
// };

// export default CourseList;


import React from "react";
import tw from "twin.macro";

const CourseBox = tw.div`
  relative
  p-4
  bg-white
  rounded-lg
  shadow-md
  transition-all
  duration-300
  hover:shadow-lg
  hover:-translate-y-1
  hover:scale-105
`;

const CourseBadge = tw.div`
  absolute
  top-0
  left-0
  bg-blue-500
  text-white
  font-bold
  text-sm
  px-2
  py-1
  rounded-tr-lg
  rounded-bl-lg
`;

const CourseName = tw.h3`
  text-lg
  font-bold
  mb-2
  truncate
`;

const CourseDescription = tw.p`
  text-gray-600
  text-sm
  mb-2
  truncate
`;

const CourseLink = tw.a`
  inline-block
  text-blue-500
  hover:text-blue-700
`;

const Title = tw.h1 `text-2xl font-bold mb-4`;

const CourseList = ({ courses }) => {
  return (
    <div >
      <Title>Courses</Title>
      {courses.map((course, index) => (
        <div className="course-sumary">
          <CourseBox
            key={course.name}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {/* <CourseBadge>New!</CourseBadge> */}
            <CourseName>{course.name}</CourseName>
            <CourseDescription>{course.discription}</CourseDescription>
            <CourseLink href={course.link}>Learn more</CourseLink>
          </CourseBox>
        </div>

      ))}
    </div>
  );
};

export default CourseList;
