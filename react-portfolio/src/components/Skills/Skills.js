import { Title } from '../Title/Title';
import './Skills.scss';
import { SkillItem } from './components/SkillItem';

import { skillsList } from '../__data/skills-data';
import { skillsContent } from '../__data/skills-data';
import { skillsImages } from '../__data/skills-data';

export const Skills = (props) => {
    const { lang, isDayTheme } = props;
    const {
        sectionTitle,
        textBeforeAccent,
        textAccent,
    } = skillsContent[lang];

    const {
        titleIconLight,
        titleIconDark,
    } = skillsImages;

    return (
        <section className="skills">
            <div className="container">
                <div className="skills__inner" id='skills'>
                    <Title
                        icon={isDayTheme ? titleIconDark : titleIconLight}
                        title={sectionTitle}
                        isDayTheme={isDayTheme}
                    />
                    <h3 className={`resume__title ${isDayTheme ? 'light' : ''}`}>
                        {textBeforeAccent}<span className='text-accent'>{textAccent}</span>
                    </h3>

                    <div className="skills__wrapper">
                        {skillsList.map((skill) => {
                            return (
                                <SkillItem skill={skill} isDayTheme={isDayTheme} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};