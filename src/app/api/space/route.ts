import dbConnect from "@/lib/mongo/mongoos";
import MSpace from "@/lib/model/mongo/MSpace";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {

    await dbConnect();
    const spaces = await MSpace.find();

    return Response.json(spaces);
}

