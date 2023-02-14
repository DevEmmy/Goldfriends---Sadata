import React, { useEffect, useState } from 'react'
import { CreateStyle } from '../AdminStyle'
import FileBase64 from "react-file-base64"
import { Modal, Button, Group } from '@mantine/core';

const Create = ({opened, setOpened, data}) => {
    const [images, setImages] = useState([])
    // console.log(data)
    useEffect(()=>{
        setImages(data?.images)
    }, [data])

    const appendImages = (images)=>{
        let imagesToPost = []
        images.forEach((image)=>{
            imagesToPost.push(image.base64)
        })
        setImages(imagesToPost)
    }
  return (
    <>
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add New Property"
        size="60%"
      >
        <CreateStyle>
        <form action="">
            <div className="grid">
                <input type="text" placeholder='Title' defaultValue={data?.title}/>
                <input type="number" placeholder='Price' defaultValue={data?.price}/>
            </div>
            <input type="text" placeholder='Location' defaultValue={data?.location}/>
            
            <textarea placeholder='Description' defaultValue={data?.description}/>
            <div className="filePicker">
                <FileBase64 
                multiple={true}
                onDone = {(base64)=> appendImages(base64)}
                type= "image"
                />
            </div>
            <div className="images">
                {
                    images?.map((img, i)=>{
                        return(
                            <img src={img} key={i} />
                        )
                    })
                }
            </div>
            <div className="submit">
                Upload
            </div>
        </form>
    </CreateStyle>
      </Modal>
    </>
  )
}

export default Create