import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/common/services/rest-api.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  customerStatistic:any
  
  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.getCustomersStatistics();
  }

  getCustomersStatistics() {
    return this.restApi.getCustomersStatistic().subscribe((data: {}) => {
      this.customerStatistic = data;
    })
  }

}
