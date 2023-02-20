import styled from "styled-components";

export const Container = styled.div`
  
  padding: ${({ padding }) => padding || "0px"};
  margin: ${({ margin }) => margin || "0px"};
  width: ${({ width }) => width || "100%"};
`;

export const NavStyle = styled.div`
  display: flex;
  border-bottom: 2px solid rgba(0,0,0,0.1);
  justify-content: space-between;
  width: 100%;
  margin: 0px auto;
  align-items: center;
  /* justify-items: center; */
  gap: 100px;
  padding: 10px 5%;
  position: absolute  ;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.09); */

  @media (max-width: 700px){
    justify-content: space-between;
    padding: 20px;

    img{
      width: 60px;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }

  .logo {
    color: #b18641;
    font-size: 30px;
    font-weight: bold;

    img{
      width: 100px;
    }
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #fff;
    font-size: 16px;

    a {
      padding: 5px 0px;
      cursor: pointer;
    }

    div.active {
      /* color: white;
            background-color: #b18641; */
      /* border-radius: 14px; */
      border-bottom: 1px solid;
      color: #b18641;
    }
  }

  #services {
    position: relative;
    cursor: pointer;

    .navServices {
      position: absolute;
      top: 30px;
      left: 0;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      background-color: #fff;
      width: 260%;
      transition: all 0.3s;
      border-radius: 6px;
      /* font-size: 14px; */

      a {
        padding: 10px;
        cursor: pointer;
        display: block;
        color: black;
      }

      a:hover {
        background-color: rgba(200, 200, 200, 0.2);
      }
    }
  }

  .signUp {
    background-color: #b18641;
    color: white;
    border-radius: 4px;
    font-size: 12px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .hamburger{
    display: none;
  }

  @media (max-width:700px) {
    #services{
      .navServices{
        position: static;
        top: 0;
        background-color: #fff;
        box-shadow: none;
      }
    }
    
    gap: 0;
      .center{
        display: none;
      }

      .signUp{
        display: block;
      }
      
      .hamburger{
        display: block;

        .icon{
          color: white;
        }

        .cancel{
          display: flex;
          align-items: flex-end;
          justify-content: end;
        }

        .items{
          position: absolute;
          right: 0;
          top: 0;
          height: 100vh;
          color: black;
          background-color: white;
          padding: 20px 10px;
          width: 60%;
          display: flex;
          flex-direction: column;
          gap: 20px;

          a{
            color: black;
          }
        }
      }
    }
`;

export const Banner = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  gap: 50px;
  width: 100%;
  padding: 0 10%;
  height: 100vh;
  margin: 0px auto;
  background-size: cover;
  background-repeat: no-repeat;
  background:white;

  .text {
    color: black;
    h3 {
      font-size: 3.5rem;
      padding: 10px 0px;
      font-weight: bolder;
      width: 100%;
      
    }

    p {
      line-height: 1.5;
      width: 80%;
    }
  }

  img {
    width: 100%;
    height: 60%;
    border-radius: 25px;
    margin: 50px 0;
    box-shadow: 0 6px 40px rgba(0, 0, 0, 0.2);
    /* border: 10px solid white; */
  }

  .getStarted{
    background-color: #b18641;
    color: black;
    padding: 10px 20px;
    width: fit-content;
    margin: 10px 0;
    border-radius: 26px;
    font-weight: 900;
    cursor: pointer;
  }

  @media screen and (max-width:700px){
    grid-template-columns: none;

    .text{
      h3{
        width: 100%;
        font-size: 30px;
      }

      p{
        width: 100%;
      }
    }

    img{
      display: none;
    }
    
  }

  .btn-4,
