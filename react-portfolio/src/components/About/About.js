import { Title } from '../Title/Title';
import './About.scss';

export const About = (props) => {
    return (
        <section className='about'>
            <div className="container">
                <div className="about__inner">
                    <Title
                        icon={'images/png/home.png'}
                        title={'ОБО МНЕ'}
                    />
                    <div className="about__content">
                        <h4 className="about__content-title">
                            Lorem ipsum dolor sit, amet consectetur <span className='text-accent'>adipisicing elit.</span>
                        </h4>
                        <p className="about__content-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni natus mollitia perferendis incidunt, praesentium quas neque repellat velit, ab nemo earum corrupti. A possimus totam esse sed molestias magni tempore?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};