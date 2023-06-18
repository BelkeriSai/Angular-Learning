import { Component } from '@angular/core';
import { CourseDetailsService } from '../course-details.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {

  title = "Course Details";
  courseDetails : any;

  isWishListed = true;

  isFav =  true;

  colSpan=2;

  onSave($event:any){
    console.log("Save button Clicked", $event);

    console.log("the X and Y positions are", $event.movementX, $event.movementY);
  }

  onKeyUp(templateVariable:any){
    console.log('Enter was Pressed!!!');
    console.log(templateVariable);
    

  }

  constructor (service : CourseDetailsService) {
    this.courseDetails = service.getCourseDetatils();
  }

}
