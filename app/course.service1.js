System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService1;
    return {
        setters:[],
        execute: function() {
            CourseService1 = (function () {
                function CourseService1() {
                }
                CourseService1.prototype.getAuthors = function () {
                    return ["author1", "author2", "author3"];
                };
                return CourseService1;
            }());
            exports_1("CourseService1", CourseService1);
        }
    }
});
//# sourceMappingURL=course.service1.js.map