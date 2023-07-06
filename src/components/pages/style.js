import styled from "styled-components"
    import props from "./assets/lhoto.jpg"
    import props2 from './assets/Rectangle10.jpg'


export const Container = styled.div`
display: flex;
flex-direction: column;

`
export const Navbar = styled.div`
margin-top:60px;
    margin-right: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 122px;
    width: 80%;
`
export const Photo1 = styled.img`
width: 815px;
height: 31px;
margin-top:-7px
`
export const Restangle = styled.img`
    border-radius: 4px;
    width: 280px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`
export const Restangle2 = styled.img`
margin-right: 120px;
width: 450px;
 box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25);
    border-radius: 13px;
`
export const Button0 = styled.button`
 box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25);
    border-radius: 13px;
   display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 40px;
    width: ${props => props.register || props.register1  ? "140px" : "164px;"};
    background-color: ${props => props.register || props.register1 ? "#FD4455" : "#335DFF"};
    box-shadow:${props => props.register || props.register1 ? "0px 10px 35px -3px rgba(253, 68, 85, 0.35), 0px 4px 6px rgba(253, 68, 85, 0.25)" : "0px 20px 65px -9px rgba(68, 102, 253, 0.35), 0px 7px 9px rgba(87, 68, 253, 0.25);"};
    border-radius: 8px;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: #FCFCFF;
    border: none;
    margin-right: 40px;
`
export const Container01 = styled.div`
    display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #FCFCFF;
height: 910px;
background-image: url(${props});
background-position: right;
background-size:840px 910px;
background-repeat: no-repeat;
margin-top: -10px;
margin-right: -8px;

`
export const Web = styled.div`
display: flex;
align-items: center;
flex: ${props=>props.left || props.right ? "1" : "1" };
justify-content: ${props=>props.right ? "right" : "left"};
h4{
    font-weight: 600;
    font-size: 15px;
    color: #030F4B;
    margin-right: 40px;
}
h1{
    color: #030F4B;
    padding-top: 3px;
    width: 145px;
    height: 29px;
    font-weight: 900;
    font-size: 24px;
    line-height: normal;
    margin-left: 17px;
}
`

export const Home = styled.div`
    font-weight:${props => props.hom ? "600;" : "500;"};
    font-size: 15px;
    line-height: 22px;
    margin-left:${props => props.hom ? "70px" : "40px"};
    color: ${props => props.hom ? "#030F4B;" : "#808396;"};
`
export const Wrap = styled.div`
   flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: -430px;
h1{
    margin-top: 140px;
   
   font-weight: 900;
   font-size: 72px;
   line-height: 97px;
   color: #030F4B;
   width: 708px;
  
}
p{
    margin-top: 50px;
    width: 528px;
    height: 156px;
    font-weight: 500;
    font-size: 21px;
    line-height: 158%;
    color: #52596E;
    margin-bottom:40px;
}
`
export const Wrap2 = styled.div`
 flex: 1;
    display: flex;
 width: 1100px;
 align-items: flex-end;
flex-direction: column;
margin-bottom: 20px;
margin-bottom:  50px;
`
export const Time = styled.div`
    display: flex;
`
export const Smile = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 168px;
    width:${props => props.zones ? "378px" : "425px"};
    background:${props => {return props.zones ? "#FD4455" : "#335DFF"}};
    box-shadow: ${props => props.zones ? "0px 10px 35px -3px rgba(253, 68, 85, 0.35), 0px 4px 6px rgba(253, 68, 85, 0.25)" : "box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25)"};
    border-radius: 8px;
    margin-right: 100px;
    margin-left:${props => props.zones ? "130px" :"50px"}
`
export const Smile2 = styled.div`
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
h1{

    width: 259px;
    height: 48px;
    font-weight: 800;
    font-size: 38px;
    line-height: 48px;
    color: #FCFCFF;
    margin-top:-30px;
}
h4{
    width: 237px;
    height: 29px;
    font-weight: 700;
    font-size: 21px;
    line-height: 29px;
    color:${props => props.time ? "#91A7FF;" : "#FCEDEF;"};
    margin-top:30px;
}

`
export const Web2 = styled.div`
    display:flex;
   height: 37px; 
    margin-left:857px;
    margin-top: -21px;
`
export const Container2 = styled.div`
                height: 460px;
                width:100%; 
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: row;
`
export const Web3 = styled.div`
                margin-top:150px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-right:${props => props.secure || props.support ? "-200px" : "-100px"};
                margin-left:-100px;
h2{
                height: 29px;
        
        
                font-weight: 700;
                font-size: 22px;
                line-height: 29px;
                color: #030F4B;
                margin-top: 10px;
}
p{
                margin-top: -10px;
                height: 22px;
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                color: #52596E;
}
`
export const Container3 = styled.div`
                  display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width:100%;
h2{
    width: 785px;
    height: 77px;
    font-weight: 800;
    font-size: 64px;
    line-height: 77px;
    color: #030F4B;
    margin-top:30px;
}
`
export const Web4 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 90px;

`
export const Web40 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
h1{
    height: 58px;   
    font-weight: 800;
    font-size: 48px;
    line-height: 58px;
    color: #030F4B;
}
p{
    margin-top: 40px;
    height: 114px;
    width: 526px;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    color: #4A4E63;
    margin-bottom:70px;
} 
`
export const Container4 = styled.div`
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width:100%;
                margin-top: 150px;
                margin-bottom: 230px;
h2{
    width: 873px;
    height: 154px;    
    font-weight: 800;
    font-size: 64px;
    line-height: 77px;
    text-align: center;
    color: #030F4B; 

}
`
export const Container5= styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding-left:-20px;
    height: 700px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props2});
.wrapper{
    margin-top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 1200px;
    height: 180px;
    border-radius: 6px;
    box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.05), 0px 10px 15px 4px rgba(0, 0, 0, 0.10);
    background: #FCFCFF;
}
h1{
    width: 513px;
    height: 39px;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    color: #030F4B;
    margin-right:40px;
}
`
export const Container6 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    height: 250px;
.HeaderNav{
    display: flex;
    flex:${props => props.left || props.right ? "2" : "2"};
    justify-content: center;
    align-items: center;
    flex-direction:column;
}
p{
    margin-top: 20px;
    width: 241px;
    height: 46px;
    font-weight: 500;
    font-size: 12px;
    line-height: 23px;
    color: #030F4B;

}
.contnent{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 30px;
}
.logo{
    margin-right:40px;
}
.text p{
  margin-left:-80px;
    font-size: 11px;
font-weight: 500;
line-height: 23px;
}
.red{
    color:red;
}
`