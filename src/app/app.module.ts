import './rxjs-extensions';

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasteListComponent } from './paste-list';

import { PastesService } from './pastes.service';
import { TagsService } from './tags.service';
import { PasteViewComponent } from './paste-view/paste-view.component';
import { SidebarTagsComponent } from './sidebar-tags/sidebar-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    PasteListComponent,
    PasteViewComponent,
    SidebarTagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ PastesService, TagsService, Title ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
