import React from 'react'
import { Link } from "react-router-dom";

function NaviLink(props) {
  return (
    <div >
        <Link className= 'my-2 text-lg font-bold hover:underline active:underline mx-4'  to={props.url}>{props.linkname}</Link>
    </div>
  )
}

export default NaviLink