"use server";

import dbConnect from "@/lib/mongo/mongoos";
import MSpaceItem from "@/lib/model/mongo/MSpaceItem";
import { v4 as uuidv4 } from "uuid";
import { SpaceItemConst } from "@/lib/const/SpaceConst";

export default async function CreateFolderAction({ params }: { params: { spaceUuid: string, parent: string, itemName: string, type: string } }) {

    await dbConnect();
    const mDocItem = new MSpaceItem({
        space_item_uuid: uuidv4(),
        space_item_name: params.itemName,
        type: params.type,
        space_uuid: params.spaceUuid,
        parent: params.parent,
        create_user: "createUser",
        create_time: new Date(),
        update_user: "updateUser",
        update_time: new Date(),
    });
    await mDocItem.save();

}