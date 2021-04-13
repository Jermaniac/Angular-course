import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ApplicactionComponent } from './applicaction/applicaction.component'; 
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ApplicactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService
  ],
  bootstrap: [
    ApplicactionComponent
  ]
})
export class AppModule { }
