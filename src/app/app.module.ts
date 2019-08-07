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
import { UserComponent } from './user/user.component';
// import { TablesComponent } from './tables/tables.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import './rxjs-operators';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxGalleryModule } from 'ngx-gallery';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { DataService } from '../services/data.service';
import { UsersListComponent } from './users-list/users-list.component';
import { InspectionRegistrationComponent } from './inspection-registration/inspection-registration.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ObservationsComponent } from './observations/observations.component';
import { ReversePipe } from '../pipes/reverse.pipe';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { InspectorAssignmentsComponent } from './inspector-assignments/inspector-assignments.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { GrowerRegistrationsComponent } from './grower-registrations/grower-registrations.component'
import { NguiMapModule } from '@ngui/map';
import { CommonComponent } from './common/common.component';
import { LocationsComponent } from './locations/locations.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    RegisterComponent,
    UsersListComponent,
    InspectionRegistrationComponent,
    SchedulerComponent,
    ObservationsComponent,
    ReversePipe,
    InspectorAssignmentsComponent,
    GrowerRegistrationsComponent,
    CommonComponent,
    LocationsComponent,
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
    HydAshramamDonorsComponent
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
