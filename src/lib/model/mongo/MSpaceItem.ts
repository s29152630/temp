import mongoose, { Document, Schema } from 'mongoose';

interface MSpaceItem extends Document {
    space_item_uuid: string;
    space_item_name: string;
    type: string;
    parent: string;
    space_uuid: string;
    create_user: string;
    create_time: Date;
    update_user: string;
    update_time: Date;
}

const SpaceItemSchema: Schema = new Schema({
    space_item_uuid: { type: String, required: true, unique: true },
    space_item_name: { type: String, required: true },
    type: { type: String, required: true },
    parent: { type: String },
    space_uuid: { type: String, required: true},
    create_user: { type: String },
    create_time: { type: Date },
    update_user: { type: String },
    update_time: { type: Date },
});

export default (mongoose.models.space_items ? mongoose.models.space_items : mongoose.model<MSpaceItem>("space_items", SpaceItemSchema));