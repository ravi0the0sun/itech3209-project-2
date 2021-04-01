import { Schema, model } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema({});

UserSchema.plugin(passportLocalMongoose);
const User: any = model('user', UserSchema);
export default User;
