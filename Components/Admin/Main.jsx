import React, { useState } from 'react'
import { LeftNav, MainContent, MainStyle } from './AdminStyle'
import MainProperties from './Property/Main'
import MainRequest from './Request/Main'
import TopNav from './TopNav'
import USERMain from './Users/Main'

const Main = () => {

    const nav = [
        {
            title: "Requests",
            components: <MainRequest />,
            id: 0,
        },
        {
            title: "Users",
            components: <USERMain />,
            id: 1
        },
        {
            title: "Add/Remove Staff",
            components: null,
            id: 2
        },
        {
            title: "Properties",
            components: <MainProperties />,
            id:3
        },
        {
            title: "Logout",
            components: null,
            id: 4
        }
    ]

    const [element, setElement] = useState(<MainRequest />)
    const [active, setActive] = useState(0)

    const change = (i)=>{
        setElement(i.components)
        setActive(i.id)
    }

  return (
    <MainStyle>
        <TopNav />
        <LeftNav>
            {
                nav.map((i, n)=>{
                    return(
                        <div className={i.id == active && "active"} key={n} onClick={()=> change(i)}>
                            {i.title}
                        </div>
                    )
                })
            }
        </LeftNav>

        <MainContent>
            {/* <USERMain /> */}
            {/* <MainRequest /> */}
            {/* <MainProperties /> */}
            {element}
        </MainContent>
    </MainStyle>
  )
}

export default Main