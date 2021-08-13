import PropTypes from 'prop-types';
import styles from './BotAvatar.module.css';
import botImg from 'assets/icons/bot.svg';

function BotAvatar({ bottom = false, size = 'md' }) {
	return (
		<div
			className={`${styles.avatar} ${bottom ? styles.bottom : ''} ${
				size === 'sm' ? styles.small : ''
			}`}
			style={{
				backgroundImage: `url(${botImg})`,
			}}
		/>
	);
}

BotAvatar.propTypes = {
	bottom: PropTypes.bool,
	size: PropTypes.oneOf(['sm', 'md']),
};

export default BotAvatar;
