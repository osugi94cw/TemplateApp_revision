
//親モジュール
ons.bootstrap('templateApp',['menuModule','libraryModule','contentsModule','calcModule','shareModule']);


//子モジュール


angular.module('menuModule', ['transitionModule','calcModule']);

angular.module('libraryModule', ['transitionModule','connectionModule','repeatFinishedModule','ncmbModule', 'deviceCheckModule','calcModule','shareModule']);

angular.module('contentsModule', ['connectionModule', 'deviceCheckModule','calcModule']);


//孫モジュール

angular.module('transitionModule', []);


angular.module('connectionModule', []);


angular.module('repeatFinishedModule', []);


angular.module('ncmbModule', []);

angular.module('deviceCheckModule', []);

angular.module('calcModule', []);

angular.module('resizeModule', ['calcModule']);

angular.module('shareModule', []);


