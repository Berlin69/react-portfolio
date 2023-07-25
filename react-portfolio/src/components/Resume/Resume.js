import { Title } from '../Title/Title';
import { EducationItem } from './Components/EducationItem/EducationItem';
import { ExperienceItem } from './Components/ExperienceItem/ExperienceItem';
import './Resume.scss';

import { resumeContent } from '../__data/resume-data';
import { resumeImages } from '../__data/resume-data';

export const Resume = (props) => {

    const { lang, isDayTheme } = props;
    const {
        sectionTitle,
        experience,
        education,
        experienceList,
        educationList } = resumeContent[lang];

    const {
        titleIconLight,
        titleIconDark
    } = resumeImages;

    return (
        <section className="resume">
            <div className="container">
                <div className="resume__inner" id='resume'>
                    <Title
                        icon={isDayTheme ? titleIconDark : titleIconLight}
                        title={sectionTitle}
                        isDayTheme={isDayTheme}
                    />
                    <h3 className="resume__title">
                        <span className='text-accent'>{experience}</span>
                    </h3>

                    {experienceList.map((item) => {
                        return (
                            <ExperienceItem item={item} isDayTheme={isDayTheme} />
                        )
                    })}
                    <h3 className={`resume__title ${isDayTheme ? 'light' : ''}`}>
                        {education}
                    </h3>

                    {educationList.map((item) => {
                        return (
                            <EducationItem item={item} isDayTheme={isDayTheme} />
                        )
                    })}
                </div>
            </div>
        </section>
    );
};