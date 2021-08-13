import PropTypes from 'prop-types';
import styles from './BotAvatar.module.css';
import botImg from 'assets/icons/bot.svg';

function BotAvatar({ size = 'md' }) {
	return (
		<div
			className={`${styles.avatar} ${size === 'sm' ? styles.small : ''}`}
			style={{
				backgroundImage: `url(${botImg})`,
			}}
		/>
	);
}

BotAvatar.propTypes = {
	size: PropTypes.oneOf(['sm', 'md']),
};

export default BotAvatar;
