import { Bookshelf } from "../types";
export declare function getBookshelf(username: string, shelfType: string): Promise<Bookshelf | null>;
export default getBookshelf;
