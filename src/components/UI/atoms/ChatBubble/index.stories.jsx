import ChatBubble from '.';

export default {
	title: 'Atoms/ChatBubble',
	component: ChatBubble,
};

const Template = (args) => <ChatBubble {...args} />;

export const BotMessage = Template.bind({});

BotMessage.args = {
	isBotMessage: true,
	message: 'Hello, I am here to help you if you have any questions.',
};

export const UserMessage = Template.bind({});

UserMessage.args = {
	message: 'Hi, I want to know about...',
};