.btn-4 *,
.btn-4 :after,
.btn-4 :before,
.btn-4:after,
.btn-4:before {
  border: 0 solid;
  box-sizing: border-box;
}
.btn-4 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
  /* text-transform: uppercase; */
}
.btn-4:disabled {
  cursor: default;
}
.btn-4:-moz-focusring {
  outline: auto;
}
.btn-4 svg {
  display: block;
  vertical-align: middle;
}
.btn-4 [hidden] {
  display: none;
}
.btn-4 {
  border-radius: 99rem;
  border-width: 2px;
  overflow: hidden;
  padding: 0.8rem 3rem;
  position: relative;
}
.btn-4 span {
  mix-blend-mode: difference;
}
.btn-4:before {
  --tilt: 1.2rem;
  background: #fff;
  -webkit-clip-path: polygon(
    0 0,
    calc(100% - var(--tilt)) 0,
    100% 100%,
    0 100%
  );
  clip-path: polygon(0 0, calc(100% - var(--tilt)) 0, 100% 100%, 0 100%);
  content: "";
  display: block;
  height: 100%;
  left: calc(-100% - var(--tilt));
  position: absolute;
  top: 0;
  transform: translateX(var(--progress, 0));
  transition: transform 0.2s ease;
  width: calc(100% + var(--tilt));
}
.btn-4:hover:before {
  --progress: 100%;
}

`

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 100px auto;
  align-items: center;
  color: rgb(100,100,100);

  h3 {
    font-size: 30px;
    padding: 0 0 20px 0;
  }

  p {
    width: 100%;
    text-align: center;
  }

  .services {
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    /* grid-template-columns: 1fr 1fr; */
    align-items: center;
    justify-content: center;
    gap: 50px;

    /* @media (max) */

    .service {
      display: flex;
      padding: 00px 0px 15px;
      border-radius: 25px;
      border: 1px solid rgb(200,200,200);
      flex-direction: column;
      /* align-items: center; */
      /* justify-content: space-around; */
      cursor: pointer;
      transition: all .3s;
      width: 35vw;
      height: 300px;
      @media (max-width: 700px){
        width: 100%;
      }

      .text {
        padding: 10px;
      }

      h3 {
        font-size: 15px;
        padding: 0;
      }

      p {
        width: 100%;
        text-align: start;
        font-size: 14px;
        padding-top: 0px;
      }

      img {
        width: 100%;
        height: 200px;
        border-radius: 25px 25px 0 0 ;
      }
    }

    .service:hover{
      transform: scale(1.02);
      box-shadow: 0 6px 100px rgba(0, 0, 0, 0.1);
    }
  }

  @media screen and (max-width:700px) {
    width: 96%;
    margin: 50px auto;

    p{
      width: 100%;
    }

    h3{
      padding: 0;
    }

    .services{
      grid-template-columns: none;
      padding: 20px 5%;

      .service:hover{
        transform: none;
      }
    }
  }
`;
export const FooterContainer = styled.div`
  display: grid;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #000;
  padding: 80px;
  color: white;
  grid-template-columns: 1fr 1fr;

  .addresses{
    display: grid;
    gap: 10px;
  }

  .left {
    .logo {
      font-size: 40px;
      font-weight: 900;
      padding: 0 0 10px 0;
      color: #b18641;
    }

    .slogan {
      width: 80%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .socials {
      display: flex;
      flex-direction: row;
      gap: 10px;
      color: #b18641;
      font-size: 20px;

      div {
        border: 2px solid #b18641;
        padding: 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: none;
    padding: 30px;
    gap: 30px;
  }
`;

export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  h3 {
    font-size: 30px;
  }

  form {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    width: 50%;
    padding: 20px;

    @media (max-width: 700px){
      width: 100%;
    }
  }

  input {
    padding: 13px 20px;
    width: 80%;
    border-radius: 10px;
    border: 1px solid rgb(100, 100, 100);

    @media (max-width: 700px){
      width: 100%;
    }

  }

  .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    background-color: #b18641;
    padding: 15px;
    color: white;
    border-radius: 13px;
    cursor: pointer;

    @media (max-width: 700px){
      width: 100%;
    }
  }
