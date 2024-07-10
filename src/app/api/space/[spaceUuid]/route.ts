import dbConnect from "@/lib/mongo/mongoos";
import MSpace from "@/lib/model/mongo/MSpace";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request, { params }: { params: { spaceUuid: string} }) {

    await dbConnect();
    const space = await MSpace.findOne({ space_uuid: { $eq: params.spaceUuid } });

    return Response.json(space);
}

