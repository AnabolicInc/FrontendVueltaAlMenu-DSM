import * as ImagePicker from 'expo-image-picker';
import { ResponseAPIDelivery } from '../../Data/sources/remote/api/models/ResponseApiDelivery';

/**
 * Interface for FileRepository to be implemented by the Data layer.
 * This interface should be implemented by the data layer to serve as a connection to the API.
 * The description of the methods can be found in the data layer.
 */
export interface FileRepository {
    updateFile(file: ImagePicker.ImageInfo, collection: string, id: string): Promise<ResponseAPIDelivery>;
    updateFiles(files: ImagePicker.ImageInfo[], collection: string, id: string): Promise<ResponseAPIDelivery>;
}