`;

export const AboutContainer = styled.div`
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 100px auto;
    text-align: center;

    h1 {
      font-size: 54px;
    }
  }

  .gridContent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 40px;
    padding: 30px 0;
    

    .first {
      h2 {
        font-size: 40px;
        padding-bottom: 10px;
      }
    }

    .second {
      width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .main_content{
    width: 80%;
    margin: 50px auto;
    h2{
      text-align: center;
    }
  }

  .content{
    display: flex;
    flex-direction: column;
    gap: 20px;

    p{
        line-height: 1.5;
    }
  }

  @media screen and (max-width:700px){
    /* margin: 100px 0; */

    
    .gridContent{
      grid-template-columns: none;
      width: 96%;

      .first{
        h2{
          font-size: 30px;
        }
      }
    }
  }
`;

export const ContactContainer = styled.div`
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 100px auto;
    text-align: center;

    h1 {
      font-size: 54px;
    }
  }

  form {
    width: 50%;
    margin: 100px auto;

    .form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px 0;

      input,
      textarea,
      .btn {
        /* width: 50%; */
        padding: 12px 20px;
      }

      textarea {
        /* width: 50%; */
        resize: none;
        height: 3cm;
      }

      .btn {
        background-color: #b18641;
        text-align: center;
        color: white;
        cursor: pointer;
      }
    }

    @media screen and (max-width: 700px) {
        width: 80%;
    }
  }
`;

export const BriefAbout = styled.div`
  line-height: 1.2;
  a {
    text-decoration: none;
  }

  .text{
    display: grid;
    gap: 20px;
  }

  background-color: rgb(220,220,220);
  color: black;
  padding: 100px 10%;
  /* border-radius: 50% 50% 0 0 ; */

  .grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 50px;
    align-items: center;
    margin: 25px 0 50px 0;

    img {
      width: 100%;
      height: 350px;
      /* border: 5px solid white; */
      border-radius: 10px;
    }
  }

  h2 {
    text-align: center;
    padding: 20px;
  }

  @media screen and (max-width: 700px) {
    padding: 50px 4%; 
     .grid {
      grid-template-columns: none;
      gap: 20px;

     }
  }
`;

export const ReadMoreStyle = styled.p`
  padding: 10px 20px;
  background-color: ${({bg}) => bg || "#000"};
  color: ${({color}) => color || "white"};
  width: fit-content;
  margin: 10px 0 10px 0;
  border-radius: 6px;
  display: flex;
  font-size: 14px;
  align-items: center;

  svg path {
    padding: 0;
  }
`;

export const PropertiesContainer = styled.div`
  margin: 100px 0;
  color: rgb(60,60,60);

  .title {
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  .properties {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    width: 80%;
    margin: 50px auto;

    p.location {
      font-size: 18px;
    }
  }

  .explore {
    background: #2f4858;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 6px;
    width: fit-content;
    align-items: center;
    display: flex;
  }

  @media screen and (max-width: 700px) {
    .properties{
      grid-template-columns: none;
      width: 90%;
      gap: 20px;
    }
  }
`;

export const RealEstateContainer = styled.div`
  .banner {
    background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)),
      url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chalfont-manor-1-credit-sotheby-s-international-realty-via-onthemarket-1591006723.jpg?crop=0.607xw:1.00xh;0.223xw,0&resize=640:*);
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    h1 {
      font-size: 60px;
    }
  }
`;

export const BannerStyle = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${({ img }) => img});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  h1 {
    font-size: 60px;
  }

  p {
    font-size: 20px;
  }
`;

export const Details = styled.div`
  width: 80%;
  margin: 30px auto;

  .media{
    padding: 20px 0;
  }

  .images{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;

    img, video{
      width: 100%;
      height: 200px;
    }

    @media (max-width: 700px){
      grid-template-columns: none;
    }
  }

  @media (max-width: 700px){
    width: 90%;      
  }

  .location {
    padding: 10px 0;
  }

  .request {
    width: 50%;
    margin: 50px 0;

    @media (max-width: 700px){
      width: 100%;
          
    }

    .submit {
      text-align: center;
      background-color: black;
      color: white;
      padding: 13px 20px;
      border-radius: 6px;
      cursor: pointer;
    }

    form {
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;

      input {
        padding: 12px;
      }

      textarea {
        height: 100px;
        resize: none;
        padding: 10px;
      }
    }
  }
`;

