import dbConnect from "@/lib/mongo/mongoos";
import MSpace from "@/lib/model/mongo/MSpace";

export default async function SpaceInfo({ params }: { params: { spaceUuid: string } }) {

    await dbConnect();
    const space = await MSpace.findOne({ space_uuid: { $eq: params.spaceUuid } });

    return (
        <>
            <ul>
                <li>
                    {space?.space_uuid}
                </li>
                <li>
                    {space?.space_name}
                </li>
                <li>
                    {space?.space_owner}
                </li>
                <li>
                    {space?.create_user}
                </li>
                <li>
                    {(space?.create_time as Date).toLocaleDateString()}
                </li>
            </ul>
        </>
    );

}