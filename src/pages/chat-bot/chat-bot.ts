import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Message } from "../../models/message";
import { ChatbotServiceProvider } from "../../providers/chatbot-service/chatbot-service";

@IonicPage()
@Component({
  selector: "page-chat-bot",
  templateUrl: "chat-bot.html"
})
export class ChatBotPage {
  message: Message;
  messages: Message[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public chatbotService: ChatbotServiceProvider
  ) {}

  ionViewDidLoad() {}

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.chatbotService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(new Message("", "assets/images/bot.png"));
    });

    this.message = new Message("", "assets/images/user.png");
  }
}
