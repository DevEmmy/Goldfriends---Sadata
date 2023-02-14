import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import Cards from '../../Cards'
import { PropertiesContainer } from '../AdminStyle'
import Create from './Create'
import Delete from './Delete'
import Each from './Each'
import View from './View'

const MainProperties = () => {
    // const [create, setCreate] = useState(true)
    const [openedCreate, setOpenedCreate] = useState(false);
    const [dataToEdit, setDataToEdit] = useState()
    const [view, setView] = useState(false)
    const [dataToView, setDataToView] = useState()
    const [toDelete, setDelete] = useState(false)


    const data = {
        images: ["https://images.theconversation.com/files/179208/original/file-20170721-28483-1k8sy5q.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"],
        title: "Chester Field",
        location: "Lagos, Ikorodu",
        price: "29090202",
        description: "Using REM (or another relative length value) for font-size is a must for accessibility, because px in some browsers doesn't resize when the browser settings are changed. Some people, for example, need to zoom maybe up to 400% to be able to read your text, due to a visual impairment.",
        id: "0909"
    }

    const openCreateModal = ()=>{
        setDataToEdit()
        setOpenedCreate(true);
    }
  return (
    <PropertiesContainer>
        <h2>Properties (3)</h2>
        <div className="new__properties" onClick={()=> openCreateModal()}>
            <HiPlus />
            Add Property
        </div>

        <div className="properties">
            <Each data={data} setDataToEdit={setDataToEdit} setOpenedCreate={setOpenedCreate} setDataToView={setDataToView} setView={setView} setDelete={setDelete}/>
            <Each data={data} setDataToEdit={setDataToEdit} setOpenedCreate={setOpenedCreate}/>
            <Each data={data} setDataToEdit={setDataToEdit} setOpenedCreate={setOpenedCreate}/>
            <Each data={data} setDataToEdit={setDataToEdit} setOpenedCreate={setOpenedCreate}/>
            <Each data={data} setDataToEdit={setDataToEdit} setOpenedCreate={setOpenedCreate}/>
            <Each data={data} setDataToEdit={setDataToEdit} setOpenedCreate={setOpenedCreate}/>
        </div>

         <Create data={dataToEdit} opened={openedCreate} setOpened={setOpenedCreate}/>
         <View data={dataToView} opened={view} setOpened={setView}/>
         <Delete data={toDelete} opened={toDelete} setOpened={setDelete}/>
        
    </PropertiesContainer>

  )
}

export default MainProperties