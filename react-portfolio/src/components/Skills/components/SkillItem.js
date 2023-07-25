import '../Skills.scss';

export const SkillItem = (props) => {

    const { isDayTheme } = props;
    const { image, percent, name } = props.skill;

    return (
        <div className='skills__item-wrapper'>
            <div className="skills__item">
                <img className='skills__item-img' src={image} alt={name} />
                <span className={`skills__item-percent ${isDayTheme ? 'light' : ''}`}>{percent}</span>
            </div>
            <span className={`skills__item-name ${isDayTheme ? 'light' : ''}`}>
                {name}
            </span>
        </div>
    );
};