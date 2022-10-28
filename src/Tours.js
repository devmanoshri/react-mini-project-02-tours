import React from "react";
import Tour from "./Tour";
const Tours = ({ toursList, removeTour }) => {
  //console.log(toursListProp);

  return (
    <section>
      <div className="title">
        <h2>Our Tour List</h2>
        <div className="underline"></div>
      </div>
      <div>
        {toursList.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
