import React from 'react'
import HairCutSection from './SubPges/OurServices/HairCutSection'
import BeardSection from './SubPges/OurServices/BeardSection'
import HeraderOurServices from './SubPges/OurServices/HeraderOurServices'


function OurServices(props) {
  return (
    <>
        <HeraderOurServices modalVisible={props.modalVisible} content={props.modalContent}  />
        <HairCutSection modalVisible={props.modalVisible} content={props.modalContent}  />
        <BeardSection modalVisible={props.modalVisible} content={props.modalContent} />
    </>
  
  )
}

export default OurServices