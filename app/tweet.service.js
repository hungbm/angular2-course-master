System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getNames = function () {
                    return [
                        { name: 'Windward', img: 'http://lorempixel.com/100/100/people?1', locate: '@windwardstudios', doc: 'Looking for better Company report?', votecount: '0', isLove: false },
                        { name: 'AngularJS News', img: 'http://lorempixel.com/100/100/people?2', locate: '@angularjs_new', doc: 'Right Relevance', votecount: '4', isLove: true },
                        { name: 'UX & Bootstrap', img: 'http://lorempixel.com/100/100/people?3', locate: '@3rdwave', doc: '10 Reasons why web fail', votecount: '0', isLove: false },
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map