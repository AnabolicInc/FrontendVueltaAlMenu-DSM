import mime from "mime";
import { FileRepository } from "../../Domain/repositories/FileRepository";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";

import * as ImagePicker from 'expo-image-picker';
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";

/**
 * Class to implement the FileRepository interface
 */

export class FileRepositoryImpl implements FileRepository {
    /**
     * Method to send a request to the server to upload a file
     * @param file is the file to be uploaded
     * @param collection is the collection where the file will be uploaded
     * @param id is the id of the document where the file will be uploaded
     * @returns the response from the server
     */
    async updateFile(file: ImagePicker.ImageInfo, collection: string, id: string): Promise<ResponseAPIDelivery> {
        console.log(file, collection, id);
        try {
            // Create a new FormData object to send the file
            let imageRegister = new FormData();
            // Append the file to the FormData object
            console.log("FILE, ESTA ES LA INFO QUE SE TIENE: " + file);

            imageRegister.append('archive', {
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)
            });
            // Define the path of the request
            const path = `upload/${collection}/${id}`;
            // Call the put method from the ApiDelivery class to send a updateFile request to the server
            const { data } = await ApiDelivery.put<ResponseAPIDelivery>(path, imageRegister, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Return the response from the server
            return Promise.resolve(data);
        } catch (error) {
            // Handle any error that occurs during the request
            let e = (error as AxiosError);
            console.log('ERROR: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.reject(apiError)
        }
    }

    async updateFiles(files: ImagePicker.ImageInfo[], collection: string, id: string): Promise<ResponseAPIDelivery> {
        try {
            // Create a new FormData object to send the files
            let imagesRegister = new FormData();
            // Append the files to the FormData object
            console.log("FILE REPOSITORY, ESTA ES LA INFO QUE SE TIENE: " + files, files.length);
            files.forEach((file, index) => {
                imagesRegister.append(`archive${index}`, file.uri, file.uri.split('/').pop());
            });
            // Define the path of the request
            const path = `upload/${collection}/${id}`;
            // Call the put method from the ApiDelivery class to send a updateFiles request to the server
            const { data } = await ApiDelivery.put(path, imagesRegister, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Return the response from the server
            return Promise.resolve(data);
        } catch (error) {
            // Handle any error that occurs during the request
            let e = (error as AxiosError);
            console.log('ERROR: ', JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.reject(apiError)
        }
    }
}