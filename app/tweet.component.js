System.register(["angular2/core", "./love.component", "./tweet.service"], function(exports_1, context_1) {
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
    var core_1, love_component_1, tweet_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (love_component_1_1) {
                love_component_1 = love_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetService) {
                    this.like = new core_1.EventEmitter();
                    this.names = tweetService.getNames();
                }
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "like", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n        <div *ngFor=\"#name of names\"   class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                <img class=\"media-object\" src=\"{{name.img}}\" alt=\"pic\">\n                </a>\n            </div>  \n            <div class=\"media-body\">\n                <h4  class=\"media-heading\" style=\"text-align:left;float:left;font-size: 25\">{{name.name}}&nbsp; </h4>\n                <h4  class=\"media-heading\" style=\"text-align:left;float:left;color:grey;\">{{name.locate}}</h4><br> \n                <br>   \n                <love style=\"float:left;\" [isLove]=name.isLove [count] = \"name.votecount\"></love>   &nbsp; &nbsp;      \n                {{name.doc}}\n                              \n            </div>           \n         </div>\n    ",
                        providers: [tweet_service_1.TweetService],
                        directives: [love_component_1.LoveComponent]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map