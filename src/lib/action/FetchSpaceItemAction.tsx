"use server";

import dbConnect from "@/lib/mongo/mongoos";
import MSpaceItem from "@/lib/model/mongo/MSpaceItem";

export default async function FetchSpaceItemAction(spaceUuid: string, folderNames: string[]) {

    await dbConnect();
    const parent = folderNames ? folderNames.reduce((accu, cur) => accu + "/" + cur, "") : "/";
    console.log("line 12: " + parent);
    const spaceItems: typeof MSpaceItem[] = await MSpaceItem.find();
    console.log(spaceItems);

    return JSON.stringify(spaceItems);
}