import './ExperienceItem.scss';

export const ExperienceItem = (props) => {

    const { item, isDayTheme } = props;
    const { duration, position, company, duties } = item

    return (
        <div className="experience-item">
            <div className="experience-item__timeline">
                <div className="experience-item__timeline-circle"></div>
                <div className="experience-item__timeline-line"></div>
            </div>
            <div className="experience-item__info">
                <h6 className="experience-item__info-dates">
                    {duration}
                </h6>
                <h4 className={`experience-item__info-position ${isDayTheme ? 'light' : ''}`}>
                    {position}
                </h4>
                <h6 className="experience-item__info-company">
                    {company}
                </h6>
                <ul className="experience-item__info-list">
                    {duties.map((duty) => {
                        return (
                            <li className="experience-item__info-list-item">
                                {duty}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};