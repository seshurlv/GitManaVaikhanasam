import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages01: NgxGalleryImage[];
  galleryImages02: NgxGalleryImage[];
  galleryImages03: NgxGalleryImage[];
  galleryImages04: NgxGalleryImage[];
  galleryImages05: NgxGalleryImage[];
  galleryImages06: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [      
      {
          width: '800px',
          height: '600px',
          thumbnailsColumns: 6,
          imageAnimation: NgxGalleryAnimation.Rotate,
          imageArrowsAutoHide: true, 
          thumbnailsArrowsAutoHide: true
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '90%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];
    
    var images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 10; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/SP_2018/'+imageName+'.jpeg',
        medium: 'assets/img/Gallery/SP_2018/'+imageName+'.jpeg',
        big: 'assets/img/Gallery/SP_2018/'+imageName+'.jpeg'
     };
     images01.push(img);     
    }
    this.galleryImages01 = images01;    

    images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 12; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/SP_Guntur_2018/'+imageName+'.jpeg',
        medium: 'assets/img/Gallery/SP_Guntur_2018/'+imageName+'.jpeg',
        big: 'assets/img/Gallery/SP_Guntur_2018/'+imageName+'.jpeg'
     };
     images01.push(img);     
    }
    this.galleryImages02 = images01;

    images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 16; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/KVS_2015/'+imageName+'.jpg',
        medium: 'assets/img/Gallery/KVS_2015/'+imageName+'.jpg',
        big: 'assets/img/Gallery/KVS_2015/'+imageName+'.jpg'
     };
     images01.push(img);     
    }
    this.galleryImages03 = images01;
    
    images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 6; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/SP_2015/'+imageName+'.jpg',
        medium: 'assets/img/Gallery/SP_2015/'+imageName+'.jpg',
        big: 'assets/img/Gallery/SP_2015/'+imageName+'.jpg'
     };
     images01.push(img);     
    }
    this.galleryImages04 = images01;

    images01 = new Array<NgxGalleryImage>();
    for(let i = 2; i < 11; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Matrimony/hyd/'+imageName+'.jpg',
        medium: 'assets/img/Matrimony/hyd/'+imageName+'.jpg',
        big: 'assets/img/Matrimony/hyd/'+imageName+'.jpg'
     };
     images01.push(img);     
    }
    this.galleryImages05 = images01;

    images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 10; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Matrimony/3_Rajamundry/'+imageName+'.jpg',
        medium: 'assets/img/Matrimony/3_Rajamundry/'+imageName+'.jpg',
        big: 'assets/img/Matrimony/3_Rajamundry/'+imageName+'.jpg'
     };
     images01.push(img);     
    }
    this.galleryImages06 = images01;
  } 

}
