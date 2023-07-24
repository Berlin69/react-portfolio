import { Title } from '../Title/Title';
import './Portfolio.scss';
import { ProjectRegular } from './components/ProjectRegular';

import { portfolioContent } from '../__data/portfolio-data';

export const Portfolio = (props) => {

    const { lang } = props;

    const {
        sectionTitle,
        textBeforeAccent,
        textAccent,
        projectsList
    } = portfolioContent[lang]

    return (
        <section className="portfolio">
            <div className="container">
                <div className="portfolio__inner" id='portfolio'>
                    <Title
                        icon={'images/png/portfolio.png'}
                        title={sectionTitle}
                    />

                    <h3 className="resume__title">
                        {textBeforeAccent}<span className='text-accent'>{textAccent}</span>
                    </h3>
                    <div className="portfolio__projects-wrapper">
                        {projectsList.map((project) => {
                            return (
                                <ProjectRegular project={project} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};