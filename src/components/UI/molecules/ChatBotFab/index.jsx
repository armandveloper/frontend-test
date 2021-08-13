import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { MdChatBubble } from 'react-icons/md';
import styles from './ChatBotFab.module.css';

function ChatBotFAB({ hint = 'Click to open chat with Chatty Assistant' }) {
	return ReactDOM.createPortal(
		<button aria-label={hint} className={styles.chatbotFab} type="button">
			<MdChatBubble size="28" color="currentColor" />
		</button>,
		window.document.getElementById('chatbot-fab-root')
	);
}

ChatBotFAB.propTypes = {
	hint: PropTypes.string,
};

export default ChatBotFAB;
