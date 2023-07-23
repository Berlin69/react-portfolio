import { Title } from '../Title/Title';
import './Skills.scss';
import { SkillItem } from './components/SkillItem';

export const Skills = (props) => {

    const skillsList = [
        {
            image: 'images/png/html5.png',
            percent: '80%',
            name: 'HTML',
        },
        {
            image: 'images/png/css.png',
            percent: '80%',
            name: 'CSS',
        },
        {
            image: 'images/png/JavaScript.png',
            percent: '80%',
            name: 'JavaScript',
        },
        {
            image: 'images/png/sass.png',
            percent: '80%',
            name: 'Sass/SCSS',
        },
        {
            image: 'images/png/react.png',
            percent: '80%',
            name: 'React',
        },
        {
            image: 'images/png/wordpress.png',
            percent: '80%',
            name: 'WordPress',
        },
        {
            image: 'images/png/figma.png',
            percent: '80%',
            name: 'Figma',
        },
        {
            image: 'images/png/photoshop.png',
            percent: '80%',
            name: 'Photoshop',
        },
        {
            image: 'images/png/gulp.png',
            percent: '80%',
            name: 'Gulp',
        },
        {
            image: 'images/png/webpack.png',
            percent: '80%',
            name: 'Webpack',
        },
    ]

    return (
        <section className="skills">
            <div className="container">
                <div className="skills__inner">
                    <Title
                        icon={'images/png/home.png'}
                        title={'НАВЫКИ'}
                    />
                    <h3 className="resume__title">
                        Мои <span className='text-accent'>навыки</span>
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