import { Schema, model } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

enum USER {
	ROOT = 2,
	ADMIN = 1,
	USER = 0,
}

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	dob: {
		type: Date,
		required: true,
	},
	address: {
		type: String,
	},
	role: {
		type: USER,
		required: true,
		default: USER.USER,
	},
	tickeIds: {
		type: [Schema.Types.ObjectId],
		ref: 'Ticket',
		default: [],
	},
	chatIds: {
		types: [Schema.Types.ObjectId],
		ref: 'Chat',
		default: [],
	},
});

UserSchema.plugin(passportLocalMongoose);
const User: any = model('User', UserSchema);
export default User;
