import {Component} from 'angular2/core'
import {CourseService1} from './course.service1'

@Component({
    selector: 'author',
    template: `
    <h2>Authors</h2>
    {{title}}
    <ul>
        <li *ngFor="#author of authors">
            {{author}}
        </li>
    </ul>
    `,
    providers [CourseService1]
})
export class Courses1Component{
    authors: string[];
    title ="Title for the author page";
    constructor(authorService: CourseService1){
        this.authors = authorService.getAuthors();
    }
}