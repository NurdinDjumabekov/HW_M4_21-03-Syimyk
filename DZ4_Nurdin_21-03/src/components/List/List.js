import { TodoCard } from "../TodoCard/TodoCard";

function List({
  list,
  handleDone,
  handleDelete,
  search,
  searchInput,
  arrNew,
  currentEdit,
  setCurrentEdit,
  handleEdit,
  handleCancel,
}) {
  return (
    <>
      {searchInput.search === ""
        ? list.map((todo, index) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              handleDone={handleDone}
              handleDelete={handleDelete}
              currentEdit={todo.id === currentEdit}
              setCurrentEdit={setCurrentEdit}
              handleEdit={handleEdit}
              handleCancel={handleCancel}
            />
          ))
        : searchInput.arrNew.map((todo, index) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              handleDone={handleDone}
              handleDelete={handleDelete}
              currentEdit={todo.id === currentEdit}
              setCurrentEdit={setCurrentEdit}
              handleEdit={handleEdit}
              handleCancel={handleCancel}
            />
          ))}
    </>
  );
}

export default List;
