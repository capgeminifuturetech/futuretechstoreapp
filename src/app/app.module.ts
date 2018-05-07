import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AgmCoreModule } from "@agm/core";
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { RegisterPage } from "../pages/register/register";
import { ChatBotPage } from "../pages/chat-bot/chat-bot";
import { FirebaseServiceProvider } from "../providers/firebase-service/firebase-service";
import { UserServiceProvider } from "../providers/user-service/user-service";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ChatbotServiceProvider } from "../providers/chatbot-service/chatbot-service";

export const firebaseConfig = {
  apiKey: "AIzaSyCD85dBDeEsUbhuwLZr5ZqMBjjgzTmBu2Q",
  authDomain: "futuretechstore-8951.firebaseapp.com",
  databaseURL: "https://futuretechstore-8951.firebaseio.com",
  projectId: "futuretechstore-8951",
  storageBucket: "futuretechstore-8951.appspot.com",
  messagingSenderId: "620176656965"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    ChatBotPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: "AIzaSyBiKZEtG-RWxaMmdOFuQ7pEIkprnj4a3_8" })
  ],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    ChatBotPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    FirebaseServiceProvider,
    UserServiceProvider,
    ChatbotServiceProvider
  ]
})
export class AppModule {}
