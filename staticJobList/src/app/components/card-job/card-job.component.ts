import { Component, Input, OnInit } from '@angular/core';
import { IJobPosting } from 'src/interface/IJobPosting.interface';
//  services
import { FilterJobsService } from 'src/app/services/filter-jobs.service';
import { JobDataService } from 'src/app/services/job-data.service';
JobDataService

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.scss']
})
export class CardJobComponent implements OnInit{
  @Input() job!: IJobPosting;
  btnTagList: string[] = [];

  constructor(
    private filterJobsService: FilterJobsService,
    private jobDataService: JobDataService
  ){}

  ngOnInit(): void {
    this.btnTagList = [
      this.job.level,
      this.job.role,
      ...this.job.languages,
      ...this.job.tools
    ];
  }

  public filterJob(filter: string) {
    this.filterJobsService.addFilter(filter)
    this.jobDataService.filterJobs(filter)
  }
}
