import { Component, OnInit } from '@angular/core';
import { JobDataService } from 'src/app/services/job-data.service';
import { IJobPosting } from 'src/interface/IJobPosting.interface';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-gallery-job',
  templateUrl: './gallery-job.component.html',
  styleUrls: ['./gallery-job.component.scss']
})
export class GalleryJobComponent implements OnInit{

  jobList!: IJobPosting[];
  subscription!: Subscription;

  constructor(private jobDataService:JobDataService){}

  ngOnInit(): void {
    this.subscription = this.jobDataService.getData().subscribe(
      (data: IJobPosting[]) => {
        this.jobList = data;
      },
      (error: any) => {
        console.error('Error fetching job data:', error);
      }
    );
  }
}
