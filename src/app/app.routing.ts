import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SvmmComponent } from './svmm/svmm.component';
//import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component'
import { WorkingCommitteComponent } from './working-committe/working-committe.component';
import { HydAshramamComponent } from './hyd-ashramam/hyd-ashramam.component';
import { HydAshramamDonorsComponent } from './hyd-ashramam-donors/hyd-ashramam-donors.component';
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

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },  
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'svmm', component: SvmmComponent },
  { path: 'workingCommitte', component: WorkingCommitteComponent },
  { path: 'hydAshramam', component: HydAshramamComponent },
  { path: 'hydAshramamDonors', component: HydAshramamDonorsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'matrimony', component: MatrimonyComponent },
  { path: 'purohitulu', component: PurohituluComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'pravachanamulu', component: PravachanamuluComponent },
  { path: 'stotramulu', component: StotramuluComponent },
  { path: 'keertanalu', component: KeertanaluComponent },
  { path: 'books', component: BooksComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
  { path: '*', redirectTo: '' }


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

//{ useHash: true }