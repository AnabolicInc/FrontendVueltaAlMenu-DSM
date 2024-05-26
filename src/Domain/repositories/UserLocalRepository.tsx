import { User } from '../entities/User';

/**
 * Interface for UserLocalRepository to be implemented by the data layer.
 * This interface should be implemented by the data layer to serve as a connection to the local database.
 * The description of the methods can be found in the data layer.
 */
export interface UserLocalRepository {
    save(user: User): Promise<void>;
    getUser(): Promise<User>;
    removeItem(): Promise<void>;
}