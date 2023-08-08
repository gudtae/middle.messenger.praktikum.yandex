import { ChatAPI, IChatList } from '../api/ChatAPI';
import { IResponse } from '../api/UserAPI';
import store from '../core/Store';

class ChatController {
    private api = new ChatAPI();

    async getChats() {
        try {
            const chatList = await this.api.getChats() as IChatList[];
            store.set('chatList', { chatList });
        } catch (error) {
            console.log(error);
        }
    }
    async getChatUsers(id: number) {
        try{
            const chatUsers = await this.api.getChatUsers(id) as IResponse[];
            store.set('chatUsers', { chatUsers: chatUsers });
        } catch (error) {
            console.log(error);
        }
    }
    async createChat(title: string) {
        try {
            await this.api.newChat(title);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteChat(id: number) {
        try {
            await this.api.deleteChat({ chatId: id });
            this.getChats();
        } catch (error) {
            console.log(error);
        }
    }
    async addUser(data: { users: [number], chatId: number }) {
        try {
            await this.api.addUser(data);
            this.getChats();
            const addUserState = store.getState().addUser;
            if (addUserState && addUserState.id !== undefined) {
                addUserState.id = undefined;
            }
        } catch (error) {
            console.log(error);
        }
    }
    async deleteUser(data: { users: [number], chatId: number }) {
        try {
            await this.api.deleteUser(data);
            this.getChatUsers(data.chatId);
        } catch (error) {
            console.log(error);
        }
    }
}
export default new ChatController();
