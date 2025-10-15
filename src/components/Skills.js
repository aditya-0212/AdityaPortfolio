import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faGoogle,faInstagram,faApple } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';



function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'SwiftUI',
    des: ' A modern UI framework from Apple, SwiftUI simplifies building user interfaces across all Apple platforms. It allows for declarative syntax, enabling fast, adaptive, and reactive designs with less code',
    icon: faGithub
  },
  {
    name: 'MapKit',
    des: 'A framework that allows developers to embed interactive maps into iOS apps. It provides features like displaying annotations, routing, and integrating custom overlays to enhance location-based services',
    icon: faGoogle
  },
  {
    name: 'Core Image',
    des: 'A powerful image processing framework that lets developers apply filters, effects, and transformations to images and videos. It supports real-time rendering and can be integrated into apps for editing and enhancing media',
    icon: faInstagram },
  {
    name: 'Core Data',
    des: 'An object graph and persistence framework used to store, manage, and retrieve data in iOS apps. It efficiently handles data management, including saving, fetching, and data migration, with minimal code',
    icon: faApple
  },
  {
    name: 'Create ML',
    des: "Apple's machine learning framework that simplifies training custom models for tasks like image recognition, text classification, and more. It enables developers to create ML models using Swift, integrated directly into Xcode",
    icon: faGoogle
  },
  {
    name: 'Core ML',
    des: 'A framework that allows the integration of machine learning models into iOS apps, enabling features like image recognition, natural language processing, and predictive analytics directly on the device',
    icon: faGoogle
  },
  {
    name: 'Unit Testing(XCTest)',
    des: "XCTest is Apple's testing framework for writing unit tests to verify the correctness of individual components of your app. It ensures the app's logic functions as expected with repeatable test cases",
    icon: faGithub
  },
  {
    name: 'UI Testing',
    des: 'An extension of XCTest, UI Testing is used to automate the testing of the user interface. It simulates user interactions, such as taps and swipes, to ensure that the app behaves correctly in real-world usage scenarios',
    icon: faApple 
  },
  {
    name: 'UIKit',
    des: "A foundational framework for building iOS apps, UIKit provides the essential tools for creating and managing the app's user interface. It includes a wide range of components like buttons, labels, navigation, and view controllers",
    icon: faApple 
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        These are my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Proficient in programming languages such as Swift, C++, JavaScript, and Python. Experienced with iOS frameworks including SwiftUI, Core Data, XCTest, Create ML, Core ML, MapKit, and AVFoundation. Skilled in using tools like Xcode, git, SPM, and Terminal, with expertise in design platforms such as Sketch and Figma. Strong foundation in Auto Layout, UI testing, and cross-platform development for iOS and macOS
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

