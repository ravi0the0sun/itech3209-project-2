import { Schema, Model, model } from 'mongoose';

enum STATUS {
	OPEN = 0,
	PENDING = 1,
	RESOLVED = 2,
	CLOSED = 3,
}

const TicketSchema = new Schema({
	subject: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		require: true,
	},
	status: {
		type: STATUS,
		default: STATUS.OPEN,
	},
	createdBy: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	createdOn: {
		type: Date,
		default: Date.now,
	},
	assignedTo: {
		type: Schema.Types.ObjectId,
		default: null,
		ref: 'User',
	},
	chatId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
});

const Ticket = model('Ticket', TicketSchema);
export default Ticket;
