import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ICompany } from '../models';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: ICompany[] | undefined;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data: ICompany[]) => {
      this.companies = data;
    });
  }
}
