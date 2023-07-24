import { useState } from 'react';
import './Menu.scss';

export const Menu = (props) => {

    const [isDayTheme, setIsDayTheme] = useState(false);
    const handleThemeSwitch = () => {
        setIsDayTheme(!isDayTheme);
    }

    const [isRuLang, setIsRuLang] = useState(false);
    const handleLangSwitch = () => {
        setIsRuLang(!isRuLang);
    }

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
            <div className="menu__switcher">
                <div
                    onClick={handleThemeSwitch}
                    className="menu__switcher-theme">
                    <div className={`menu__switcher-theme-day ${isDayTheme ? 'menu__switcher-theme-day--active' : ''}`}>
                        <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.42564e-05 7.49294C1.42564e-05 7.32361 0.0565114 7.17545 0.176568 7.0555C0.296624 6.94262 0.444929 6.88617 0.600296 6.88617H2.04097C2.2034 6.88617 2.33758 6.94262 2.45058 7.06256C2.55651 7.1825 2.61301 7.32361 2.61301 7.49294C2.61301 7.66228 2.56357 7.80339 2.45764 7.92333C2.35171 8.04327 2.21046 8.09972 2.04804 8.09972H0.607358C0.444929 8.09972 0.303686 8.04327 0.18363 7.92333C0.125127 7.868 0.0786379 7.80124 0.0470507 7.7272C0.0154635 7.65316 -0.000546899 7.57343 1.42564e-05 7.49294ZM2.01979 12.3824C2.01979 12.2201 2.07628 12.079 2.18222 11.952L3.22035 10.9431C3.32628 10.8302 3.46753 10.7808 3.63702 10.7808C3.80651 10.7808 3.94775 10.8373 4.06074 10.9431C4.17374 11.0489 4.23024 11.183 4.23024 11.3452C4.23024 11.5146 4.17374 11.6698 4.06074 11.7968L3.05792 12.7987C2.76837 13.0245 2.47883 13.0245 2.18928 12.7987C2.13424 12.7444 2.09082 12.6795 2.06169 12.608C2.03255 12.5364 2.01829 12.4597 2.01979 12.3824ZM2.01979 2.61759C2.01979 2.45532 2.07628 2.3142 2.18222 2.18721C2.32346 2.06726 2.47176 2.01082 2.63419 2.01082C2.78956 2.01082 2.9308 2.06726 3.05086 2.18015L4.06074 3.21731C4.17374 3.32314 4.23024 3.46425 4.23024 3.63358C4.23024 3.80292 4.17374 3.94403 4.06074 4.05691C3.94775 4.1698 3.80651 4.22625 3.63702 4.22625C3.46753 4.22625 3.32628 4.1698 3.22035 4.05691L2.18928 3.04798C2.13349 2.99132 2.08973 2.924 2.06061 2.85005C2.03148 2.7761 2.0176 2.69703 2.01979 2.61759ZM3.82063 7.49294C3.82063 6.83678 3.98306 6.22295 4.31498 5.65851C4.6469 5.09407 5.09182 4.64252 5.66385 4.31091C6.23588 3.9793 6.84323 3.81703 7.50001 3.81703C7.99436 3.81703 8.46752 3.9158 8.92656 4.11336C9.37854 4.31091 9.77402 4.57197 10.0989 4.90357C10.4308 5.23518 10.6921 5.62324 10.8828 6.07479C11.0735 6.52634 11.1723 7.00611 11.1723 7.5C11.1723 8.16322 11.0099 8.77705 10.678 9.34149C10.346 9.90593 9.90113 10.3504 9.33616 10.682C8.77119 11.0136 8.15679 11.1759 7.49294 11.1759C6.8291 11.1759 6.2147 11.0136 5.64973 10.682C5.08476 10.3504 4.63984 9.90593 4.30792 9.34149C3.99012 8.76999 3.82063 8.15616 3.82063 7.49294ZM5.0212 7.49294C5.0212 8.18438 5.26131 8.76999 5.7486 9.25682C6.22882 9.74365 6.81498 9.99059 7.50707 9.99059C8.19916 9.99059 8.78532 9.74365 9.2726 9.25682C9.75989 8.76999 10.0071 8.18438 10.0071 7.49294C10.0071 6.81562 9.75989 6.23706 9.2726 5.75023C8.78532 5.27046 8.19916 5.03057 7.50707 5.03057C6.82204 5.03057 6.23588 5.27046 5.75566 5.75023C5.26131 6.23706 5.0212 6.81562 5.0212 7.49294ZM6.89973 12.9821C6.89973 12.8128 6.95622 12.6717 7.07628 12.5588C7.19634 12.4459 7.33758 12.3895 7.50001 12.3895C7.6695 12.3895 7.8178 12.4459 7.9308 12.5588C8.04379 12.6717 8.10029 12.8128 8.10029 12.9821V14.3862C8.10029 14.5555 8.04379 14.7037 7.92374 14.8236C7.80368 14.9436 7.66244 15 7.50001 15C7.33758 15 7.18927 14.9436 7.07628 14.8236C7.01862 14.7665 6.97322 14.6983 6.94286 14.6231C6.9125 14.5479 6.89783 14.4672 6.89973 14.3862V12.9821ZM6.89973 2.0461V0.606773C6.89973 0.444497 6.95622 0.303387 7.07628 0.183443C7.19634 0.0634997 7.33758 0 7.50707 0C7.67656 0 7.81074 0.056444 7.9308 0.176388C8.05085 0.296331 8.10735 0.437441 8.10735 0.599718V2.0461C8.10735 2.20837 8.05085 2.34243 7.9308 2.45532C7.81074 2.5682 7.6695 2.61759 7.50707 2.61759C7.34464 2.61759 7.19633 2.56115 7.08334 2.45532C6.97035 2.34948 6.89973 2.20837 6.89973 2.0461ZM10.798 11.3452C10.798 11.183 10.8545 11.0489 10.9605 10.9501C11.0664 10.8373 11.2006 10.7879 11.3559 10.7879C11.5254 10.7879 11.6667 10.8443 11.7797 10.9501L12.8107 11.9591C12.9237 12.079 12.9802 12.2272 12.9802 12.3895C12.9802 12.5517 12.9237 12.6928 12.8107 12.8057C12.5283 13.0245 12.2458 13.0245 11.9633 12.8057L10.9605 11.8039C10.8522 11.6759 10.7944 11.5128 10.798 11.3452ZM10.798 3.64064C10.798 3.46425 10.8545 3.32314 10.9605 3.22436L11.9633 2.18721C12.0745 2.0783 12.2242 2.01748 12.3799 2.01787C12.5494 2.01787 12.6907 2.07432 12.8037 2.19426C12.9237 2.31421 12.9802 2.45532 12.9802 2.61759C12.9802 2.79398 12.9237 2.94214 12.8107 3.05503L11.7797 4.06397C11.6525 4.17686 11.5113 4.2333 11.3559 4.2333C11.1935 4.2333 11.0664 4.17686 10.9605 4.06397C10.8545 3.95108 10.798 3.80997 10.798 3.64064ZM12.3941 7.49294C12.3941 7.32361 12.4506 7.1825 12.5636 7.0555C12.6766 6.94262 12.8107 6.88617 12.9661 6.88617H14.3927C14.5551 6.88617 14.6963 6.94967 14.8164 7.06961C14.9364 7.18956 15 7.33067 15 7.49294C15 7.65522 14.9364 7.79633 14.8164 7.91627C14.6963 8.03622 14.5551 8.09266 14.3927 8.09266H12.9661C12.8037 8.09266 12.6624 8.03622 12.5565 7.91627C12.4506 7.79633 12.3941 7.66228 12.3941 7.49294Z" fill="white" />
                        </svg>
                    </div>
                    <div className={`menu__switcher-theme-checker ${isDayTheme ? 'menu__switcher-theme-checker--active' : ''}`}></div>
                    <div className={`menu__switcher-theme-night ${isDayTheme ? '' : 'menu__switcher-theme-night--active'}`}>
                        <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2717 2.35233L10.2995 3.82919L11.0088 6.15868L8.95869 4.78078L6.90854 6.15868L7.6179 3.82919L5.64571 2.35233L8.13239 2.28381L8.95869 0L9.78498 2.28381L12.2717 2.35233ZM15 7.6127L13.7216 8.56429L14.1815 10.0716L12.8563 9.18092L11.5311 10.0716L11.991 8.56429L10.7126 7.6127L12.3184 7.57464L12.8563 6.09016L13.3942 7.57464L15 7.6127ZM13.2227 11.381C13.8697 11.3201 14.5635 12.2184 14.1503 12.7893C13.9009 13.1319 13.6358 13.4516 13.3084 13.7562C10.2605 16.7479 5.3261 16.7479 2.28596 13.7562C-0.761985 10.7872 -0.761985 5.96075 2.28596 2.99179C2.59777 2.68728 2.92517 2.41323 3.27595 2.16962C3.8606 1.76615 4.78043 2.44368 4.71807 3.07553C4.5076 5.25277 5.25594 7.51374 6.9709 9.18092C7.7813 9.97662 8.76246 10.5867 9.84359 10.9672C10.9247 11.3476 12.0788 11.489 13.2227 11.381ZM11.9443 12.9188C9.65583 12.7903 7.49396 11.851 5.86397 10.2771C4.1724 8.60997 3.26816 6.4708 3.14343 4.32402C0.952969 6.7144 1.03872 10.3837 3.38508 12.6828C5.73925 14.9742 9.49656 15.0579 11.9443 12.9188Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="menu__switcher">
                <div
                    onClick={handleLangSwitch}
                    className="menu__switcher-lang">
                    <span className={`menu__switcher-lang-ru ${isRuLang ? 'menu__switcher-lang-ru--active' : ''}`}>ru</span>
                    <div className={`menu__switcher-lang-checker ${isRuLang ? 'menu__switcher-lang-checker--active' : ''}`}></div>
                    <span className={`menu__switcher-lang-en ${isRuLang ? '' : 'menu__switcher-lang-en--active'}`}>en</span>
                </div>
            </div>
            {/* <a href="#home" className="menu__link">
                <img src="images/png/home.png" alt="home" />
            </a> */}
        </div>
    );
};