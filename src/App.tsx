import React from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase/config.js"; 
const db = getFirestore(app);
function App() {
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const submit = () => {
  } 
  submit()
    // Add the data to Firestore
    const docRef = await addDoc(collection(db, "form"), {
      name,
      email,
      message,
    });
    console.log("Submitted to firebase with id ", docRef.id);
    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  } catch (error) {
    console.error("Error adding document: ", error);
    const submit = () => {
  } 
  submit()
  }
};

  return (
    <main>
      {/* navbar */}
      <nav className="nav custom-nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#project">Work</a>
          </li>
          <li className="line">
            <a href="#get-in-touch">Get in Touch</a>
          </li>
        </ul>
      </nav>
      {/* navbar */}
      {/* Home */}
      <header className="grid grid-cols-1 lg:grid-cols-2">
        <div className="image-container" id="home">
          <img src="src\assets\profile.png" className="profile" alt="Profile" />
        </div>
        <div className="intro">
          <div className="myname">Ujjwal Shandilya</div>
          <div className="myinfo">
            I am a Machine Learning Engineer and AI developer with a solid
            foundation in AI and ML coding, ready to tackle complex challenges
            and drive technological advancements. Eager to apply expertise in
            building intelligent systems that push the boundaries of innovation.
          </div>
          <div className="cv">
            <a
              href="https://drive.google.com/file/d/18nmJFqSbu-dEnZ88ltf7_-GBRDeSnWNZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button" id="download-button">
                View CV
              </button>
            </a>
          </div>
        </div>
      </header>
      {/* technical skills*/}
      <div className="work-desc">Technical Skills</div>
      <div className="work">
        <img src="src\assets\python.png" className="python" alt="Python" />
        <img src="src\assets\tensor.png" className="tensor" alt="TensorFlow" />
        <img src="src\assets\numpy.png" className="numpy" alt="NumPy" />
        <img src="src\assets\mysql.png" className="mysql" alt="MySQL" />
        <img src="src\assets\firebase.png" className="firebasse" alt="Firebase" />
      </div>
      {/* technical skills*/}
    {/* home */}
      {/* testimonial */}
      <div className="testimonial-head" id="testimonial">
        Testimonials
        <div className="margins">
          <div>
            <div className="flex">
              <div className="card">
                <div className="inner">
                  <div className="info">
                    <h3>
                      <span>
                        "Working alongside Ujjwal has been an absolute pleasure.
                        Their expertise in Machine Learning and AI development
                        is unparalleled. He consistently delivers innovative
                        solutions that have greatly advanced our projects. He is
                        a true asset to any team."
                      </span>
                    </h3>
                  </div>
                  <div className="name">
                    <h2>Sarah Thompson (Company: Insight AI)</h2>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="inner">
                  <div className="info">
                    <h3>
                      <span>
                        "I have had the privilege of collaborating with Ujjwal
                        on several high-impact projects. He possesses a rare
                        combination of technical brilliance and an innate
                        understanding of business needs. His contributions have
                        been instrumental in driving our company's success in
                        the AI domain."
                      </span>
                    </h3>
                  </div>
                  <div className="name">
                    <h2>John Rodriguez (Company: AI Innovations Lab)</h2>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="inner">
                  <div className="info">
                    <h3>
                      <span>
                        "Ujjwal is a true visionary in the field of AI and
                        Machine Learning. He brings creativity, rigor, and a deep
                        understanding of algorithms to every project. His work
                        has led to breakthroughs that are reshaping how we
                        approach complex problems. He is an invaluable member of
                        our team."
                      </span>
                    </h3>
                  </div>
                  <div className="name">
                    <h2>Michael Patel (Company: DataTech Solutions)</h2>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="inner">
                  <div className="info">
                    <h3>
                      <span>
                        "I have had the pleasure of supervising Ujjwal's work on
                        multiple occasions, and I am consistently impressed by
                        his technical prowess. He has a knack for transforming
                        abstract concepts into tangible, high-impact solutions.
                        His dedication to advancing AI technologies is truly
                        commendable."
                      </span>
                    </h3>
                  </div>
                  <div className="name">
                    <h2>Emily Chen (Company: TechGenius Inc.)</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial */}
      {/* works */}
      <div className="project" id="project">
        Recent Works
      </div>
      <div className="medi">
        <img src="src\assets\medicure.png" className="medicure" alt="Medicure" />
        <div className="medi-text">
          {" "}
          Medicure is a platform in which you can calculate your health
          parameters such as BMI, calories calculator, protein calculator, and
          many more. It also has a disease predictor that can predict the
          probable disease based on 5 symptoms given by the user.
        </div>
      </div>
      <div className="git1">
        <a href="https://github.com/ujjshan/medicure/" target="_blank" rel="noopener noreferrer">
          <button className="med-git-1" id="download-button">
            Medicure GIT Repository
          </button>
        </a>
      </div>
      <div className="car-pred">
        <img src="src\assets\car.png" className="car" alt="Car Prediction" />
        <div className="car-text">
          {" "}
          This is a car price prediction model based on machine learning in
          which it predicts the price of used cars based on the information
          provided by the user.
        </div>
      </div>
      <div className="git2">
        <a href="https://github.com/ujjshan/car-pred-website/" target="_blank" rel="noopener noreferrer">
          <button className="car-git-1" id="download-button">
            Car Prediction GIT Repository
          </button>
        </a>
      </div>
      {/* works */}
      {/* get in touch */}
      <div>
        <h2 className="contact">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div id="get-in-touch">
            <label for="name">Name:</label>
            <input
              className="get-name"
              type="text"
              id="name"
              required
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              className="get-email"
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <label for="message">Message:</label>
            <textarea
              className="get-message"
              id="message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
      {/* get in touch */}
    </main>
  );
}

export default App;