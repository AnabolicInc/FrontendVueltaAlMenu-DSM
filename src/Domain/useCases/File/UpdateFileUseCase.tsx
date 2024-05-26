import { FileRepositoryImpl } from "../../../Data/repositories/FileRepository";
import * as ImagePicker from 'expo-image-picker';

// calls the updateFile method from the FileRepositoryImpl.
const { updateFile } = new FileRepositoryImpl();

/**
 * Use case for the update operation.
 */
export const UpdateFileUseCase = async (file: ImagePicker.ImageInfo, collection: string, id: string) => {
    // Uses the updateFile method from the FileRepositoryImpl.
    return await updateFile(file, collection, id);
}