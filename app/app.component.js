System.register(['angular2/core', './courses.component', './courses.component1', './favorite.component', './love.component', './vote.component', './tweet.component', './summary.pipe', './bootstrap.panel.compopnent', './zippy.panel.component', './contact-form.component', './signup-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, courses_component1_1, favorite_component_1, love_component_1, vote_component_1, tweet_component_1, summary_pipe_1, bootstrap_panel_compopnent_1, zippy_panel_component_1, contact_form_component_1, signup_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (courses_component1_1_1) {
                courses_component1_1 = courses_component1_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (love_component_1_1) {
                love_component_1 = love_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (bootstrap_panel_compopnent_1_1) {
                bootstrap_panel_compopnent_1 = bootstrap_panel_compopnent_1_1;
            },
            function (zippy_panel_component_1_1) {
                zippy_panel_component_1 = zippy_panel_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.zippyArray = [{ heading: 'Who can see my stuff?', body: 'Content of who can see my stuff' }, { heading: 'Who can contact me?', body: 'Content of who can contact me' }];
                    this.task = {
                        title: "review app",
                        assignee: null
                    };
                    this.canSave = true;
                    this.customPipe = {
                        title: "The standard Lorem Ipsum passage, used since the 1500s",
                        body: "\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        "
                    };
                    this.coursesPipe = {
                        title: "kjasdfjash asdfkjahsdfkjhas asdfhaskjhfkjsa",
                        rating: 4.9575,
                        students: 5981,
                        price: 99.99
                    };
                    this.courses = ['Course 1', 'Course 2', 'Course 3'];
                    this.viewMode = 'map';
                    this.courseTest = [];
                    this.post = {
                        title: "Tielte",
                        count: 10,
                        myVote: 0,
                        voteCount: 10,
                        isFavorite: true,
                        isLove: false
                    };
                }
                AppComponent.prototype.onLoveChange = function (number) {
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \n    <signup-form></signup-form>\n    \n    <contact-form></contact-form>\n    <div *ngFor=\"#item of zippyArray\">\n        <zippy>\n            <div class=\"heading\" >{{item.heading}}</div>\n            <div class=\"body\">{{item.body}}</div>\n        </zippy>\n    </div>\n    \n    \n    <bs-panel>\n        <div class=\"heading\">The Heading</div>\n        <div class=\"body\">The body</div>\n    </bs-panel>\n    \n    <ul>\n        <li>Title: {{task.title}}</li>\n        <li>Assigned to: {{ task.assignee?.role?.name }}</li>\n    </ul>\n    \n    <button \n        [ngStyle]=\"{\n            backgoundColor: canSave ? 'blue' :'gray',\n            color: canSave ? 'white' :'black',\n            fontWeight: canSave ? 'bold' : 'normal'\n        }\"\n    >\n    CanSave\n    </button>\n    \n    {{customPipe.title}}\n    <br/>\n    {{customPipe.body |summary:30}}<br/>\n    \n    {{coursesPipe.title |uppercase}}\n    <br/>\n    {{coursesPipe.students | number}}\n    <br/>\n    {{coursesPipe.rating | number:'2.2-2'}}\n    <br/>\n    {{coursesPipe.price | currency: 'VND':true:'2.2-2'}}\n    <br/>\n    {{coursesPipe | json}}\n    <br/>\n    <br/>\n    <br/>\n    <ul>\n        <li *ngFor=\"#course of courses,#i = index\">\n        {{i+1}} - {{course}}</li>\n    </ul>\n    \n    \n    <ul class=\"nav nav-pills\">\n        <li [class.active]=\"viewMode=='map'\"><a (click)=\"viewMode='map'\">Map List</a></li>\n        <li [class.active]=\"viewMode=='list'\"><a (click)=\"viewMode='list'\">List List</a></li>\n    </ul>\n    <div [ngSwitch]=\"viewMode\">\n        <template [ngSwitchWhen]=\"'map'\" ngSwitchDefault>Map View Content</template>\n        <template [ngSwitchWhen]=\"'list'\">List View Content</template>\n    </div>\n    \n    \n    <div *ngIf=\"courseTest.length >0\">\n    List of shit use ngIf\n    </div>\n    <div *ngIf=\"courseTest.length == 0\">\n    dont have shit ngIf\n    </div>\n    \n    <div [hidden]=\"courseTest.length==0\">\n        List of shit use hidden\n    </div>\n    <div [hidden]=\"courseTest.length>0\">\n        dont have shit use hidden\n    </div>\n    \n    \n    \n    <h1>My first angular2 app</h1>\n    <courses></courses>\n    <author></author>\n    <favorite [is-favorite]=\"post.isFavorite\" (call-change)=\"onFavoriteChange($event)\"></favorite>\n    <love [isLove]=\"post.isLove\" [count] = \"post.count\"></love> {{count}}\n    <vote [voteCount]=\"post.voteCount\" [myVote]=\"post.myVote\"></vote>\n    <tweet></tweet>\n    \n    \n    ",
                        pipes: [summary_pipe_1.SummaryPipe],
                        directives: [signup_form_component_1.SignUpComponent, contact_form_component_1.ContactFormComponent, zippy_panel_component_1.ZippyPanel, courses_component_1.CoursesComponent, courses_component1_1.Courses1Component, favorite_component_1.FavoriteComponent, love_component_1.LoveComponent, vote_component_1.VoteComponent, tweet_component_1.TweetComponent, bootstrap_panel_compopnent_1.BootstrapPanel],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map