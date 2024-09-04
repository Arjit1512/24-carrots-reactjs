import React from 'react'
import '../App.css'
import TestimonialSection from './TestimonialSection.jsx'
const Home = () => {
    return (
        <>
            <section id='header'>

                <div className='navbar'>
                    <a className='first-term'>ABOUT</a>
                    <a>SERVICES</a>
                    <a>EVENTS</a>
                    <h2>24 CARROTS</h2>
                    <a>VENUES</a>
                    <a>CAREERS</a>
                    <span><a className='last-term'>GET IN TOUCH</a></span>
                </div>

                <div class="video-section">
                <video autoPlay muted loop id="myVideo">
                    <source src="https://24carrots.com/wp-content/video/24carrtos-home-banner.mp4" type="video/mp4" />
                </video>

                    <h2>Simply the Finest</h2>
                </div>

            </section>

            <section id='part-2'>

                <div className='p2 part-1'>
                    <h6>WELCOME TO 24 CARROTS</h6>
                    <h2 className='big-text'>Remarkable Catering &<br />Events</h2>
                    <p>
                        24 Carrots is the premier catering and events company of<br />
                        choice in Southern California. We create remarkable<br />
                        experiences by offering the finest quality foods and providing<br />
                        unsurpassed personalized service, driven by our passion for<br />
                        life’s special occasions.
                    </p>
                    <span><a className='get-in-touch'>GET IN TOUCH</a></span>
                </div>

                <div className='p2 part-2'>
                    <img decoding="async" src="https://24carrots.com/wp-content/uploads/2023/10/1.2-Holly-Sigafoos-Photo.jpg" alt=""></img>
                </div>

            </section>

            <section id='part-3'>

                <div className='p3 part-1'>
                    <img class="p3-img" src="https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg" alt="" />
                </div>

                <div className='p3 part-2'>
                    <h2 className='big-text'>Making Every<br />Experience<br />Magical</h2>


                    <div className='flex-row'>
                        <div className='flex-col'>
                            <h5>Weddings</h5>
                            <h6>Social</h6>
                            <h6>Corporate</h6>
                            <h6>Venues</h6>
                        </div>

                        <div className='flex-col col2'>
                            <h5>EXCEPTIONAL WEDDINGS</h5>
                            <p>The most important day of your life, is ours too. Your<br />
                                wedding should be the ultimate celebration of your<br />
                                relationship, and our team of experts guide you<br />
                                through the process, offering peace of mind and a<br />
                                remarkable experience.</p>
                            <span><a className='last-term'>LEARN MORE </a></span>
                        </div>
                    </div>

                </div>

            </section>

            <section id='part-4'>
                <img src='https://24carrots.com/wp-content/uploads/2023/10/unforegetable-banner.png' alt='' />

                <div className='circle'>

                    <div className='text-circle'>
                        <p>VENUES</p>
                        <h2>Unforgettable<br />Venues</h2>
                        <p>24 Carrots is the exclusive or preferred caterer at Southern California’s most<br />
                            spectacular properties. From intimate understated spaces to large and luxurious<br />
                            we’ll help you find the event venue that makes your heart skip a beat.</p>
                        <span><a className='last-term'>EXPLORE VENUES →</a></span>
                    </div>

                </div>
            </section>

            <section id='part-5'>

                <TestimonialSection />

            </section>

            <section id='part-6'>
                <h2>Far More Than<br />Just Business</h2>
                <p>The way you do anything is the way you do everything. We haven’t cracked the code on catering; we simply<br />
                    care unreasonably about every aspect of what we do. We care about people as much as we care about<br />
                    details, and we absolutely refuse to compromise on making your day anything but the best. We’ve got your<br />
                    back from the initial idea to the final farewell!</p>
            </section>

            <div id="video-container">
                <iframe id="video" src="https://i.ytimg.com/vi/7gPP9hsV4a0/maxresdefault.jpg" frameborder="0" allowfullscreen></iframe>
            </div>

            <section id='part-6'>
                <h2>Great Food & A<br />Whole Lot More</h2>
                <p>Catering is just the beginning. Sure, we love astonishing your guests with attentive service, thoughtful food, and<br />
                an inviting environment. But what really matters most is helping you create memories that will last for a lifetime.<br />
                Our industry experts think of all the little things that turn an ordinary event into an unforgettable experience.</p>
                <span><a className='last-term'>EXPLORE SERVICES  →</a></span>
            </section>

            <section id='part-7'>
               
               <div>  
                <div className='flex-col'>
                    <h4>Gourmet Catering</h4>
                    <p>Our professionally-trained culinary<br />
                        team is passionate and proud of our<br />
                        diverse and thoughtful menu, always<br />
                        cooking up something that aligns with<br />
                        your great taste.</p>
                        <span><a className='last-term'>LEARN MORE  →</a></span>
                </div>

             
                <div className='flex-col col22'>
                    <h4>Bar Service</h4>
                    <p>Our sophisticated flavor expertise<br />
                        enables us to create inventive<br />
                        concoctions that generate buzz in<br />
                        more ways than one!</p>
                        <span><a className='last-term'>LEARN MORE  →</a></span>
                </div>
              </div>

              <div>
                <div className='p3 part-1'>
                    <img class="p3-img p7-img" src="https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg" alt="" />
                </div>
              </div>

              <div className='total-div'>
                <div className='flex-col col3'>
                    <h4>Staffing</h4>
                    <p>The hand-selected team at 24 Carrots are just<br />
                        as important to our reputation as our gourmet<br />
                        food. Our staff is certainly the best at what<br />
                        they do, and you'll work with professionals<br />
                        who genuinely care about the Success of<br />
                        your event!</p>
                        <span><a className='last-term'>LEARN MORE  →</a></span>
                </div>

                <div className='flex-col col4'>
                    <h4>Event Production</h4>
                    <p>If mind-blowing spectacles and immersive<br />
                        guest experiences are what you're after, the<br />
                        specialists at 24 Carrots can pull it off on an<br />
                        epic scalel</p>
                        <span><a className='last-term'>LEARN MORE  →</a></span>
                </div>
               </div>


            </section>

            <section id='part-8'>
                <div className='flex-row'>
                    <div className='flex-col col-end'>
                      <h4>Endless Inspiration</h4>
                      <p>Sign up to our newsletter for fresh updates, encouragement,<br />
                         and exclusive insights.</p>
                         <div className='flex-row'>
                         <span className='spam1'><a className='last-term s1'>Enter Your Email</a></span>
                         <span className='spam2'><a className='last-term s2'>SIGN UP →</a></span>
                         </div>
                      <p>By clicking Sign Up you’re confirming that you agree with our Terms and Conditions.</p>       
                    </div>

                    <div className='flex-col col-img'>
                         <img className='chicken-img' src='https://24carrots.com/wp-content/uploads/2023/08/signup.png' />
                    </div>

                </div>
            </section>

           <footer>
            <div className='flex-row row-footer'>
                <div className='flex-col'>
                  <h2>24 CARROTS</h2>
                  <p>The event specialists at our Southern<br />
                  California headquarters are available to<br />
                  help with every aspect of your event.</p>

                  <div className='border-green g1'></div>
                  <h6 className='gh5'>CALL US &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 714.942.6000</h6>
                  <h6 className='gh5'>EMAIL US &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; info@24carrots.com</h6>
                  <h6 className='gh5'>FIND US &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50 Baker Street East, CA 92626</h6>
                </div>

                <div className='flex-col'>
                  <h6 className='gh6'>About →</h6>
                  <p>About 24 Carrots</p>
                  <p>Meet the Team</p>
                  <p>Awards & Press</p>
                  <p>Blog</p>
                </div>

                <div className='flex-col'>
                <h6 className='gh6'>Services →</h6>
                  <p>Gourmet Catering</p>
                  <p>Bar Service</p>
                  <p>Staffing</p>
                  <p>Production</p>
                </div>

                <div className='flex-col'>
                <h6 className='gh6'>Events →</h6>
                  <p>Weddings</p>
                  <p>Corporate</p>
                  <p>Social</p>
                  <p>Gallery</p>
                </div>

                <div className='flex-col'>
                  <h6 className='gh6'>Venues →</h6>
                  <h6 className='gh6'>Careers →</h6>
                  <h6 className='gh6'>Contact →</h6>
                </div>

                <div className='flex-col'>
                <h6 className='gh6'>Follow Us</h6>
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>Pinterest</p>
                  <p>Linkedin</p>
                </div>
            </div>

            <div className='border-green ghh'></div>

            <p className='copy'>© 2023 24 Carrot Catering & Events. All rights reserved.</p>
           </footer>
        </>
    )
}

export default Home