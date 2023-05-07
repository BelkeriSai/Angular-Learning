import { Component } from '@angular/core';
import { CourseDetailsService } from '../course-details.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {

  title = "Course Details";
  courseDetails : any;

  constructor (service : CourseDetailsService) {
    this.courseDetails = service.getCourseDetatils();
  }

  // ngOnInit(service : CourseDetailsService){
  //   this.courseDetails = service.getCourseDetatils();
  // }

}
