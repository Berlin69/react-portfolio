import { useState } from 'react';
import { Title } from '../Title/Title';
import '../../index.scss';
import './Hiring.scss';

import { hiringContent } from '../__data/hiring-data';
import { hiringImages } from '../__data/hiring-data';

export const Hiring = (props) => {

    const { lang, isDayTheme } = props;
    const {
        sectionTitle,
        buttonText,
        activeButtonText
    } = hiringContent[lang];
    const {
        titleIconLight,
        titleIconDark,
    } = hiringImages;

    const [isBonusOpen, setIsBonusOpen] = useState(false);

    return (
        <section className="hiring" id='hiring'>
            <div className="container">
                <div className="hiring__inner">
                    <Title
                        icon={isDayTheme ? titleIconDark : titleIconLight}
                        title={sectionTitle}
                        isDayTheme={isDayTheme}
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