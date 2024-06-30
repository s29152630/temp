import mongoose, { Document, Schema } from 'mongoose';

export interface ISpace extends Document {
    space_uuid: string;
    space_name: string;
    space_owner: string;
    create_user: string;
    create_time: Date;
    update_user: string;
    update_time: Date;
}

const SpaceSchema: Schema = new Schema({
    space_uuid: { type: String, required: true, unique: true },
    space_name: { type: String, required: true },
    space_owner: { type: String, required: true },
    create_user: { type: String },
    create_time: { type: Date },
    update_user: { type: String },
    update_time: { type: Date },
});

export default (mongoose.models.spaces ? mongoose.models.spaces : mongoose.model<ISpace>("spaces", SpaceSchema));