import PropTypes from 'prop-types';
import { MdCheck } from 'react-icons/md';
import { validUsers } from 'constants';
import styles from './Message.module.css';
import BotAvatar from 'components/UI/atoms/BotAvatar';
import ChatBubble from 'components/UI/atoms/ChatBubble';
import MessageTimestamp from 'components/UI/atoms/MessageTImestamp';

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

Message.propTypes = {
	from: PropTypes.oneOf(validUsers).isRequired,
	message: PropTypes.string.isRequired,
	seen: PropTypes.bool,
	timestamp: PropTypes.instanceOf(Date).isRequired,
};

export default Message;
