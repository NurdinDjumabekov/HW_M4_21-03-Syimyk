import "./App.css";
import { Button } from "./components/Button/Button";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";

function App() {
  const postlist = [
    {
      id: 1,
      title: "Nurdin",
    },
    {
      id: 2,
      title: "Ruslan",
    },
    {
      id: 3,
      title: "Kairat",
    },
    {
      id: 4,
      title: "Alisher",
    },
  ];
  return (
    <div className="App">
      <Header />
      <List postlist={postlist} />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
