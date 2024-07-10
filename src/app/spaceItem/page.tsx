import connectDB from "@/lib/mongo/mongoos";
import MSpace from "@/lib/model/mongo/MSpace";
import { redirect } from "next/navigation";

export default async function Space() {

    await connectDB();
    const spaces: ISpace[] = await MSpace.find();

    if (spaces.length > 0) {
        redirect(`/spaceItem/${spaces[0].space_uuid}/`);
    } else {
        return (<>no data</>);
    }

}