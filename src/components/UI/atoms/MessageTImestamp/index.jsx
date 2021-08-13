import PropTypes from 'prop-types';
import styles from './MessageTimestamp.module.css';

function MessageTimestamp({ timestamp }) {
	return <span className={styles.timestamp}>{timestamp.getTime()}</span>;
}

MessageTimestamp.propTypes = {
	timestamp: PropTypes.instanceOf(Date).isRequired,
};

export default MessageTimestamp;
