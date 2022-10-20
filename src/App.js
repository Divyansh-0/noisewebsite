import "./App.css";
import Img from "./components/Img";
import Noise from "./components/noise/Noise";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      {/* <Image height={"250px"} weight={"250px"} /> */}
      <Img />
      <Noise />
    </Fragment>
  );
}

export default App;
