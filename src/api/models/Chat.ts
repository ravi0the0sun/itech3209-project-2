import { Schema, model } from 'mongoose';

const ChatSchema = new Schema({
	ticketId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Ticket',
	},
	message: {
		type: [Schema.Types.ObjectId],
		default: [],
		ref: 'Message',
	},
	participents: {
		types: [Schema.Types.ObjectId],
		ref: 'User',
	},
});

const Chat = model('Chat', ChatSchema);
export default Chat;
