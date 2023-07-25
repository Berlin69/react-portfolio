import { Title } from '../Title/Title';
import './Portfolio.scss';
import { ProjectRegular } from './components/ProjectRegular';

import { portfolioContent } from '../__data/portfolio-data';
import { portfolioImages } from '../__data/portfolio-data';

export const Portfolio = (props) => {

    const { lang, isDayTheme } = props;

    const {
        sectionTitle,
        textBeforeAccent,
        textAccent,
        projectsList
    } = portfolioContent[lang];

    const {
        titleIconLight,
        titleIconDark,
    } = portfolioImages;

    return (
        <section className="portfolio">
            <div className="container">
                <div className="portfolio__inner" id='portfolio'>
                    <Title
                        icon={isDayTheme ? titleIconDark : titleIconLight}
                        title={sectionTitle}
                        isDayTheme={isDayTheme}
                    />

                    <h3 className={`resume__title ${isDayTheme ? 'light' : ''}`}>
                        {textBeforeAccent}<span className='text-accent'>{textAccent}</span>
                    </h3>
                    <div className="portfolio__projects-wrapper">
                        {projectsList.map((project) => {
                            return (
                                <ProjectRegular project={project} isDayTheme={isDayTheme} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};