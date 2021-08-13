import PropTypes from 'prop-types';
import { validUsers } from 'constants/index';

export const IMessage = {
	from: PropTypes.oneOf(validUsers).isRequired,
	message: PropTypes.string.isRequired,
	seen: PropTypes.bool,
	timestamp: PropTypes.instanceOf(Date).isRequired,
};
