import React, { useEffect, useRef } from 'react';
import CourseCart from '../CourseCart';

function TopTutors() {
  const scrollRef = useRef(null);

  return (
    <main ref={scrollRef}
      className="flex snap-y snap-mandatory overflow-y-scroll w-full max-w-[calc(1440px-250px)] items-center justify-evenly gap-y-[6rem] gap-x-4 py-16 lg:justify-around flex-wrap mx-auto">
      {Array.from(Array(9), (_, index) => index + 1).map((index) => (
        <CourseCart
          key={index}
          href={'/tutors'}
          topRightTitle={'top tutors'}
          coverImg="/Images/CourseCart/girl-using-tablet.png"
          tutorName={'Radhakishan J.'}
          countryLogo={'/Images/CourseCart/united-kingdom.svg'}
          tutorImg={'/Images/CourseCart/girl-looking-up.png'}
        />
      ))}
    </main>
  )
}

export default TopTutors;