import React from 'react'
import "./Market_pip.css"
function Market_pip() {
  return (
    <div>
      <div className="pip w-100 mt-5  container-fluid">
<div className="row">
    <div className="col-7 text-start pt-2">
<h5 className='res_fss'><b>222 Collectables Found</b></h5>
    </div>
    <div className="col-5">
    <div class="dropdown">
  <button class="btn text-white float-end dropdown-toggle pt-3 pt-md-1 shadow-none p-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <b>sort by</b>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li  ><a class="dropdown-item text-white bbb1" href="#"><b>Price High to Low</b> </a></li>
    <li><a class="dropdown-item text-white bbb1" href="#"><b>Price Low to High</b> </a></li>
    <li><a class="dropdown-item text-white" href="#"><b>Newly Listed</b> </a></li>
  </ul>
</div>
    </div>
</div>
      </div>
    </div>
  )
}

export default Market_pip
