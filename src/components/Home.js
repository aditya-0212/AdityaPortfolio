import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>Aditya</span>
            </div>
            <div className="des">
                {/* 30 */}
                I am an iOS developer with a solid foundation in Swift and SwiftUI, having completed the 100 Days of SwiftUI course. I enjoy building intuitive and dynamic apps, focusing on clean design and user-friendly experiences.My skills include User experience, accessibility, test-driven development, multithreding, debugging, analytics, animation,gestures, pair programming,iOS/macOS design.
            </div>
            
            <a href="/ResumeiOS.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/adityachoubisa.jpg" alt="" />
                <div className="info">
                    <div>iOS Developer</div>
                    {/* <div>VietNamese</div> */}
                    <div>Aditya Choubisa</div>
                    {/* <div>Male</div> */}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
