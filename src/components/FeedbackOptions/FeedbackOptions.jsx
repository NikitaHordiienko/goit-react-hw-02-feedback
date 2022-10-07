import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//     return (
//         <ul className="button-list">
//             <li className="button-list__item">
//                 <button name={options.good} onClick={onLeaveFeedback} type="button" className="button">
//                     Good
//                 </button>
//             </li>
//             <li className="button-list__item">
//                 <button name={options.neutral} onClick={onLeaveFeedback} type="button" className="button">
//                     Neutral
//                 </button>
//             </li>
//             <li className="button-list__item">
//                 <button name={options.bad} onClick={onLeaveFeedback} type="button" className="button">
//                     Bad
//                 </button>
//             </li>
//         </ul>
//     );
// };

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css['button-list']}>
            {Object.keys(options).map(buttonLabel => {
                return (
                    <li className={css['button-list__item']} key={buttonLabel}>
                        <button className={css.button} onClick={onLeaveFeedback} type="button" >
                            {buttonLabel}
                        </button>
                    </li>
                )
            })}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;