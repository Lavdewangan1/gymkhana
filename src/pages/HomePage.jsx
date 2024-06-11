import React from "react";
import { useEffect, useState } from "react";
import DemoVideo from "../components/DemoVideo";
import Steps from "../components/Steps";
import Plans from "../components/Plans";
import WhoCan from "../components/WhoCan";
import HomeFront from "../components/HomeFront";


export default function HomePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <HomeFront />
      <WhoCan />
      <Steps />
      {windowWidth > 1024 &&
        <DemoVideo />
      }
      <Plans />
    </>
  );
}
