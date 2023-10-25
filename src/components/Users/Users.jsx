const Users = () => {
  return (
    <>
      Користувачі
      <button type="button" onClick={console.log("showModal")}>
        Додати
      </button>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Пошук користувача"
      ></input>
      <>List Users</>
    </>
  );
};

export default Users;
