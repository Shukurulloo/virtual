import styled from "styled-components"
import props from "./assets/lhoto.jpg"



export const Container = styled.div`
display: flex;
flex-direction: column;
            container2{
                height: 460px;
                border: 1px solid black;
                width:100%; 
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: row;
                /* height: 580px; */
            }
            web3{
                margin-top:80px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-right:${props => props.secure || props.support ? "-200px" : "-100px"};
                margin-left:-100px;
            }
            web30:hover{
                font-style: oblique;
                cursor: pointer;
                background-color: #c0f3df;
                cursor: pointer;
                text-decoration: underline;
}
            web30{
                height: 29px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 22px;
                line-height: 29px;
                color: #030F4B;
                margin-top: 20px;
            }
            web31{
                margin-top: 10px;
                height: 22px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                color: #52596E;
            }
container1{
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
}

h180px{
    margin-top: 140px;
   
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 97px;
    color: #030F4B;
    width: 708px;
   
}
ptag01{
    margin-top: 50px;
    /* margin-left: -700px; */
    width: 528px;
    height: 156px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 158%;
    color: #52596E;
    margin-bottom:40px;
}
smile{
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 425px;
    height: 168px;
    background: #335DFF;
    box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25);
    border-radius: 8px;
    margin-right: 100px;
}
smile2{
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
}


h1002{
    width: 259px;
    height: 48px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 38px;
    line-height: 48px;
    color: #FCFCFF;
}
h402{
    width: 237px;
    height: 29px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 29px;
    color: #91A7FF;
}
web012{
    flex: 1;
    display: flex;
    flex-direction: column;
    /* margin-top:100px; */
    margin-left: -430px;
}
web013{
    flex: 1;
    display: flex;
 width: 1100px;
 align-items: flex-end;
flex-direction: column;
margin-bottom: 20px;
/* border: 1px solid black; */
margin-bottom:  50px;

}
web2{
    display:flex;
   height: 37px; 
    margin-left:857px;
    margin-top: -21px;
    /* border: 1px solid black; */
 
}
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
    /* border: 1px solid black; */
   
navbar1{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: start;
    margin-left:90px;
    /* border: 1px solid black; */
}
navbarh1{
    color: #030F4B;
    padding-top: 3px;
    width: 145px;
    height: 29px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: normal;
    margin-left: 17px;
    

}

navbar2{
    display: flex;
    flex: 2;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    /* border: 1px solid black; */
    margin-right: -0px;
}
navbar3{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* flex-direction: row; */
    /* width: 120px; */
    flex: 1;
    /* border: 1px solid black; */
}
homee{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    /* color: #030F4B; */
    /* border: 1px solid black; */
}
homee2{
    /* width: 71px;
    height: 22px; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #808396;
    margin-left: -57px;
    /* border: 1px solid black; */
}
h401{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    /* line-height: 22px; */
    color: #030F4B;
    /* padding-right: 100px;
    margin-right: -130px;
    margin-left: 140px; */

}


`
export const Photo = styled.img`

`
export const Photo1 = styled.img`
width: 815px;
height: 31px;

`
export const Photo2 = styled.img`

`
export const Restangle = styled.img`

    border-radius: 4px;
    width: 280px;
    /* height:188px; */
    box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25);
`
export const Restangle2 = styled.img`
     width: 280px;
    /* height:188px; */
    border-radius: 4px;
    box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25);
`
export const Restangle3 = styled.img`
 width: 280px;
    /* height:188px; */
    border-radius: 4px;
    box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25);
`
export const Button0 = styled.button`
   display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 40px;
    width: ${props => props.register || props.register1  ? "140px" : "164px;"};
    /* height: 52px; */
    background-color: ${props => props.register || props.register1 ? "#FD4455" : "#335DFF"};
    /* background-color: #FD4455; */
    box-shadow:${props => props.register || props.register1 ? "0px 10px 35px -3px rgba(253, 68, 85, 0.35), 0px 4px 6px rgba(253, 68, 85, 0.25)" : "0px 20px 65px -9px rgba(68, 102, 253, 0.35), 0px 7px 9px rgba(87, 68, 253, 0.25);"};
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: #FCFCFF;
    border: none;
    margin-right: 40px;
   


`





