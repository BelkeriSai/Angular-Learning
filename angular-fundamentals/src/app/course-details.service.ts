import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

export class CourseDetailsService {

  getCourseDetatils () {
    var courseDetails = [
    {
      courseName : "IoT",
      duration : 10,
      nameOfInstructor : "Sai Prakash Belkeri",
      rating : 4.2
    },
    {
      courseName : "NodeJs",
      duration : 15,
      nameOfInstructor : "Sai Prakash Belkeri",
      rating : 4.3
    },
    {
      courseName : "Industry 4.0 Basics",
      duration : 2,
      nameOfInstructor : "Sai Prakash Belkeri",
      rating : 4.5
    }
  ]

    return courseDetails;
  }
  constructor() { }
}
