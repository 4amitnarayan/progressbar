var app = angular.module("test", []);
        app.controller("AppCtrl", function ($scope) {
                $scope.mydata = {
                    "buttons": [
                        19,
                        45, 
                        -37,
                        -42
                    ],
                    "bars": [
                        88,
                        66,
                        19
                    ],
                    "limit": 180
                    }
                $scope.data = {};
                $scope.onClickBtn = function(val){
                    $scope.data.tes;
                };
            })
            .directive("progressBar", ["$timeout", function ($timeout) {
                return {
                    restrict: "EA",
                    scope: {
                        total: '=total',
                        complete: '=complete',
                        barClass: '@barClass',
                        completedClass: '=?'
                    },
                    transclude: true,
                    link: function (scope, elem, attrs) {
                        scope.label = attrs.label;
                        scope.completeLabel = attrs.completeLabel;
                        scope.showPercent = (attrs.showPercent) || false;
                        scope.completedClass = (scope.completedClass) || 'progress-bar-danger';
                        scope.$watch('complete', function () {
                            var progress = scope.complete / scope.total;
                            if (progress >= 1) {
                                $(elem).find('.progress-bar').addClass(scope.completedClass);
                            } else if (progress < 1) {
                                $(elem).find('.progress-bar').removeClass(scope.completedClass);
                            }
                        });
                    },
                    template: "<div class='progress'>" + "<div class='progress-bar {{barClass}}' title='{{complete/total * 100 | number:0 }}%' style='width:{{complete/total * 100}}%;'>{{showPercent ? (complete/total*100) : complete | number:0}} {{completeLabel}}</div>" + "</div>"
                };
            }])