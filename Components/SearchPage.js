import React from 'react';
import CourseCart from './CourseCart';

function SearchPage() {


  return (
    <main
      className="flex h-[calc(100vh-79px)] snap-y snap-mandatory overflow-scroll overflow-x-hidden scroll-smooth transition delay-150 duration-1000 ease-in-out w-full max-w-[calc(1440px-200px)] items-center justify-evenly gap-y-[6rem] gap-x-4 py-11 lg:justify-around flex-wrap mx-auto">
      {Array.from(Array(15), (_, index) => index + 1).map((index) => (
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

export default SearchPage;