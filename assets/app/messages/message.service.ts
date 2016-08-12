import { Message } from './message';

export class MessageService {
    messages: Message[];

    addMessage(message: Message) {
        console.log(this.messages);
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessage(){
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message),1);
    }
}