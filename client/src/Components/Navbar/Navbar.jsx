import React from 'react'
import randomphoto from "../../Assets/randomphoto.jpeg"

function Navbar() {
  return (
    <div>
      helloo parthiv
      <nav>
<ul>
      <div className="img">
        <img src={randomphoto} alt="" srcset="" />
      </div>

      <div className='elements'>
        <p>Jobs</p>
        <p>Internships</p>
      </div>


      <div className='search'>
        <p>search</p>
        <i className="bi bi-search"></i>
        <input type="search" placeholder="search" />
      </div>

      <div className='auth'>
        <button>login <i className="bi bi-chevron-down"></i></button>
        <button>register <i className="bi bi-chevron-down"></i></button>
      </div>

      <div className="flex mt-7">
        hire talent
      </div>

      <div className="admin">
        <button>admin</button>
      </div>

</ul>
      </nav>
    </div>
  )
}

export default Navbar
