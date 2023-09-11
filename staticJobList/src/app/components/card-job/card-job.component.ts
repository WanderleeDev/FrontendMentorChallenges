import { Component, Input, OnInit } from '@angular/core';
import { IJobPosting } from 'src/interface/IJobPosting.interface';

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.scss']
})
export class CardJobComponent implements OnInit{
  @Input() job!: IJobPosting;
  btnTagList: string[] = [];

  ngOnInit(): void {
    this.btnTagList = [ this.job.level ,this.job.role, ...this.job.languages, ...this.job.tools]
    console.log(this.btnTagList);
  }
}
