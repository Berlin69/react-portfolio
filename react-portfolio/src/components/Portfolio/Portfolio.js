import { Title } from '../Title/Title';
import './Portfolio.scss';
import { ProjectRegular } from './components/ProjectRegular';

export const Portfolio = (props) => {

    const projectsList = [
        {
            image: 'images/jpg/artgeneration.jpg',
            name: 'ArtGeneration - нейросеть для создания изображений',
            link: 'https://artgeneration.me',
            wide: true,
            techStack: ['HTML', 'SCSS', 'React', 'JS', 'Mantine', 'Axios'],
        },
        {
            image: 'images/jpg/ivmedical.jpg',
            name: 'IV Medical',
            link: 'https://ivmedical.school',
            wide: false,
            techStack: ['HTML', 'SCSS', 'JS', 'JQuery', 'WordPress'],
        },
        {
            image: 'images/jpg/psa-config.jpg',
            name: 'Конфигуратор',
            link: 'https://artgeneration.me',
            wide: false,
            techStack: ['HTML', 'SCSS', 'JavaScript'],
        },
        {
            image: 'images/jpg/nslogistics.jpg',
            name: 'NorthStar - транспортировка грузов',
            link: 'https://nslogistic.ru/',
            wide: true,
            techStack: ['HTML', 'CSS', 'JS', 'WordPress'],
        },
        {
            image: 'images/jpg/novautotour.jpg',
            name: 'NovAutoTour',
            link: 'https://novautotour.ru/',
            wide: false,
            techStack: ['HTML', 'CSS', 'JS', 'WordPress'],
        },
        {
            image: 'images/jpg/detox.jpg',
            name: 'Детокс на Лайте',
            link: 'https://detoxlight.ru/',
            wide: false,
            techStack: ['Tilda', 'HTML', 'CSS', 'JS'],
        },
    ]

    return (
        <section className="portfolio">
            <div className="container">
                <div className="portfolio__inner" id='portfolio'>
                    <Title
                        icon={'images/png/portfolio.png'}
                        title={'ПОРТФОЛИО'}
                    />

                    <h3 className="resume__title">
                        Реализованные <span className='text-accent'>проекты</span>
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