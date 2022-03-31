import React, { useEffect, useRef, useState } from 'react';
import CourseCart from '../CourseCart';
import { useScrollPosition } from "../../Hook/UseScrollPosition";

function TopTutors() {
  const scrollRef = useRef(null);
  // const [curPos, setCurPos] = useState(null);
  // const [prevPos, setPrevPos] = useState(null);
  let oldScroll = 0;
  let newScroll = 0;

  // function handleScroll() {
  //   if (curPos > prevPos) {
  //     window.scrollBy(0, 550);
  //     console.log("yes1");
  //     setCurPos(null);
  //     setPrevPos(null);
  //   }
  //   else if (prevPos > curPos) {
  //     window.scrollBy(0, -550);
  //     console.log("yes2");
  //     setCurPos(null);
  //     setPrevPos(null);
  //   }

  //   console.log("No");
  // }


  // console.log(curPos, prevPos);
  const handleScroll = () => {
    newScroll = window.pageYOffset;
    if (oldScroll < newScroll) {
      console.log("Up");
      window.scrollBy(0, 600);
      // oldScroll = 0;
      // newScroll = 0;
    }
    else if (oldScroll > newScroll) {
      console.log("Down");
      window.scrollBy(0, -600);
    }

    oldScroll = newScroll;
  }

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

  const betterExpensive = throttle(handleScroll, 2000);


  useEffect(() => {
    window.addEventListener('scroll', betterExpensive)

    return () => window.removeEventListener('scroll',handleScroll);
  }, [newScroll, oldScroll])

  // useScrollPosition(({ prevPos, currPos }) => {
  //   const isUp = currPos.y < prevPos.y
  //   setCurPos(currPos.y);
  //   setPrevPos(prevPos.y);
  //   handleScroll();
  // }, [curPos, prevPos], null, true, 500)

  return (
    <main ref={scrollRef}
      className="flex snap-y snap-mandatory overflow-y-auto w-full max-w-[calc(1440px-250px)] items-center justify-evenly gap-y-[6rem] gap-x-4 py-16 lg:justify-around flex-wrap mx-auto">
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