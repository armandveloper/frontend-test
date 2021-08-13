import PropTypes from 'prop-types';
import styles from './Badge.module.css';

function Badge({ badgeContent }) {
	return <span className={styles.badge}>{badgeContent}</span>;
}

Badge.propTypes = {
	badgeContent: PropTypes.number.isRequired,
};

export default Badge;
