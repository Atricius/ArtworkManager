import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { AddTitleComponent } from './add-title/add-title.component';
import { ModifyTitleComponent } from './modify-title/modify-title.component';
import { GameBrowserComponent } from './game-browser/game-browser.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    AddTitleComponent,
    ModifyTitleComponent,
    GameBrowserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
