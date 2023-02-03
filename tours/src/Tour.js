import React, { useState } from 'react';

const Tour = ({id,name,info,image,price,removeTour}) => {

 const [read,setRead]=useState(false)
const readMore=()=>
{
  if(read==true)
  setRead(false)

  else if(read==false)
  setRead(true)

  return(read)

}
const remove=()=>
{
  return(removeTour(id))
}


  return <>

     <article class="card">
       <div class="image-container">
<img src={image} alt={name}/>
</div>
<footer>

<div class="name-price">
<span class="name">{name}</span>
<span class="price">${price}</span>
</div>

<p class="info-paragraph">{read?true&&info:info.slice(0,250)}<span><button type="button" onClick={readMore} class="more-less">{read?true&&'Show Less':'...Read More'}</button></span></p>
<div class="notInterested-container">
<button type="button" class="notInterested-button" onClick={remove}>Not Interested</button>
</div>

</footer>

     </article>
     
  </>;
};

export default Tour;
