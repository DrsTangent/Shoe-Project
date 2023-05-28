import React, { useState } from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from './footer';

function AddshoeScreen() {
  const [shoe, setshoe] = useState({
    brand: '',
    style: '',
    color: '',
    image: '',
    material: '',
    price: '', gender:''
  });

 const handleSubmit = async (event) => {
   // const response = await fetch("/mobile/",shoe);
   // console.log(response);
   const ok = fetch("/shoe/", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        brand: shoe.brand,
        style: shoe.style,
        color: shoe.color, 
        price: shoe.price,
        size: shoe.size,
        material: shoe.material,
        gender: shoe.gender,
        imageLink: shoe.image
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
console.log(ok)
 
// Converting to JSON
// .then(response => response.json())
 
// // Displaying results to console
// .then(json => console.log(json));
    
    console.log('shoe submitted:', shoe);
    // TODO: Add shoe to database or send data to backend
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setshoe((prevState) => ({
      ...prevState,
      [name]: value
    }));     
  }

  return (
   <div>
    <CustomNavbar />
     <div style={{width:'80%',marginLeft:'10%',marginRight:'10%',display:"flex",flexDirection:"column",justifyContent:'space-evenly'}}>
      <h1>Add a new Shoe</h1>
        <label style={{width:'70%',fontSize:18}}>
          Brand:</label>
          <input
           style={{height:30}}
            type="text"
            name="brand"
            value={shoe.brand}
            onChange={handleInputChange}
          />
        
        <label>
          style:
        </label>
          <input  style={{height:30}}
            type="text"
            name="style"
            value={shoe.style}
            onChange={handleInputChange}
          />
        
        <label>
          color:
        </label>
          <input  style={{height:30}}
            type="text"
            name="color"
            value={shoe.color}
            onChange={handleInputChange}
          />
        <label>
          size:
        </label>
          <input  style={{height:30}}
            type="text"
            name="size"
            value={shoe.size}
            onChange={handleInputChange}
          />
          <label>
          Gender:
        </label>
          <input  style={{height:30}}
            type="text"
            name="gender"
            value={shoe.gender}
            onChange={handleInputChange}
          />
        <label>
          Image:
        </label>
          <input  style={{height:30}}
            type="text"
            name="image"
            value={shoe.image}
            onChange={handleInputChange}
          />
        <label>
          Material:
        </label>
          <input  style={{height:30}}
            type="text"
            name="material"
            value={shoe.material}
            onChange={handleInputChange}
          />
        <label>
          Price:
        </label>
          <input  style={{height:30}}
            type="text"
            name="price"
            value={shoe.price}
            onChange={handleInputChange}
          />
       
        <button  style={{height:30, width:120,alignSelf:'center', margin:10, backgroundColor:'lightblue'}} onClick={()=>{handleSubmit()}}>Add Shoe</button>
      
    </div>
    <Footer />
   </div>
  );
}

export default AddshoeScreen;