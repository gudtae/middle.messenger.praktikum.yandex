/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ChatController from '../controllers/ChatController';
import store from './Store';
export interface IChatMessage {
    chat_id: number;
    content: string;
    file: any;
    id: number;
    is_read: boolean;
    time: string;
    type: string;
    user_id: number;
}

class WSTransport {
    private socket: WebSocket | null = null;
    private pingInterval = 0;
    addEventListener() {
        this.socket?.addEventListener('open', this.open.bind(this));
        this.socket?.addEventListener('close', this.close.bind(this));
        this.socket?.addEventListener('message', this.message.bind(this));
        this.socket?.addEventListener('error', this.errorhandler.bind(this));
    }
    removeEventListener() {
        this.socket?.removeEventListener('open', this.open.bind(this));
        this.socket?.removeEventListener('close', this.close.bind(this));
        this.socket?.removeEventListener('message', this.message.bind(this));
        this.socket?.removeEventListener('error', this.errorhandler.bind(this));
    }
    connect(userId: number, chatId: number, token: string) {
        this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
        this.addEventListener();
    }
    open() {
        this.socket?.send(JSON.stringify({
            content: '0',
            type: 'get old',
        }));
        this.pingInterval = setInterval(() => {
            this.sendPing();
        }, 20000);
    }
    private sendPing() {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({
                type: 'ping',
            }));
        } else {
            console.warn('WebSocket not open. Ping not sent.');
        }
    }
    close(e: CloseEvent) {
        if (this.socket) {
            this.removeEventListener();
            clearInterval(this.pingInterval);
        } else if (e.wasClean) {
            console.log('Соединение закрыто чисто');
        }
        else {
            console.log('хьюстон у нас проблемы');
        }
    }
    stop(){
        if (this.socket) {
            clearInterval(this.pingInterval);
            this.socket.close();
        } else {
            console.log('Сокет не подключен');
        }
    }
    send(message: string) {
        if (!this.socket) {
            throw new Error('Сокет не подключен');
        } else {
            this.socket?.send(JSON.stringify({
                content: message,
                type: 'message',
            }));
        }
    }
    message(e: MessageEvent) {
        try {
            const message = JSON.parse(e.data);
            if (message.type && message.type === 'pong') {
                return;
            }
            const currentMessages = (store.getState().messages?.messages || []).reverse();
            
            if (Array.isArray(message)) {
                const rev = message.reverse();
                const updatedMessages = [...currentMessages, ...rev];
                store.set('messages', { messages: updatedMessages });
            } else {
                const updatedMessages = [...currentMessages, message];
                store.set('messages', { messages: updatedMessages });
            }
            ChatController.getChats();
        } catch (e) {
            console.log(e);
        }
    }
    errorhandler(e: any) {
        console.log('WS ошибка', e.message);
    }
}
const controller = new WSTransport();
export default controller;



