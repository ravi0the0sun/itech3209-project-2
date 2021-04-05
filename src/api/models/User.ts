import { Schema, model } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

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
});

UserSchema.plugin(passportLocalMongoose);
const User: any = model('user', UserSchema);
export default User;
