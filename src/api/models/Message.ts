import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
	payload: {
		type: String,
	},

	from: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	to: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		default: null,
	},
	timeSent: {
		type: Date,
		default: Date.now,
	},
	previous: {
		type: Schema.Types.ObjectId,
		ref: 'Message',
		default: null,
	},
});

const Message = model('Message', MessageSchema);
export default Message;
