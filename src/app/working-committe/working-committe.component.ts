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
  wcMembers = [
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

// $(document).ready(function () {
// 	drawTable(wcGrid01, "#wcGrid01");	     
// });

// drawTable(data, tableId) {
//     for (var i = 0; i < data.length; i++) {
//         drawRow(data[i], tableId);
//     }
// }

// function drawRow(rowData, tableId) {
// 	var imagePath = 'images\\mysite\\common\\personImage.png'
//     var row = $("<tr />")
//     $(tableId).append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
//     row.append($("<td class='tdImageColumn'><img class='contactImage' src='" + imagePath + "'/></td>"));
//     row.append($("<td class='dataColumnStyle'>" + rowData.NAME + "</td>"));
//     row.append($("<td class='dataColumnStyle'>" + rowData.POSITION + "</td>"));
//     row.append($("<td class='dataColumnStyle'>" + rowData.PHONE + "</td>"));
// }

}
