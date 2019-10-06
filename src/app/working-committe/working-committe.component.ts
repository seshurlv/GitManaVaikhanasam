import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-committe',
  templateUrl: './working-committe.component.html',
  styleUrls: ['./working-committe.component.scss','../app.component.css']
})
export class WorkingCommitteComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    
  }

  memberDefaultImg = "asset\\img\\faces\\personImage.jpg";
  wcMembers01 = [
    {"NAME":  "Deevi Sarangapani Iyengar", "POSITION":  "President", "PHONE": 9848072382, "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "D S V L Narasimha Charyulu", "POSITION":  "Vice-President", "PHONE": '', "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "K Prabhakara Charyulu", "POSITION": "Vice-President", "PHONE": '', "IMAGE": "assets\\img\\faces\\personImage.jpg"}, 
    {"NAME":  "Parasaram Sesha Sai", "POSITION": "Vice-President", "PHONE": 9492873235, "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "A Gopala Krishnama Charyulu", "POSITION": "Secretary", "PHONE": '', "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "Vadapally Shobhan", "POSITION": "Joint-secretary", "PHONE": 9949042216, "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "Rompicherla Murali Krishna", "POSITION": "Joint-secretary", "PHONE": 9550251037, "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "Peddinti Gopala Krishna", "POSITION": "Treasurer", "PHONE": 9290492262, "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "Tamirisa Vikhanasa Charyulu", "POSITION": "Organising Secretary", "PHONE": 9885304787, "IMAGE": "assets\\img\\faces\\personImage.jpg"}
  ];

  wcMembers02 = [
    {"NAME":  "Deevi Sarangapani Iyengar", "POSITION":  "President", "PHONE": 9848072382, "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "Dr. Rompicherla Srinivasa Deekshitulu", "POSITION":  "Vice-President", "PHONE": '9949699246', "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "Sribhashyam Ananta Charyulu", "POSITION": "Vice-President", "PHONE": '9618239338', "IMAGE": "assets\\img\\faces\\personImage.jpg"}, 
    {"NAME":  "Parasaram Sesha Sai", "POSITION": "Vice-President", "PHONE": 9492873235, "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "Deevi Surendra Bhishek", "POSITION": "Secretary", "PHONE": '9177306144', "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "Vadapally Shobhan", "POSITION": "Joint-secretary", "PHONE": 9949042216, "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "Rompicherla Murali Krishna", "POSITION": "Joint-secretary", "PHONE": 9550251037, "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "Peddinti Gopala Krishna", "POSITION": "Treasurer", "PHONE": 9290492262, "IMAGE": "assets\\img\\faces\\personImage.jpg"},
    {"NAME":  "Tamirisa Vikhanasa Charyulu", "POSITION": "Organising Secretary", "PHONE": 9885304787, "IMAGE": "assets\\img\\faces\\personImage.jpg"}
  ];
}
