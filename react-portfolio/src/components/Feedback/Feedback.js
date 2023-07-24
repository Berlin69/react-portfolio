import { useEffect, useState } from 'react';
import { Title } from '../Title/Title';
import './Feedback.scss';

import { feedbackContent } from '../__data/feedback-data';

export const Feedback = (props) => {

    const { lang } = props;
    const {
        sectionTitle,
        textBeforeAccent,
        textAccent,
        projectLinkText,
        feedbacks
    } = feedbackContent[lang];

    const [clickCounter, setClickCounter] = useState(1);
    const [selectedFeedback, setSelectedFeedback] = useState(0);
    useEffect(() => {
        if (clickCounter === 0) {
            setClickCounter(3)
        }
        if (clickCounter === 4) {
            setClickCounter(1)
        }
        if (clickCounter === 1) {
            setSelectedFeedback(0);
        }
        if (clickCounter === 2) {
            setSelectedFeedback(1);
        }
        if (clickCounter === 3) {
            setSelectedFeedback(2);
        }
    }, [clickCounter])


    return (
        <section className="feedback" id='feedback'>
            <div className="container">
                <div className="feedback__inner">
                    <Title
                        icon={'images/png/feedback.png'}
                        title={sectionTitle}
                    />
                    <h3 className="resume__title">
                        {textBeforeAccent}<span className='text-accent'>{textAccent}</span>
                    </h3>

                    <div className="feedback__box">
                        <div className="feedback__box-content">
                            <div className="feedback__box-content-person">
                                <img
                                    className='feedback__box-content-person-img'
                                    src={feedbacks[selectedFeedback].image}
                                    alt={feedbacks[selectedFeedback].name} />
                                <div className="feedback__box-content-person-info">
                                    <h6 className="feedback__box-content-person-name">
                                        {feedbacks[selectedFeedback].name}
                                    </h6>
                                    <p className="feedback__box-content-person-company">
                                        {feedbacks[selectedFeedback].position}<span className='text-accent'> {feedbacks[selectedFeedback].company}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="feedback__box-content-text">
                                "{feedbacks[selectedFeedback].feedback}"
                            </div>
                            <a className='feedback__box-content-link' href={feedbacks[selectedFeedback].projectLink} target='_blank' rel='noreferrer'>
                                {projectLinkText}
                            </a>
                        </div>
                        <div className="feedback__box-controls">
                            <button
                                onClick={() => setClickCounter(clickCounter - 1)}
                                className="feedback__controls-left">
                                <svg width={10} height={19} viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.71065 0.225224L0.23225 8.92708C0.0833396 9.07993 0 9.28492 0 9.49836C0 9.71181 0.0833396 9.9168 0.23225 10.0696L8.71065 18.7748C8.78001 18.8461 8.86295 18.9027 8.95456 18.9414C9.04616 18.9801 9.14459 19 9.24402 19C9.34346 19 9.44188 18.9801 9.53349 18.9414C9.6251 18.9027 9.70803 18.8461 9.7774 18.7748C9.92011 18.6286 10 18.4324 10 18.228C10 18.0237 9.92011 17.8275 9.7774 17.6813L1.80457 9.49836L9.7774 1.31705C9.91962 1.17095 9.9992 0.975072 9.9992 0.771136C9.9992 0.5672 9.91962 0.371322 9.7774 0.225224C9.70803 0.153947 9.6251 0.0972948 9.53349 0.0586122C9.44188 0.0199295 9.34346 0 9.24402 0C9.14459 0 9.04616 0.0199295 8.95456 0.0586122C8.86295 0.0972948 8.78001 0.153947 8.71065 0.225224Z" fill="black" />
                                </svg>
                            </button>
                            <p className="feedback__controls-counter">
                                {clickCounter} / {feedbacks.length}
                            </p>
                            <button
                                onClick={() => setClickCounter(clickCounter + 1)}
                                className="feedback__controls-right">
                                <svg width={10} height={19} viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.30207 0.225224L9.76809 8.92708C9.91678 9.07993 10 9.28492 10 9.49836C10 9.71181 9.91678 9.9168 9.76809 10.0696L1.30207 18.7748C1.2328 18.8461 1.14999 18.9027 1.05852 18.9414C0.967041 18.9801 0.868759 19 0.769471 19C0.670183 19 0.571899 18.9801 0.480424 18.9414C0.388949 18.9027 0.306137 18.8461 0.236873 18.7748C0.0943743 18.6286 0.0145978 18.4324 0.0145978 18.228C0.0145978 18.0237 0.0943743 17.8275 0.236873 17.6813L8.19807 9.49836L0.236873 1.31705C0.0948632 1.17095 0.0153955 0.975072 0.0153955 0.771136C0.0153955 0.5672 0.0948632 0.371322 0.236873 0.225224C0.306137 0.153947 0.388949 0.0972948 0.480424 0.0586122C0.571899 0.0199295 0.670183 0 0.769471 0C0.868759 0 0.967041 0.0199295 1.05852 0.0586122C1.14999 0.0972948 1.2328 0.153947 1.30207 0.225224Z" fill="black" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};