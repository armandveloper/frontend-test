import { messages } from 'data';
import MessageList from '.';

export default {
	title: 'Organisms/MessageList',
	component: MessageList,
};

const Template = (args) => <MessageList {...args} />;

export const Messages = Template.bind({});

Messages.args = {
	messages,
};
