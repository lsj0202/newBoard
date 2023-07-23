import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import O from "../../pages/images/png/1.png";
import T from "../../pages/images/png/2.png";
import F from "../../pages/images/png/4.png";
import Fi from "../../pages/images/png/5.png";

const contentStyle: React.CSSProperties = {
  height: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#e4e4e4",
};

const App: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <Image src={O} alt="1" width={200} height={200} />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image src={T} alt="2" width={200} height={200} />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image src={Fi} alt="3" width={200} height={200} />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image src={F} alt="4" width={200} height={200} />
      </h3>
    </div>
  </Carousel>
);

export default App;
