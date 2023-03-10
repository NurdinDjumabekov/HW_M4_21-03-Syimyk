import axios from "axios";
import { useEffect } from "react";
// import React, { useState } from "react";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const AboutPokemon = () => {
  //   const [base, setBase] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => res.data)
      .then((info) => console.log(info));
  });
  return (
    <>
      <p>tyguhioj</p>
    </>
  );
};
export default AboutPokemon;
