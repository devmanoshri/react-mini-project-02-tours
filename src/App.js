import React, { useState, useEffect } from "react";
import axios from "axios";
import Tours from "./Tours";
import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState("");

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        //const toursList = response.data;
        setTours(response.data);
        //console.log(toursList);
        setLoading(false);
      })
      .catch(() => {
        setError("No data found!");
        setTours([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      {/* {loading ? <h2>Loading...</h2> : null} */}
      {error ? error : null}
      {tours.length > 0 ? (
        <Tours toursList={tours} removeTour={removeTour} />
      ) : (
        <h2>no tours left</h2>
      )}
    </main>
  );
}

export default App;
