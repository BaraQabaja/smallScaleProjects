import React, { useState, useEffect } from "react";
import "./index.css";
import Loading from "./Loading";
import Tours from "./Tours";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [empty,setEmpty]=useState(false)
  // const [fetch,setFetch]=useState(true)
  
  const removeTour=(id)=>
{
  const newTour=tours.filter((tour)=>tour.id!==id)
  setTours(newTour)
 
  tours.length===1?setEmpty(true):setEmpty(false);

 
}
  const fetchdata = async () => {
    setEmpty(false);
    setLoading(true);
    try {
      
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  if(loading)
  {
    return(<Loading/>)
  }
 

  return (
    <div class="all">
      <Tours tours={tours} removeTour={removeTour} empty={empty} fetchdata={fetchdata}/>
    </div>
  );
}

export default App;
