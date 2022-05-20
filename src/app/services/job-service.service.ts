import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  jobList: any[] = [
    {
    id: 1,
    title: "Adventure Partners",
    description: "Embarking on roadtrips of grand adventure all across the United States.",
    duration: "2.5 years",
    employer: "USA"
    },
    {
    id: 2,
    title: "Professional Nappers",
    description: "Resting from all our adventures and recharging for new ones.",
    duration: "2 years",
    employer: "House McHenry"
    },
    {
    id: 3,
    title: "Trainer & Student",
    description: "Implementing philosophies of positive reinforcement training to learn new obedience skills and fun tricks. Preparing to further training into agility and flyball.",
    duration: "1.5 years",
    employer: "K&K Training, Inc."
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
