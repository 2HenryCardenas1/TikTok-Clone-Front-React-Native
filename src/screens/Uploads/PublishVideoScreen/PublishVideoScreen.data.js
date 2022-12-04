import * as Yup from "yup";
export function initialValues(videoUri) {
    return {
        videoUri,
        description: "",
        imageUri: "",
    }
}

export function validationSchema() {
    return Yup.object({
        videoUri: Yup.string().required("Video is required"),
        description: Yup.string().required("Description is required"),
        imageUri: Yup.string().required("Image is required"),
    })
}