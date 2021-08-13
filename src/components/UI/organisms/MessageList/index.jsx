import PropTypes from 'prop-types';
import styles from './MessageList.module.css';
import Message from 'components/UI/molecules/Message';
import { IMessage } from 'components/models/Message';

function MessageList({ messages }) {
	return (
		<ul className={styles.list}>
			{messages.map((msg, i) => (
				<Message {...msg} key={i} />
			))}
		</ul>
	);
}

MessageList.propTypes = {
	messages: PropTypes.arrayOf(IMessage).isRequired,
};

export default MessageList;
