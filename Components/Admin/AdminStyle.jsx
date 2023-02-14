import styled from "styled-components"

export const MainStyle = styled.div`
    display: grid;
    /* grid-template-columns: 4fr 4fr; */
    /* overflow: hidden; */
`

export const LeftNav = styled.div`
    position: fixed;
    background: #2f4858;
    height: 100vh;
    color: white;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 50px 20px 20px;
    width: 20%;

    div{
        padding: 15px;
        border-radius: 6px;
        cursor: pointer;
    }

    div.active{
        background-color: white;
        color:#2f4858;
    }
`

export const MainContent = styled.div`
    margin: 100px 50px 50px 25%;
    /* z-index: -2; */
    overflow-y: auto ;
    height: 75vh;
`

export const TopNavStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 30px;
    gap: 10px;
    background-color: white;
    z-index: -1;
    border-bottom: 1px solid rgb(200,200,200);
    

    img{
        width: 50px;
        height: 50px;
        clip-path: circle();
    }

    p{
        font-weight: 700;
    }
`

export const UsersMain = styled.div`
    .top__details{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }

    .t{
        padding: 20px;
        background-color: #d0129e;
        border-radius: 15px;
        color: white;
        text-align: center;

        p{
            font-size: 50px;
            font-weight: 800;
        }
    }

    table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin: 10px 0;
  position: relative;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
  /* padding: 20px; */
}

select{
    padding: 7px 20px;
    /* width: 100px; */
    margin: 50px 0 0;
}

select:focus{
    outline: none;
}
`

export const MainRequestStyle = styled.div`
    .options{
        display: flex;
        gap: 20px;
        padding: 10px 0;

        .option{
            cursor: pointer;
            border-radius: 25px;
            font-size: 14px;
            padding: 5px 10px;
        }

        .option.active{
            background-color: #2f4858;
            color: white;
        }
    }
`

export const RequestStyle = styled.div`
    background-color: white;
    border: 1px solid;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 10px 0;
    width: 70%;
    color: rgb(100,100,100);

    .title .topName{    
        display: flex;
        align-items: center;
        font-weight: 800;

        .icon{
            cursor: pointer;
        }
    }

    .details{
        padding: 0 20px;
        p{
            font-size: 14px;
        }
    }

    .mark{
        display: flex;
        gap: 4px;
        padding: 10px 0;
        font-size: 14px;
    }
`

export const PropertiesContainer = styled.div`
    padding: 20px;

    .properties{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        padding: 20px 0;
    }

    .new__properties{
        background-color: #2f4858;
        width: fit-content;
        padding: 10px ;
        cursor: pointer;
        margin: 10px 0 0 0;;
        border-radius: 7px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
`

export const CreateStyle = styled.div`
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;

        .grid{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px
        }

        input{
            padding: 12px;
            border-radius: 6px;
            border: 2px solid rgb(100,100,100);
        }

        textarea{
            resize: none;
            border: 2px solid rgb(100,100,100);
            padding: 12px;
            border-radius: 6px;
            height: 100px;
        }
    }

    .images{
        display: flex;
        /* grid-template-columns: 1fr 1fr 1fr; */
        gap: 20px;
        overflow-x: auto;

        img{
            width: 20%;
            height: 200px;
        }
    }

    .submit{
        width: fit-content;
        padding: 7px 20px;
        cursor: pointer;
        border-radius: 7px;
        background-color: #2f4858;
        color: white;

    }
`

export const ViewStyle = styled.div`
display: grid;
gap: 10px;
    .images{
        display: flex;
        /* grid-template-columns: 1fr 1fr 1fr; */
        gap: 20px;
        overflow-x: auto;
        margin: 10px 0;

        img{
            width: fit-content;
            height: 200px;
        }
    }
`

export const DeleteStyle = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;

    .btns{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .btn{
        padding: 6px 20px;
        border-radius: 6px;
        color: white;
        cursor: pointer;
    }

    .true{
        background-color: red;
    }

    .false{
        background: rgb(50,255, 50);
    }
`