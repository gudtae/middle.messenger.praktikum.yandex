import { ChatAPI, IChatList } from '../api/ChatAPI';
import store from '../core/Store';

class ChatController {
    private api = new ChatAPI();

    async getChats(){
        try {
            const chatList = await this.api.getChats() as IChatList[];
            store.set('chatList', {chatList});
        } catch (error) {
            console.log(error);
        }
    }
    async createChat(title: string){
        try {
            await this.api.newChat(title);
            this.getChats();
        } catch (error) {
            console.log(error);
        }
    }
    async deleteChat(id: number){
        try {
            await this.api.deleteChat({chatId: id});
            this.getChats();
        } catch (error) {
            console.log(error);
        }
    }
}
export default new ChatController();
