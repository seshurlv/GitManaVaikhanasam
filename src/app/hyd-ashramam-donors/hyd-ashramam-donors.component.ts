import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hyd-ashramam-donors',
  templateUrl: './hyd-ashramam-donors.component.html',
  styleUrls: ['./hyd-ashramam-donors.component.scss','../app.component.css']
})
export class HydAshramamDonorsComponent implements OnInit { 
  

  constructor() {     
  }

  ngOnInit() {        
  } 
     
  
  

 showImage = function(imgUrl, imgString) {     
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("img01") as HTMLImageElement;
  let captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = imgUrl;
  captionText.innerHTML = imgString;
 };

 closeFunction = function() { 
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
 };


  donorsList = [
    {
    "SNO":"1",
    "TITLE":"Shri. Dr.",
    "SURNAME":"Deevi",
    "NAME":"Sarangapani Iyengar ,  Parthasarathi and Late Sridhar ",
    "PLACE":"Nacharam",
    "AMOUNT":"₹ 3,50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"2",
    "TITLE":"Kum.",
    "SURNAME":"Peddinti",
    "NAME":"SuryaVarchasvi d/o P Gopala Charyulu",
    "PLACE":"SankarNagar",
    "AMOUNT":"₹ 3,30,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"3",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Pavan kumar ",
    "PLACE":"Texas(USA)",
    "AMOUNT":"₹ 3,00,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"4",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Mohanacharyulu",
    "PLACE":"Alwal",
    "AMOUNT":"₹ 1,50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"5",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Ananthacharyulu",
    "PLACE":"BHEL",
    "AMOUNT":"₹ 1,00,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"6",
    "TITLE":"Shri.",
    "SURNAME":"Narayanam",
    "NAME":"Bhava Prasad",
    "PLACE":"Alwal",
    "AMOUNT":"₹ 1,00,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"7",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Anantha Srinivasacharyulu",
    "PLACE":"Alwal",
    "AMOUNT":"₹ 1,00,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"8",
    "TITLE":"Shri.",
    "SURNAME":"Paramkusam",
    "NAME":"Seetharaamacharyulu",
    "PLACE":"Moulali",
    "AMOUNT":"₹ 1,00,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"9",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"S.Venkatacharyulu",
    "PLACE":"Mauritus",
    "AMOUNT":"₹ 1,00,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"10",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Raghava Deekshitulu & Sons",
    "PLACE":"Tirupati(USA)",
    "AMOUNT":"₹ 1,00,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"11",
    "TITLE":"Shri. Dr.",
    "SURNAME":"Rompicherla",
    "NAME":"Srinivasa Deekshithulu",
    "PLACE":"Vivekananda nagar",
    "AMOUNT":"₹ 1,00,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"12",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Sanath Kumar",
    "PLACE":"Tirupati ",
    "AMOUNT":"₹ 1,00,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"13",
    "TITLE":"Shri Dr.",
    "SURNAME":"Ganjam",
    "NAME":"Krishna Prasad in Memory of  his Father and Mother ",
    "PLACE":"Lalaguda , Tarnaka",
    "AMOUNT":"₹ 1,00,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"14",
    "TITLE":"Shri Dr.",
    "SURNAME":"Narayanam",
    "NAME":"KesavaMurthy",
    "PLACE":"Boduppal",
    "AMOUNT":"₹ 60,000",
    "DATE":"2/12/2018",
    "RECEIPT":"2/42"
    }
    ,{
    "SNO":"15",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Acharya Sathrughna Kumar & Bros",
    "PLACE":"Gayatri Nagar ",
    "AMOUNT":"₹ 50,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"16",
    "TITLE":"Shri.",
    "SURNAME":"Narayanam",
    "NAME":"Satyanarayanacharyulu",
    "PLACE":"Memphis (USA)",
    "AMOUNT":"₹ 50,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"17",
    "TITLE":"Shri.",
    "SURNAME":"Pedapudi",
    "NAME":"Krishnama Charyulu",
    "PLACE":"Saradanagar",
    "AMOUNT":"₹ 50,011",
    "DATE":"2/12/2018",
    "RECEIPT":"2/40"
    }
    ,{
    "SNO":"18",
    "TITLE":"Shri.",
    "SURNAME":"Tamirisa",
    "NAME":"Srinivasa VenuGopal      s/o  T.Narashimhacharyulu",
    "PLACE":"Irvine ,USA",
    "AMOUNT":"₹ 50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"19",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Hayagreeva Bhattacharyulu",
    "PLACE":"Nandyal",
    "AMOUNT":"₹ 50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"20",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"V.G Krishnamacharyulu",
    "PLACE":"Saradanagar",
    "AMOUNT":"₹ 50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"21",
    "TITLE":"Shri.",
    "SURNAME":"Ganjam",
    "NAME":"Pattabhiram",
    "PLACE":"Tarnaka",
    "AMOUNT":"₹ 50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"22",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Seetarambabu",
    "PLACE":"Chikkadapalli",
    "AMOUNT":"₹ 50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"23",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Muralidhar",
    "PLACE":"BHEL",
    "AMOUNT":"₹ 50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"24",
    "TITLE":"Shri.",
    "SURNAME":"Rompicherla",
    "NAME":"Venkata Satyanarayana Charyulu",
    "PLACE":"Mytripuram, Karmanghat",
    "AMOUNT":"₹ 50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"25",
    "TITLE":"Shri. Dr.",
    "SURNAME":"Deevi",
    "NAME":"Sudarsana Bhattacharyulu",
    "PLACE":"Repalle(Guntur Dist.)",
    "AMOUNT":"₹ 50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"26",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Sreenivasa charyulu",
    "PLACE":"Beeramguda",
    "AMOUNT":"₹ 50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"27",
    "TITLE":"Shri.",
    "SURNAME":"Brindavanam",
    "NAME":"Venkata Appalacharyulu & Sons",
    "PLACE":"Kurnool",
    "AMOUNT":"₹ 50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"28",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Srinivasa Deekshitulu",
    "PLACE":"Moscow",
    "AMOUNT":"₹ 50,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"29",
    "TITLE":"Shri.",
    "SURNAME":"Devayajanam",
    "NAME":"Murali Gopala Krishna Murthy",
    "PLACE":"BHEL",
    "AMOUNT":"₹ 32,500",
    "DATE":"2/12/2018",
    "RECEIPT":"2/38"
    }
    ,{
    "SNO":"30",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Ravi Chandra",
    "PLACE":"Alwal",
    "AMOUNT":"₹ 25,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"31",
    "TITLE":"Shri. Dr.",
    "SURNAME":"Deevi",
    "NAME":"Krishnaswami Iyengar",
    "PLACE":"Nalluru(Guntur Dist.)",
    "AMOUNT":"₹ 25,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"32",
    "TITLE":"Shri.",
    "SURNAME":"Parasaram",
    "NAME":"V Ranganadha Iyyenger & Brothers",
    "PLACE":"Malakpet",
    "AMOUNT":"₹ 25,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"33",
    "TITLE":"Shri.",
    "SURNAME":"Narayanam",
    "NAME":"Sravan Kumar",
    "PLACE":"Chikkadapalli",
    "AMOUNT":"₹ 25,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"34",
    "TITLE":"Shri.",
    "SURNAME":"Narayanam",
    "NAME":"RadhaKrishna",
    "PLACE":"Chikkadapalli",
    "AMOUNT":"₹ 25,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"35",
    "TITLE":"Shri.",
    "SURNAME":"Rompicherla",
    "NAME":"Lakshmi Narasimha Charyulu",
    "PLACE":"Tenali",
    "AMOUNT":"₹ 25,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"36",
    "TITLE":"Shri.",
    "SURNAME":"Peddinti",
    "NAME":"Gopala Charyulu and son inlaws",
    "PLACE":"Jillelaguda",
    "AMOUNT":"₹ 25,000",
    "DATE":"08/26/2018",
    "RECEIPT":"2/33"
    }
    ,{
    "SNO":"37",
    "TITLE":"Shri.",
    "SURNAME":"Peddinti",
    "NAME":"R K Chakrapani",
    "PLACE":"Moosarambagh",
    "AMOUNT":"₹ 20,232",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"38",
    "TITLE":"Shri.",
    "SURNAME":"Paramkusam",
    "NAME":"Ranganadhacharyulu",
    "PLACE":"A.S.Rao Nagar",
    "AMOUNT":"₹ 20,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"39",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"N.Rangaraavu",
    "PLACE":"A.S.Rao Nagar",
    "AMOUNT":"₹ 20,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"40",
    "TITLE":"Shri.",
    "SURNAME":"Tamirisa",
    "NAME":"Panakalacharyulu",
    "PLACE":"Repalle(Guntur Dist.)",
    "AMOUNT":"₹ 20,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"41",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Sai Srinivas",
    "PLACE":"Hydernagar",
    "AMOUNT":"₹ 20,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"42",
    "TITLE":"Shri.",
    "SURNAME":"Peddinti",
    "NAME":"S S Hariprasad ",
    "PLACE":"Motinagar",
    "AMOUNT":"₹ 20,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"43",
    "TITLE":"Shri.",
    "SURNAME":"Khandavalli",
    "NAME":"Venkata SatyaPrabhakaram",
    "PLACE":"Kukatpally",
    "AMOUNT":"₹ 20,000",
    "DATE":"2/12/2018",
    "RECEIPT":"2/41"
    }
    ,{
    "SNO":"44",
    "TITLE":"Shri.",
    "SURNAME":"Tamirisa",
    "NAME":"Narasimha Rao",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 20,000",
    "DATE":"2/12/2018",
    "RECEIPT":"2/39"
    }
    ,{
    "SNO":"45",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"S V L NarasimhaCharyulu",
    "PLACE":"Alwal",
    "AMOUNT":"₹ 20,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"46",
    "TITLE":"Shri.",
    "SURNAME":"Gudipudi",
    "NAME":"Seetharamacharyulu",
    "PLACE":"Khairthabad",
    "AMOUNT":"₹ 20,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"47",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"HarinarayanaCharyulu",
    "PLACE":"Balaji nagar",
    "AMOUNT":"₹ 20,000",
    "DATE":"08/15/2019",
    "RECEIPT":"8/198 ,2/46"
    }
    ,{
    "SNO":"48",
    "TITLE":"Shri.",
    "SURNAME":"Khandavalli",
    "NAME":"Venkata Ramana Murthy",
    "PLACE":"Gajularamaaram",
    "AMOUNT":"₹ 16,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"49",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Sreerama Chakravarty, Lakshmana Kumar and Venugopal",
    "PLACE":"Gayatri Nagar - ",
    "AMOUNT":"₹ 15,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"50",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Krishna Kishore",
    "PLACE":"USA",
    "AMOUNT":"₹ 11,493",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"51",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"RamaKrishna",
    "PLACE":"Moulali",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"52",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Srinivas ",
    "PLACE":"BanjaraHills",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"53",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"AppalaCharyulu",
    "PLACE":"Gayatri Nagar",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"54",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"Radha Krishnamacharyulu",
    "PLACE":"Mallapur",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"55",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Venkataramana",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"56",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Ramakrishna",
    "PLACE":"Saroornagar",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"57",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"S.Prasada Charyulu & Bros",
    "PLACE":"Bhimavaram",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"58",
    "TITLE":"Shri.",
    "SURNAME":"Nalluri",
    "NAME":"Dasaradha Srinivasa Deekshithulu",
    "PLACE":"Nalluru (Guntur Dist.)",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"59",
    "TITLE":"Shri.",
    "SURNAME":"Srinivasula",
    "NAME":"Subhadhracharyulu",
    "PLACE":"Jillelaguda",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"60",
    "TITLE":"Smt.",
    "SURNAME":"Deevi",
    "NAME":"Rajyalakshmi",
    "PLACE":"Jillelaguda",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"61",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"Hari Srinivasa Deekshitulu",
    "PLACE":"Boduppal",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"62",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"V V Ramakrishnama Charyulu",
    "PLACE":"Boduppal",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"63",
    "TITLE":"Shri.",
    "SURNAME":"Muttevi",
    "NAME":"LeelaKrishna",
    "PLACE":"Borabanda",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"64",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"VenkataLakshmi",
    "PLACE":"Borabanda",
    "AMOUNT":"₹ 10,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"65",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Rambabu",
    "PLACE":"Venkatadri Township",
    "AMOUNT":"₹ 10,100",
    "DATE":"08/15/2019",
    "RECEIPT":"2/47"
    }
    ,{
    "SNO":"66",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Venu Madhav",
    "PLACE":"BHEL",
    "AMOUNT":"₹ 10,016",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"67",
    "TITLE":"Shri.",
    "SURNAME":"Govardhanam",
    "NAME":"Pattabhirama charyulu ",
    "PLACE":"Telephone Colony,Hyderabad",
    "AMOUNT":"₹ 10,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"68",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Tushara & Havisha in Memory of their Father late Deevi Lakshmi Narasimha chrayulu",
    "PLACE":"Vasavi nagar coloy, R.K.Puram Kothapeta ",
    "AMOUNT":"₹ 10,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"69",
    "TITLE":"Shri.",
    "SURNAME":"Peddinti",
    "NAME":"Bhaskara Murty ",
    "PLACE":"Moulali",
    "AMOUNT":"₹ 10,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"70",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"S.V.Rangacharyulu",
    "PLACE":"Hyderabad",
    "AMOUNT":"₹ 10,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"71",
    "TITLE":"Shri.",
    "SURNAME":"Parasaram",
    "NAME":"AlahaSingaracharyulu",
    "PLACE":"Mallapur",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"72",
    "TITLE":"Shri.",
    "SURNAME":"Tamirisa",
    "NAME":"Vikhanasacharyulu",
    "PLACE":"Bhavani Nagar(Nacharam)",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"73",
    "TITLE":"Shri.",
    "SURNAME":"Srinivasula",
    "NAME":"Srinivasula Deekshitulu",
    "PLACE":"Alkapuri",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"74",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"S Bhishak",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"75",
    "TITLE":"Smt.",
    "SURNAME":"Vedantam",
    "NAME":"Sita",
    "PLACE":"Hasthinapuram",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"76",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Srinivas ",
    "PLACE":"Vompuguda",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"77",
    "TITLE":"Shri.",
    "SURNAME":"Attili",
    "NAME":"Gopala krishnamacharyulu",
    "PLACE":"Telephone Colony",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"78",
    "TITLE":"Shri.",
    "SURNAME":"Peddinti",
    "NAME":"Rajagopal",
    "PLACE":"L.B.Nagar",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"79",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Tandava Krishna Murthy",
    "PLACE":"Chaitanyapuri",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"80",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"Srinivasa Murty",
    "PLACE":"Secunderabad",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"81",
    "TITLE":"Smt.",
    "SURNAME":"Deevi",
    "NAME":"Lakshmi Kantam",
    "PLACE":"Alwal",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"82",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"A V RaghavaCharyulu",
    "PLACE":"BHEL",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"83",
    "TITLE":"Smt.",
    "SURNAME":"Vedantam",
    "NAME":"Devaki Devi & SreenivasaMurty",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"84",
    "TITLE":"Shri.",
    "SURNAME":"Ganjam",
    "NAME":"G A SeshaCharyulu",
    "PLACE":"MacDowel Colony (USA)",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"85",
    "TITLE":"Shri.",
    "SURNAME":"Brindavanam",
    "NAME":"V N A Vedadri ",
    "PLACE":"Nacharam",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"86",
    "TITLE":"Shri.",
    "SURNAME":"Rompicherla",
    "NAME":"V BharataCharyulu",
    "PLACE":"Nallakunta",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"87",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Lakshmi NarasimhaCharyulu ",
    "PLACE":"Hasthinapuram",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"88",
    "TITLE":"Shri.",
    "SURNAME":"Tamirisa",
    "NAME":"V L N Acharyulu ",
    "PLACE":"Pedaravuru (Guntur Dist )",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"89",
    "TITLE":"Shri.",
    "SURNAME":"Peddinti",
    "NAME":"GopalaKrishna",
    "PLACE":"Uppal Depot",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"90",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"ChandraMohan Srinivas ",
    "PLACE":"Gayatri Nagar",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"91",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Krishna Prasad",
    "PLACE":"Gayatri Nagar",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"92",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"MadhavaCharyulu ",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"93",
    "TITLE":"Shri.",
    "SURNAME":"Rompicherla",
    "NAME":"Muralikrishna",
    "PLACE":"Jillelaguda",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"94",
    "TITLE":"Shri.",
    "SURNAME":"Brindavanam",
    "NAME":"Venkata Venugopalacharyulu",
    "PLACE":"Borabanda",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"95",
    "TITLE":"Shri.",
    "SURNAME":"Kallagunta",
    "NAME":"V Raghurama Murty",
    "PLACE":"Kukatpally",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"96",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"Satyanarayana Kumar",
    "PLACE":"Kukatpally",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"97",
    "TITLE":"Shri.",
    "SURNAME":"Govardhanam",
    "NAME":"Narasimha Murty",
    "PLACE":"Hydershakotla",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"98",
    "TITLE":"Shri.",
    "SURNAME":"Nalluri",
    "NAME":"Lakshmi Narayana BhattaCharyulu",
    "PLACE":"Nallur(Guntur Dist.)",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"99",
    "TITLE":"Shri.",
    "SURNAME":"Parasaram",
    "NAME":"Seshasai",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"100",
    "TITLE":"Shri.",
    "SURNAME":"Peddinti",
    "NAME":"Sreerama Chandra Murty",
    "PLACE":"Chikkadapalli",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"101",
    "TITLE":"Shri.",
    "SURNAME":"Khandavalli",
    "NAME":"PrabhakaraCharyulu",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"102",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"R Krishnama Charyulu",
    "PLACE":"Saroornagar",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"103",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Krishna Prasad",
    "PLACE":"Saroornagar",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"104",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Narayana",
    "PLACE":"Saroornagar",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"105",
    "TITLE":"Shri.",
    "SURNAME":"Nalluri",
    "NAME":"Madhusudhan ",
    "PLACE":"Warasiguda",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"106",
    "TITLE":"Shri.",
    "SURNAME":"Nalluri",
    "NAME":"Vikhanasa BattaCharyulu",
    "PLACE":"Nallur(Guntur Dist.)",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"107",
    "TITLE":"Shri.",
    "SURNAME":"Rompicherla",
    "NAME":"Raghavacharyulu  In memory of Late R.VidyaSagar ",
    "PLACE":"Tenali",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"108",
    "TITLE":"Smt.",
    "SURNAME":"Vadapalli",
    "NAME":"Kanakam (on the occation of his son's thread cermony)",
    "PLACE":"Malikipuram (E.G. Dist)",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"109",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Srinivasa Krishna",
    "PLACE":"Vanukuru",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"110",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"D T K Chakravarthi",
    "PLACE":"",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"111",
    "TITLE":"Shri.",
    "SURNAME":"Govardhanam",
    "NAME":"Anantharam",
    "PLACE":"Motinagar",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"112",
    "TITLE":"Shri.",
    "SURNAME":"Tamirisa",
    "NAME":"Anantha Charyulu",
    "PLACE":"Uppal",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"113",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Sobhanadri Lakshmi Narasimha Charyulu",
    "PLACE":"Alwal",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"114",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Venkata Ramana",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"115",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Harsha Ayyengar",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 10,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"116",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"Satish Kumar",
    "PLACE":"Bharat Nagar",
    "AMOUNT":"₹ 10,000",
    "DATE":"08/15/2019",
    "RECEIPT":"2/44"
    }
    ,{
    "SNO":"117",
    "TITLE":"Shri.",
    "SURNAME":"Parankusam",
    "NAME":"Jwala NarasimhaCharyulu",
    "PLACE":"Moosarambagh",
    "AMOUNT":"₹ 7,722",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"118",
    "TITLE":"Shri.",
    "SURNAME":"Khandavalli",
    "NAME":"V R S N Acharyulu",
    "PLACE":"Rajahmundry",
    "AMOUNT":"₹ 7,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"119",
    "TITLE":"Smt.",
    "SURNAME":"Devayajanam",
    "NAME":"Lalitha Kumari",
    "PLACE":"Jillelaguda",
    "AMOUNT":"₹ 7,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"120",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"Giri Prasad",
    "PLACE":"Borabanda",
    "AMOUNT":"₹ 6,000",
    "DATE":"08/26/2018",
    "RECEIPT":"2/32"
    }
    ,{
    "SNO":"121",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"Hariprasad",
    "PLACE":"A.S.Rao Nagar",
    "AMOUNT":"₹ 5,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"122",
    "TITLE":"Shri.",
    "SURNAME":"Nalluri",
    "NAME":"Narayanacharyulu",
    "PLACE":"Moulali",
    "AMOUNT":"₹ 5,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"123",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"P.V KrishnaMurty",
    "PLACE":"Neredmet",
    "AMOUNT":"₹ 5,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"124",
    "TITLE":"Shri.",
    "SURNAME":"Tamirisa",
    "NAME":"V G Jagannath",
    "PLACE":"Pragathi Nagar",
    "AMOUNT":"₹ 5,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"125",
    "TITLE":"Shri.",
    "SURNAME":"Narayanam",
    "NAME":"Vivekananda",
    "PLACE":"Motinagar",
    "AMOUNT":"₹ 5,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"126",
    "TITLE":"Shri.",
    "SURNAME":"D",
    "NAME":"Sreenivasa Charyulu",
    "PLACE":"BanjaraHills",
    "AMOUNT":"₹ 5,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"127",
    "TITLE":"Shri.",
    "SURNAME":"Kallagunta",
    "NAME":"L R Prasad",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 5,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"128",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"R.Ranganadha Charyulu",
    "PLACE":"Tirupathi",
    "AMOUNT":"₹ 5,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"129",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"S.A.V.SatyanarayanaCharyulu",
    "PLACE":"A.S.Rao Nagar",
    "AMOUNT":"₹ 5,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"130",
    "TITLE":"Shri.",
    "SURNAME":"Narayanam",
    "NAME":"RamaKrishna",
    "PLACE":"Danadayaal nagar",
    "AMOUNT":"₹ 5,100",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"131",
    "TITLE":"Shri.",
    "SURNAME":"Bhavavarapu",
    "NAME":"SatyaPrasad",
    "PLACE":"Boduppal",
    "AMOUNT":"₹ 5,004",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"132",
    "TITLE":"Shri.",
    "SURNAME":"Meduri",
    "NAME":"Kodanda Rama Deekshitulu",
    "PLACE":"Nacharam",
    "AMOUNT":"₹ 5,004",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"133",
    "TITLE":"Smt.",
    "SURNAME":"",
    "NAME":"A. Satyavathi ",
    "PLACE":"Uppal Depot",
    "AMOUNT":"₹ 5,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"134",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"P.RangaaCharyulu",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 5,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"135",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Sreekanth",
    "PLACE":"Borabanda",
    "AMOUNT":"₹ 5,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"136",
    "TITLE":"Smt.",
    "SURNAME":"",
    "NAME":"P. Sai Madhuri ",
    "PLACE":"",
    "AMOUNT":"₹ 5,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"137",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"R Krishnamacharyulu",
    "PLACE":"Saroornagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"138",
    "TITLE":"Shri.",
    "SURNAME":"Pedapudi",
    "NAME":"Venugopala Krishnamacharyulu",
    "PLACE":"Saroornagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"139",
    "TITLE":"Shri.",
    "SURNAME":"Srinivasula",
    "NAME":"RamachandraaCharyulu",
    "PLACE":"Doctors Colony",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"140",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"Srinivasa Ayodhyanadh",
    "PLACE":"Doctors Colony",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"141",
    "TITLE":"Smt.",
    "SURNAME":"Vadapalli",
    "NAME":"VijayaLakshmi",
    "PLACE":"Humayun Nagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"142",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Anjaneyulu",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"143",
    "TITLE":"Shri.",
    "SURNAME":"Peddinti",
    "NAME":"VenkataGopala krishnamacharyulu",
    "PLACE":"Moulali",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"144",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"P.V.B SatyanarayanaCharyulu",
    "PLACE":"BHEL",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"145",
    "TITLE":"Shri.",
    "SURNAME":"Meduri",
    "NAME":"Murali",
    "PLACE":"Nagaram",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"146",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"Srinivasa Murthy",
    "PLACE":"Vijayanagar Colony",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"147",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"V.RamaKrishna & Bros ,(In memory of Late V.Janardhanacharyulu )",
    "PLACE":"Kakinada",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"148",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Yogananda Narasimha Deekshithulu",
    "PLACE":"Jillelaguda",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"149",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Hanumanthacharyulu",
    "PLACE":"L.B.Nagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"150",
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"Ranganadhacharyulu",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"151",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"S.Ranganadh",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"152",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"V.Venkata RangaChary",
    "PLACE":"Malkajgiri",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"153",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"G.Raghunadh",
    "PLACE":"Alwal",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"154",
    "TITLE":"Shri.",
    "SURNAME":"Angara",
    "NAME":"Sairam",
    "PLACE":"Pragathi Nagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"155",
    "TITLE":"Shri.",
    "SURNAME":"Sudarsanam",
    "NAME":"GopalaCharyulu",
    "PLACE":"Attapur",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"156",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"VenkataCharyulu",
    "PLACE":"Attapur",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"157",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"A.V Ramana ",
    "PLACE":"A.S.Rao Nagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"158",
    "TITLE":"Shri.",
    "SURNAME":"Devayajanam",
    "NAME":"Sridhara Chakravarthy",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"159",
    "TITLE":"Shri.",
    "SURNAME":"Narayanam",
    "NAME":"SrinivasaMurty",
    "PLACE":"Kharman Ghat",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"160",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Srinivasa Murthy",
    "PLACE":"Jillelaguda",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"161",
    "TITLE":"Shri.",
    "SURNAME":"Noori",
    "NAME":"Subhramanya Sastri",
    "PLACE":"HMT Nagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"162",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Krishna Prasad",
    "PLACE":"Saroornagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"163",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"S. Vijaya Sai",
    "PLACE":"",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"164",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"V VaradaCharyulu",
    "PLACE":"Dilshuknagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"165",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Vijaya Saradhi",
    "PLACE":"Saroornagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"166",
    "TITLE":"Shri.",
    "SURNAME":"Sribhashyam",
    "NAME":"Sriman narayana",
    "PLACE":"Saroornagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"167",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Srinivasulacharyulu  ",
    "PLACE":"A.S.Rao Nagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"168",
    "TITLE":"Shri.",
    "SURNAME":"Narayanam",
    "NAME":"Satya Deva Vara Prasad",
    "PLACE":"",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"169",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Peda SeshaCharyulu",
    "PLACE":"Jagannadapuram",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"170",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram ",
    "NAME":" V S R K Acharyulu in memory of his father Agnihotram PeddaSeshacharyulu",
    "PLACE":"Ghatakesar",
    "AMOUNT":"₹ 5,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"171",
    "TITLE":"Shri.",
    "SURNAME":"Govardhanam",
    "NAME":"Krishnama Charyulu",
    "PLACE":"AS Roa Nagar",
    "AMOUNT":"₹ 5,000",
    "DATE":"08/16/2019",
    "RECEIPT":"2/48"
    }
    ,{
    "SNO":"172",
    "TITLE":"Shri.",
    "SURNAME":"Vadapalli",
    "NAME":"Buchibabu",
    "PLACE":"Antharvedi (East Godavari Dist)",
    "AMOUNT":"₹ 3,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"173",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"L.Sundarayya",
    "PLACE":"Mahadeva hardware",
    "AMOUNT":"₹ 3,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"174",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"K.Praveen ",
    "PLACE":"Kukatpally",
    "AMOUNT":"₹ 3,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"175",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"P.Gopalaswamy",
    "PLACE":"Attapur",
    "AMOUNT":"₹ 3,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"176",
    "TITLE":"Shri.",
    "SURNAME":"Peddinti",
    "NAME":"Ananthacharyulu in memory of Bhakaramma",
    "PLACE":"TKR Nagar",
    "AMOUNT":"₹ 3,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"177",
    "TITLE":"Shri.",
    "SURNAME":"Peddinti",
    "NAME":"Venkata Hygriva Charyulu",
    "PLACE":"Hyderabad",
    "AMOUNT":"₹ 3,000",
    "DATE":"08/15/2019",
    "RECEIPT":"11/274, 2/45"
    }
    ,{
    "SNO":"178",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"PadmanabhaCharyulu",
    "PLACE":"Danadayaal nagar",
    "AMOUNT":"₹ 2,500",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"179",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"UmashankaraCharyulu",
    "PLACE":"charminar",
    "AMOUNT":"₹ 2,016",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"180",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"P.Satyanarayana",
    "PLACE":"Nandhyala",
    "AMOUNT":"₹ 2,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"181",
    "TITLE":"Shri.",
    "SURNAME":"Rompicherla",
    "NAME":"Rama Krishnamacharyulu",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 2,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"182",
    "TITLE":"Shri.",
    "SURNAME":"Revuri",
    "NAME":"GopalaCharyulu",
    "PLACE":"Moosarambagh",
    "AMOUNT":"₹ 2,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"183",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"G.A.P  Prasad",
    "PLACE":"Alwal",
    "AMOUNT":"₹ 2,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"184",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"G.M Sarath Kumar",
    "PLACE":"Yapral",
    "AMOUNT":"₹ 2,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"185",
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Laxmana Singara Charyulu",
    "PLACE":"Panjagutta",
    "AMOUNT":"₹ 2,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"186",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"K.Murali Krishna",
    "PLACE":"Hyderabad",
    "AMOUNT":"₹ 1,120",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"187",
    "TITLE":"Shri.",
    "SURNAME":"Brindavanam",
    "NAME":"Sri Ramachakravarty",
    "PLACE":"HighCourt Colony",
    "AMOUNT":"₹ 1,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"188",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Vijaya Saradhi",
    "PLACE":"Moulali",
    "AMOUNT":"₹ 1,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"189",
    "TITLE":"Shri.",
    "SURNAME":"Khandavalli",
    "NAME":"Mangacharyulu",
    "PLACE":"Madduru",
    "AMOUNT":"₹ 1,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"190",
    "TITLE":"Shri.",
    "SURNAME":"Khandavalli",
    "NAME":"Chaitanya",
    "PLACE":"Moulali",
    "AMOUNT":"₹ 1,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"191",
    "TITLE":"Shri.",
    "SURNAME":"Peddinti",
    "NAME":"Sarath Chandra ",
    "PLACE":"A.S.Rao Nagar",
    "AMOUNT":"₹ 1,116",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"192",
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Sridhar",
    "PLACE":"A.S.Rao Nagar",
    "AMOUNT":"₹ 1,016",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"193",
    "TITLE":"Shri.",
    "SURNAME":"Pulipaka",
    "NAME":"MuraliKrishna",
    "PLACE":"A.S.Rao Nagar",
    "AMOUNT":"₹ 1,011",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"194",
    "TITLE":"Shri.",
    "SURNAME":"Vadapalli",
    "NAME":"Vijaya Kiran",
    "PLACE":"Vijayapuri Colony",
    "AMOUNT":"₹ 1,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"195",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"K.Ramesh ",
    "PLACE":"Kukatpally",
    "AMOUNT":"₹ 1,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"196",
    "TITLE":"Smt. Dr.",
    "SURNAME":"",
    "NAME":"Shakthirai Mitra",
    "PLACE":"Kukatpally",
    "AMOUNT":"₹ 1,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"197",
    "TITLE":"Smt.",
    "SURNAME":"",
    "NAME":"N.Lalitha",
    "PLACE":"Kukatpally",
    "AMOUNT":"₹ 1,001",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"198",
    "TITLE":"Shri.",
    "SURNAME":"Govardhanam",
    "NAME":"Trinadh Ramesh ",
    "PLACE":"Attapur",
    "AMOUNT":"₹ 1,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"199",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"R.Jagannadha Krishnamacharyulu",
    "PLACE":"Vanasthalipuram",
    "AMOUNT":"₹ 1,000",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"200",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"P.Shobanadri",
    "PLACE":"Hyderabad",
    "AMOUNT":"₹ 520",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"201",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"G.Naaga Venkata Pavan Kumar",
    "PLACE":"Kamala Nagar",
    "AMOUNT":"₹ 501",
    "DATE":"",
    "RECEIPT":""
    }
    ,{
    "SNO":"202",
    "TITLE":"Shri.",
    "SURNAME":"Khandavalli",
    "NAME":"RadhaKrishna Murty",
    "PLACE":"Tanuku, W.Godavari",
    "AMOUNT":"₹ 500",
    "DATE":"08/15/2019",
    "RECEIPT":"2/43"
    }
    ,{
    "SNO":"203",
    "TITLE":"Shri.",
    "SURNAME":"",
    "NAME":"Lakshmi Narasimha Charyulu",
    "PLACE":"Hyderabad",
    "AMOUNT":"₹ 120",
    "DATE":"",
    "RECEIPT":""
    }
    ];

