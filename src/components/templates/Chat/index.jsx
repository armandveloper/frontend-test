import PropTypes from 'prop-types';
import { messages } from 'data';
import styles from './Chat.module.css';
import ChatHeader from 'components/UI/molecules/ChatHeader';
import MessageList from 'components/UI/organisms/MessageList';

function Chat({ open = false }) {
	return (
		<div className={styles.wrapper}>
			<ChatHeader />
			<MessageList messages={messages} />
			<div>
				<p>Footer</p>
			</div>
		</div>
	);
}

Chat.propTypes = {
	open: PropTypes.bool,
};

export default Chat;
