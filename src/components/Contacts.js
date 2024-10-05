import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';

function Contacts() {
const [listContacts] = useState([
  {
    title: 'Phone Number',
    value: '+917340002252'
  },{
    title: 'Email',
    value: 'adityachoubisa02@gmail.com'
  },{
    title: 'Linkedin',
    value: 'https://www.linkedin.com/in/aditya-choubisa-09652019b/'
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        I am an iOS developer with a solid foundation in Swift and SwiftUI, having completed the 100 Days of SwiftUI course. I enjoy building intuitive and dynamic apps, focusing on clean design and user-friendly experiences.My skills include User experience, accessibility, test-driven development, multithreding, debugging, analytics, animation,gestures, pair programming,iOS/macOS design.
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              {value.title === "Linkedin" ? (
                <div>
                  <a href={value.value} target="_blank" rel="noopener noreferrer">
                    Aditya Choubisa
                  </a>
                </div>
              ) : (
                <div>{value.value}</div>
              )}
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts
