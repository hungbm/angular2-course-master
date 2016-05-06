import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component' //Start search in same folder
import {Courses1Component} from './courses.component1'
import {FavoriteComponent} from './favorite.component'
import {LoveComponent} from './love.component'
import {VoteComponent} from './vote.component'
import {TweetComponent} from './tweet.component'
import {SummaryPipe} from './summary.pipe'
import {BootstrapPanel} from './bootstrap.panel.compopnent'
import {ZippyPanel} from './zippy.panel.component'
import {ContactFormComponent} from './contact-form.component'
import {SignUpComponent} from './signup-form.component'

@Component({
    selector: 'my-app',
    template: `
    
    <signup-form></signup-form>
    
    <contact-form></contact-form>
    <div *ngFor="#item of zippyArray">
        <zippy>
            <div class="heading" >{{item.heading}}</div>
            <div class="body">{{item.body}}</div>
        </zippy>
    </div>
    
    
    <bs-panel>
        <div class="heading">The Heading</div>
        <div class="body">The body</div>
    </bs-panel>
    
    <ul>
        <li>Title: {{task.title}}</li>
        <li>Assigned to: {{ task.assignee?.role?.name }}</li>
    </ul>
    
    <button 
        [ngStyle]="{
            backgoundColor: canSave ? 'blue' :'gray',
            color: canSave ? 'white' :'black',
            fontWeight: canSave ? 'bold' : 'normal'
        }"
    >
    CanSave
    </button>
    
    {{customPipe.title}}
    <br/>
    {{customPipe.body |summary:30}}<br/>
    
    {{coursesPipe.title |uppercase}}
    <br/>
    {{coursesPipe.students | number}}
    <br/>
    {{coursesPipe.rating | number:'2.2-2'}}
    <br/>
    {{coursesPipe.price | currency: 'VND':true:'2.2-2'}}
    <br/>
    {{coursesPipe | json}}
    <br/>
    <br/>
    <br/>
    <ul>
        <li *ngFor="#course of courses,#i = index">
        {{i+1}} - {{course}}</li>
    </ul>
    
    
    <ul class="nav nav-pills">
        <li [class.active]="viewMode=='map'"><a (click)="viewMode='map'">Map List</a></li>
        <li [class.active]="viewMode=='list'"><a (click)="viewMode='list'">List List</a></li>
    </ul>
    <div [ngSwitch]="viewMode">
        <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
        <template [ngSwitchWhen]="'list'">List View Content</template>
    </div>
    
    
    <div *ngIf="courseTest.length >0">
    List of shit use ngIf
    </div>
    <div *ngIf="courseTest.length == 0">
    dont have shit ngIf
    </div>
    
    <div [hidden]="courseTest.length==0">
        List of shit use hidden
    </div>
    <div [hidden]="courseTest.length>0">
        dont have shit use hidden
    </div>
    
    
    
    <h1>My first angular2 app</h1>
    <courses></courses>
    <author></author>
    <favorite [is-favorite]="post.isFavorite" (call-change)="onFavoriteChange($event)"></favorite>
    <love [isLove]="post.isLove" [count] = "post.count"></love> {{count}}
    <vote [voteCount]="post.voteCount" [myVote]="post.myVote"></vote>
    <tweet></tweet>
    
    
    `,
    pipes: [SummaryPipe]
    ,
    directives: [SignUpComponent,ContactFormComponent,ZippyPanel, CoursesComponent, Courses1Component, FavoriteComponent, LoveComponent, VoteComponent, TweetComponent, BootstrapPanel],
})
export class AppComponent {
    zippyArray = [{ heading: 'Who can see my stuff?', body: 'Content of who can see my stuff' }, { heading: 'Who can contact me?', body: 'Content of who can contact me' }]


    task = {
        title: "review app",
        assignee: null
    }

    canSave = true;
    customPipe = {
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `
    }

    coursesPipe = {
        title: "kjasdfjash asdfkjahsdfkjhas asdfhaskjhfkjsa",
        rating: 4.9575,
        students: 5981,
        price: 99.99
    }

    courses = ['Course 1', 'Course 2', 'Course 3'];

    viewMode = 'map';
    courseTest = [];
    post = {
        title: "Tielte",
        count: 10,
        myVote: 0,
        voteCount: 10,
        isFavorite: true,
        isLove: false
    }
    onLoveChange(number) {

    }
    onFavoriteChange($event) {
        console.log($event);
    }
}