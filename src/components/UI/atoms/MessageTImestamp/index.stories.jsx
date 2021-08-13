import MessageTimestampComponent from '.';

export default {
	title: 'Atoms/MessageTimestamp',
	component: MessageTimestampComponent,
	args: {
		timestamp: new Date(),
	},
};

export const MessageTimestamp = (args) => (
	<MessageTimestampComponent {...args} />
);
