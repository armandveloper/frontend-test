import PropTypes from 'prop-types';
import styles from './ChatBubble.module.css';

function ChatBubble({ isBotMessage = false, message }) {
	return (
		<div
			className={`${styles.bubble} ${
				isBotMessage ? styles.bubbleBot : ''
			}`}
		>
			{message}
		</div>
	);
}

ChatBubble.propTypes = {
	isBotMessage: PropTypes.bool,
	message: PropTypes.string.isRequired,
};

export default ChatBubble;
