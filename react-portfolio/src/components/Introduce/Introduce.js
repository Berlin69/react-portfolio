import './Introduce.scss';
import { Title } from '../Title/Title';

export const Introduce = (props) => {
    return (
        <section className="introduce">
            <div className="container">
                <div className="introduce__inner">
                    <Title
                        icon={'images/png/home.png'}
                        title={'ПРЕДСТАВЛЕНИЕ'}
                    />
                    <div className="introduce__greetings-wrapper">
                        <h4 className="introduce__greetings-text">
                            Привет! Меня зовут <span className='text-accent'>Виталий</span>, я Фронтенд-разработчик на React
                        </h4>
                    </div>
                    <div className="introduce__specialization-wrapper">
                        <p className="introduce__specialization">
                            Я разрабатываю сайты и веб-приложения
                        </p>
                    </div>
                    <div className="introduce__projects-btn-wrapper">
                        <button className="introduce__projects-btn">
                            <img className='projects-spin' src="images/png/round-text.png" alt="my projects spining" />
                            <div className="introduce__projects-svg-wrapper">
                                <svg width={40} height={60} viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.86182 8.21983C1.78983 8.14614 1.70301 8.08704 1.60655 8.04605C1.51009 8.00506 1.40596 7.98301 1.30037 7.98124C1.19478 7.97946 1.0899 7.99799 0.991985 8.03571C0.894067 8.07343 0.805119 8.12957 0.730446 8.20079C0.655773 8.27201 0.596905 8.35684 0.557355 8.45023C0.517804 8.54362 0.498381 8.64365 0.500244 8.74435C0.502107 8.84505 0.525218 8.94437 0.568198 9.03637C0.611178 9.12837 0.673147 9.21117 0.750408 9.27983L4.94442 13.2798C5.01729 13.3496 5.10389 13.405 5.19925 13.4428C5.29461 13.4806 5.39686 13.5 5.50012 13.5C5.60339 13.5 5.70563 13.4806 5.801 13.4428C5.89636 13.405 5.98296 13.3496 6.05583 13.2798L10.2498 9.27983C10.3271 9.21117 10.3891 9.12837 10.432 9.03637C10.475 8.94437 10.4981 8.84505 10.5 8.74435C10.5019 8.64365 10.4824 8.54362 10.4429 8.45023C10.4033 8.35684 10.3445 8.27201 10.2698 8.20079C10.1951 8.12957 10.1062 8.07343 10.0083 8.03571C9.91034 7.99799 9.80546 7.97946 9.69987 7.98124C9.59429 7.98301 9.49016 8.00506 9.39369 8.04605C9.29723 8.08704 9.21042 8.14614 9.13842 8.21983L6.2865 10.9398L6.2865 1.24983C6.2865 1.05092 6.20365 0.860151 6.05617 0.719498C5.9087 0.578846 5.70868 0.499829 5.50012 0.499829C5.29156 0.499829 5.09154 0.578846 4.94407 0.719498C4.7966 0.860151 4.71375 1.05092 4.71375 1.24983L4.71375 10.9398L1.86182 8.21983Z" fill="#699BF7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="introduce__numbers-wrapper">
                        <div className="introduce__numbers-item">
                            <h5 className="introduce__number">
                                2+
                            </h5>
                            <p className="introduce__number-text">
                                года опыта
                            </p>
                        </div>
                        <div className="introduce__numbers-item">
                            <h5 className="introduce__number">
                                8
                            </h5>
                            <p className="introduce__number-text">
                                проектов выполнено
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};