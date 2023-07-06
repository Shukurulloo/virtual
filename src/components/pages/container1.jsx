import React from 'react'
import { Container,  Photo1, Restangle, Restangle2,} from './style'
import { Navbar, Container01, Web, Home, Wrap, Wrap2, Smile, Smile2, Web2, Container2, Web3, Time, Container3, Web4, Web40,Container4, Container5,Container6} from "./style"
import { Button0} from "./style"
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
      <Container01>


        <Navbar>

            <Web left>
              <img src={img001} alt='' style={{marginLeft:"140px"}}/>
            <h1>Credischool</h1>
            </Web>
                  <Web mid>
                    <Home hom >Home</Home>
                    <Home>Campus</Home>
                    <Home>Education</Home>
                    <Home>Alumni</Home>
                    <Home>About</Home>      
                    </Web>
                <Web right>
                    <h4>Login</h4>
                   <Button0 register>Register</Button0>
                </Web>
            </Navbar>
            
         
            <Wrap>
            <h1>A virtual university,
                with real degrees</h1>
                <p>Credischool is an accredited virtual university built by top professors from Harvard, Stanford, MIT, and many more. The students at Credischool are welcome to study at their own pace.</p>
            <Button0>Learn more</Button0>
            </Wrap>

                 <Wrap2 style={{marginTop:"-50px"}}>
            <Smile smile01>
              <img src={img03} alt=''/>
              <Smile2>
                <h4>Total stipends given</h4>
                <h1>$10.508.305</h1>
              </Smile2>
            </Smile>
            </Wrap2>

              <Web2>
                <Photo1 src={img02} />
              </Web2>
              </Container01>

              <Container2>
                <Web3 secure>
                  <Restangle src={restangle1} />
                  <h2>24/7 Support</h2>
                  <p>Always online to help you</p>
                </Web3>
                 <Web3 secure>
                   <Restangle src={restangle2} />
                   <h2>Secure Payments</h2>
                   <p>Pay your semesters fast & secure</p>
                </Web3>
                 <Web3 support>
                 <Restangle src={restangle3} />
                  <h2>Online Lectures</h2>
                  <p>Study in real time, review later</p>
                </Web3>
              </Container2>

              <Container3>
              <h2 className='cont3'>Explore the departments</h2>
                <Web4>
                  <Restangle2 src={restangle4} />
                    <Web40 computer>
                      <h1>Computer Science</h1>
                      <p>Our computer science department has multiple learning paths, from Mobile and Web development, to Machine Learning and Data Science.</p>
                      <Button0>Learn more</Button0>
                    </Web40>
                  </Web4>
                  <Web4>
                  <Web40 style={{marginLeft:"120px"}}>
                      <h1>Chemical Engineering</h1>
                      <p students>All of the students that are enrolled in the  Chemical Engineering program receive a  Chemist’s Kit to practice while learning from  home.</p>
                      <Button0>Learn more</Button0>
                      
                    </Web40>
                    <Restangle2 src={restangle5} style={{marginLeft:"120px"}} />
                    </Web4>
                  <Web4>
                  <Restangle2 src={restangle6} />
                  <Web40 computer>
                      <h1>Business & Economics</h1>
                      <p>The future CEOs and Entrepreneurs have an opportunity to study the business climate and analyize real world case studies of business  success stories.</p>
                      <Button0>Learn more</Button0>
                      
                    </Web40>
                  </Web4>
              </Container3>
              <Container4>
             <h2>More than 50.000 students
            has enrolled this year</h2>
                <img src={restangle7} alt='' />

               <Time> 
                <Smile>
              <img src={restangle8} alt=''/>
              <Smile2>
              <h4>Students </h4>
              <h1>150.000+</h1>
              </Smile2>
            </Smile >

            <Smile zones>
            <img src={restangle9} alt='' style={{marginLeft: '40px'}}/>
              <Smile2>
              <h4 time>Time Zones </h4>
              <h1>10+</h1>
              </Smile2>
             
            </Smile>
            </Time>
          
              </Container4>
              <Container5>
              <div className='wrapper'>
              <h1> Interested? Let’s get you started</h1>
            <Button0 register>Register</Button0>
            </div>
            </Container5>
       
            <Container6>
            <div className='HeaderNav' style={{alignItems:"flex-end"}}>
            <Web left2 >
              <img src={img001} alt=''/>
              <h1 style={{marginRight:"40px"}}>Credischool</h1>
              </Web>
              <p>Copyright © 2020 Credischool University. All Right Reserved</p>
              </div>

              <div className='HeaderNav' style={{flex:"3"}} >
              <div className='contnent'>
              <Home hom>Home</Home>
              <Home>Campus</Home>
              <Home>Education</Home>
              <Home>Alumni</Home>
              <Home>About</Home>
              </div>

              <div className='contnent'>
              <Home >Terms</Home>
              <Home>Privacy</Home>
              <Home>GDPR</Home>
              </div >
              </div>

              <div className='HeaderNav' right>
              <div className='logo'>
              <img src={restangle11} alt=''  />
              <img src={restangle12} alt='' style={{marginLeft:"20px"}}/>
              <img src={restangle13} alt='' style={{marginLeft:"20px"}}/>
              </div>
              <div className='text' >
              <p>Designed with <span className='red'>♥</span > by <span className='red'>nikolovlazar.com</span ></p>
              </div >
              </div>
            </Container6>

    </Container>

  )
}

export default Container1

