import { Title } from '../Title/Title';
import { EducationItem } from './Components/EducationItem/EducationItem';
import { ExperienceItem } from './Components/ExperienceItem/ExperienceItem';
import './Resume.scss';

import { resumeContent } from '../__data/resume-data';

export const Resume = (props) => {

    const { lang } = props;
    const {
        sectionTitle,
        experience,
        education,
        experienceList,
        educationList } = resumeContent[lang];

    return (
        <section className="resume">
            <div className="container">
                <div className="resume__inner" id='resume'>
                    <Title
                        icon={'images/png/resume.png'}
                        title={sectionTitle}
                    />
                    <h3 className="resume__title">
                        <span className='text-accent'>{experience}</span>
                    </h3>

                    {experienceList.map((item) => {
                        return (
                            <ExperienceItem item={item} />
                        )
                    })}
                    <h3 className="resume__title">
                        {education}
                    </h3>

                    {educationList.map((item) => {
                        return (
                            <EducationItem item={item} />
                        )
                    })}
                </div>
            </div>
        </section>
    );
};