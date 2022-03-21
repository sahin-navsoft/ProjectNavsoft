import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {


username:any
buydata:any=[]
pageTitle:string='dashboardHome'
  constructor(private service:DashboardServiceService) { }
  ngOnInit(): void {
this.getBuyedProducts()
  }
 getBuyedProducts(){
   return this.service.getBuyProducts().subscribe((res:any)=>{
      this.buydata=res
     console.log(this.buydata)
   })
 }


}
