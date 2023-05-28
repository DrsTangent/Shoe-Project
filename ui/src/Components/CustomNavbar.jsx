import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
export default function CustomNavbar() {
  let navigate = useNavigate();
  return (
    <nav style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        height: "50px", 
        background: "black",
        color: "#fff",
        padding: "0 20px"
    }}> 
      <div style={{ fontWeight: "bold" }}>Hi! Kumail Raza</div>
      <div >
        <Link to="/admin/my-products"><VisibilityIcon style={{width:30, height:30,margin:10,color:'white'}} /></Link>
        <Link to="/admin/add-product" ><AddIcon style={{width:30, height:30, margin:10, color:'white'}} /></Link>
        
      </div>
    </nav>
  )
}
