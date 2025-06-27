
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  

  
  const [questions, setQuestions] = useState([]);
 
  const [recommendation, setRecommendation] = useState('');
  const [recommendation1, setRecommendation1] = useState('');
  const [categoryWarning, setCategoryWarning] = useState('');
  const [sequenceWarning, setSequenceWarning] = useState('');
  const [sequenceWarning1, setSequenceWarning1] = useState('');
  const [sequenceWarning2, setSequenceWarning2] = useState('');
  const interestRef = useRef(null);
  const [language, setLanguage] = useState('en'); // 'en' or 'ur'
  const t = (en, ur) => (language === 'en' ? en : ur); // translator function


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

  // useEffect(() => {
  //   if (isStarted) {
  //     fetch('http://localhost:5000/api/questions')
  //       .then((res) => res.json())
  //       .then((data) => setQuestions(data))
  //       .catch((err) => console.error('Error fetching questions:', err));
  //   }
  // }, [isStarted]);

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
      showSequenceWarning1(t(
        '❗ Please answer Question 2 (Gender) first.',
        '❗ براہ کرم پہلے سوال نمبر 2 (صنف) کا جواب دیں۔'
      ));
    } else {
      setComputerSkill(val);
      if (val === 'Beginner') {
        setRecommendation1(t('✅ We recommend you to first take the CIT course!', 
          '✅ ہم آپ کو پہلے CIT کورس کرنے کی تجویز دیتے ہیں!'));
        setCategoryWarning('');
      } else {
        setRecommendation1('');
      }
    }
  };

  const handleInterestChange = (val) => {
    if (!computerSkill) {
      showSequenceWarning2( t(
        '❗ Please answer Question 3 (Skills) first.',
        '❗ براہ کرم پہلے سوال نمبر 3 (کمپیوٹر مہارت) کا جواب دیں۔'
      ));
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
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(t('✅ We recommend you to take Business Development course!', 
        '✅ ہم آپ کو بزنس ڈیولپمنٹ کورس لینے کی تجویز دیتے ہیں!'));
      setCategoryWarning('');
    } else {
      setRecommendation('');
    }
    setBQ3(''); setBQ4('');
    setCategoryWarning('');
  };

  const handleBQ3 = (val) => {
    setBQ3(val);
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation( t(
        '✅ We recommend you to take Digital Marketing course!',
        '✅ ہم آپ کو ڈیجیٹل مارکیٹنگ کورس کرنے کی تجویز دیتے ہیں!'
      ));
      setCategoryWarning('');
    } else {
      setRecommendation('');
    }
    setBQ4('');
    setCategoryWarning('');
  };

  const handleBQ4 = (val) => {
    setBQ4(val);
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(t(
        '✅ We recommend you to take Entrepreneurial Leadership course!',
        '✅ ہم آپ کو انٹرپرینیور لیڈرشپ کورس کرنے کی تجویز دیتے ہیں!'
      ));
      setCategoryWarning('');
    } else {
      setRecommendation('');
      setCategoryWarning( t(
        '❗ Kindly choose another category from Q4).',
        '❗ براہ کرم سوال نمبر 4 سے کوئی اور زمرہ منتخب کریں۔'
      ));
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSQ1 = (val) => {
    setSQ1(val);
    setCategoryWarning('');
    if (val === 'Beginner') {
      setRecommendation(t(
        '✅ We recommend you to take the English Language course!',
        '✅ ہم آپ کو انگلش لینگویج کورس کرنے کی تجویز دیتے ہیں!'
      ));
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
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(  t(
        '✅ We recommend you to take the Sales Development course!',
        '✅ ہم آپ کو سیلز ڈیولپمنٹ کورس کرنے کی تجویز دیتے ہیں!'
      )
    );
    } else {
      setRecommendation('');
      setCategoryWarning(  t(
        '❗ Kindly choose another category from Q4).',
        '❗ براہ کرم سوال نمبر 4 سے کوئی اور زمرہ منتخب کریں۔'
      ));
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
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(  t(
        '✅ We recommend you to take the Photo/Video Editing course!',
        '✅ ہم آپ کو فوٹو/ویڈیو ایڈیٹنگ کورس کرنے کی تجویز دیتے ہیں!'
      ));
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
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(  t(
        '✅ We recommend you to take the Graphics Designing course!',
        '✅ ہم آپ کو گرافکس ڈیزائننگ کورس کرنے کی تجویز دیتے ہیں!'
      ));
    } else {
      setRecommendation('');
      setCategoryWarning(  t(
        '❗ Kindly choose another category from Q4).',
        '❗ براہ کرم سوال نمبر 4 سے کوئی اور زمرہ منتخب کریں۔'
      ));
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
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(  t(
        '✅ We recommend you to take the Python Programming course!',
        '✅ ہم آپ کو Python پروگرامنگ کورس کرنے کی تجویز دیتے ہیں!'
        
      ));
    } else {
      setRecommendation('');
    }
    setPQ3(''); setPQ4('');
    setCategoryWarning('');
  };

  const handlePQ3 = (val) => {
    setPQ3(val);
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(  t(
        '✅ We recommend you to take the C# sharp Programming course!',
        '✅ ہم آپ کو سی شارپ پروگرامنگ کورس کرنے کی تجویز دیتے ہیں!'
      ));
    } else {
      setRecommendation('');
    }
    setPQ4('');
    setCategoryWarning('');
  };

  const handlePQ4 = (val) => {
    setPQ4(val);
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(t('✅ We recommend you to take the Mastering C++ course!', 
        '✅ ہم آپ کو ++C ماسٹرنگ کورس کرنے کی تجویز دیتے ہیں!'));
    } else {
      setRecommendation('');
      setCategoryWarning(  t(
        '❗ Kindly choose another category from Q4).',
        '❗ براہ کرم سوال نمبر 4 سے کوئی اور زمرہ منتخب کریں۔'
      ));
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
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(   t(
        '✅ We recommend you to take the Web Development course!',
        '✅ ہم آپ کو ویب ڈیولپمنٹ کورس کرنے کی تجویز دیتے ہیں!'
      ));
    } else {
      setRecommendation('');
    }
    setTQ3(''); setTQ4('');
    setCategoryWarning('');
  };

  const handleTQ3 = (val) => {
    setTQ3(val);
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(  t(
        '✅ We recommend you to take the IT Essentials course!',
        '✅ ہم آپ کو آئی ٹی ایسینشلز کورس کرنے کی تجویز دیتے ہیں!'
      ));
    } else {
      setRecommendation('');
    }
    setTQ4('');
    setCategoryWarning('');
  };

  const handleTQ4 = (val) => {
    setTQ4(val);
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation( t(
        '✅ We recommend you to take the CCNA course!',
        '✅ ہم آپ کو سی سی این اے کورس کرنے کی تجویز دیتے ہیں!'
      ));
    } else {
      setRecommendation('');
      setCategoryWarning(  t(
        '❗ Kindly choose another category from Q4).',
        '❗ براہ کرم سوال نمبر 4 سے کوئی اور زمرہ منتخب کریں۔'
      ));
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEQ1 = (val) => {
    setEQ1(val);
    setEQ2(''); setEQ3(''); setEQ3a(''); setEQ4(''); setEQ5(''); setEQ6('');
    if (val === 'No') {
      setRecommendation( t(
        '✅ We recommend you to take the Daraz course!',
        '✅ ہم آپ کو دراز کورس کرنے کی تجویز دیتے ہیں!'
      ));
    } else {
      setRecommendation('');
    }
    setCategoryWarning('');
  };

  const handleEQ2 = (val) => {
    setEQ2(val);
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(t(
        '✅ We recommend you to take the Shopify course!',
        '✅ ہم آپ کو شاپیفائی کورس کرنے کی تجویز دیتے ہیں!'
      ));
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
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(t('✅ We recommend you to take the ETSY course!', 
        '✅ ہم آپ کو ETSY کورس کرنے کی تجویز دیتے ہیں!'));
    } else {
      setRecommendation('');
      setCategoryWarning( t(
        '❗ Kindly choose another category from Q4).',
        '❗ براہ کرم سوال نمبر 4 سے کوئی اور زمرہ منتخب کریں۔'
      ));
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setEQ4(''); setEQ5(''); setEQ6('');
  };

  const handleEQ4 = (val) => {
    setEQ4(val);
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation( t(
        '✅ We recommend you to take the Walmart course!',
        '✅ ہم آپ کو والمارٹ کورس کرنے کی تجویز دیتے ہیں!'
      ));
    } else {
      setRecommendation('');
    }
    setEQ5(''); setEQ6('');
    setCategoryWarning('');
  };

  const handleEQ5 = (val) => {
    setEQ5(val);
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation( t(
        '✅ We recommend you to take the Amazon course!',
        '✅ ہم آپ کو ایمیزون کورس کرنے کی تجویز دیتے ہیں!'
      ));
    } else {
      setRecommendation('');
    }
    setEQ6('');
    setCategoryWarning('');
  };

  const handleEQ6 = (val) => {
    setEQ6(val);
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation( t(
        '✅ We recommend you to take the e-Bay course!',
        '✅ ہم آپ کو ای بے کورس کرنے کی تجویز دیتے ہیں!'
      ));
    } else {
      setRecommendation('');
      setCategoryWarning(t(
        '❗ Kindly choose another category from Q4).',
        '❗ براہ کرم سوال نمبر 4 سے کوئی اور زمرہ منتخب کریں۔'
      ));
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
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(t(
        '✅ We recommend you to take the Power BI course!',
        '✅ ہم آپ کو پاور بی آئی کورس کرنے کی تجویز دیتے ہیں!'
      ));
    } else {
      setRecommendation('');
    }
    setDQ3('');
    setCategoryWarning('');
  };

  const handleDQ3 = (val) => {
    setDQ3(val);
    setCategoryWarning('');
    if (val === 'Yes') {
      setRecommendation(t(
        '✅ We recommend you to take the Data Analysis course!',
        '✅ ہم آپ کو ڈیٹا اینالیسس کورس کرنے کی تجویز دیتے ہیں!'
      ));
    } else {
      setRecommendation('');
      setCategoryWarning(t(
        '❗ Kindly choose another category from Q4).',
        '❗ براہ کرم سوال نمبر 4 سے کوئی اور زمرہ منتخب کریں۔'
      ));
      interestRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const handleSubmit = () => {
  //   if (!age || !gender || !computerSkill || !interest) {
  //     setCategoryWarning(t(
  //       '❗ Please answer all initial questions.',
  //       '❗ براہ کرم تمام ابتدائی سوالات کے جوابات دیں۔'
  //     ));
  //     return;
  //   }
  
  //   const allAnswers = [age, gender, computerSkill, interest];
  //   if (interest === 'business') allAnswers.push(bQ1, bQ2, bQ3, bQ4);
  //   if (interest === 'Sales Department') allAnswers.push(sQ1, sQ2, sQ3);
  //   if (interest === 'creative') allAnswers.push(cQ1, cQ2, cQ3, cQ4);
  //   if (interest === 'Programming Languages') allAnswers.push(pQ1, pQ2, pQ3, pQ4);
  //   if (interest === 'Technical') allAnswers.push(tQ1, tQ2, tQ3, tQ4);
  //   if (interest === 'E-commerce') allAnswers.push(eQ1, eQ2, eQ3, eQ3a, eQ4, eQ5, eQ6);
  //   if (interest === 'Data Handling') allAnswers.push(dQ1, dQ2, dQ3);

  //   fetch('http://localhost:5000/api/submit', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ userName: name, answers: allAnswers }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setRecommendation( t(
  //       `✅ We recommend you to take the ${data.course} course!`,
  //       `✅ ہم آپ کو ${data.course} کورس کرنے کی تجویز دیتے ہیں!`
  //     )))
  //     .catch((err) => {
  //       console.error('Error submitting answers:', err);
  //       setCategoryWarning(t(
  //         t(
  //           '❗ Error getting recommendation.',
  //           '❗ تجویز حاصل کرنے میں خرابی پیش آ گئی ہے۔'
  //         )
        
  //       ));
  //     });
  // };

  return (
    <div className={`App ${language}`}>
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
    <button className="register-btn" onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}>
      {language === 'en' ? 'اردو میں تبدیل کریں' : 'Switch to English'}
    </button>
  </nav>
</header>

  {/* <div className="question-section"> */}
  <div
  className={`question-section ${language === 'ur' ? 'rtl' : 'ltr'}`}
  dir={language === 'ur' ? 'rtl' : 'ltr'}
>
    <h2 className="question-title">Course Advisor</h2> 
    
    {/* <div className="question"> */}
    <div className={`question ${language}`}>
      <p>{t('1) What is your age group?', '1) آپ کی عمر کی حد کیا ہے؟ ')}</p>
      {['14-17', '18-30', '30 above'].map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={age === option}
            onChange={() => setAge(option)}  
          />{' '}
          {t(option, option === '14-17' ? '14 تا 17' : option === '18-30' ? '18 تا 30' : '30 سے اوپر')}
        </label>
      ))}
      
    </div>

   

    <div className={`question ${language}`}>
          <p>{t("2) What is your gender?", "2) آپ کی جنس کیا ہے؟")}</p>
            {['Male', 'Female', 'Prefer not to say'].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={gender === option}
                  onChange={() => {
                    if (!age) showSequenceWarning(t(
                      '❗ Please answer Question 1 (Age) first.',
                      '❗ براہ کرم پہلے سوال نمبر 1 (عمر) کا جواب دیں۔'
                    ));
                    else setGender(option);
                  }}
                />{' '}
                 {t(option, option === 'Male' ? 'مرد' : option === 'Female' ? 'عورت' : 'بتانا نہیں چاہتے')}
              </label>
            ))}
            {sequenceWarning && <div className="warning">{sequenceWarning}</div>}
          </div>

          <div className={`question ${language}`}>
          <p>{t("3) How would you rate your computer skills?", "3) آپ اپنی کمپیوٹر کی مہارت کو کس طرح درجہ دیں گے؟")}</p>
            {['Beginner', 'Average', 'Excellent'].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={computerSkill === option}
                  onChange={() => handleComputerSkill(option)}
                />{' '}
                 {t(option, option === 'Beginner' ? 'ابتدائی' : option === 'Average' ? 'درمیانہ' : 'اعلیٰ')}
              </label>
            ))}
            {sequenceWarning1 && <div className="warning">{sequenceWarning1}</div>}

            {recommendation1 && (
    <div className="recommendation">{recommendation1}</div>
  )}
          </div>

          <div className={`question ${language}`} ref={interestRef}>

          <p>{t("4) What kind of work do you want to learn?", "4) آپ کس قسم کا کام سیکھنا چاہتے ہیں؟")}</p>
            {['business', 'creative', 'Sales Department', 'E-commerce', 'Data Handling', 'Programming Languages', 'Technical'].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={interest === option}
                  onChange={() => handleInterestChange(option)}
                />{' '}
                  {t(
      option === 'business' ? 'Business (startup, management)' :
      option === 'creative' ? 'Creative (designing, editing)' :
      option === 'Sales Department' ? 'Sales Department (communication)' :
      option === 'E-commerce' ? 'E-commerce (online stores, selling items)' :
      option === 'Data Handling' ? 'Data Handling (analysis, visualization)' :
      option === 'Programming Languages' ? 'Programming Languages (coding)' :
      'Technical (networking, OS)',

      option === 'business' ? 'کاروبار (اسٹارٹ اپ، مینجمنٹ)' :
      option === 'creative' ? 'تخلیقی (ڈیزائننگ، ایڈیٹنگ)' :
      option === 'Sales Department' ? 'سیلز ڈیپارٹمنٹ (رابطہ کاری)' :
      option === 'E-commerce' ? 'ای کامرس (آن لائن اسٹور، فروخت)' :
      option === 'Data Handling' ? 'ڈیٹا ہینڈلنگ (تجزیہ، ویژولائزیشن)' :
      option === 'Programming Languages' ? 'پروگرامنگ زبانیں (کوڈنگ)' :
      'تکنیکی (نیٹ ورکنگ، او ایس)'
    )}
              </label>
            ))}
            {sequenceWarning2 && <div className="warning">{sequenceWarning2}</div>}
          </div>

          {interest === 'business' && (
            <>
            <div className={`question ${language}`}>
            <p>{t("5) Interested in managing clients and making sales?", "5) کیا آپ کلائنٹس کو سنبھالنے اور سیلز میں دلچسپی رکھتے ہیں؟")}</p>
                {['Yes', 'No'].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      value={option}
                      checked={bQ1 === option}
                      onChange={() => handleBQ1(option)}
                    />{' '}
                     {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
                  </label>
                ))}
              </div>
              {bQ1 === 'Yes' && (
                <div className={`question ${language}`}>
                 <p>{t("6) Want to explore how AI grows a business online?", "6) کیا آپ جاننا چاہتے ہیں کہ AI آن لائن کاروبار کو کیسے بڑھاتا ہے؟")}</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={bQ2 === option}
                        onChange={() => handleBQ2(option)}
                      />{' '}
                      {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
                    </label>
                  ))}
                </div>
              )}
              {(bQ1 === 'No' || (bQ1 === 'Yes' && bQ2 === 'No')) && (
                 <div className={`question ${language}`}>
                  <p>{t("7) Do you want to earn money online by freelancing or marketing?", "7) کیا آپ فری لانسنگ یا مارکیٹنگ کے ذریعے آن لائن پیسے کمانا چاہتے ہیں؟")}</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={bQ3 === option}
                        onChange={() => handleBQ3(option)}
                      />{' '}
                      {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
                    </label>
                  ))}
                </div>
              )}
              {bQ3 === 'No' && (
                 <div className={`question ${language}`}>
                  <p>{t("8) Are you interested in starting and managing your own business, brand or company?", "8) کیا آپ اپنا کاروبار، برانڈ یا کمپنی شروع کرنے اور چلانے میں دلچسپی رکھتے ہیں؟")}</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={bQ4 === option}
                        onChange={() => handleBQ4(option)}
                      />{' '}
                      {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
                    </label>
                  ))}
                </div>
              )}
            </>
          )}

          {interest === 'Sales Department' && (
            <>
              <div className={`question ${language}`}>
              <p>{t("5) How good are your English speaking and writing skills?", "5) آپ کی انگریزی بولنے اور لکھنے کی مہارت کتنی اچھی ہے؟")}</p>
                {['Beginner', 'Average', 'Excellent'].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      value={option}
                      checked={sQ1 === option}
                      onChange={() => handleSQ1(option)}
                    />{' '}
                    {t(option, option === 'Beginner' ? 'ابتدائی' : option === 'Average' ? 'درمیانہ' : 'اعلیٰ')}
                  </label>
                ))}
              </div>
              {(sQ1 === 'Average' || sQ1 === 'Excellent') && (
                  <div className={`question ${language}`}>
                  <p>{t("6) Do you like convincing customers to buy your product or brand?", "6) کیا آپ کو گاہکوں کو اپنی مصنوعات یا برانڈ خریدنے پر آمادہ کرنا پسند ہے؟")}</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={sQ2 === option}
                        onChange={() => handleSQ2(option)}
                      />{' '}
                      {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
                    </label>
                  ))}
                </div>
              )}
              {(sQ2 === 'Yes' || sQ2 === 'No') && (
                <div className={`question ${language}`}>
                  <p>{t("7) Do you want to learn about how products are sold to customers by direct client communication?", "7) کیا آپ سیکھنا چاہتے ہیں کہ کس طرح مصنوعات کو براہ راست کلائنٹس سے بات کرکے فروخت کیا جاتا ہے؟")}</p>
                  {['Yes', 'No'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={sQ3 === option}
                        onChange={() => handleSQ3(option)}
                      />{' '}
                      {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
                    </label>
                  ))}
                </div>
              )}
            </>
          )}

