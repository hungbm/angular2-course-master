import{Component} from 'angular2/core'
import{CourseService} from './course.service'
import{AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <button 
        class ="btun btn-primary" 
        [style.backgroundColor]="isActive ? 'blue': 'gray'">Submit</button>
        <h2>Courses</h2>
        {{ title }}
        <input type="text" [value]="title" (input)="title =$event.target.value" autoGrow /> //1 way biding
        <input type="text" [(ngModel)]="title" /> //2 way biding
        <input type="button" (click)="title = '' " value="Clear"  />
        Preview: {{title}};
        
        
        
        <div (click)="onDivClick()">
        <button (click) = "onClick($event)"> Onclick</button>
        </div>
        <ul>
            <li *ngFor="#course of courses ">
                {{course}}
            </li>
        </ul>
        `,
        providers [CourseService],
        directives :[AutoGrowDirective]
})
export class CoursesComponent {
    
    onClick($event){
        $event.stopPropagation();
        console.log("clicked",$event);
    }
    onDivClick(){
        console.log("Handle by div");
    }
    
    title = "The title of the courses page";
    courses; 
    isActive = false;
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
    
} 