import React from 'react'
import { Container, Photo, Photo1, Photo2, Restangle, Restangle2,  Restangle3} from './style'
import { Navbar} from "./style"
import { Button0 } from "./style"
import img01 from './assets/Logo.jpg'
import img02 from './assets/Photo.jpg'
import img03 from './assets/Group1.jpg'
import restangle1 from './assets/Rectangle1.jpg'
import restangle2 from './assets/Rectangle2.jpg'
import restangle3 from './assets/Rectangle3.jpg'
// ./assets/Group1.jpg



const Container1 = () => {
  return (

    <Container>
      <container1>


        <Navbar>

            <navbar1>
              <Photo src={img01}/>
              {/* <Photo src='./assets/Logo.jpg'/> */}
            <navbarh1>Credischool</navbarh1>
            </navbar1>

                  <navbar2>
                    <homee>Home</homee>
                    
                    <homee2>Campus</homee2>
                    <homee2>Education</homee2>
                    <homee2>Alumni</homee2>
                    <homee2>About</homee2>      
                    </navbar2>

                <navbar3>
                    <h401>Login</h401>
                   <Button0 register>Register</Button0>
                </navbar3>
            </Navbar>
            
         
            <web012>
            <h180px>A virtual university,
                with real degrees</h180px>
                <ptag01>Credischool is an accredited virtual university built by top professors from Harvard, Stanford, MIT, and many more. The students at Credischool are welcome to study at their own pace.</ptag01>
            <Button0>Learn more</Button0>
                </web012>

                 <web013>
            <smile>
              <Photo2 src={img03}/>
              <smile2>
                <h402>Total stipends given</h402>
                <h1002>$10.508.305</h1002>
              </smile2>
             
            </smile>
          
            </web013>
              <web2>
                <Photo1 src={img02} />
              </web2>
              </container1>

              <container2>
                <web3 secure>
                  <Restangle src={restangle1} />
                  <web30>24/7 Support</web30>
                  <web31>Always online to help you</web31>
                </web3>
                 <web3 secure>
                   <Restangle2 src={restangle2} />
                   <web30>Secure Payments</web30>
                   <web31>Pay your semesters fast & secure</web31>
                </web3>
                 <web3 support>
                 <Restangle3 src={restangle3} />
                  <web30>Online Lectures</web30>
                  <web31>Study in real time, review later</web31>
                </web3>
              </container2>
              
    </Container>

  )
}

export default Container1