import "./App.css";
import { Inputs } from "./components/Inputs/Inputs";
import List from "./components/List/List";

function App() {
  const ListCars = [
    {
      id: 1,
      car: "BMW",
      url: "https://cdn.kodixauto.ru/media/image/60c1da12de230d550649af52",
    },
    {
      id: 2,
      car: "AUDI",
      url: "https://www.iphones.ru/wp-content/uploads/2022/02/martin-katler-c4Z7V84-gzY-unsplash.jpg",
    },
    {
      id: 3,
      car: "FORD",
      url: "https://wroom.ru/i/cars2/ford_mondeo_4.jpg",
    },
    {
      id: 4,
      car: "LADA",
      url: "https://autoreview.ru/images/Article/1699/Article_169924_860_575.jpg",
    },
  ];
  return (
    <div className="App">
      <Inputs />
      <List ListProps={ListCars} />
    </div>
  );
}

export default App;
