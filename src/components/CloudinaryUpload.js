import {openUploadWidget} from "../utils/CloudinaryService";
// import {cloudinary_upload_preset} from "../../config";

const CloudinaryUpload = ({setUrl, setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dcn8pkrhl",
                uploadPreset: 'b3dfzl9f',
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white text-black my-2 border-2 border-black hover:bg-black hover:text-slate-50 rounded-lg py-1 px-4 cursor-pointer text-sm font-semibold"
            onClick={uploadImageWidget}
        >
            Select Track
        </button>
    );
};

export default CloudinaryUpload;