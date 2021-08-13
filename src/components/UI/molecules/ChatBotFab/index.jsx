import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { MdChatBubble } from 'react-icons/md';
import styles from './ChatBotFab.module.css';
import Badge from '../../atoms/Badge';

function ChatBotFab({
	hint = 'Click to open chat with Chatty Assistant',
	onClick,
}) {
	return ReactDOM.createPortal(
		<button
			aria-label={hint}
			className={styles.chatbotFab}
			type="button"
			onClick={onClick}
		>
			<MdChatBubble size="28" color="currentColor" />
			<Badge badgeContent={1} />
		</button>,
		window.document.getElementById('chatbot-fab-root')
	);
}

ChatBotFab.propTypes = {
	hint: PropTypes.string,
	onClick: PropTypes.func,
};

export default ChatBotFab;
