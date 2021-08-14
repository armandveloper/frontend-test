import PropTypes from 'prop-types';
import { IMessage } from 'models/Message';
import styles from './MessageList.module.css';
import Message from 'components/UI/molecules/Message';
import Typing from 'components/UI/atoms/Typing';

function MessageList({ isBotWriting, messages }) {
	return (
		<ul className={styles.list}>
			{messages.map((msg, i) => (
				<Message {...msg} key={i} />
			))}
			{isBotWriting && <Typing />}
		</ul>
	);
}

MessageList.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.shape(IMessage)).isRequired,
	isBotWriting: PropTypes.bool,
};

export default MessageList;
