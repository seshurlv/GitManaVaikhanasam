import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import './rxjs-operators';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxGalleryModule } from 'ngx-gallery';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { DataService } from '../services/data.service';
import { ReversePipe } from '../pipes/reverse.pipe';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NguiMapModule } from '@ngui/map';
import { CommonComponent } from './common/common.component';
import { SvmmComponent } from './svmm/svmm.component';
import { WorkingCommitteComponent } from './working-committe/working-committe.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { DirectoryComponent } from './directory/directory.component';
import { MatrimonyComponent } from './matrimony/matrimony.component';
import { PurohituluComponent } from './purohitulu/purohitulu.component';
import { DocumentsComponent } from './documents/documents.component';
import { PravachanamuluComponent } from './pravachanamulu/pravachanamulu.component';
import { StotramuluComponent } from './stotramulu/stotramulu.component';
import { KeertanaluComponent } from './keertanalu/keertanalu.component';
import { BooksComponent } from './books/books.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { HydAshramamComponent } from './hyd-ashramam/hyd-ashramam.component';
import { HydAshramamDonorsComponent } from './hyd-ashramam-donors/hyd-ashramam-donors.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { IconsComponent } from './icons/icons.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    ReversePipe,    
    CommonComponent,
    SvmmComponent,
    WorkingCommitteComponent,
    PhotosComponent,
    VideosComponent,
    DirectoryComponent,
    MatrimonyComponent,
    PurohituluComponent,
    DocumentsComponent,
    PravachanamuluComponent,
    StotramuluComponent,
    KeertanaluComponent,
    BooksComponent,
    NewsComponent,
    ContactComponent,
    HydAshramamComponent,
    HydAshramamDonorsComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
    NgxPaginationModule,
    SelectDropDownModule,
    NgxGalleryModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBSkmVuzbgSritL4vk0LsPbHDeRyPNSU1w' })
  ],
  providers: [AuthService, DataService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
