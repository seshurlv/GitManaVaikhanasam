import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Home', icon: 'fas fa-home', class: '' },
    // { path: 'user', title: 'User Profile', icon: 'pe-7s-user', class: '' },
    // { path: 'table', title: 'Table List', icon: 'pe-7s-note2', class: '' },
    // { path: 'typography', title: 'Typography', icon: 'pe-7s-news-paper', class: '' },
    // { path: 'icons', title: 'Icons', icon: 'pe-7s-science', class: '' },
    // { path: 'maps', title: 'Maps', icon: 'pe-7s-map-marker', class: '' },
    // { path: 'notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '' },
    //{ path: 'upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

export const SVMMRoutes: RouteInfo[] = [
    { path: 'svmm', title: 'Sri Vaikhanasa Maha Mandali', icon: 'fas fa-layer-group', class: '' },
    { path: 'workingCommitte', title: 'Working Committe', icon: 'fas fa-users-cog', class: '' }    
]

export const AshramamRoutes: RouteInfo[] = [
    { path: 'hydAshramam', title: 'Hyderabad Ashramam', icon: 'fas fa-building', class: '' },
    { path: 'hydAshramamDonors', title: 'Ashramam Donors', icon: 'fas fa-hand-holding-usd', class: '' }    
]

export const GalleryRoutes: RouteInfo[] = [
    { path: 'photos', title: 'Photos', icon: 'far fa-image', class: '' },
    { path: 'videos', title: 'Videos', icon: 'fas fa-video', class: '' }
]

export const ServiceRoutes: RouteInfo[] = [
    { path: 'directory', title: 'Directory', icon: 'fas fa-address-book', class: '' },
    { path: 'matrimony', title: 'Matrimony', icon: 'fas fa-handshake', class: '' },
    { path: 'purohitulu', title: 'Vaikhanasa Purohitulu', icon: 'fas fa-briefcase', class: '' },
]
export const DownloadRoutes: RouteInfo[] = [
    { path: 'documents', title: 'Documents', icon: 'fas fa-file-alt', class: '' },
    { path: 'pravachanamulu', title: 'Pravachanamulu', icon: 'fas fa-file-audio', class: '' },
    { path: 'stotramulu', title: 'Stotramulu', icon: 'fas fa-torah', class: '' },
    { path: 'keertanalu', title: 'Keertanalu', icon: 'fas fa-music', class: '' },
    { path: 'books', title: 'Books', icon: 'fas fa-book', class: '' },    
]
export const NewsRoutes: RouteInfo[] = [
    { path: 'news', title: 'News', icon: 'fas fa-newspaper', class: '' },    
]
export const ContactRoutes: RouteInfo[] = [
    { path: 'contact', title: 'Contact', icon: 'fas fa-id-card', class: '' },    
]

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

    constructor(private dataServie:DataService){

    }
    menuItems: any[];
    svmmItems: any[];
    ashramamItems: any[];
    galleryItems: any[];
    serviceItems: any[];
    downloadItems: any[];
    newsItems: any[];
    contactItems: any[];
    Role
   
    message;

    ngOnInit() {
        // this.dataServie.currentMsg.subscribe(msg => 
        //     this.message = msg
        // )
        this.Role = JSON.parse(window.localStorage.getItem('Role'));
        //console.log('localstorage Role Id', this.Role)
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.svmmItems = SVMMRoutes.filter(listItem => listItem);
        this.ashramamItems = AshramamRoutes.filter(LocationRoute => LocationRoute);
        this.galleryItems = GalleryRoutes.filter(authRoute => authRoute);
        this.serviceItems = ServiceRoutes.filter(AuthRoute => AuthRoute);        
        this.downloadItems = DownloadRoutes.filter(authRoute => authRoute);
        this.newsItems = NewsRoutes.filter(authRoute => authRoute);
        this.contactItems = ContactRoutes.filter(authRoute => authRoute);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    logOut() {
        //console.log('logOut')
        this.dataServie.changeMessage(true)
        window.localStorage.clear()
        //this.router.navigate([app])
        this.sidebarClose();
    }
    private sidebarVisible: boolean;
    private toggleButton: any;


    hideSideMenu(){
        this.dataServie.changeMessage(true)
        //console.log('hideSideMenu')
        this.sidebarClose();
       
    }

    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        //this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = true;
        body.classList.remove('nav-open');
    };

}
