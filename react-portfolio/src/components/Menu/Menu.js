import './Menu.scss';

export const Menu = () => {
    return (
        <div className='menu'>
            <a href="#home" className="menu__link">
                <img className='menu__link-img' src="images/png/home.png" alt="home icon" />
            </a>
            <a href="#about" className="menu__link">
                <img className='menu__link-img' src="images/png/about.png" alt="about icon" />
            </a>
            <a href="#resume" className="menu__link">
                <img className='menu__link-img' src="images/png/resume.png" alt="resume icon" />
            </a>
            <a href="#skills" className="menu__link">
                <img className='menu__link-img' src="images/png/skills.png" alt="skills icon" />
            </a>
            <a href="#portfolio" className="menu__link">
                <img className='menu__link-img' src="images/png/portfolio.png" alt="portfolio icon" />
            </a>
            <a href="#hiring" className="menu__link">
                <img className='menu__link-img' src="images/png/hr.png" alt="hr icon" />
            </a>
            <a href="#feedback" className="menu__link">
                <img className='menu__link-img' src="images/png/feedback.png" alt="feedback icon" />
            </a>
            {/* <a href="#home" className="menu__link">
                <img src="images/png/home.png" alt="home" />
            </a> */}
        </div>
    );
};