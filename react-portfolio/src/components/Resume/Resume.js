import { Title } from '../Title/Title';
import { EducationItem } from './Components/EducationItem/EducationItem';
import { ExperienceItem } from './Components/ExperienceItem/ExperienceItem';
import './Resume.scss';

export const Resume = (props) => {

    const experienceList = [
        {
            duration: 'апрель 2022 - настоящее время',
            position: 'Front-end React Developer',
            company: 'ArtGeneration.me',
            duties: [
                'создание архитектуры веб-приложения с помощью HTML/CSS/JS на библиотеке React',
                'поиск и оценка решений для оптимизации взаимодействия фронтенда и бэкенда',
                'рефакторинг и оптимизация текущего функционала'
            ],
        },

        {
            duration: 'декабрь 2020 - май 2022',
            position: 'Front-end Developer',
            company: 'Авто Премиум',
            duties: [
                'Разработка программной онлайн-платформы для Отдела Продаж',
                'рефакторинг и оптимизация текущего функционала',
            ],
        },
        {
            duration: 'декабрь 2020 - настоящее время',
            position: 'Front-end Developer',
            company: 'Freelance',
            duties: [
                'Разработка сайтов с помощью HTML, CSS, JavaScript, WordPress',
                'Внесение правок в сайты, разработка нового функционала',
            ],
        },
    ]

    const educationList = [
        {
            duration: '2022',
            position: 'React. Разработка сложных клиентских приложений',
            company: 'HTML Academy',
        },
        {
            duration: '2020',
            position: 'JavaScript. Архитектура клиентских приложений',
            company: 'HTML Academy',
        },
        {
            duration: '2020',
            position: 'JavaScript. Профессиональная разработка веб-интерфейсов',
            company: 'HTML Academy',
        },
    ]

    return (
        <section className="resume">
            <div className="container">
                <div className="resume__inner">
                    <Title
                        icon={'images/png/home.png'}
                        title={'РЕЗЮМЕ'}
                    />
                    <h3 className="resume__title">
                        <span className='text-accent'>Опыт работы</span>
                    </h3>

                    {experienceList.map((item) => {
                        return (
                            <ExperienceItem item={item} />
                        )
                    })}
                    <h3 className="resume__title">
                        Обучение
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