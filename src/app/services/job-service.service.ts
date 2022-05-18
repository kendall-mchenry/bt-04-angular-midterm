import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  jobList: any[] = [
    {
    id: 1,
    title: "Banker",
    description: "I was banking all day long",
    duration: "2 years",
    employer: "ABC BANKING"
    },
    {
    id: 2,
    title: "Adventurer",
    description: "Exploring the world",
    duration: "10 years",
    employer: "The World"
    },
    {
    id: 3,
    title: "Napper",
    description: "Resting from all our adventures",
    duration: "10 years",
    employer: "My Bed"
    }

  ];

  constructor() { }

  getJobs(): Observable<any[]> {
    return of(this.jobList);
  }

  getJob(id: number): Observable<any> {
    return of(this.jobList.find(job => job.id == id));
  }
}
