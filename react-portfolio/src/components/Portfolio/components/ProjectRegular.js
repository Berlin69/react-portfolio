import '../Portfolio.scss';

export const ProjectRegular = (props) => {

    const { image, name, link, wide, techStack } = props.project;

    return (
        <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className={`portfolio__item ${wide ? 'portfolio__item-wide' : ''}`}
        >
            <div className="portfolio__item-content">
                <img className='portfolio__item-content-img' src={image} alt={name} />
                <ul className="portfolio__item-tech-list">
                    {techStack.map((tech) => {
                        return (
                            <li className="portfolio__item-tech-list-item">
                                {tech}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <h4 className="portfolio__item-name">
                {name}
            </h4>
        </a>
    );
};