import { BaseAPI } from './BaseAPI';
import { IResponse } from './UserAPI';
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
    getChatUsers(id: number): Promise<IResponse[]>{
        return this.http.get(`/${id}/users`);
    }
    newChat(title: string): Promise<void> {
        return this.http.post('', JSON.stringify({title}));
    }
    deleteChat(data: {chatId: number}): Promise<void> {
        return this.http.delete('', JSON.stringify(data));
    }
    addUser(data: {users: [number], chatId: number}): Promise<void> {
        return this.http.put('/users', JSON.stringify(data));
    }
    deleteUser(data: {users: [number], chatId: number}): Promise<void> {
        return this.http.delete('/users', JSON.stringify(data));
    }
    token(id: number): Promise<{token: string}> {
        return this.http.post(`/token/${id}`);
    }

}
