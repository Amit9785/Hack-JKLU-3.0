import React, { useState } from 'react';
import './css_file/style.css';
function FeedbackForm() {
    const [listening, setListening] = useState(false);
    const [result, setResult] = useState('');
    let recognition;
    const startListening = () => {
        recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
        recognition.lang = "en-US";
        recognition.start();
        setListening(true);
        recognition.onresult = function(event) {
            const speechResult = event.results[0][0].transcript;
            setResult(speechResult);
        };
        recognition.onerror = function(event) {
            console.error("Speech recognition error:", event.error);
        };
    };
    const stopListening = () => {
        if (recognition) {
            recognition.stop();
            setListening(false);
        }
    };
    return (
        <div className="container">
            <h2>Feedback Form</h2>
            <form id="feedbackForm" method="post">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your Name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea id="feedback" name="feedback" placeholder="Enter your feedback" rows="4" required></textarea>
                </div>
                <div className="form-group">
                    <label>Question 1: What is the capital of France?</label><br />
                    <input type="radio" name="q1" value="Paris" required /> Paris<br />
                    <input type="radio" name="q1" value="Berlin" /> Berlin<br />
                    <input type="radio" name="q1" value="London" /> London<br />
                    <input type="radio" name="q1" value="Rome" /> Rome<br />
                </div>
                <div className="form-group">
                    <label>Question 2: What is the largest planet in our solar system?</label><br />
                    <input type="radio" name="q2" value="Mercury" /> Mercury<br />
                    <input type="radio" name="q2" value="Venus" /> Venus<br />
                    <input type="radio" name="q2" value="Earth" /> Earth<br />
                    <input type="radio" name="q2" value="Jupiter" required /> Jupiter<br />
                </div>
                <div className="form-group">
                    <label htmlFor="photos">Upload Photos:</label>
                    <input type="file" id="photos" name="photos" accept="image/*" multiple />
                </div>
                <button className='btnl' type="button" onClick={startListening} style={{ display: listening ? 'none' : 'inline-block' }}>
                    Start Listening
                </button>
                <button className='btnl' type="button" onClick={stopListening} style={{ display: listening ? 'inline-block' : 'none' }}>
                    Stop Listening
                </button>
                <div id="speechResult">{result}</div>
                <button className='btnl' type="submit">Submit</button>
            </form>
        </div>
    );
}
export default FeedbackForm;
