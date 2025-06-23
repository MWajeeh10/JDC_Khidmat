// /* App.jsx */
// import { useState, useEffect } from 'react';
// import './App.css';

// const questions = [
//   {
//     id: 1,
//     question: 'What is your age group?',
//     options: ['14-18', '18-25', '25-35', '35+'],
//   },
//   {
//     id: 2,
//     question: 'What is your main goal?',
//     options: [
//       'Learn a skill for freelancing',
//       'Start an online business/store',
//       'Get a job in tech or IT',
//       'Improve English or communication',
//       'Learn for fun or hobby',
//       'Grow in my current job',
//     ],
//   },
//   {
//     id: 3,
//     question: 'What is your experience with computers?',
//     options: ['Complete beginner', 'I know the basics', 'I can code / I am confident'],
//   },
// ];

// function App() {
//   const [step, setStep] = useState(0); // Start at 0, increment to 1 for first question
//   const [answers, setAnswers] = useState({});
//   const [isStarted, setIsStarted] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);

//   const handleAnswer = (option) => {
//     const questionId = questions[step - 1].id; // Use step - 1 since step 1 is the first question
//     setAnswers({ ...answers, [questionId]: option });
//     setStep(step + 1); // Always increment step, including past the last question
//   };

//   const progress = isStarted ? ((step - 1) / (questions.length + 1)) * 100 : 0; // Adjust for start and result screens

//   const getCourseRecommendation = () => {
//     const goal = answers[2];
//     const experience = answers[3];

//     if (goal === 'Learn a skill for freelancing') return 'Freelancing (Digital Marketing)';
//     if (goal === 'Start an online business/store') return 'Shopify';
//     if (goal === 'Get a job in tech or IT') return experience === 'Complete beginner' ? 'CIT' : 'Web Development';
//     if (goal === 'Improve English or communication') return 'English Language';
//     return 'Web & Graphics';
//   };

//   useEffect(() => {
//     setIsLoaded(true); // Trigger animation on mount
//     // Placeholder for future API call to fetch questions from MySQL
//     // Example: fetch('/api/questions').then(res => setQuestions(res.data));
//   }, []);

