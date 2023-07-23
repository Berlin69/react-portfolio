import '../../index.scss';
import './Title.scss';

export const Title = (props) => {

    const { icon, title } = props;

    return (
        <div className="section-title">
            <img
                src={icon}
                className="section-title__img"
                alt="home icon"
            />
            <h3 className="section-title__text">{title}</h3>
        </div>
    );
};