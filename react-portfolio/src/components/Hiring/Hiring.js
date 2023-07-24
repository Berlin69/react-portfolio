import { useState } from 'react';
import { Title } from '../Title/Title';
import './Hiring.scss';

import { hiringContent } from '../__data/hiring-data';

export const Hiring = (props) => {

    const { lang } = props;
    const {
        sectionTitle,
        buttonText,
        activeButtonText
    } = hiringContent[lang];

    const [isBonusOpen, setIsBonusOpen] = useState(false);

    return (
        <section className="hiring" id='hiring'>
            <div className="container">
                <div className="hiring__inner">
                    <Title
                        icon={'images/png/hr.png'}
                        title={sectionTitle}
                    />
                    <button
                        onClick={() => setIsBonusOpen(!isBonusOpen)}
                        className="hiring__button">
                        {isBonusOpen ? activeButtonText : buttonText}
                    </button>

                    {isBonusOpen
                        ?
                        <div className="hiring__bonus">
                            <img className='hiring__bonus-image' src="images/png/liam.png" alt="liam mem" />
                            <img className='hiring__bonus-image' src="images/png/dog.png" alt="dog mem" />
                            <img className='hiring__bonus-image hiring__bonus-image-wide' src="images/png/girl.png" alt="girl mem" />
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </section>
    );
};