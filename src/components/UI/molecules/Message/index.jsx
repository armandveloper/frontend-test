import { MdCheck } from 'react-icons/md';
import styles from './Message.module.css';
import BotAvatar from 'components/UI/atoms/BotAvatar';
import ChatBubble from 'components/UI/atoms/ChatBubble';
import MessageTimestamp from 'components/UI/atoms/MessageTImestamp';
import { IMessage } from 'models/Message';

function Message({ from, message, seen = false, timestamp }) {
	return (
		<li
			className={`${styles.message} ${
				from === 'customer' ? styles.customer : ''
			}`}
		>
			<div
				className={`${styles.body} ${
					from === 'customer' ? styles.bodyCustomer : ''
				}`}
			>
				{from === 'bot' && <BotAvatar bottom={true} size="sm" />}
				<ChatBubble isBotMessage={from === 'bot'} message={message} />
			</div>
			<MessageTimestamp timestamp={timestamp} />
			{from === 'customer' && (
				<div className={`${styles.seen} ${seen ? styles.hasSeen : ''}`}>
					<MdCheck size="10" color="currentColor" />
					<MdCheck size="10" color="currentColor" />
				</div>
			)}
		</li>
	);
}

Message.propTypes = IMessage;

export default Message;