export const CardStyle = styled.div`
  padding: 15px;
  box-shadow:${({noShadow})=> noShadow ? "none" :" 0 6px 100px rgba(0, 0, 0, 0.1)" };
  background-color: white;
  width: 100%;
  border-radius: 16px;
  border: ${({noShadow})=> !noShadow ? "none" :"1px solid rgb(200,200,200)" };;

  img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
  }

  h3 {
    font-size: 1rem;
  }

  p {
    padding: 10px 0;
    font-size: 14px;
  }

  .enquire {
    padding: 8px 10px;
    border-radius: 4px;
    background-color: #2f4858;
    color: white;
    text-align: center;
    width: 100%;
    font-size: 14px;
    margin: 3px 0;
    cursor: pointer;
  }

  .btns{
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    gap: 5px;
    align-items: center;
    justify-content: center;
    justify-items: space-evenly;

    .view{
      border: 1px solid;
      background-color: #2f4858;
      color: white;
      padding: 10px 5px;
      border-radius: 7px;
      font-weight: 700;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
    }

    .edit{
      border: 1px solid #2f4858;
      display: flex;
      align-items: center;
      justify-items: center;
      justify-content: center;
      padding: 10px 5px;
      color: #2f4858;
      cursor: pointer;
      border-radius: 7px;
    }

    .delete{
      color: white;
      border: 1px solid;
      background-color: rgb(255, 50,50);
    }
  }
`;

export const VisaProcessingStyle = styled.div`
  width: 80%;
  margin: 100px auto;
  line-height: 2;
  .content {
    display: grid;
    /* gap: 50px; */

    p {
      padding: 20px 0;
    }
  }

  @media (max-width: 700px) {
    width: 90%;
    margin: 50px auto;
    line-height: 1.2;

    .content{
      h1{
        font-size: 25px;
        text-align: center
      }
    }
  }
`;

export const TicketBookingStyle = styled.div``;

export const RequestStyle = styled.div`
  width: 50%;

  form {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  input {
    width: 100%;
    padding: 12px;
  }

  textarea {
    height: 100px;
    resize: none;
    padding: 10px;
  }

  .submit {
      text-align: center;
      background-color: #b18641;
      color: white;
      padding: 13px 20px;
      border-radius: 6px;
      cursor: pointer;
    }

    @media (max-width: 700px){
      width: 100%;

      h1{
        font-size: 25px;
        padding: 10px 0;
      }
    }
`
export const ShortBannerStyle = styled.div`
    background:linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(https://t3.ftcdn.net/jpg/03/16/58/08/360_F_316580848_m7lZhhWQ43JrsEsBQQToJ8g73ALcv78Y.jpg);
    color: white;
    padding: 100px 10%;
    line-height: 2;
    margin: 80px 0;

    p{
        width: 50%;
    }

    @media screen and (max-width: 700px) {
      padding: 40px 4%;

      p{
        width: 100%;
      }
  }
`

export const MembersStyle = styled.div`
    text-align: center;
    width: 80%;
    margin: 100px auto;

    p{
        width: 50%;
        margin: 0 auto;
    }

    .members{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
    margin: 30px 0;
    }

    @media screen and (max-width: 700px) {
      width: 90%;
      margin: 50px auto;

      p{
        width: 96%;
      }

      .members{
        grid-template-columns: none;
      }
    }
`

export const EachMemberStyle = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
        width: 200px;
        height: 200px;
        box-shadow: 0 13px 20px rgba(00,0,0,0.2);
        margin: 0;
        /* clip-path: circle(); */
        border-radius: 50%;
        
    }  

    .texts{
        text-align: center;
    }
`

export const ClientStyle = styled.div`
  width: 60%;
  height: 700px;
  margin: 50px auto;
  text-align: center;

  h3{
    font-size: 36px;
  }
  p{
    padding: 20px 0;
  }

  img{
    width: 100%;
    height: 500px;
  }

  @media (max-width: 700px){
    width: 80%;
  }
`