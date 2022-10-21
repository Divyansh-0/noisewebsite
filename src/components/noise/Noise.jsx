import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./noise.scss";

const Noise = () => {
  const [enteredOctave, setOctave] = useState("");
  const [enteredPersistance, setPersistance] = useState("");
  const [enteredlacunarity, setlacunarity] = useState("");
  const [enteredSeed, setSeed] = useState("");
  const [enteredFrequency, setFrequency] = useState("");
  const [enteredWavelength, setWavelength] = useState("");
  // const [enteredWarp, setWarp] = useState("");
  const [enteredRange, setRange] = useState("");

  // const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [isSelected, setSelected] = useState(false);

  const OctaveChange = (e) => {
    setOctave(e.target.value);
    console.log(e.target.value);
  };
  const PersistanceChange = (e) => {
    setPersistance(e.target.value);
    console.log(e.target.value);
  };
  const lacunarityChange = (e) => {
    setlacunarity(e.target.value);
    console.log(e.target.value);
  };
  const SeedChange = (e) => {
    setSeed(e.target.value);
    console.log(e.target.value);
  };
  const FrequencyChange = (e) => {
    setFrequency(e.target.value);
    console.log(e.target.value);
  };
  const WavelengthChange = (e) => {
    setWavelength(e.target.value);
    console.log(e.target.value);
  };
  // const WarpChange = (e) => {
  //   setWarp(e.target.value);
  //   console.log(e.target.value);
  // };
  const RangeChange = (e) => {
    setRange(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setOctave("");
    setPersistance("");
    setlacunarity("");
    setSeed("");
    setFrequency("");
    setWavelength("");
    // setWarp("");
    setRange("");

    setIsDisabled(true);
    // A function to make an Api Call
  };

  return (
    <div className="noise">
      <button className="noise-btn">Customize the image setting</button>
      <form className="form" onSubmit={submitHandler}>
        <label className="label">Octaves</label>
        <div className="field">
          <span>{enteredOctave}</span>
          <input
            type={"range"}
            className="input"
            max="8"
            min="1"
            step="1"
            onChange={OctaveChange}
            value={enteredOctave}
            disabled={isDisabled}
          ></input>
        </div>

        <label className="label">Persistance</label>
        <FontAwesomeIcon icon="fa-thin fa-circle-chevron-down" />
        <div className="field">
          <span>{enteredPersistance}</span>
          <input
            type={"range"}
            className="input"
            max="1"
            min="0.00"
            step="0.01"
            onChange={PersistanceChange}
            value={enteredPersistance}
            disabled={isDisabled}
          ></input>
        </div>
        <label className="label">lacunarity</label>
        <input
          type={"range"}
          className="input"
          onChange={lacunarityChange}
          value={enteredlacunarity}
          disabled={isDisabled}
        ></input>
        <label className="label">Seed</label>
        <input
          type={"number"}
          className="input"
          onChange={SeedChange}
          value={enteredSeed}
          disabled={isDisabled}
        ></input>
        <label className="label">Frequency</label>
        <div className="field">
          <span>{enteredFrequency}</span>
          <input
            type={"range"}
            max="32"
            min="1"
            step="1"
            className="input"
            onChange={FrequencyChange}
            value={enteredFrequency}
            disabled={isDisabled}
          ></input>
        </div>
        <label className="label">Wavelength</label>
        <div className="field">
          <span>{enteredWavelength}</span>
          <input
            type={"range"}
            min="0"
            step="128"
            max="2000"
            className="input"
            onChange={WavelengthChange}
            value={enteredWavelength}
            disabled={isDisabled}
          ></input>
        </div>
        {
          // <input
          //   type={"range"}
          //   className="input"
          //   onChange={WarpChange}
          //   value={enteredWarp}
          // ></input>
          <div className="dropdown">
            <div
              className="dropdown-btn"
              onClick={(e) => setSelected(!isSelected)}
            >
              Warp <FontAwesomeIcon icon="fa-thin fa-circle-chevron-down" />
              {isSelected && (
                <div className="dropdown-content">
                  <div className="dropdown-item">A</div>
                  <div className="dropdown-item">B</div>
                  <div className="dropdown-item">C</div>
                </div>
              )}
            </div>
          </div>
        }
        <label className="label">Range</label>
        <input
          type={"number"}
          className="input"
          value={enteredRange}
          onChange={RangeChange}
          disabled={isDisabled}
        ></input>
        {isDisabled && (
          <button onClick={(e) => setIsDisabled(!isDisabled)}>Edit</button>
        )}
        {!isDisabled && <button type="submit">Apply Changes</button>}
      </form>
    </div>
  );
};

export default Noise;
