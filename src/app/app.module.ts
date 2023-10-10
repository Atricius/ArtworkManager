import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { AddTitleComponent } from './add-title/add-title.component';
import { ModifyTitleComponent } from './modify-title/modify-title.component';
import { GameBrowserComponent } from './game-browser/game-browser.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    AddTitleComponent,
    ModifyTitleComponent,
    GameBrowserComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
