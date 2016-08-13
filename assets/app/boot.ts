import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { MessageService } from './messages/message.service';

bootstrap(AppComponent, [
  appRouterProviders, MessageService
]);