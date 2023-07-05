import styled from "styled-components"
    import props from "./assets/lhoto.jpg"
    import props2 from './assets/Rectangle10.jpg'


export const Container = styled.div`
display: flex;
flex-direction: column;


container6{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    height: 250px;
}
container601{
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: flex-end;
    flex-direction:column;

   
}
container601 p{
    margin-top: 20px;
    width: 241px;
    height: 46px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 23px;
    color: #030F4B;

}


container602{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    flex: 3;
    
}
educartion{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
educartion h4{
width: 71px;
    height: 22px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #808396;
    margin-left:20px;

}

container603{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    flex: 2;
    
}
credisshool{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
   
}
credisshool h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    color: #030F4B;
    margin-left: 20px;
    margin-right: 34px;
}
designed p{
  margin-left:-80px;
    font-size: 11px;
font-family: Inter;
font-style: normal;
font-weight: 500;
line-height: 23px;
}
red{
    color:red;
}



container5{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding-left:-20px;
    height: 700px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props2});
}
interested{
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
interesh1{
    width: 513px;
    height: 39px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    color: #030F4B;
    margin-right:40px;
}
container4{
    display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width:100%;
                margin-top: 150px;
                margin-bottom: 230px;
}
web501{
    width: 873px;
    height: 154px;    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 77px;
    text-align: center;
    color: #030F4B; 
}
time{
    display: flex;
}
zones{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 378px;
    height: 168px;
    background: #FD4455;
    box-shadow: 0px 10px 35px -3px rgba(253, 68, 85, 0.35), 0px 4px 6px rgba(253, 68, 85, 0.25);
    border-radius: 8px;
    margin-left: 100px;
}
zones2{
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    
}
            container3{
                  display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width:100%;
}
explore{
    width: 785px;
    height: 77px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 77px;
    color: #030F4B;
    margin-top:30px;
}
web4{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 90px;
}
web40{
    display: flex;
    justify-content: center;
    /* align-items: start; */
    flex-direction: column;
    /* margin-left:${props => props.computer ? "180px" : " 0px"}; */
   /* margin-right: 40px; */
}
web401{
    height: 58px;   
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 58px;
    color: #030F4B;
}
web4011{
    margin-top: 40px;
    height: 114px;
    width: 526px;
    /* width:${props => props.students ? "700px" : "542px"}; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    color: #4A4E63;
    margin-bottom:70px;
}

            container2{
                height: 460px;
                /* border: 1px solid black; */
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
  
`
export const Photo1 = styled.img`
width: 815px;
height: 31px;
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
export const Restangle4 = styled.img`
margin-right: 120px;
width: 450px;
 box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25);
    border-radius: 13px;
`
export const Restangle5 = styled.img`
margin-left: 120px;
width: 450px;
 box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25);
    border-radius: 13px;
`
export const Restangle6 = styled.img`
margin-right: 120px;
width: 450px;
 box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25);
    border-radius: 13px;
`
export const Restangle7 = styled.img`

`
export const Restangle8 = styled.img`

`
export const Restangle9 = styled.img`
margin-left: 40px;
`
export const Restangle11 = styled.img`

`
export const Restangle12 = styled.img`
margin-left: 20px;

`
export const Restangle13 = styled.img`
margin-left: 20px;

`
export const Button0 = styled.button`
 box-shadow: 0px 10px 35px -3px rgba(51, 93, 255, 0.35), 0px 4px 6px rgba(51, 93, 255, 0.25);
    border-radius: 13px;
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    /* line-height: 22px; */
    color: #030F4B;
    /* padding-right: 100px;
    margin-right: -130px;
    margin-left: 140px; */
    margin-right: 40px;
}
h1{
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
`

export const Home = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight:${props => props.hom ? "600;" : "500;"};
    font-size: 15px;
    line-height: 22px;
    margin-left:${props => props.hom ? "0px" : "40px"};
    color: ${props => props.hom ? "#030F4B;" : "#808396;"};

`
export const Photo = styled.img`
margin-left:140px;
`

export const Wrap = styled.div`
   flex: 1;
    display: flex;
    flex-direction: column;
    /* margin-top:100px; */
    margin-left: -430px;
h1{
    margin-top: 140px;
   
   font-family: 'Inter';
   font-style: normal;
   font-weight: 900;
   font-size: 72px;
   line-height: 97px;
   color: #030F4B;
   width: 708px;
  
}
p{
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
`
export const Wrap2 = styled.div`
 flex: 1;
    display: flex;
 width: 1100px;
 align-items: flex-end;
flex-direction: column;
margin-bottom: 20px;
/* border: 1px solid black; */
margin-bottom:  50px;
`
export const Smile = styled.div`
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
`
export const Smile2 = styled.div`
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
h4{
    width: 237px;
    height: 29px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 29px;
    color:${props => props.time ? "#FCEDEF" : "#91A7FF"}
    /* color: #91A7FF; */
}
h1{
    width: 259px;
    height: 48px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 38px;
    line-height: 48px;
    color: #FCFCFF;
}
`
export const Web2 = styled.div`
    display:flex;
   height: 37px; 
    margin-left:857px;
    margin-top: -21px;
    /* border: 1px solid black; */
`