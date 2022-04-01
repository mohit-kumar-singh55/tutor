import React, { useEffect, useRef } from 'react';
import CourseCart from './CourseCart';

function SearchPage() {
  const scrollRef = useRef(null);
  let oldScroll = 0;
  let newScroll = 0;


  // Scrolling up and down on 'scroll' event
  const handleScroll = () => {
    newScroll = window.pageYOffset;

    if (oldScroll < newScroll) {
      console.log("Up");
      window.scrollBy(0, 600);                  // 600px in y Up
    }
    else if (oldScroll > newScroll) {
      console.log("Down");
      window.scrollBy(0, -550);                 // 550px in y Down
    }

    oldScroll = newScroll;
  }

  // throttled handleScroll so that it don't keep scrolling
  const throttle = (fn, limit) => {
    let flag = true;

    return function () {              // if any arguments also passed
      if (flag) {
        fn.apply(this);                         // if any arguments also passed
        flag = false;

        setTimeout(() => {
          flag = true;
        }, limit)
      }
    }
  }

  const throttledHandleScroll = throttle(handleScroll, 2000);

  // on which scrolling will start
  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll)

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [newScroll, oldScroll, throttledHandleScroll])


  return (
    <main ref={scrollRef}
      className="flex snap-y snap-mandatory overflow-y-auto w-full max-w-[calc(1440px-250px)] items-center justify-evenly gap-y-[6rem] gap-x-4 py-11 lg:justify-around flex-wrap mx-auto">
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

export default SearchPage;