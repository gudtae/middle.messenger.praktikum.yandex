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
}
export default new ChatController();
