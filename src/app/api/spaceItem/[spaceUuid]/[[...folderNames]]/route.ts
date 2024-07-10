import dbConnect from "@/lib/mongo/mongoos";
import MSpaceItem from "@/lib/model/mongo/MSpaceItem";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request, { params }: { params: { spaceUuid: string, folderNames: string[] } }) {

    await dbConnect();
    const parent = params.folderNames ? params.folderNames.reduce((accu, cur) => accu + "/" + cur, "") : "/";
    const spaceItems = await MSpaceItem.find({ space_uuid: { $eq: params.spaceUuid }, parent: { $eq: parent } });

    return Response.json(spaceItems);
}

