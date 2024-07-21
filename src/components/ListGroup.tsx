function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // const message = items.length === 0 ? <p>No items found</p> : null
  // const message = items.length === 0 && <p>No items found</p>
  
  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        {getMessage()}
      </>
    );

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
