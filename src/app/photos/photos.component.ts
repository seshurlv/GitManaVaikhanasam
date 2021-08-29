import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss','../app.component.css']
})
export class PhotosComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages01: NgxGalleryImage[];
  galleryImages02: NgxGalleryImage[];
  galleryImages03: NgxGalleryImage[];
  galleryImages04: NgxGalleryImage[];
  galleryImages05: NgxGalleryImage[];
  galleryImages06: NgxGalleryImage[];
  galleryImages07: NgxGalleryImage[];
  galleryImages08: NgxGalleryImage[];
  galleryImages09: NgxGalleryImage[];
  galleryImages10: NgxGalleryImage[];
  galleryImages11: NgxGalleryImage[];
  galleryImages12: NgxGalleryImage[];
  galleryImages13: NgxGalleryImage[];
  galleryImages14: NgxGalleryImage[];  


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

    images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 18; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/SP_2019/Hyderabad/'+imageName+'.jpg',
        medium: 'assets/img/Gallery/SP_2019/Hyderabad/'+imageName+'.jpg',
        big: 'assets/img/Gallery/SP_2019/Hyderabad/'+imageName+'.jpg'
     };
     images01.push(img);     
    }
    this.galleryImages07 = images01;

    images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 9; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/SP_2019/Vijayawada/'+imageName+'.jpg',
        medium: 'assets/img/Gallery/SP_2019/Vijayawada/'+imageName+'.jpg',
        big: 'assets/img/Gallery/SP_2019/Vijayawada/'+imageName+'.jpg'
     };
     images01.push(img);     
    }
    this.galleryImages08 = images01;

    images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 13; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/SP_2019/Tenali/'+imageName+'.jpg',
        medium: 'assets/img/Gallery/SP_2019/Tenali/'+imageName+'.jpg',
        big: 'assets/img/Gallery/SP_2019/Tenali/'+imageName+'.jpg'
     };
     images01.push(img);     
    }
    this.galleryImages09 = images01;

    images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 12; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/SP_2019/Guntur/'+imageName+'.jpg',
        medium: 'assets/img/Gallery/SP_2019/Guntur/'+imageName+'.jpg',
        big: 'assets/img/Gallery/SP_2019/Guntur/'+imageName+'.jpg'
     };
     images01.push(img);     
    }
    this.galleryImages10 = images01;

    images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 5; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/SP_2019/Vizag/'+imageName+'.jpg',
        medium: 'assets/img/Gallery/SP_2019/Vizag/'+imageName+'.jpg',
        big: 'assets/img/Gallery/SP_2019/Vizag/'+imageName+'.jpg'
     };
     images01.push(img);     
    }
    this.galleryImages11 = images01;

    images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 2; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/SP_2019/NLRDistrict/'+imageName+'.jpg',
        medium: 'assets/img/Gallery/SP_2019/NLRDistrict/'+imageName+'.jpg',
        big: 'assets/img/Gallery/SP_2019/NLRDistrict/'+imageName+'.jpg'
     };
     images01.push(img);     
    }
    this.galleryImages12 = images01;

    images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 7; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/SP_2019/VizagSanmanam/'+imageName+'.jpg',
        medium: 'assets/img/Gallery/SP_2019/VizagSanmanam/'+imageName+'.jpg',
        big: 'assets/img/Gallery/SP_2019/VizagSanmanam/'+imageName+'.jpg'
     };
     images01.push(img);     
    }
    this.galleryImages13 = images01;    
	
	  images01 = new Array<NgxGalleryImage>();
    for(let i = 1; i < 12; i++){      
      var imageName = i < 10 ? '0'+i : i;
      let img = {
        small: 'assets/img/Gallery/VYF_SP_2021/'+imageName+'.jpeg',
        medium: 'assets/img/Gallery/VYF_SP_2021/'+imageName+'.jpeg',
        big: 'assets/img/Gallery/VYF_SP_2021/'+imageName+'.jpeg'
     };
     images01.push(img);     
    }
    this.galleryImages14 = images01;
  } 

}
