import React from "react";
import "./Poems.scss";
import Card from "../../components/Card/Card.jsx";

const Poems = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/poems`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching poems:", err));
  }, []);
  return (
    <div className="poemsPg">
      <div className="poemsTitle">
        <h1>Poems</h1>
        <p>
          Welcome to the Poems page. Here you can explore a collection of poems.
        </p>
      </div>

      <div className="poemsCtn">
        <div className="cardsCol">
          {data?.map((item) => (
            <Card
              key={item.id && item.id}
              image={item.image && item.image}
              link={item.id && `/poems/${item.id}`}
              description={item.description && item.description}
            />
          ))}
        </div>
        <div className="categoryCol">Category to come here</div>
      </div>
    </div>
  );
};

export default Poems;
