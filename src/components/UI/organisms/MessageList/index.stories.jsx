import MessageList from '.';

export default {
	title: 'Organisms/MessageList',
	component: MessageList,
};

const Template = (args) => <MessageList {...args} />;

export const Messages = Template.bind({});

const messages = [
	{
		from: 'bot',
		message: 'Hello, how can i help you?',
		timestamp: new Date(),
	},
	{
		from: 'customer',
		message: 'Hello, how can i help you?',
		timestamp: new Date(),
		seen: true,
	},
	{
		from: 'customer',
		message: 'Hello, how can i help you?',
		timestamp: new Date(),
		seen: true,
	},
	{
		from: 'bot',
		message: 'Hello, how can i help you?',
		timestamp: new Date(),
	},
	{
		from: 'bot',
		message: 'Hello, how can i help you?',
		timestamp: new Date(),
	},
	{
		from: 'customer',
		message: 'Hello, how can i help you?',
		timestamp: new Date(),
		seen: true,
	},
	{
		from: 'bot',
		message: 'Hello, how can i help you?',
		timestamp: new Date(),
	},
	{
		from: 'customer',
		message: 'Hello, how can i help you?',
		timestamp: new Date(),
	},
];

Messages.args = {
	messages,
};
