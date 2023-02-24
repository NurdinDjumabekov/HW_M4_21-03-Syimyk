import { useState } from "react";
import Input from "../../components/Input/Input";
import List from "../../components/List/List";
import { Modal } from "../../components/Modal/Modal";
import NewButton from "../../components/NewButton/NewButton";
import todoListcss from "./TodoList.module.css";

function TodoList() {
  const [state, setState] = useState(false);
  const [title, setTitle] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      title: "Geeks",
      completed: false,
    },
    {
      id: 2,
      title: "ItBootcamp",
      completed: false,
    },
    {
      id: 3,
      title: "Codify Lab",
      completed: false,
    },
    {
      id: 4,
      title: "IT-RUN",
      completed: false,
    },
    {
      id: 5,
      title: "makers",
      completed: false,
    },
    {
      id: 6,
      title: "Neobis",
      completed: false,
    },
    {
      id: 7,
      title: "Codify Lab",
      completed: false,
    },
    {
      id: 8,
      title: "IT-Megacom",
      completed: false,
    },
    {
      id: 9,
      title: "Prolab",
      completed: false,
    },
    {
      id: 10,
      title: "Soft Club",
      completed: false,
    },
  ]);

  const handleShow = () => {
    setState(!state);
  };

  const handleChangeText = (event) => {
    setTitle(event.target.value);
  };
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState({
    search: "",
    arrNew: [],
  });

  const handleSearch = (e) => {
    const answer = list.filter((item) => {
      if (e.target.value === "") return list;
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchInput({
      search: e.target.value,
      arrNew: answer,
    });
  };

  const handleNewAdd = () => {
    setList((prevTodo) => {
      console.log(prevTodo);
      return [...prevTodo, { id: list.length + 1, title: title }];
    });
    setTitle("");
    handleShow();
  };

  const handleDone = (id) => {
    const currentIndex = list.findIndex((todo) => todo.id === id);
    list[currentIndex].completed = !list[currentIndex].completed;
    setList([...list]);
  };

  const handleDelete = (id) => {
    const currentIndex = list.findIndex((todo) => todo.id === id);
    let a = list.splice(currentIndex, 1);
    setList([...list]);
    console.log(a);
    console.log(list);
  };

  return (
    <div className={todoListcss.wrapper}>
      <Input
        placeholder={"search"}
        name={"search"}
        onChange={handleSearch}
        value={searchInput.search}
      />
      <div className={todoListcss.parent_btn}>
        <NewButton onClick={handleShow}>Добавить</NewButton>
      </div>
      {state && (
        <Modal handleShow={handleShow}>
          <h2>{title}</h2>
          <div className={todoListcss.parent_input_add}>
            <Input
              placeholder={"добавить"}
              name={"add"}
              onChange={handleChangeText}
              value={title}
            />
          </div>
          <div className={todoListcss.parent_btn_2}>
            <NewButton onClick={handleNewAdd}>Добавить</NewButton>
          </div>
          <button className={todoListcss.btn_close} onClick={handleShow}>
            close
          </button>
        </Modal>
      )}
      <List
        search={search}
        searchInput={searchInput}
        arrNew={searchInput.arrNew}
        handleDone={handleDone}
        list={list}
        handleDelete={handleDelete}
      />
    </div>
  );
}
export default TodoList;
