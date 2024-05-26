import { FileRepositoryImpl } from "../../../Data/repositories/FileRepository";
import * as ImagePicker from 'expo-image-picker';

// calls the updateFiles method from the FileRepositoryImpl.
const { updateFiles } = new FileRepositoryImpl();

/**
 * Use case for the update operation.
 */
export const UpdateFilesUseCase = async (files: ImagePicker.ImageInfo[], collection: string, id: string) => {
    // Uses the updateFiles method from the FileRepositoryImpl.
    return await updateFiles(files, collection, id);
}