    itemsList = [
      {
      "SNO":1,
      "TITLE":"Shri.",
      "SURNAME":"Ganjam",
      "NAME":"Ashok Babu",
      "PLACE":"DeendayalNagar",
      "ITEM":"150 - Drinking Steel Glasses, 75 - Steel Coffee Glasses",
      "IMG":"assets/img/ashramam/glasses.jpg"
      }
      ,{
      "SNO":2,
      "TITLE":"Shri.",
      "SURNAME":"Deevi",
      "NAME":"Madhusudhan Prasad",
      "PLACE":"Nizampet",
      "ITEM":"150 - Steel Lunch Plates, 4 - Steel Dishes, 3 - Steel Buckets",
      "IMG":"assets/img/ashramam/platesanddishes.jpg"
      }
      ,{
      "SNO":3,
      "TITLE":"Shri.",
      "SURNAME":"Deevi",
      "NAME":"Yogananda Narasimha Deekshitulu",
      "PLACE":"GayatriNagar",
      "ITEM":"9 - Aluminium Big Vessels with Covering Plates",
      "IMG":"assets/img/ashramam/Vessels.jpg"
      }
      ,{
      "SNO":4,
      "TITLE":"Shri.",
      "SURNAME":"Deevi",
      "NAME":"Srinivasa Murthy",
      "PLACE":"GayatriNagar",
      "ITEM":"Big Stove (2 Burner)",
      "IMG":"assets/img/ashramam/stove.jpg"
      }
      ,{
      "SNO":5,
      "TITLE":"Shri.",
      "SURNAME":"Agnihotram",
      "NAME":"Ramanand",
      "PLACE":"Nalagandla",
      "ITEM":"10 - Serving Buckets, 10 - Water Jugs",
      "IMG":"assets/img/ashramam/bucketsandjugs.jpg"
      }
      ,{
      "SNO":6,
      "TITLE":"Shri.",
      "SURNAME":"Srinivasula",
      "NAME":"Ramachandra  charyulu",
      "PLACE":"Gayatrinagar, Moulali",
      "ITEM":"3 - Stainless Steel Dining Table",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":7,
      "TITLE":"Shri.",
      "SURNAME":"Deevi",
      "NAME":"S L Narasinhacharyulu",
      "PLACE":"Alwal",
      "ITEM":"3 - Stainless Steel Dining Table",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":8,
      "TITLE":"Shri.",
      "SURNAME":"Vadapalli",
      "NAME":"SridharaCharyulu",
      "PLACE":"Kondapur, Ghatkesar",
      "ITEM":"3 - Stainless Steel Dining Table",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":9,
      "TITLE":"Shri.",
      "SURNAME":"Sudarshanam",
      "NAME":"SatyanarayanaCharyulu",
      "PLACE":"Vijayapuri Colony",
      "ITEM":"3 - Stainless Steel Dining Table",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":10,
      "TITLE":"Shri.",
      "SURNAME":"Muttevi",
      "NAME":"Ravikumar NarasimhaCharyulu",
      "PLACE":"HMT Nagar",
      "ITEM":"4 - Aluminium Big Cooking Vessel with lid",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":11,
      "TITLE":"Shri.",
      "SURNAME":"Vadapalli",
      "NAME":"Sudhakar",
      "PLACE":"HMT Nagar",
      "ITEM":"3 - Aluminium Big Cooking Vessel with lid",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":12,
      "TITLE":"Shri.",
      "SURNAME":"Vedantam",
      "NAME":"Raghava Deekshitulu",
      "PLACE":"Boduppal",
      "ITEM":"15 - Stainless Steel Basins",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":13,
      "TITLE":"Shri.",
      "SURNAME":"Pedapudi",
      "NAME":"KrishnamaCharyulu",
      "PLACE":"Sarada Nagar",
      "ITEM":"1 - Steel Almara, 1 - Aluminium Vessel with lid",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":14,
      "TITLE":"Shri.",
      "SURNAME":"Deevi",
      "NAME":"Surendra Bhishek",
      "PLACE":"Vanasthalipuram",
      "ITEM":"1 - Computer, 1 - Computer Table",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":15,
      "TITLE":"Shri.",
      "SURNAME":"R",
      "NAME":"Parthasarathi",
      "PLACE":"",
      "ITEM":"1 - Aluminium Big Cooking Vessel with lid",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":16,
      "TITLE":"Shri.",
      "SURNAME":"B",
      "NAME":"Vedadri",
      "PLACE":"",
      "ITEM":"1 - Aluminium Big Cooking Vessel with lid",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":17,
      "TITLE":"Shri.",
      "SURNAME":"K",
      "NAME":"Prabhakaracharyulu & Friends",
      "PLACE":"",
      "ITEM":"1 - Mike Set",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":18,
      "TITLE":"Shri.",
      "SURNAME":"Agnihotram",
      "NAME":"Kishore",
      "PLACE":"",
      "ITEM":"1 - Tea Flask",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":19,
      "TITLE":"Shri.",
      "SURNAME":"Deevi",
      "NAME":"Sarangapani Iyengar",
      "PLACE":"Bhavani Nagar",
      "ITEM":"6 - Chairs",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":20,
      "TITLE":"Shri.",
      "SURNAME":"P",
      "NAME":"Gopala Krishna",
      "PLACE":"",
      "ITEM":"6 - Chairs",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":21,
      "TITLE":"",
      "SURNAME":"",
      "NAME":"Nirmala (Bharat Gas)",
      "PLACE":"",
      "ITEM":"1 - Gas Cylinder",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ,{
      "SNO":22,
      "TITLE":"",
      "SURNAME":"",
      "NAME":"Ashramam existing old items",
      "PLACE":"",
      "ITEM":"9 - Steel Buckets, 2 - Chairs, 2 - Dustbin Drums, 99 - Glasses, 2 - Steel Water Jugs, 1 - Strainer Bowl, 2 - Tables, 2 - Water Drums, 4 - Water Cans, 1 - Aluminium Vessel with lid, 14 - Garitelu",
      "IMG":"assets/img/ashramam/noimage.jpg"
      }
      ];
}
