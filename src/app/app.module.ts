import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { LevelComponent } from './list/level/level.component';
import { DetailsComponent } from './list/item/details/details.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent, ListComponent, ItemComponent, LevelComponent, DetailsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
