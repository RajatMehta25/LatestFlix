import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [search, onChangeSearch] = useState("");
  const [data, setData] = useState([]);
  const [iframeLink, setIframeLink] = useState("");
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/RajatMehta25/TV/main/Movie.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        onChangeSearch("");
      });
  }, []);

  const searchMovie = () => {
    let newData = data?.filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase()));

    // setFilteredData(newData ?? data);
    return newData;
  };

  return (
    <div className="Outer">
      <div className="margin">
        <input
          onChange={(e) => {
            // if (e) {
            onChangeSearch(e.target.value);
            // searchChannel(e);
            // } else {
            // onChangeSearch(e);
            // setFilteredData(data);
            // }
          }}
          value={search}
          placeholder="Search Content Name"
        />
      </div>
      <div className="text">Download Links will work for 24 hours only , after posting link</div>

      <div className="CardsContainer">
        {searchMovie(data)?.map((ele) => (
          <div className="MovieCard">
            <img src={ele.image} style={{ border: "1px solid white", borderRadius: "15px" }} width="200" height="200" />
            <div className="text">{ele.name}</div>
            <button>
              <a style={{ textDecoration: "none", color: "white" }} href={ele.downloadLink}>
                Download
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
