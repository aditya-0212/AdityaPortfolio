import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Projects() {
const [listProjects] = useState([
  {
    name: 'BucketList',
    des: 'Integrated Apple Maps into SwiftUI used MapKit and Adding custom annotations to mark locations on the map used MKPointAnnotation and biometric authentication (Touch ID / Face ID) to secure sensitive data and implemented notifications to remind users to visit locations',
    mission: 'allow users to create and manage a personalized list of places they want to visit, leveraging features like data persistence, MapKit, and location-based services to enhance the experience',
    language: 'Swift, SwiftUI, MapKit...',
    git: "https://github.com/aditya-0212/BucketList",
    video: 'BucketList.mp4'
  },
  {
    name: 'Instafilter',
    des: "Implemented real-time image filtering using Core Image, enabling dynamic adjustments and configured CIFilter and CIContext seamless user interaction and Integrated UIKit's UIImagePickerController into SwiftUI for photo selection and saving, showcasing proficiency in combining both frameworks",
    mission: 'allow users to apply filters to images, providing an interactive and intuitive way to edit and enhance photos with real-time effects using SwiftUI and Core Image',
    language: 'Swift, SwiftUI, Core Image...',
    git: "https://github.com/aditya-0212/Instafilter",
    video: '/Instafilter.mp4'
  },
  {
    name: 'HotProspects',
    des: 'Implemented dynamic QR code generation and scanning, allowing seamless sharing of contact details between users and Utilized Local Notifications and @Published for managing prospect status, enhancing user engagement and app interactivity',
    mission: 'to build a business networking app that allows users to exchange contact details via QR codes, track prospects, and manage communication efficiently',
    language: 'Swift, SwiftUI, Core Image...',
    git: "https://github.com/aditya-0212/HotProspects",
    video: '/HotProspects.mp4'
  },
  {
    name: 'Flashzilla',
    des: 'Developed a flashcard app with custom decks and dynamic content, enabling users to create and study personalized learning materials and Integrated Core Data for persistent data storage and retrieval, enhancing user experience through seamless management of flashcard information',
    mission: 'to create an interactive flashcard app that helps users learn and memorize information efficiently by swiping through cards, offering a dynamic and engaging study experience',
    language: 'Swift, SwiftUI, Core Image...',
    git: "https://github.com/aditya-0212/Flashzilla",
    video: '/Flashzilla.mp4'
  },
  {
    name: 'SnowSeeker',
    des: 'Developed a ski resort app featured a dynamic list and detailed views using NavigationSplitView, with MapKit for interactive maps and rich information on various ski resorts',
    mission: 'help users find the perfect ski resort by browsing detailed information and filtering resorts based on their preferences, enhancing their travel planning experience',
    language: 'Swift, SwiftUI, MapKit,Firebase...',
    git: "https://github.com/aditya-0212/SnowSeeker",
    video: '/SnowSeeker-iPad.mp4'
  },
  {
    name: 'BookWorm',
    des: 'Developed a Book tracking app using Core Data for efficient data management, featured an intuitive interface with dynamic lists and detailed views for seamless browsing and managing of reading lists',
    mission: "allow users to track, review, and rate books they've read, providing a personal library experience",
    language: 'Swift, SwiftUI, Core Data...',
    git: "https://github.com/aditya-0212/BookWorm",
    video: '/BookWorm.mp4'
  },
  {
    name: 'CupCakeCorner',
    des: ' Learn form-based user input, data validation, @Published, Codable, networking with URLSession, and UserDefaults',
    mission: "Users can place real orders online, improving their experience with smooth checkout flows",
    language: 'Swift, SwiftUI, Core Data...',
    git: "https://github.com/aditya-0212/CupcakeCorner",
    video: 'CupCakeCorner.mp4'
  },
  {
    name: 'MoonShots',
    des: 'Utilize ScrollView, decode JSON with Codable, work with GeometryReader for responsive layouts, and handle navigation with NavigationLink',
    mission: "Users can explore historical space missions with a rich and intuitive interface, enhancing learning and engagement",
    language: 'Swift, SwiftUI, Core Data...',
    git: "https://github.com/aditya-0212/MoonShot",
    video: '/MoonShots.mp4'
  },
  {
    name: 'BetterRest',
    des: ' Use DatePicker, Stepper, and CoreML to build an app that predicts ideal sleep time using machine learning',
    mission: "Helps users optimize their sleep habits by providing personalized predictions, improving health and well-being",
    language: 'Swift, SwiftUI, Core Data...',
    git: "https://github.com/aditya-0212/BetterRest",
    video: '/BetterRest.mp4'
  },
  {
    name: 'Guess the Flag',
    des: 'Work with Image, Button, and Alert to create an interactive flag guessing game',
    mission: " Provides a fun, educational game where users can learn about different flags while challenging themselves",
    language: 'Swift, SwiftUI, Core Data...',
    git: "https://github.com/aditya-0212/GuessTheFlag",
    video: '/Guess the Flag.mp4'
  },
  {
    name: 'Word Scramble',
    des: 'Learn list-based UI with List, and handle text validation, animation, and user input',
    mission: "Engages users with an interactive word puzzle, helping them improve vocabulary and cognitive skills",
    language: 'Swift, SwiftUI, Core Data...',
    git: "https://github.com/aditya-0212/WordScramble",
    video: '/Word Scramble.mp4'
  },
  {
    name: 'WeSplit',
    des: 'Use Form, Picker, and text input for a bill-splitting app that calculates totals with tip',
    mission: "Simplifies the process of bill splitting for users, saving them time and ensuring fairness in group payments",
    language: 'Swift, SwiftUI, Core Data...',
    git: "https://github.com/aditya-0212/WeSplitApp",
    video: '/WeSplit.mp4'
  },
  {
    name: 'FaceList',
    des: 'Learn photo picking using ImagePicker, save data with Codable, and work with @Published for observable objects',
    mission: "Allows users to save and organize their favorite memories, providing a personal and meaningful experience",
    language: 'Swift, SwiftUI, Core Data...',
    git: "",
    video: '/FaceList.mp4'
  },
  {
    name: 'Habbit Tracking',
    des: 'Build a habit-tracking app using List, custom data models, and UserDefaults',
    mission: "Encourages users to set goals and monitor their progress, boosting productivity and self-discipline",
    language: 'Swift, SwiftUI, Core Data...',
    git: "",
    video: '/Habbit Tracking.mp4'
  },
  {
    name: 'PickerWheel',
    des: 'Explore Picker, ForEach, and state management to build a picker-based app',
    mission: 'Enhances user interaction by offering a clean, intuitive way to make selections, improving app usability',
    language: 'Swift, SwiftUI, Core Image, Firebase ',
    git: "",
    video: '/PickerWheel.mp4'
  },
  {
    name: 'SocialMedia Platform',
    des: 'Created a SocialMedia Clone with different Views (Feed, Explore, AddNewPost, Notifications, Profile, Login and Register) used  SwiftUI and Firebase and Implemented authentication and authorization  for login along with CRUD operation',
    mission: 'mission of a social media platform could be to connect people globally, enabling them to share, communicate, and interact with content and communities in a meaningful way',
    language: 'Swift, SwiftUI, Core Image, Firebase ',
    git: "https://github.com/aditya-0212/SocialMediaClone",
    video: '/project1.PNG'
  },
  {
    name: 'Snacks Shop App',
    des: 'Created a SnackShop App with different Views (Snacks Order list, Order, Explore, AddNew Snacks, Notifications, Card, Login and Register) used SwiftUI and Firebase',
    mission: 'Back-end Developer, system analysis and design',
    language: 'Swift, SwiftUI, MapKit, Firebase,...',
    git: "https://github.com/aditya-0212/Snacks-Shop-App",
    video: '/project2.PNG'
  },
  
  

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        These are my Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                {/* <img src={value.images} alt="" /> */}
                <video  controls controlsList="nodownload noremoteplayback" disablePictureInPicture disableRemoteplayback muted src={value.video}></video>
                {/* <video  controls controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture disableRemoteplayback src={value.video}></video> */}
                {/* <video src={value.video}></video> */}
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
                <a href = {value.git} target="_blank">
                <div className="mission">
                    <div><FontAwesomeIcon icon={faGithub} /></div>
                    <div>
                        <h4>Github</h4>
                    </div>
                </div>
            </a>    
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
