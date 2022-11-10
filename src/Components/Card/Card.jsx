import React from 'react'
import {BsFillCheckCircleFill} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import "./Card.css"
function Card(props) {
  return (
    <div className='mt-2'>
      <div className="card top-cards">
  <img src={props.imge1}class="card-img-top" alt="..." />
  <div className="author-user  text-start z-index" >
    <img src={props.imge2} alt="" />
    <BsFillCheckCircleFill className='icon fs-5'/>
  </div>
  <div className="card-body text-start">
    <h5 className="card-title">Olivia Jenar</h5>
    <span className='text-danger '>@Jenar</span>
    <div className="row  rounded mt-2" style={{background:"#e5e5e5"}} >
        <div className="col-6 ">
<span className='fw-lighter'>Followers</span>
<h4>2941</h4>
        </div>
        <div className="dropup col-6 my-2 text-end  align-items-center">
            <button className="btn dropbtn  text-white">Follow</button>
            <div className="dropup-content">
            <ul className="dropup-content list-unstyled text-center fs-4">
                <li>
                    <a href="http://" target="_blank">
                        <AiFillTwitterCircle className='icoo-color'/>
                    </a>
                </li>
                <li>
                    <a href="http://" target="_blank" >
                        <AiOutlineInstagram className='icoo-color'/>
                    </a>
                </li>
                <li>
                    <a href="http://" target="_blank" >
                        <BsFacebook className='icoo-color'/>
                    </a>
                </li>
            </ul>
          
            </div>
        </div>
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Card
