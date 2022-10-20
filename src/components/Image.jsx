import React, { useRef } from "react";
import "./image.scss";

const Image = (props) => {
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");

  function changeImgArr(arr, exp = 1) {
    arr = arr
      .map((elements) =>
        new Array(exp).fill(
          elements.map((newelements) => new Array(exp).fill(newelements)).flat()
        )
      )
      .flat();
    let heightImg = arr.length,
      weightImg = arr[0].length;
    arr = arr.flat().flat();
    const img = new ImageData(
      Uint8ClampedArray.from(arr),
      weightImg,
      heightImg
    );
    context.putImageData(img, 0, 0);
  }

  function renderArr(weightImg, heightImg) {
    return new Array(heightImg)
      .fill(0)
      .map(() =>
        new Array(weightImg)
          .fill(0)
          .map(() => new Array(4).fill(0).map(() => Math.random() * 255))
      );
  }
  return (
    <div>
      <canvas
        className="Canvas"
        ref={canvasRef}
        height={props.height}
        width={props.width}
      />
      <br />
      <button onClick={() => changeImgArr(renderArr(50, 50), 5)}>
        Change Img
      </button>
    </div>
  );
};

export default Image;