{interest === 'creative' && (
  <>
    <div className={`question ${language}`}>
      <p>{t("5) Do you enjoy recording videos with your phone or camera?", "5) کیا آپ کو اپنے فون یا کیمرے سے ویڈیوز ریکارڈ کرنا پسند ہے؟")}</p>
      {['Yes', 'No'].map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={cQ1 === option}
            onChange={() => handleCQ1(option)}
          />{' '}
          {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
        </label>
      ))}
    </div>

    {cQ1 && (
      <div className={`question ${language}`}>
        <p>{t("6) Do you want to know how movies or videos are planned, scripted and filmed?", "6) کیا آپ جاننا چاہتے ہیں کہ فلمیں یا ویڈیوز کیسے پلان، اسکرپٹ اور فلمائی جاتی ہیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={cQ2 === option}
              onChange={() => handleCQ2(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {cQ2 === 'No' && (
      <div className={`question ${language}`}>
        <p>{t("7) Have you ever used tools like Figma or Photoshop to create designs?", "7) کیا آپ نے کبھی Figma یا Photoshop جیسے ٹولز کا استعمال کر کے ڈیزائن بنائے ہیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={cQ3 === option}
              onChange={() => handleCQ3(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {(cQ3 === 'Yes' || cQ3 === 'No') && (
      <div className={`question ${language}`}>
        <p>{t("8) Do you want to learn how to do animation, digital illustration and create logos using these tools?", "8) کیا آپ ان ٹولز کا استعمال کر کے اینیمیشن، ڈیجیٹل السٹریشن اور لوگو بنانا سیکھنا چاہتے ہیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={cQ4 === option}
              onChange={() => handleCQ4(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}
  </>
)}


{interest === 'Programming Languages' && (
  <>
    <div className={`question ${language}`}>
      <p>{t("5) Have you ever written code in any programming language?", "5) کیا آپ نے کبھی کسی پروگرامنگ زبان میں کوڈ لکھا ہے؟")}</p>
      {['Yes', 'No'].map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={pQ1 === option}
            onChange={() => handlePQ1(option)}
          />{' '}
          {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
        </label>
      ))}
    </div>

    {pQ1 && (
      <div className={`question ${language}`}>
        <p>{t("6) Do you want to learn Python (an easier language)?", "6) کیا آپ Python سیکھنا چاہتے ہیں (ایک آسان زبان)؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={pQ2 === option}
              onChange={() => handlePQ2(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {pQ2 === 'No' && (
      <div className={`question ${language}`}>
        <p>{t("7) Are you interested in making a desktop or Windows application?", "7) کیا آپ ڈیسک ٹاپ یا ونڈوز ایپلیکیشن بنانے میں دلچسپی رکھتے ہیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={pQ3 === option}
              onChange={() => handlePQ3(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {pQ3 === 'No' && (
      <div className={`question ${language}`}>
        <p>{t("8) Do you want to learn how to use pointers and memory management in C++?", "8) کیا آپ ++C میں پوائنٹرز اور میموری مینجمنٹ سیکھنا چاہتے ہیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={pQ4 === option}
              onChange={() => handlePQ4(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}
  </>
)}


{interest === 'Technical' && (
  <>
    <div className={`question ${language}`}>
      <p>{t("5) Have you ever tried to make a website before, even a basic one?", "5) کیا آپ نے پہلے کبھی ویب سائٹ بنانے کی کوشش کی ہے، چاہے وہ سادہ ہی کیوں نہ ہو؟")}</p>
      {['Yes', 'No'].map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={tQ1 === option}
            onChange={() => handleTQ1(option)}
          />{' '}
          {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
        </label>
      ))}
    </div>

    {tQ1 && (
      <div className={`question ${language}`}>
        <p>{t("6) Do you want to learn how to make websites using WordPress?", "6) کیا آپ WordPress کا استعمال کرتے ہوئے ویب سائٹ بنانا سیکھنا چاہتے ہیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={tQ2 === option}
              onChange={() => handleTQ2(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {tQ2 === 'No' && (
      <div className={`question ${language}`}>
        <p>{t("7) Do you want to know how a computer works from inside?", "7) کیا آپ جاننا چاہتے ہیں کہ کمپیوٹر اندر سے کیسے کام کرتا ہے؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={tQ3 === option}
              onChange={() => handleTQ3(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {tQ3 === 'No' && (
      <div className={`question ${language}`}>
        <p>{t("8) Are you curious about how the internet or Wi-Fi network works?", "8) کیا آپ یہ جاننے میں دلچسپی رکھتے ہیں کہ انٹرنیٹ یا وائی فائی نیٹ ورک کیسے کام کرتا ہے؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={tQ4 === option}
              onChange={() => handleTQ4(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}
  </>
)}


{interest === 'E-commerce' && (
  <>
    <div className={`question ${language}`}>
      <p>{t("5) Do you have any experience in creating an online store?", "5) کیا آپ کے پاس آن لائن اسٹور بنانے کا کوئی تجربہ ہے؟")}</p>
      {['Yes', 'No'].map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={eQ1 === option}
            onChange={() => handleEQ1(option)}
          />{' '}
          {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
        </label>
      ))}
    </div>

    {eQ1 === 'Yes' && (
      <div className={`question ${language}`}>
        <p>{t("6) Do you want to create your own online store where you control the website, design, and sales?", "6) کیا آپ اپنا آن لائن اسٹور بنانا چاہتے ہیں جہاں آپ ویب سائٹ، ڈیزائن اور سیلز پر مکمل کنٹرول رکھ سکیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={eQ2 === option}
              onChange={() => handleEQ2(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {eQ2 === 'No' && (
      <div className={`question ${language}`}>
        <p>{t("7) Are you interested in selling on big marketplaces like Amazon, Walmart, or eBay?", "7) کیا آپ Amazon، Walmart یا eBay جیسے بڑے پلیٹ فارمز پر سیلنگ میں دلچسپی رکھتے ہیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={eQ3 === option}
              onChange={() => handleEQ3(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {eQ3 === 'No' && (
      <div className={`question ${language}`}>
        <p>{t("8) Are you interested in selling handmade products?", "8) کیا آپ ہاتھ سے بنائی گئی اشیاء بیچنے میں دلچسپی رکھتے ہیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={eQ3a === option}
              onChange={() => handleEQ3a(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {eQ3 === 'Yes' && (
      <div className={`question ${language}`}>
        <p>{t("9) Do you want to sell on a marketplace that is mostly for big brands with strict supplier checks?", "9) کیا آپ کسی ایسے پلیٹ فارم پر سیل کرنا چاہتے ہیں جو زیادہ تر بڑے برانڈز کے لیے ہوتا ہے اور جہاں سخت سپلائر چیک ہوتے ہیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={eQ4 === option}
              onChange={() => handleEQ4(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {eQ4 === 'No' && (
      <div className={`question ${language}`}>
        <p>{t("10) Do you want to sell on a big online store where there is fast shipping, help in packing and delivery?", "10) کیا آپ کسی بڑے آن لائن اسٹور پر سیل کرنا چاہتے ہیں جہاں تیز ڈیلیوری اور پیکنگ میں مدد دستیاب ہو؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={eQ5 === option}
              onChange={() => handleEQ5(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {eQ5 === 'No' && (
      <div className={`question ${language}`}>
        <p>{t("11) Do you want to sell on a website where people can make offers or buy at fixed price?", "11) کیا آپ ایسی ویب سائٹ پر سیل کرنا چاہتے ہیں جہاں لوگ آفرز دے سکیں یا مقرر کی گئی قیمت پر خرید سکیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={eQ6 === option}
              onChange={() => handleEQ6(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}
  </>
)}


{interest === 'Data Handling' && (
  <>
    <div className={`question ${language}`}>
      <p>{t("5) Have you ever worked with data – using MS Excel or any other software?", "5) کیا آپ نے کبھی ڈیٹا پر کام کیا ہے – جیسے MS Excel یا کوئی اور سافٹ ویئر؟")}</p>
      {['Yes', 'No'].map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={dQ1 === option}
            onChange={() => handleDQ1(option)}
          />{' '}
          {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
        </label>
      ))}
    </div>

    {dQ1 && (
      <div className={`question ${language}`}>
        <p>{t("6) Would you like to learn how to convert unclean data into charts, reports?", "6) کیا آپ سیکھنا چاہتے ہیں کہ غیر منظم ڈیٹا کو چارٹس اور رپورٹس میں کیسے بدلا جاتا ہے؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={dQ2 === option}
              onChange={() => handleDQ2(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}

    {dQ2 === 'No' && (
      <div className={`question ${language}`}>
        <p>{t("7) Would you like to learn how to use SQL?", "7) کیا آپ SQL استعمال کرنا سیکھنا چاہتے ہیں؟")}</p>
        {['Yes', 'No'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={dQ3 === option}
              onChange={() => handleDQ3(option)}
            />{' '}
            {t(option, option === 'Yes' ? 'ہاں' : 'نہیں')}
          </label>
        ))}
      </div>
    )}
  </>
)}


          {recommendation && <div className="recommendation">{recommendation}</div>}
          {categoryWarning && <div className="warning">{categoryWarning}</div>}
          </div>
         
          {/* <button onClick={handleSubmit} className="submit-btn">
            Next
          </button> */}

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

