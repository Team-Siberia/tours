import React, { useState, useEffect } from "react";
import Loading from "./Components/Loading";

import Tours from "./Components/Tours";

function App() {

    const [tourData, setTourData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getTours = async() => {
            try {
                setLoading(true)
                const data = await (await fetch('https://course-api.com/react-tours-project')).json()
                setTourData(data)
                setLoading(false)
            } catch (error) {
                return error
            }
        }
        getTours()
    }, [])


    const handleRemove = (id) => {
        setTourData(tourData.filter(tour => tour.id !== id))
    }

    if(loading){
        return <Loading />
    }

    return tourData && (
        <main className="flex items-center w-full min-h-screen flex-col my-5 md:my-24 text-gray-700">

            <h1 className="font-black text-4xl border-b-4 border-blue-400 mb-10"> 
                Our Tours 
            </h1>

            {
                tourData.length > 0 ? 
                <Tours tours={tourData} handleRemove={handleRemove} /> : 
                <p className="text-2xl font-black text-center h-96 my-auto"> No more tours... </p>
            }
    
        </main>
    )
  
}

export default App;
