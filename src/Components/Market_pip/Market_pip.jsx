import React from 'react'
import "./Market_pip.css"
function Market_pip(props) {
  return (
    <div>
      <div className="pip w-100 mt-5  container-fluid">
        <div className="row">
          <div className="col-7 text-start pt-2 inner-title">
            <h5 className=''>{props?.length} Collectables Found</h5>
          </div>
          {/* <div className="col-5">
            <div class="dropdown">

              <a class="  float-end dropdown-toggle pt-3 pt-md-1 p-2 text-dark nav-link active" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                Sort By</a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li class="nav-item"><a class="nav-link" href="/auction">Profile</a></li>
                <li class="nav-item"><a class="nav-link" href="/discover-1">Edit Profile</a></li>

              </ul>

            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Market_pip
