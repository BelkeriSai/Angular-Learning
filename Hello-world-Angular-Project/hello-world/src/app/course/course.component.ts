import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course-component',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  title = 'List of courses';
  courses:Array<String>;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }
}