import PropTypes from 'prop-types';
import { formatTimestamp } from 'utils/timestamp';
import styles from './MessageTimestamp.module.css';

function MessageTimestamp({ timestamp }) {
	return (
		<span className={styles.timestamp}>{formatTimestamp(timestamp)}</span>
	);
}

MessageTimestamp.propTypes = {
	timestamp: PropTypes.instanceOf(Date).isRequired,
};

export default MessageTimestamp;
