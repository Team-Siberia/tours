import React, { useState } from 'react'


function TourCard({ tour, id, handleRemove }) {

  const [val, setVal] = useState(null);

  const toggleShow = (id) => {
    setVal(id === val ? null : id);
  };

  return (
    <section className="w-10/12 md:w-4/6 border-2 min-h-0 flex flex-col rounded-md overflow-hidden shadow-md">
      <img
        src={tour.image}
        className="w-full h-96 object-cover"
        alt="Tour pic"
      />
      <div className="w-full min-h-0 p-10 flex flex-col">
        <div className="flex justify-between w-full mb-5">
          <h2 className="text-2xl font-bold">{tour.name}</h2>

                    <button className="text-green-900 bg-green-100 rounded-md py-1 px-2 whitespace-nowrap"> 
                        {"$ " + tour.price} 
                    </button>
                </div>
                 <p>
                    {val === tour.id ? tour.info : `${tour.info.substring(0, 250)}...`}
                    <span
                      onClick={() => toggleShow(tour.id)}
                      className="text-blue-300 ml-2 cursor-pointer"
                    >
                      {val === tour.id ? "Show Less" : "Show More"}
                    </span>
                  </p>
                <button className="border-red-500 text-red-500 border w-60 self-center m-5 rounded-md shadow p-1" onClick={() => handleRemove(id)}>
                    NOT INTERESTED
                </button>
            </div>
            
        </section>
    )

}

export default TourCard;