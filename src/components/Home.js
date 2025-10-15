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
            <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40px",
    textAlign: "center",
    width: "100%",
  }}
>
  <style>
    {`
      /* Floating animation */
      @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0); }
      }

      /* Default styles (Desktop) */
      .profile-img {
        width: 400px;
        height: 400px;
      }
      .info-text {
        font-size: 1.2rem;
      }

      /* Tablet view */
      @media (max-width: 768px) {
        .profile-img {
          width: 280px !important;
          height: 280px !important;
        }
        .info-text {
          font-size: 1rem !important;
        }
      }

      /* Mobile view */
      @media (max-width: 480px) {
        .profile-img {
          width: 200px !important;
          height: 200px !important;
        }
        .info-text {
          font-size: 0.9rem !important;
          flex-direction: column !important;
          gap: 4px !important;
          padding: 6px 10px !important;
        }
      }
    `}
  </style>

  {/* Floating Image */}
  <img
    src="/adityachoubisa.jpg"
    alt="Aditya Choubisa"
    className="profile-img"
    style={{
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid #f97316",
      marginBottom: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      animation: "float 3s ease-in-out infinite",
      transition: "width 0.3s ease, height 0.3s ease",
    }}
  />

  {/* Info Section */}
  <div
    className="info-text"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      background: "rgba(0,0,0,0.6)",
      padding: "8px 16px",
      borderRadius: "12px",
      transition: "all 0.3s ease",
      flexWrap: "wrap",
    }}
  >
    <div
      style={{
        fontWeight: 600,
        color: "#ffffff",
      }}
    >
      Aditya Choubisa
    </div>
    <div
      style={{
        fontWeight: 500,
        color: "#f97316",
      }}
    >
      iOS Developer
    </div>
  </div>
</div>

        </div>
    </section>
    )
}

export default Home
