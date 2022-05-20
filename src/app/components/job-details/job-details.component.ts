import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobServiceService } from 'src/app/services/job-service.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job: any = {};

  constructor(private jobService: JobServiceService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const jobID = this.actRoute.snapshot.params['jobID'];

    this.jobService.getJob(jobID).subscribe(showJob => this.job = showJob);
  }

}
