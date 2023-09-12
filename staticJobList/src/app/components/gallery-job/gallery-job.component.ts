import { Component, OnInit } from '@angular/core';
import { JobDataService } from 'src/app/services/job-data.service';
import { IJobPosting } from 'src/interface/IJobPosting.interface';
@Component({
  selector: 'app-gallery-job',
  templateUrl: './gallery-job.component.html',
  styleUrls: ['./gallery-job.component.scss']
})
export class GalleryJobComponent implements OnInit{

  jobList!: IJobPosting[];

  constructor(private jobDataService:JobDataService){}

  ngOnInit(): void {
    this.jobList = this.jobDataService.getJobs()
  }

}

