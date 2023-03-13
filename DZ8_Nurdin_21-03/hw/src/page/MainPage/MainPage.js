import { useEffect, useState } from "react";
import { fetchPokemons } from "../../Api/FetchPokemos";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import BtnsPagination from "../../components/Btns_pagination/Btns_pagination";
import { fetchPokemonsSort } from "../../Api/FetchPokemos";
function MainPage() {
  const [newlist, setNewlist] = useState([]);
  const [page, setPage] = useState(0);
  // console.log(page, "p");
  useEffect(() => {
    fetchPokemons(setNewlist, page);
  }, [page]);
  // console.log(newlist);
  const newSortPokemon = () => {
    fetchPokemonsSort(10, 20, "weight").then((list) => setNewlist(list));
  };

  return (
    <>
      <button onClick={newSortPokemon}>sort weight</button>
      <button onClick={() => fetchPokemonsSort(10, 20, "attack")}>
        sort attack
      </button>
      <button onClick={() => fetchPokemonsSort(10, 20, "speed")}>
        sort speed
      </button>
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
    </>
  );
}

export default MainPage;
