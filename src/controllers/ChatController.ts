import { ChatAPI, IChatList } from '../api/ChatAPI.ts';
import { IResponse } from '../api/UserAPI.ts';
import store from '../core/Store.ts';
import controller from '../core/Socket.ts';

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
        try {
            const chatUsers = await this.api.getChatUsers(id) as IResponse[];
            store.set('chatUsers', { chatUsers: chatUsers });
        } catch (error) {
            console.log(error);
        }
    }
    async createChat(title: string) {
        try {
            await this.api.newChat(title);
            this.getChats();
        } catch (error) {
            console.log(error);
        }
    }
    async deleteChat(id: number) {
        try {
            await this.api.deleteChat({ chatId: id });
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
    async token(id: number) {
        try {
            const token = await this.api.token(id);
            store.set('currentChat', token);
            const userId = store.getState().user?.id;
            if (userId) {
                controller.connect(+userId, +id, token.token );
            }

        } catch (error) {
            console.log(error);
        }
    }
}
export default new ChatController();
