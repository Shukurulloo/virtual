import React from 'react'
import { Container, Photo,Photo0, Photo1, Photo2, Restangle, Restangle2,  Restangle3, Restangle4, Restangle5, Restangle6, Restangle7, Restangle8, Restangle9, Restangle11, Restangle12, Restangle13} from './style'
import { Navbar} from "./style"
import { Button0 } from "./style"
import img01 from './assets/Logo.jpg'
import img001 from './assets/Logo.jpg'
import img02 from './assets/Photo.jpg'
import img03 from './assets/Group1.jpg'
import restangle1 from './assets/Rectangle1.jpg'
import restangle2 from './assets/Rectangle2.jpg'
import restangle3 from './assets/Rectangle3.jpg'
import restangle4 from './assets/Rectangle4.jpg'
import restangle5 from './assets/Rectangle5.jpg'
import restangle6 from './assets/Rectangle6.jpg'
import restangle7 from './assets/Rectangle7.jpg'
import restangle8 from './assets/Rectangle8.jpg'
import restangle9 from './assets/Rectangle9.jpg'
import restangle11 from './assets/Rectangle11.jpg'
import restangle12 from './assets/Rectangle12.jpg'
import restangle13 from './assets/Rectangle13.jpg'
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
            <smile smile01>
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

              <container3>
                  <explore>Explore the departments</explore>
                  <web4>
                  <Restangle4 src={restangle4} />
                    <web40 computer>
                      <web401>Computer Science</web401>
                      <web4011>Our computer science department has multiple learning paths, from Mobile and Web development, to Machine Learning and Data Science.</web4011>
                      <Button0>Learn more</Button0>
                      
                    </web40>
                  </web4>
                  <web4>
                  <web40 >
                      <web401>Chemical Engineering</web401>
                      <web4011 students>All of the students that are enrolled in the  Chemical Engineering program receive a  Chemist’s Kit to practice while learning from  home.</web4011>
                      <Button0>Learn more</Button0>
                      
                    </web40>
                    <Restangle5 src={restangle5} />
                    </web4>
                  <web4>
                  <Restangle6 src={restangle6} />
                  <web40 computer>
                      <web401>Business & Economics</web401>
                      <web4011>The future CEOs and Entrepreneurs have an opportunity to study the business climate and analyize real world case studies of business  success stories.</web4011>
                      <Button0>Learn more</Button0>
                      
                    </web40>
                  </web4>
              </container3>
              <container4>
                <web501>More than 50.000 students
            has enrolled this year</web501>
                <Restangle7 src={restangle7} />

               <time> 
                <smile>
              <Restangle8 src={restangle8}/>
              <smile2>
                <h402>Students </h402>
                <h1002>150.000+</h1002>
              </smile2>
             
            </smile>
            <zones>
              <Restangle9 src={restangle9}/>
              <zones2>
                <h402 time>Time Zones </h402>
                <h1002>10+</h1002>  
              </zones2>
             
            </zones>
            </time>
          
              </container4>
              <container5>

            <interested>
              <interesh1> Interested? Let’s get you started</interesh1>
            <Button0 register>Register</Button0>
            </interested>
            
            </container5>

            <container6>
              <container601>
                <credisshool>
                <Photo0 src={img001}/>
                <h1>Credischool</h1>
                </credisshool>
                <p>Copyright © 2020 Credischool University. All Right Reserved</p>
              </container601>

              <container602>
              <educartion>
              <homee>Home</homee>
                <h4>Campus</h4>
                <h4>Education</h4>
                <h4>Alumni</h4>
                <h4>About</h4>
                </educartion>

                <educartion>
                <h4>Terms</h4>
                <h4>Privacy</h4>
                <h4>GDPR</h4>
                </educartion>
              </container602>

              <container603>
                <logo>
                <Restangle11 src={restangle11} />
                <Restangle12 src={restangle12} />
                <Restangle13 src={restangle13} />
                </logo>
                <designed>
              <p>Designed with <red>♥</red> by <red>nikolovlazar.com</red></p>
              </designed>
              </container603>
            </container6>

    </Container>

  )
}

export default Container1