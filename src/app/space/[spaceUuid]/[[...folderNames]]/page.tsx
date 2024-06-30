import BasicBreadcrumbs from "@/component/space/BasicBreadcrumbs";
import CreateFolderDialog from "@/component/space/CreateFolderDialog";
import UploadFileDialog from "@/component/space/UploadFileDialog";
import MSpaceItem from "@/lib/model/mongo/MSpaceItem";
import connectDB from "@/lib/mongo/mongoos";


export default async function SpaceItem({ params }: { params: { spaceUuid: string, folderNames: string[] } }) {

    await connectDB();
    const parent = params.folderNames ? params.folderNames.reduce((accu, cur) => accu + "/" + cur, "") : "/";
    console.log("line 12: " + parent);
    const spaceItems = await MSpaceItem.find({ space_uuid: { $eq: params.spaceUuid }, parent: { $eq: parent } });

    
    return (
        <>
            <BasicBreadcrumbs spaceUuid={params.spaceUuid} folderNames={params.folderNames}></BasicBreadcrumbs>
            <CreateFolderDialog params={params}></CreateFolderDialog>
            <UploadFileDialog params={params}></UploadFileDialog>
        </>
    );

}