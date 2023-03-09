import { useEffect, useState } from "react";
import "./App.css";
import { fetchPokemons } from "./Api/FetchPokemos";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import BtnsPagination from "./components/Btns_pagination/Btns_pagination";

function App() {
  const [newlist, setNewlist] = useState([]);
  const [page, setPage] = useState(0);
  // console.log(page, "p");
  useEffect(() => {
    fetchPokemons(setNewlist, page);
  }, [page]);
  // console.log(newlist);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="block_one">
          <BtnsPagination setPage={setPage} page={page} />
        </div>
        {newlist.map((card, index) => {
          // console.log(card.url);
          return <PokemonCard key={index} card={card} />;
        })}
        <div className="block_two">
          <BtnsPagination setPage={setPage} page={page} />
        </div>
      </div>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";
// import "./App.css";
// import { fetchPokemons } from "./Api/FetchPokemos";

// function App() {
//   const [theme, setTheme] = useState("light");
//   const [newlist, setNewlist] = useState([]);
//   const handleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//   };
//   useEffect(() => {
//     fetchPokemons(setNewlist);
//   }, []);
//   console.log(newlist, "list");
//   return (
//     <div>
//       <div className={`app ${theme}`}>
//         start
//         <button onClick={handleTheme}>start</button>
//       </div>
//     </div>
//   );
// }

// export default App;
