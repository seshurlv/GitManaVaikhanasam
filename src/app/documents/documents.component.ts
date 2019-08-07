import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss','../app.component.css']
})
export class DocumentsComponent implements OnInit {

  downloadApplicationsItemList = [
    {"SNO": 1, "NAME": "Sri Vaikhanasa Maha Mandali Vivaha Paricheya Vedika Matrimony Application Form (Telugu)", "FILEURL":  "assets/docs/vaikhanasa_marriage_application_telugu.pdf", "IMGURL": "assets\\img\\common\\pdf_download.jpg"},
    {"SNO": 2, "NAME": "Sri Vaikhanasa Maha Mandali Vivaha Paricheya Vedika Matrimony Application Form (English)", "FILEURL":  "assets/docs/vaikhanasa_marriage_application_english.pdf", "IMGURL": "assets\\img\\common\\pdf_download.jpg"}
  ];

  downloadOthersItemList = [
    {"SNO": 1, "NAME": "Vaikhanasa Pooja Vidhanam", "FILEURL":  "assets/docs/PoojaVidhanam/Kalyaano_pdf_1.pdf", "IMGURL": "assets\\img\\common\\pdf_download.jpg"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
