import { BaseAPI } from './BaseAPI';
export interface IChatList {
        id: number,
        title: string
        avatar: string,
        unread_count: number,
        last_message: {
            user: {
                first_name: string,
                second_name: string,
                avatar: string,
                login: string,
            },
        time: string,
        content: string
        }
}

export class ChatAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    getChats(): Promise<IChatList[]> {
        return this.http.get('');
    }
}
