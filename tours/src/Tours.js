import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour,empty,fetchdata}) => {
console.log("empty ===>"+empty)
const refresh=()=>
{
  
  return fetchdata();
}
  const hi=empty?true&&<button class="refresh-btn" onClick={refresh}>Refresh</button>:''
  


  return(<><div class="header">
  <h1 class="title">Our Tours</h1>

</div>
{hi}
<div >
{tours.map((tour)=>{
  return<Tour key={tour.id} {...tour} tour={tour} removeTour={removeTour} />
})}
</div>

</>) ;
};

export default Tours;
