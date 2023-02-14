import React from 'react'
import { HiLocationMarker, HiPencil, HiTrash } from 'react-icons/hi'
import { CardStyle } from '../../Styled'

const Each = ({data, setDataToEdit, setOpenedCreate, setDataToView, setView, setDelete}) => {
    const {images, title, location, id} = data

    const edit = (prop)=>{
        setDataToEdit(prop);
        setOpenedCreate(true)
    }

    const view = (prop)=>{
        setDataToView(prop);
        setView(true)
    }
  return (
    <CardStyle noShadow={true}>
         <img src={images[0]} alt={title} onClick={()=> view(data)}/>
        <h3>{title}</h3>
        <p><HiLocationMarker />{location}</p>
        <div className="btns">
            <div className="view" onClick={()=> view(data)}>
                View Property
            </div>
            <div className="edit" onClick={()=> edit(data)}>
                <HiPencil />
            </div>
            <div className="edit delete" onClick={()=> setDelete(data)}>
                <HiTrash />
            </div>
        </div>
    </CardStyle>
  )
}

export default Each