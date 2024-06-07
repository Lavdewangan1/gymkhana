import React from "react";
import DemoVideo from "../components/DemoVideo";
import Steps from "../components/Steps";
import Plans from "../components/Plans";
import WhoCan from "../components/WhoCan";
import HomeFront from "../components/HomeFront";


export default function HomePage() {
  return (
    <>
      <HomeFront />
      <WhoCan />
      <Steps />
      <DemoVideo />
      <Plans />
    </>
  );
}
