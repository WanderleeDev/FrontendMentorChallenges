import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobDataService } from 'src/app/services/job-data.service';
import { IJobPosting } from 'src/interface/IJobPosting.interface';
@Component({
  selector: 'app-gallery-job',
  templateUrl: './gallery-job.component.html',
  styleUrls: ['./gallery-job.component.scss']
})
export class GalleryJobComponent implements OnInit{

  jobList!: IJobPosting[];
  jobsSub!: Subscription;

  constructor(private jobDataService:JobDataService){}

  ngOnInit(): void {
    this.jobsSub = this.jobDataService.getJobs()
      .subscribe({
        next: (res) => this.jobList = res,
        error: (err) => console.error(err),
        complete: () => console.log('subscription initial')
      })
  }

}

