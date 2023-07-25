import { Title } from '../Title/Title';
import './About.scss';

import { aboutContent } from '../__data/about-data';
import { aboutImages } from '../__data/about-data';

export const About = (props) => {

    const { lang, isDayTheme } = props;
    const {
        sectionTitle,
        textBeforeAccent,
        textAccent,
        textAbout
    } = aboutContent[lang];

    const {
        titleIconLight,
        titleIconDark
    } = aboutImages;

    return (
        <section className='about'>
            <div className="container">
                <div className="about__inner" id='about'>
                    <Title
                        icon={isDayTheme ? titleIconDark : titleIconLight}
                        title={sectionTitle}
                        isDayTheme={isDayTheme}
                    />
                    <div className="about__content">
                        <h4 className={`about__content-title ${isDayTheme ? 'light' : ''}`}>
                            {textBeforeAccent}<span className='text-accent'>{textAccent}</span>
                        </h4>
                        <p className="about__content-text">
                            {textAbout}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};