import { Title } from '../Title/Title';
import './Skills.scss';
import { SkillItem } from './components/SkillItem';

import { skillsList } from '../__data/skills-data';
import { skillsContent } from '../__data/skills-data';

export const Skills = (props) => {
    const { lang } = props;
    const {
        sectionTitle,
        textBeforeAccent,
        textAccent,
    } = skillsContent[lang];

    return (
        <section className="skills">
            <div className="container">
                <div className="skills__inner" id='skills'>
                    <Title
                        icon={'images/png/skills.png'}
                        title={sectionTitle}
                    />
                    <h3 className="resume__title">
                        {textBeforeAccent}<span className='text-accent'>{textAccent}</span>
                    </h3>

                    <div className="skills__wrapper">
                        {skillsList.map((skill) => {
                            return (
                                <SkillItem skill={skill} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};