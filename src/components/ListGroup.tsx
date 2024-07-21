function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const message = items.length === 0 && <p>No items found</p>;

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        {message}
      </>
    );

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
