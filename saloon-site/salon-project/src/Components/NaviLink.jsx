import React from 'react'

function NaviLink(props) {
  return (
    <div >
        <a className= 'm-2' href={props.url} >{props.linkname} </a>
    </div>
  )
}

export default NaviLink