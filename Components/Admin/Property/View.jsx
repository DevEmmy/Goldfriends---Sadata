import React from 'react'
import { Modal, Button, Group } from '@mantine/core';
import { ViewStyle } from '../AdminStyle';
import { HiLocationMarker } from 'react-icons/hi';

const View = ({opened, setOpened, data}) => {
  return (
    <>
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={data?.title}
        size="60%"
      >
        <ViewStyle>
            <h2>{data?.title}</h2>
            <p>Price: N{data?.price}</p>
            <p><HiLocationMarker /> {data?.location}</p>
            <p>{data?.description}</p>
            <h3>Images</h3>
            <div className="images">
                {
                    data?.images.map((img, i)=>{
                        return(
                            <img src={img} key={i} />
                        )
                    })
                }
            </div>
        </ViewStyle>

      </Modal>
    </>
  )
}

export default View