//   return (
//     <div className="app-container">
//       <div className="particle-background"></div>
//       <header className="app-header">
//         <div className="logo">
//           <img src="jdc-logo-placeholder.png" alt="JDC IT CITY Logo" className="logo-img" />
//         </div>
//         <nav className="nav-menu">
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#courses">Courses</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//           <div className="hamburger">☰</div>
//         </nav>
//       </header>
//       <div className="main-content">
//         <aside className="sidebar">
//           <div className="progress-circle" style={{ '--progress': `${progress}%` }}>
//             {Math.round(progress)}%
//           </div>
//           {isStarted && <p>Step {step} of {questions.length + 1}</p>}
//         </aside>
//         <main className={`content-wrapper ${isLoaded ? 'loaded' : ''}`}>
//           {!isStarted ? (
//             <div className={`start-screen ${isLoaded ? 'fade-in' : ''}`}>
//               <h1>Welcome to JDC IT City</h1>
//               <p>Discover the perfect course for your future!</p>
//               <button className="start-btn" onClick={() => { setIsStarted(true); setStep(1); }}>Start Your Advisor</button>
//             </div>
//           ) : step <= questions.length ? (
//             <div className={`card ${isLoaded ? 'fade-in' : ''}`}>
//               <h2>{questions[step - 1].question}</h2>
//               <div className="options-grid">
//                 {questions[step - 1].options.map((opt, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleAnswer(opt)}
//                     className={`option-btn ${isLoaded ? 'slide-in' : ''}`}
//                     style={{ animationDelay: `${index * 0.1}s` }}
//                   >
//                     {opt}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className={`card ${isLoaded ? 'fade-in' : ''}`}>
//               <div className="result">
//                 <h2>🎉 Your Perfect Course Awaits!</h2>
//                 <p>Based on your answers, we recommend:</p>
//                 <h3>{getCourseRecommendation()}</h3>
//                 <button className="enroll-btn">Enroll Now at JDC IT City</button>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//       <footer className="app-footer">
//         <div className="footer-section">
//           <h4>About Us</h4>
//           <p>Empowering futures with top-tier IT education at JDC IT City.</p>
//         </div>
//         <div className="footer-section">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="#courses">Courses</a></li>
//             <li><a href="#admissions">Admissions</a></li>
//             <li><a href="#blog">Blog</a></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h4>Contact</h4>
//           <p>Email: info@jdcitcity.com</p>
//           <p>Phone: +92-123-4567890</p>
//         </div>
//         <div className="footer-section">
//           <h4>Follow Us</h4>
//           <div className="social-links">
//             <a href="#facebook">Facebook</a>
//             <a href="#twitter">Twitter</a>
//             <a href="#linkedin">LinkedIn</a>
//           </div>
//         </div>
//         <p className="footer-copyright">© {new Date().getFullYear()} JDC IT City. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {

  const [isStarted, setIsStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [recommendation, setRecommendation] = useState('');
  const [recommendation1, setRecommendation1] = useState('');
  const [categoryWarning, setCategoryWarning] = useState('');
  const [sequenceWarning, setSequenceWarning] = useState('');
  const [sequenceWarning1, setSequenceWarning1] = useState('');
  const [sequenceWarning2, setSequenceWarning2] = useState('');
  const interestRef = useRef(null);

  // State for all questions 
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [computerSkill, setComputerSkill] = useState('');
  const [interest, setInterest] = useState('');
  //business
  const [bQ1, setBQ1] = useState('');
  const [bQ2, setBQ2] = useState('');
  const [bQ3, setBQ3] = useState('');
  const [bQ4, setBQ4] = useState('');
  //sales
  const [sQ1, setSQ1] = useState('');
  const [sQ2, setSQ2] = useState('');
  const [sQ3, setSQ3] = useState('');
  //creative
  const [cQ1, setCQ1] = useState('');
  const [cQ2, setCQ2] = useState('');
  const [cQ3, setCQ3] = useState('');
  const [cQ4, setCQ4] = useState('');
  //programming languages
  const [pQ1, setPQ1] = useState('');
  const [pQ2, setPQ2] = useState('');
  const [pQ3, setPQ3] = useState('');
  const [pQ4, setPQ4] = useState('');
  //technical
  const [tQ1, setTQ1] = useState('');
  const [tQ2, setTQ2] = useState('');
  const [tQ3, setTQ3] = useState('');
  const [tQ4, setTQ4] = useState('');
  //e-commerce
  const [eQ1, setEQ1] = useState('');
  const [eQ2, setEQ2] = useState('');
  const [eQ3, setEQ3] = useState('');
  const [eQ3a, setEQ3a] = useState('');
  const [eQ4, setEQ4] = useState('');
  const [eQ5, setEQ5] = useState('');
  const [eQ6, setEQ6] = useState('');
  //data handling
  const [dQ1, setDQ1] = useState('');
  const [dQ2, setDQ2] = useState('');
  const [dQ3, setDQ3] = useState('');

  useEffect(() => {
    if (isStarted) {
      fetch('http://localhost:5000/api/questions')
        .then((res) => res.json())
        .then((data) => setQuestions(data))
        .catch((err) => console.error('Error fetching questions:', err));
    }
  }, [isStarted]);

  //if any of the field is not selected
  const showSequenceWarning = (message) => {
    setSequenceWarning(message);
    setTimeout(() => setSequenceWarning(''), 5000);
  };

  const showSequenceWarning1 = (message1) => {
    setSequenceWarning1(message1);
    setTimeout(() => setSequenceWarning1(''), 5000);
  };

  const showSequenceWarning2 = (message2) => {
    setSequenceWarning2(message2);
    setTimeout(() => setSequenceWarning2(''), 5000);
  };

  const handleComputerSkill = (val) => {
    if (!gender) {
      showSequenceWarning1('❗ Please answer Question 2 (Gender) first.');
    } else {
      setComputerSkill(val);
      if (val === 'Beginner') {
        setRecommendation1('✅ We recommend you to first take the CIT course!');
        setCategoryWarning('');
      } else {
        setRecommendation1('');
      }
    }
  };

  const handleInterestChange = (val) => {
    if (!computerSkill) {
      showSequenceWarning2('❗ Please answer Question 3 (Skills) first.');
    } else {
      setInterest(val);
      setBQ1(''); setBQ2(''); setBQ3(''); setBQ4('');
      setSQ1(''); setSQ2(''); setSQ3('');
      setCQ1(''); setCQ2(''); setCQ3(''); setCQ4('');
      setPQ1(''); setPQ2(''); setPQ3(''); setPQ4('');
      setTQ1(''); setTQ2(''); setTQ3(''); setTQ4('');
      setEQ1(''); setEQ2(''); setEQ3(''); setEQ3a(''); setEQ4(''); setEQ5(''); setEQ6('');
      setDQ1(''); setDQ2(''); setDQ3('');
      setRecommendation('');
      setRecommendation1('');
      setCategoryWarning('');
    }
  };

  const handleBQ1 = (val) => {
    setBQ1(val);
    setBQ2(''); setBQ3(''); setBQ4('');
    setRecommendation('');
    setCategoryWarning('');
  };

  const handleBQ2 = (val) => {
    setBQ2(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take Business Development course!');
    } else {
      setRecommendation('');
    }
    setBQ3(''); setBQ4('');
    setCategoryWarning('');
  };

  const handleBQ3 = (val) => {
    setBQ3(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take Digital Marketing course!');
    } else {
      setRecommendation('');
    }
    setBQ4('');
    setCategoryWarning('');
  };

  const handleBQ4 = (val) => {
    setBQ4(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take Entrepreneurial Leadership course!');
    } else {
      setRecommendation('');
      setCategoryWarning('❗ Kindly choose another category from Q4).');
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSQ1 = (val) => {
    setSQ1(val);
    if (val === 'Beginner') {
      setRecommendation('✅ We recommend you to take the English Language course!');
    } else {
      setRecommendation('');
    }
    setSQ2(''); setSQ3('');
    setCategoryWarning('');
  };

  const handleSQ2 = (val) => {
    setSQ2(val);
    setSQ3('');
    setRecommendation('');
    setCategoryWarning('');
  };

  const handleSQ3 = (val) => {
    setSQ3(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the Sales Development course!');
    } else {
      setRecommendation('');
      setCategoryWarning('❗ Kindly choose another category from Q4).');
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCQ1 = (val) => {
    setCQ1(val);
    setCQ2(''); setCQ3(''); setCQ4('');
    setRecommendation('');
    setCategoryWarning('');
  };

  const handleCQ2 = (val) => {
    setCQ2(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the Photo/Video Editing course!');
    } else {
      setRecommendation('');
    }
    setCQ3(''); setCQ4('');
    setCategoryWarning('');
  };

  const handleCQ3 = (val) => {
    setCQ3(val);
    setCQ4('');
    setRecommendation('');
    setCategoryWarning('');
  };

  const handleCQ4 = (val) => {
    setCQ4(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the Graphics Designing course!');
    } else {
      setRecommendation('');
      setCategoryWarning('❗ Kindly choose another category from Q4).');
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePQ1 = (val) => {
    setPQ1(val);
    setPQ2(''); setPQ3(''); setPQ4('');
    setRecommendation('');
    setCategoryWarning('');
  };

  const handlePQ2 = (val) => {
    setPQ2(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the Python Programming course!');
    } else {
      setRecommendation('');
    }
    setPQ3(''); setPQ4('');
    setCategoryWarning('');
  };

  const handlePQ3 = (val) => {
    setPQ3(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the C# sharp Programming course!');
    } else {
      setRecommendation('');
    }
    setPQ4('');
    setCategoryWarning('');
  };

  const handlePQ4 = (val) => {
    setPQ4(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the Mastering C++ course!');
    } else {
      setRecommendation('');
      setCategoryWarning('❗ Kindly choose another category from Q4).');
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTQ1 = (val) => {
    setTQ1(val);
    setTQ2(''); setTQ3(''); setTQ4('');
    setRecommendation('');
    setCategoryWarning('');
  };

  const handleTQ2 = (val) => {
    setTQ2(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the Web Development course!');
    } else {
      setRecommendation('');
    }
    setTQ3(''); setTQ4('');
    setCategoryWarning('');
  };

  const handleTQ3 = (val) => {
    setTQ3(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the IT Essentials course!');
    } else {
      setRecommendation('');
    }
    setTQ4('');
    setCategoryWarning('');
  };

  const handleTQ4 = (val) => {
    setTQ4(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the CCNA course!');
    } else {
      setRecommendation('');
      setCategoryWarning('❗ Kindly choose another category from Q4).');
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEQ1 = (val) => {
    setEQ1(val);
    setEQ2(''); setEQ3(''); setEQ3a(''); setEQ4(''); setEQ5(''); setEQ6('');
    if (val === 'No') {
      setRecommendation('✅ We recommend you to take the Daraz course!');
    } else {
      setRecommendation('');
    }
    setCategoryWarning('');
  };

  const handleEQ2 = (val) => {
    setEQ2(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the Shopify course!');
    } else {
      setRecommendation('');
    }
    setEQ3(''); setEQ3a(''); setEQ4(''); setEQ5(''); setEQ6('');
    setCategoryWarning('');
  };

  const handleEQ3 = (val) => {
    setEQ3(val);
    setEQ3a(''); setEQ4(''); setEQ5(''); setEQ6('');
    setRecommendation('');
    setCategoryWarning('');
  };

  const handleEQ3a = (val) => {
    setEQ3a(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the ETSY course!');
    } else {
      setRecommendation('');
      setCategoryWarning('❗ Kindly choose another category from Q4).');
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setEQ4(''); setEQ5(''); setEQ6('');
  };

  const handleEQ4 = (val) => {
    setEQ4(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the Walmart course!');
    } else {
      setRecommendation('');
    }
    setEQ5(''); setEQ6('');
    setCategoryWarning('');
  };

  const handleEQ5 = (val) => {
    setEQ5(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the Amazon course!');
    } else {
      setRecommendation('');
    }
    setEQ6('');
    setCategoryWarning('');
  };

  const handleEQ6 = (val) => {
    setEQ6(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the e-Bay course!');
    } else {
      setRecommendation('');
      setCategoryWarning('❗ Kindly choose another category from Q4).');
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDQ1 = (val) => {
    setDQ1(val);
    setDQ2(''); setDQ3('');
    setRecommendation('');
    setCategoryWarning('');
  };

  const handleDQ2 = (val) => {
    setDQ2(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the Power BI course!');
    } else {
      setRecommendation('');
    }
    setDQ3('');
    setCategoryWarning('');
  };

  const handleDQ3 = (val) => {
    setDQ3(val);
    if (val === 'Yes') {
      setRecommendation('✅ We recommend you to take the Data Analysis course!');
    } else {
      setRecommendation('');
      setCategoryWarning('❗ Kindly choose another category from Q4).');
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    if (!age || !gender || !computerSkill || !interest) {
      setCategoryWarning('❗ Please answer all initial questions.');
      return;
    }
  
    const allAnswers = [age, gender, computerSkill, interest];
    if (interest === 'business') allAnswers.push(bQ1, bQ2, bQ3, bQ4);
    if (interest === 'Sales Department') allAnswers.push(sQ1, sQ2, sQ3);
    if (interest === 'creative') allAnswers.push(cQ1, cQ2, cQ3, cQ4);
    if (interest === 'Programming Languages') allAnswers.push(pQ1, pQ2, pQ3, pQ4);
    if (interest === 'Technical') allAnswers.push(tQ1, tQ2, tQ3, tQ4);
    if (interest === 'E-commerce') allAnswers.push(eQ1, eQ2, eQ3, eQ3a, eQ4, eQ5, eQ6);
    if (interest === 'Data Handling') allAnswers.push(dQ1, dQ2, dQ3);

    fetch('http://localhost:5000/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName: name, answers: allAnswers }),
    })
      .then((res) => res.json())
      .then((data) => setRecommendation(`✅ We recommend you to take the ${data.course} course!`))
      .catch((err) => {
        console.error('Error submitting answers:', err);
        setCategoryWarning('❗ Error getting recommendation.');
      });
  };

  return (
   <div className="App">
    <header className="app-header">
  <div className="logo-container">
    <div className="logo-circle" />
    <span className="logo-text">JDC Free IT City</span>
  </div>

  <nav className="nav-menu">
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#courses">Courses</a></li>
      <li><a href="#jobs">Jobs</a></li>
      <li><a href="#contact">Contact Us</a></li>
      <li><a href="#result">Find Your Result</a></li>
    </ul>
    <button className="register-btn">
      Register Now →
    </button>
  </nav>
</header>

  <div className="question-section">
    <h2 className="question-title">Course Advisor</h2> 
    
    <div className="question">
      <p>1) What is your age group?</p>
      {['14-17', '18-30', '30 above'].map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={age === option}
            onChange={() => setAge(option)}  
          />{' '}
          {option}
        </label>
      ))}
      
    </div>

   

          <div className="question">
            <p>2) What is your gender?</p>
            {['Male', 'Female', 'Prefer not to say'].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={gender === option}
                  onChange={() => {
                    if (!age) showSequenceWarning('❗ Please answer Question 1 (Age) first.');
                    else setGender(option);
                  }}
                />{' '}
                {option}
              </label>
            ))}
            {sequenceWarning && <div className="warning">{sequenceWarning}</div>}
          </div>

          <div className="question">
            <p>3) How would you rate your computer skills?</p>
            {['Beginner', 'Average', 'Excellent'].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={computerSkill === option}
                  onChange={() => handleComputerSkill(option)}
                />{' '}
                {option}
              </label>
            ))}
            {sequenceWarning1 && <div className="warning">{sequenceWarning1}</div>}

            {recommendation1 && (
    <div className="recommendation">{recommendation1}</div>
  )}
          </div>

          <div className="question" ref={interestRef}>
            <p>4) What kind of work do you want to learn?</p>
            {['business', 'creative', 'Sales Department', 'E-commerce', 'Data Handling', 'Programming Languages', 'Technical'].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={interest === option}
                  onChange={() => handleInterestChange(option)}
                />{' '}
                {option === 'business' ? 'Business (startup, management)' :
                 option === 'creative' ? 'Creative (designing, editing)' :
                 option === 'Sales Department' ? 'Sales Department (communication)' :
                 option === 'E-commerce' ? 'E-commerce (online stores, selling items)' :
                 option === 'Data Handling' ? 'Data Handling (analysis, visualization)' :
                 option === 'Programming Languages' ? 'Programming Languages (coding)' :
                 'Technical (networking, OS)'}
              </label>
            ))}
            {sequenceWarning2 && <div className="warning">{sequenceWarning2}</div>}
          </div>

          {interest === 'business' && (
            <>
              <div className="question">
                <p>5) Interested in managing clients and making sales?</p>
                {['Yes', 'No'].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      value={option}
                      checked={bQ1 === option}
                      onChange={() => handleBQ1(option)}
                    />{' '}
                    {option}
                  </label>
                ))}
              </div>
              {bQ1 === 'Yes' && (
                <div className="question">
                  <p>6) Want to explore how AI grows a business online?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={bQ2 === option}
                        onChange={() => handleBQ2(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {(bQ1 === 'No' || (bQ1 === 'Yes' && bQ2 === 'No')) && (
                <div className="question">
                  <p>7) Do you want to earn money online by freelancing or marketing?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={bQ3 === option}
                        onChange={() => handleBQ3(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {bQ3 === 'No' && (
                <div className="question">
                  <p>8) Are you interested in starting and managing your own business, brand or company?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={bQ4 === option}
                        onChange={() => handleBQ4(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </>
          )}

          {interest === 'Sales Department' && (
            <>
              <div className="question">
                <p>5) How good are your English speaking and writing skills?</p>
                {['Beginner', 'Average', 'Excellent'].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      value={option}
                      checked={sQ1 === option}
                      onChange={() => handleSQ1(option)}
                    />{' '}
                    {option}
                  </label>
                ))}
              </div>
              {(sQ1 === 'Average' || sQ1 === 'Excellent') && (
                <div className="question">
                  <p>6) Do you like convincing customers to buy your product or brand?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={sQ2 === option}
                        onChange={() => handleSQ2(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {(sQ2 === 'Yes' || sQ2 === 'No') && (
                <div className="question">
                  <p>7) Do you want to learn about how products are sold to customers by direct client communication?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={sQ3 === option}
                        onChange={() => handleSQ3(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </>
          )}

          {interest === 'creative' && (
            <>
              <div className="question">
                <p>5) Do you enjoy recording videos with your phone or camera?</p>
                {['Yes', 'No'].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      value={option}
                      checked={cQ1 === option}
                      onChange={() => handleCQ1(option)}
                    />{' '}
                    {option}
                  </label>
                ))}
              </div>
              {cQ1 && (
                <div className="question">
                  <p>6) Do you want to know how movies or videos are planned, scripted and filmed?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={cQ2 === option}
                        onChange={() => handleCQ2(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {cQ2 === 'No' && (
                <div className="question">
                  <p>7) Have you ever used tools like Figma or Photoshop to create designs?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={cQ3 === option}
                        onChange={() => handleCQ3(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {(cQ3 === 'Yes' || cQ3 === 'No') && (
                <div className="question">
                  <p>8) Do you want to learn how to do animation, digital illustration and create logos using these tools?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={cQ4 === option}
                        onChange={() => handleCQ4(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </>
          )}

          {interest === 'Programming Languages' && (
            <>
              <div className="question">
                <p>5) Have you ever written code in any programming language?</p>
                {['Yes', 'No'].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      value={option}
                      checked={pQ1 === option}
                      onChange={() => handlePQ1(option)}
                    />{' '}
                    {option}
                  </label>
                ))}
              </div>
              {pQ1 && (
                <div className="question">
                  <p>6) Do you want to learn Python (an easier language)?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={pQ2 === option}
                        onChange={() => handlePQ2(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {pQ2 === 'No' && (
                <div className="question">
                  <p>7) Are you interested in making a desktop or Windows application?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={pQ3 === option}
                        onChange={() => handlePQ3(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {pQ3 === 'No' && (
                <div className="question">
                  <p>8) Do you want to learn how to use pointers and memory management in C++?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={pQ4 === option}
                        onChange={() => handlePQ4(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </>
          )}

          {interest === 'Technical' && (
            <>
              <div className="question">
                <p>5) Have you ever tried to make a website before, even a basic one?</p>
                {['Yes', 'No'].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      value={option}
                      checked={tQ1 === option}
                      onChange={() => handleTQ1(option)}
                    />{' '}
                    {option}
                  </label>
                ))}
              </div>
              {tQ1 && (
                <div className="question">
                  <p>6) Do you want to learn how to make websites using WordPress?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={tQ2 === option}
                        onChange={() => handleTQ2(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {tQ2 === 'No' && (
                <div className="question">
                  <p>7) Do you want to know how a computer works from inside?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={tQ3 === option}
                        onChange={() => handleTQ3(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {tQ3 === 'No' && (
                <div className="question">
                  <p>8) Are you curious about how the internet or Wi-Fi network works?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={tQ4 === option}
                        onChange={() => handleTQ4(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </>
          )}

          {interest === 'E-commerce' && (
            <>
              <div className="question">
                <p>5) Do you have any experience in creating an online store?</p>
                {['Yes', 'No'].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      value={option}
                      checked={eQ1 === option}
                      onChange={() => handleEQ1(option)}
                    />{' '}
                    {option}
                  </label>
                ))}
              </div>
              {eQ1 === 'Yes' && (
                <div className="question">
                  <p>6) Do you want to create your own online store where you control the website, design, and sales?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={eQ2 === option}
                        onChange={() => handleEQ2(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {eQ2 === 'No' && (
                <div className="question">
                  <p>7) Are you interested in selling on big marketplaces like Amazon, Walmart, or eBay?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={eQ3 === option}
                        onChange={() => handleEQ3(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {eQ3 === 'No' && (
                <div className="question">
                  <p>8) Are you interested in selling handmade products?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={eQ3a === option}
                        onChange={() => handleEQ3a(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {eQ3 === 'Yes' && (
                <div className="question">
                  <p>9) Do you want to sell on a marketplace that is mostly for big brands with strict supplier checks?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={eQ4 === option}
                        onChange={() => handleEQ4(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {eQ4 === 'No' && (
                <div className="question">
                  <p>10) Do you want to sell on a big online store where there is fast shipping, help in packing and delivery?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={eQ5 === option}
                        onChange={() => handleEQ5(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {eQ5 === 'No' && (
                <div className="question">
                  <p>11) Do you want to sell on a website where people can make offers or buy at fixed price?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={eQ6 === option}
                        onChange={() => handleEQ6(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </>
          )}

          {interest === 'Data Handling' && (
            <>
              <div className="question">
                <p>5) Have you ever worked with data – using MS Excel or any other software?</p>
                {['Yes', 'No'].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      value={option}
                      checked={dQ1 === option}
                      onChange={() => handleDQ1(option)}
                    />{' '}
                    {option}
                  </label>
                ))}
              </div>
              {dQ1 && (
                <div className="question">
                  <p>6) Would you like to learn how to convert unclean data into charts, reports?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={dQ2 === option}
                        onChange={() => handleDQ2(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {dQ2 === 'No' && (
                <div className="question">
                  <p>7) Would you like to learn how to use SQL?</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={dQ3 === option}
                        onChange={() => handleDQ3(option)}
                      />{' '}
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </>
            
          )}

          {recommendation && <div className="recommendation">{recommendation}</div>}
          {categoryWarning && <div className="warning">{categoryWarning}</div>}
          </div>
         
          <button onClick={handleSubmit} className="submit-btn">
            Next
          </button>

          <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#terms">Terms & Condition</a></li>
            <li><a href="#faq">FAQs & Help</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p><span>🏠</span> 5 Star Chowrangi, Block L, North Nazimabad Town, Karachi, Pakistan</p>
          <p><span>📞</span> 02136641024</p>
          <p><span>📧</span> info@jdcfreeitcity@gmail.com</p>
          <div className="social-icons">
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
            <a href="#facebook"><i className="fab fa-facebook"></i></a>
            <a href="#youtube"><i className="fab fa-youtube"></i></a>
            <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Gallery</h3>
          <div className="gallery">
            <img src="image1.jpg" alt="Gallery 1" />
            <img src="image2.jpg" alt="Gallery 2" />
            <img src="image3.jpg" alt="Gallery 3" />
            <img src="image4.jpg" alt="Gallery 4" />
            <img src="image5.jpg" alt="Gallery 5" />
            <img src="image6.jpg" alt="Gallery 6" />
          </div>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Stay informed! Subscribe to our newsletter for the latest updates.</p>
          <input type="email" placeholder="Your email" />
          <button>SignUp</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© JDC FREE IT CITY, All Right Reserved. Designed By SOFTOLOGICS</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#cookies">Cookies</a>
          <a href="#help">Help</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </footer>
         
        </div>

  );
}

