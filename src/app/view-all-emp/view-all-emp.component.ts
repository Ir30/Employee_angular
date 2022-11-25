import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all-emp',
  templateUrl: './view-all-emp.component.html',
  styleUrls: ['./view-all-emp.component.css']
})
export class ViewAllEmpComponent {
 
  data:any=[
        {
          "name" : "irshad",
          "designation" : "Software Engineer Trainee",
          "salary" : 10000,
          "email_id" : "Muhammed.c@nestgroup.net",
          "company_site" :"www.nest.com",
          "phone":987564231
      },
      {
        "name" : "Akhil",
        "designation" : "Software Engineer Trainee",
        "salary" : 25000,
        "email_id" : "Akhil.c@nestgroup.net",
        "company_site" :"www.nest.com",
        "phone":978845612
    },
          {
          "name" : "Abhishek",
          "designation" : "Software Engineer Trainee",
          "salary" : 25000,
          "email_id" : "Abhishek.c@nestgroup.net",
          "company_site" :"www.nest.com",
          "phone":954678222
      },      {
        "name" : "Shibu",
        "designation" : "Software Engineer Trainee",
        "salary" : 264000,
        "email_id" : "Shibu.c@nestgroup.net",
        "company_site" :"www.nest.com",
        "phone":954785636
    },      {
      "name" : "Shaji",
      "designation" : "Software Engineer Trainee",
      "salary" : 24610,
      "email_id" : "Shaji.c@nestgroup.net",
      "company_site" :"www.nest.com",
      "phone":36458
  }
  
  ]
}
