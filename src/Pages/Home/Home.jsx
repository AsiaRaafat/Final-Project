import { useRecoilState } from "recoil";
import {$baseURL} from "../../recoilebstore"
import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [baseUrl, setbaseUrl] = useRecoilState($baseURL);
  const [homeProduct , setHomeProduct] = useState([]);
  useEffect(()=>{
    axios.get(`${baseUrl}/api/products`,{
      params: {
        populate: "*",
      },
    }).then((res)=>{
      // const slicedProducts = res.data.slice(0, 3); 
      setHomeProduct(res.data.data);
      // console.log(slicedProducts)
    })
    
  }, [])
  
  return (
    
    <div className="col-12 ">
      <div className="hero-section ">
      <img  src="src/assets/hero_section.webp" alt=" " />
      </div>
        <div className=" container d-flex overflow-x-hidden  imgdiv">
         <div className="col-12 col-md-6 col-lg-6  img4">
          <Link to="/">
            <img src="src/assets/natural .png" alt="" style={{width:"95%", height:"70%"}} />
          </Link>
            {/* <img src="src/assets/natural .png" alt="" style={{width:"95%", height:"70%"}} /> */}
         </div>
         <div className="col-12 col-md-6 col-lg-6  img5">
          <Link to="/makeup">
            <img src="src/assets/11.png" alt=""  style={{width:"100%" , height:"70%"}}/>
          </Link>
        </div>
        </div>
        <div className="container  section2" >
        <h1 className="text-center  ">Categories</h1>
        <br/>
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner"  style={{height:"88vh"}}>
        <div className="carousel-item active">
         <Link to="/makeup">
        <img src="src/assets/Make Up.png" className="d-block col-12" alt="..."/>
         </Link> 
        </div>
        <div className="carousel-item">
          <Link to="/skincare">
        <img src="src/assets/Skin Care (2).png" className="d-block  col-12 " alt="..." />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="">
        <img src="src/assets/eau de perfumes.png" className="d-block col-12" alt="..."/>
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="">
        <img src="src/assets/offers5.png" className="d-block  col-12" alt="..."  />
          </Link>
        </div>
       
  <button className="carousel-control-prev button1" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next button2" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
        </div>
</div>
        </div>
      <div className="container section3"> 
                <h1 className="text-center p-4">Our Products</h1>

      <div className="col-12 d-flex flex-wrap justify-content-center  section4">
        {
        homeProduct.map((el )=>{
          return(
          <div key={el.documentId} className="card">
          <div className="card" style={{width: "18rem"}}>
  <img src={`${baseUrl}`+ el .product_img[0].url } style={{objectFit:"contain"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{el.product_name}</h5>
    <p className="card-text">price : {el.product_price}.</p>
    {/* <Link to={`MakeUp/${el.id} `}  className="btn btn-primary"  > SHOW</Link> */}
     <button className="Show"><a href={`product/:${el.documentId}`} > Show Details</a></button>
  </div>
</div>
</div>
)
        })}

      </div>


      </div>
    </div>  
    
    
  )
}
