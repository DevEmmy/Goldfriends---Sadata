import { Modal } from '@mantine/core'
import React from 'react'
import { DeleteStyle } from '../AdminStyle'

const Delete = ({data, opened, setOpened}) => {
  return (
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={data?.title}
        size="30%"
      >
        <DeleteStyle>
            <h2>Are you sure you want to delete this property?</h2>
            <div className="btns">
                <div className="btn true">
                    Yes
                </div>

                <div className="btn false">
                    No
                </div>
            </div>
        </DeleteStyle>
    </Modal>
  )
}

export default Delete