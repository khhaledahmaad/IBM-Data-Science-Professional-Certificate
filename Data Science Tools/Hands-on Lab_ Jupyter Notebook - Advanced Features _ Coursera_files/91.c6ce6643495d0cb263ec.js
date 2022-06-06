(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{"1ah5":function(module,e,t){"use strict";var n=t("q1tI"),i=t.n(n),a=t("oX1x"),r=t("Q/5i"),o=function QuizGradeDisclaimer(e){var t=e.courseSlug;if(t)return i.a.createElement(a.a,{courseSlug:t},function(e){var t=e.notifications;if(null!=t&&t.some(function(e){return"gradeDisclaimerMessage"===e.typeName}))return i.a.createElement(r.a,null);return null});return null};e.a=o},"2S0G":function(module,e,t){"use strict";var n=t("AeFk"),i=t("q1tI"),a=t.n(i),r=t("kvW3"),o=t("8Hdl"),c=t("/Fji"),s=t("TpV6"),u=t("vrZb"),d=t.n(u),l={titleContainer:function titleContainer(e){return Object(n.c)({margin:e.spacing(12,0)})},description:function description(e){return Object(n.c)({marginBottom:e.spacing(4)})}},m=function LearningObjectivesWithItemsList(e){var t=e.learningObjectives;return Object(n.d)("div",null,null==t?void 0:t.map(function(e,t){var i=e.id,a=e.description,u=e.computedItems;return Object(n.d)("div",{key:"learning-objective-".concat(i)},Object(n.d)(c.a,{key:i,title:Object(n.d)("div",{css:l.titleContainer},Object(n.d)(o.a,{variant:"h2semibold",component:"h3",css:l.description},a),Object(n.d)(o.a,{variant:"body1"},Object(n.d)(r.b,{message:d()("{numItems, plural, =0 {Nothing} one {# material} other {# materials}} to review"),numItems:(null==u?void 0:u.length)||0}))),isCollapsible:!(null==u||!u.length),collapsibleIconTitle:u&&(null==u?void 0:u.length)>1?d()("Materials to review"):d()("Material to review"),startCollapsed:t>0||!(null!=u&&u.length)},null==u?void 0:u.map(function(e){return Object(n.d)("div",{key:"learning-objective-item-".concat(i,"-").concat(e.id)},Object(n.d)(s.a,{computedItem:e}))})))}))};e.a=m},"2iEy":function(module,e,t){"use strict";t.d(e,"a",function(){return f}),t.d(e,"d",function(){return O}),t.d(e,"c",function(){return h});var n=t("lSNA"),i=t.n(n),a=t("J2iB"),r=t.n(a),o=t("AeFk"),c=t("q1tI"),s=t.n(c),u=t("763+"),d=t("8Hdl"),l=t("PSZr"),m=t("IXUt"),b=t("d3Ej"),p=t.n(b),v=function getRootStyles(e,t){return Object(o.c)(i()({padding:e.spacing(24,0),borderBottom:"1px solid ".concat(e.palette.gray[300]),display:"flex",justifyContent:"space-between",position:"relative",flexWrap:"wrap",flexDirection:t?"row-reverse":"row",":last-child":{paddingBottom:e.spacing(48)}},e.breakpoints.down("sm"),{flexDirection:"column"}))},g=function statusIcon(e){return Object(o.c)({marginRight:e.spacing(8),lineHeight:2})},j=function stepTitle(e){return Object(o.c)({display:"flex",marginBottom:e.spacing(8)})},f={check:"check",warning:"warning"},O=function getStatusIconTypeForGradeRow(e,t,n){if(r()(e))return null;if(!e&&(!t||n&&t))return f.warning;return f.check},h=function getStatusIconTitleForGradeRow(e,t){if(r()(e))return;if(!e&&!t)return p()("Activity Incomplete");return p()("Activity Completed")},y=function CoverPageRow(e){var t=e.stepTitle,n=e.stepDetails,i=e.rightSideView,a=e.statusIconType,r=e.statusIconTitle,c=Object(u.a)();return Object(o.d)("div",{css:v(c,!t)},t&&Object(o.d)("div",null,Object(o.d)("div",{css:j(c)},a&&Object(o.d)("div",{css:g(c),"aria-hidden":"true"},a===f.check&&Object(o.d)(l.a,{size:"medium",color:"success",title:r}),a===f.warning&&Object(o.d)(m.a,{size:"medium",color:"error",title:r})),Object(o.d)(d.a,{variant:"h3bold"},t)),Object(o.d)("div",null,n)),Object(o.d)("div",null,i))};e.b=y},"8mOo":function(module,e,t){"use strict";var n=t("8cuT"),i=t("MnCE"),a=Object(i.compose)(Object(n.a)(["CourseStore"],function(e,t){var n,i=e.CourseStore,a=t.itemMetadata,r,o,c=i.getMaterials().getNeighbors(a).nextItemMetadataOrItemGroup;return{nextItemUrl:null!==(n=null==c?void 0:c.getLink())&&void 0!==n?n:""}}));e.a=a},FkXZ:function(module,exports,e){var t=e("SjpQ"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var i={transform:void 0},a=e("aET+")(t,i);t.locals&&(module.exports=t.locals)},NXzb:function(module,e,t){"use strict";var n=t("VkAN"),i=t.n(n),a=t("UB5X"),r=t.n(a),o=t("AeFk"),c=t("q1tI"),s=t.n(c),u=t("kvW3"),d=t("763+"),l=t("8Hdl"),m=t("ZJgU"),b=t("PB6g"),p=t("bOpO"),v=t("hbUA"),g=t("d3Ej"),j=t.n(g),f,O,h,y,S,w=function root(e){return Object(o.c)(f||(f=i()(["\n    display: flex;\n    justify-content: space-between;\n    min-width: 300px;\n    min-height: 48px;\n    padding-left: ",";\n    border-left: 1px solid ",";\n    "," {\n      border: none;\n      padding-left: 0;\n      flex-direction: column;\n      margin-left: 0;\n      margin-top: ",";\n    }\n  "])),e.spacing(24),e.palette.gray[300],e.breakpoints.down("sm"),e.spacing(24))},k=function viewFeedbackButton(e){return Object(o.c)(O||(O=i()(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    "," {\n      margin-top: ",";\n    }\n    margin-bottom: ",";\n  "])),e.breakpoints.down("sm"),e.spacing(24),e.spacing(8))},C=function gradeContainer(e){return Object(o.c)(h||(h=i()(["\n    margin-right: ",";\n    "," {\n      margin-bottom: ",";\n      margin-top: ",";\n    }\n  "])),e.spacing(16),e.breakpoints.down("sm"),e.spacing(8),e.spacing(8))},x=function CoverPageRowRightSideGrade(e){var t=e.itemGrade,n=e.computedScore,i=e.maxScore,a=e.viewFeedback,c=e.isViewFeedbackButtonLinkStyle,s=e.isCumulativeGraded,u=e.reviewsExpected,b=void 0===u?0:u,p=e.reviewsReceived,v=void 0===p?0:p,g=e.showKeepHighScoreMsg,f=void 0===g||g,O=e.isRequired,h=void 0!==O&&O,y=Object(d.a)(),S=t||{},x=S.grade,L=S.isPassed,P=r()(x)&&!!L&&(!s||h&&s);return Object(o.d)("div",{css:w(y)},Object(o.d)("div",{css:C(y)},Object(o.d)(l.a,{variant:"h3bold"},j()("Your grade")),Object(o.d)(l.a,{variant:"h1",component:"div",color:P?"success":"error","data-test":"grade-percent"},Object(o.d)(I,{itemGrade:t,computedScore:n,maxScore:i,reviewsExpected:b,reviewsReceived:v}))),r()(x)&&a&&Object(o.d)("div",{css:k(y)},Object(o.d)(m.a,{variant:c?"ghost":"primary",onClick:a,"data-test":"feedback-button"},j()("View Feedback")),f&&Object(o.d)(l.a,{variant:"body2",color:"supportText"},j()("We keep your highest score"))))},I=function CoverPageRowGradeDetail(e){var t=e.itemGrade,n=e.computedScore,a=e.maxScore,c=e.reviewsExpected,s=void 0===c?0:c,m=e.reviewsReceived,g=void 0===m?0:m,f,O=(t||{}).grade,h=Object(d.a)();if(r()(O))return Object(o.d)("div",{css:Object(o.c)(y||(y=i()(["\n          display: flex;\n        "])))},Object(v.b)(O),Object(o.d)(p.a,{itemGrade:t,computedScore:n,maxScore:a}));if(s>0&&g>0)return Object(o.d)(l.a,{variant:"body2"},Object(o.d)(u.b,{message:j()("In progress, {reviewsReceived, number} of {reviewsExpected, number} received"),reviewsExpected:s,reviewsReceived:g}));return Object(o.d)(l.a,{variant:"h1",component:"p",color:"supportText",css:Object(o.c)(S||(S=i()(["\n        padding: ",";\n      "])),h.spacing(8,0,0,0)),"data-test":"no-grade-text"},Object(o.d)("span",{"aria-hidden":"true"},"-"),Object(o.d)(b.b,{tagName:"span"},j()("Not available")))};e.a=x},SjpQ:function(module,exports,e){},USJv:function(module,e,t){"use strict";var n=t("q1tI"),i=t.n(n),a=t("MnCE"),r=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n=_objectWithoutPropertiesLoose(e,t),i,a;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++){if(i=r[a],t.indexOf(i)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,i))continue;n[i]=e[i]}}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n={},i=Object.keys(e),a,r;for(r=0;r<i.length;r++){if(a=i[r],t.indexOf(a)>=0)continue;n[a]=e[a]}return n}var o=function SvgaChart(e){var t=e.title,i=void 0===t?"Chart":t,a=_objectWithoutProperties(e,["title"]);return n.createElement(r.a,_extends({title:i},a,{viewBox:"0 0 41 37"}),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"#F26C75",d:"M5 32h32V0H5z"}),n.createElement("path",{stroke:"#424242",strokeWidth:"2",d:"M8 28l9.263-12.572 10.105 8.98L40 6"}),n.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",d:"M1 0v36h40"})))};(o=Object(a.pure)(o)).displayName="SvgaChart",e.a=o},"YdC/":function(module,e,t){"use strict";var n=t("VkAN"),i=t.n(n),a=t("AeFk"),r=t("q1tI"),o=t.n(r),c=t("JJfJ"),s=t("763+"),u=t("8Hdl"),d=t("PB6g"),l,m,b=function header(e){return Object(a.c)(l||(l=i()(["\n    margin: ",";\n    "," {\n      margin: ",";\n    }\n    "," {\n      margin: ",";\n    }\n  "])),e.spacing(32,0),e.breakpoints.up("sm"),e.spacing(48,0,32,0),e.breakpoints.up("md"),e.spacing(48,0))},p=function subHeader(e){return Object(a.c)(m||(m=i()(["\n    margin-top: ",";\n    "," {\n      margin-top: ",";\n    }\n  "])),e.spacing(8),e.breakpoints.up("md"),e.spacing(4))},v=function CoverPageHeader(e){var t=e.assignmentTypeName,n=e.item,i=(n=void 0===n?{}:n).timeCommitment,o=n.name,l=e.subHeader,m=Object(s.a)();return Object(a.d)("div",{css:b(m)},Object(a.d)(u.a,{variant:"d2",component:"h1"},o),Object(a.d)(u.a,{variant:"body2",component:"div",css:p(m)},t,!!i&&Object(a.d)(r.Fragment,null,Object(a.d)(d.b,{tagName:"span"},Object(c.v)(i,!0)),Object(a.d)("span",{"aria-hidden":!0}," • ",Object(c.v)(i)))),l&&Object(a.d)("div",{css:p(m)},l))};e.a=v},fHLu:function(module,e,t){"use strict";t.d(e,"a",function(){return a});var n=t("S0QZ"),i=function clearQuizApolloCache(e){Object(n.a)(e.cache,["RestQuizSessionMetadataElement","RestQuizQuestionDataElement","LocalTimerState","LocalChangedResponse","LocalStepState","$ROOT_QUERY.ChangedResponse"])},a=function clearPracticeQuizApolloCache(e){Object(n.a)(e.cache,["LocalChangedResponse","LocalStepState"])};e.b=i},hgsf:function(module,e,t){"use strict";var n=t("lSNA"),i=t.n(n),a=t("UB5X"),r=t.n(a),o=t("AeFk"),c=t("q1tI"),s=t.n(c),u=t("kvW3"),d=t("JJfJ"),l=t("763+"),m=t("ryMZ"),b=t("izmZ"),p=t("d3Ej"),v=t.n(p),g=function root(e){return Object(o.c)(i()({display:"flex",flexDirection:"column"},e.breakpoints.only("xs"),{flexDirection:"column"}))},j=function row(e){return Object(o.c)(i()({display:"flex",flexDirection:"row",marginBottom:e.spacing(8)},e.breakpoints.only("xs"),{flexDirection:"column",marginBottom:0}))},f=function CoverPageDetails(e){var t=e.deadline,n=e.attemptsCompleted,i=void 0===n?0:n,a=e.attemptsLeft,c=e.attemptsRateCount,s=e.attemptsRateInterval,p=e.passingFraction,f=e.isCumulativeGraded,O=e.lastSubmittedAt,h=Object(l.a)(),y=r()(a)?a+i:null;return Object(o.d)("div",{css:g(h)},Object(o.d)("div",{css:j(h)},t&&Object(o.d)(m.a,{label:v()("Due"),details:Object(d.u)(t,d.h),ariaDetails:Object(d.u)(t,d.b)}),r()(a)&&Object(o.d)(m.a,{label:v()("Attempts"),details:Object(o.d)(u.b,{message:v()("{attemptsLeft, number} left ({attemptsMax, number} total attempts)"),attemptsLeft:Math.max(a,0),attemptsMax:y})}),r()(c)&&r()(s)&&Object(o.d)(m.a,{label:v()("Attempts"),details:Object(o.d)(u.b,{message:v()("{count, number} every {duration}"),count:c,duration:Object(d.v)(s,!0)})}),r()(p)&&!f&&Object(o.d)(m.a,{label:v()("To Pass"),details:Object(o.d)(u.a,{message:v()("{percent} or higher"),percent:Object(o.d)(b.a,{value:p,maxFractionDigits:0})})})),O&&Object(o.d)("div",{css:j(h)},Object(o.d)(m.a,{label:v()("Submitted"),details:Object(d.u)(O,d.h),ariaDetails:Object(d.u)(O,d.b)})))};e.a=f},iMVg:function(module,e,t){"use strict";var n=t("J4zp"),i=t.n(n),a=t("AeFk"),r=t("q1tI"),o=t.n(r),c=t("ZJgU"),s=t("3AF4"),u=t("s3XC"),d=t("mDy0"),l=t("vrZb"),m=t.n(l),b={linkButton:Object(a.c)({marginLeft:-16})},p=function LearningObjectivesButton(e){var t=e.itemId,n=e.courseSlug,o=e.learningObjectiveIds,l=Object(r.useState)(),p=i()(l,2),v=p[0],g=p[1],j=function toggleTunnelVision(){return g(!v)};if(null==o||!o.length)return null;return Object(a.d)("div",null,Object(a.d)(c.a,{variant:"ghost",css:b.linkButton,onClick:j,"data-test":"review-button"},m()("Review Learning Objectives")),v&&Object(a.d)(u.b,{"data-test":"tunnel-vision-wrapper",onClose:j,headerLeft:Object(a.d)(s.b,{headerText:m()("Review Learning Objectives"),itemTypeText:m()("Review materials")}),headerRight:Object(a.d)("div",null)},Object(a.d)(d.a,{"data-test":"learning-objectives-content",itemId:t,courseSlug:n,learningObjectiveIds:o})))};e.a=p},jXJP:function(module,e,t){"use strict";var n=t("VkAN"),i=t.n(n),a=t("lSNA"),r=t.n(a),o=t("UB5X"),c=t.n(o),s=t("AeFk"),u=t("q1tI"),d=t.n(u),l=t("kvW3"),m=t("JJfJ"),b=t("ZJgU"),p=t("763+"),v=t("8Hdl"),g=t("H7bS"),j=t("d2Ft"),f=t("kWps"),O=t("d3Ej"),h=t.n(O),y,S=function styles(e){return{submissionTime:Object(s.c)({marginTop:e.spacing(8),marginBottom:-8}),root:Object(s.c)(r()({},e.breakpoints.down("sm"),{marginTop:e.spacing(12)})),actionButtonStyle:Object(s.c)(r()({display:"flex",justifyContent:"flex-end"},e.breakpoints.down("sm"),{justifyContent:"flex-start"})),retryInfo:Object(s.c)({marginTop:e.spacing(12)}),timeLimitText:Object(s.c)({marginTop:e.spacing(12)})}},w=function renderActionButton(e,t){return Object(s.d)(b.a,{size:"medium",variant:"primary",onClick:t,"aria-labelledby":e,"data-test":"action-button"},e)},k=function CoverPageRowRightSideActions(e){var t=e.startAttempt,n=e.restartAttempt,a=e.resumeAttempt,r=e.retryAttempt,o=e.submissionTime,u=e.showTimer,d=e.timeLimit,O=e.timerId,k=e.attemptsLeft,C=e.secondsLeftInLatestAttempt,x=e.attemptLimitTimeLeft,I=null,L=Object(p.a)(),P=S(L),A=c()(x)||"number"==typeof k&&k<=0;return t?I=w(h()("Start assignment"),t):n?I=w(h()("Restart assignment"),n):a?I=w(h()("Resume assignment"),a):r&&(I=Object(s.d)(b.a,{size:"medium",variant:"ghost","data-test":"action-button","aria-labelledby":h()("Try again"),component:"a",onClick:r,disabled:A},h()("Try again"))),Object(s.d)("div",{css:P.root},Object(s.d)("div",{css:P.actionButtonStyle},I),A&&c()(x)&&Object(s.d)("div",{css:P.retryInfo,"data-test":"retry-info"},Object(s.d)(v.a,{variant:"body2",component:"span",color:"supportText"},Object(s.d)(l.b,{message:h()("Retake the quiz in {attemptLimitTimeLeft}"),attemptLimitTimeLeft:Object(s.d)("strong",null,Object(m.v)(x))}))),o&&Object(s.d)("div",{css:P.submissionTime,"data-test":"submission-time-detail"},Object(s.d)(v.a,{variant:"h4bold",component:"span",color:"supportText"},h()("Submitted"))," ",Object(s.d)(v.a,{variant:"body2",component:"span",color:"supportText"},f.a.getFormattedDeadline(o))),c()(d)&&t&&Object(s.d)("div",null,Object(s.d)(v.a,{variant:"body2"},Object(s.d)(g.a,{size:"medium",color:"default",css:Object(s.c)(y||(y=i()(["\n                transform: translateY(4px);\n              "])))}),Object(s.d)("span",{css:P.timeLimitText},Object(s.d)(l.b,{message:h()("You will have {timeLimit} to finish"),timeLimit:Object(m.v)(d,!0)})))),u&&c()(C)&&Object(s.d)(j.a,{timerId:O,remainingTimeInMs:1e3*C,displayRemaining:!0}))};e.a=k},lT6G:function(module,e,t){"use strict";t.r(e),t.d(e,"QuizCoverPage",function(){return F});var n=t("lSNA"),i=t.n(n),a=t("VbXa"),r=t.n(a),o=t("q1tI"),c=t.n(o),s=t("AeFk"),u=t("MnCE"),d=t("oJmH"),l=t.n(d),m=t("sBWo"),b=t("8mOo"),p=t("+LJP"),v=t("fHLu"),g=t("YdC/"),j=t("iMVg"),f=t("pRpZ"),O=t("6/Gu"),h=t("YmkS"),y=t("qJwm"),S=t("2iEy"),w=t("hgsf"),k=t("jXJP"),C=t("NXzb"),x=t("1ah5"),I=t("zaiP"),L=t("LHEl"),P=t("kYu0"),A=t("VtNW"),E=t.n(A),T=t("VMeS"),R=t("8ec0"),N=t("xXQ2"),D=t("KvdX");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){i()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var F=function(e){function QuizCoverPage(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).getRestartAttemptFunction=function(e,n,i){return function(){if(n&&i){if(i.isLastAttemptBeforeLock||1===i.attemptsLeft)return void n({type:D.a.lastAttemptModal,props:_objectSpread(_objectSpread({},i),{},{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})});if("number"==typeof i.timeLimit)return void n({type:D.a.timedAttemptStart,props:_objectSpread(_objectSpread({},i),{},{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})})}var a=t.props.openAttemptPage;Object(v.b)(e),a()}},t}var t;return r()(QuizCoverPage,e),QuizCoverPage.prototype.render=function render(){var e=this,t=this.props,n=t.nextItemUrl,i=t.children,a=t.openSubmittedAttemptPage;return Object(s.d)(I.a,null,function(t){var r=t.item;if(!r||!r.contentSummary)return Object(s.d)(T.a,null);return Object(s.d)(L.a,{courseId:r.courseId,itemId:r.id},function(t){var o=t.loading,u=t.lastSessionId,l=t.lockingConfigurationSummary,m=t.unsubmittedSessionId,b=t.bestEvaluation,p=t.nudge,I=t.refetch;if(!r||!r.contentSummary||o)return Object(s.d)(T.a,null);if("exam"===r.contentSummary.typeName){var L=r.contentSummary.definition,A=r.isCumulativeGraded;return Object(s.d)(O.a,{container:!0},Object(s.d)(O.a,{item:!0,xs:12},Object(s.d)(g.a,{assignmentTypeName:E()("Quiz"),item:r,subHeader:Object(s.d)(j.a,{courseId:null==r?void 0:r.courseId,itemId:null==r?void 0:r.id,courseSlug:null==r?void 0:r.courseSlug,learningObjectiveIds:null==r?void 0:r.learningObjectiveIds})}),p&&Object(s.d)(f.a,{nudge:p})),Object(s.d)(O.a,{item:!0,xs:12},Object(s.d)(x.a,{courseSlug:null==r?void 0:r.courseSlug})),Object(s.d)(O.a,{item:!0,xs:12},Object(s.d)(P.a,{standardProctorConfigurationId:L.standardProctorConfigurationId},function(t){var n=t.timeLimit,i=t.secondsLeftInLatestAttempt,a=t.remainingAttempts,o=t.completedAttempts,c=t.client;return Object(s.d)(S.b,{stepTitle:E()("Submit your assignment"),stepDetails:Object(s.d)(w.a,{deadline:r.deadline,attemptsRateCount:(l||{}).allowedSubmissionsPerInterval,attemptsRateInterval:(l||{}).allowedSubmissionsInterval,attemptsLeft:a,attemptsCompleted:o}),rightSideView:Object(s.d)(D.b,null,function(t){var o=t.showModal,d={timeLimit:n,attemptsLeft:a,lockedTimeLeft:Object(N.b)(l),isLastAttemptBeforeLock:Object(N.c)(l),hasAttemptLimit:!!l&&l.allowedSubmissionsPerInterval>0};return Object(s.d)(k.a,{startAttempt:u||m?void 0:e.getRestartAttemptFunction(c,o,d),resumeAttempt:m?e.getRestartAttemptFunction(c):void 0,timeLimit:n,showTimer:!!m,timerId:Object(R.a)(r.id),secondsLeftInLatestAttempt:i,retryAttempt:e.getRestartAttemptFunction(c,o,d),attemptLimitTimeLeft:Object(N.a)(l),attemptsLeft:a})}),statusIconType:u?S.a.check:void 0,statusIconTitle:u?E()("Activity Completed"):void 0})}),Object(s.d)(S.b,{stepTitle:E()("Receive grade"),stepDetails:Object(s.d)(w.a,{passingFraction:L.passingFraction,isCumulativeGraded:A}),rightSideView:Object(s.d)(d.ApolloConsumer,null,function(e){return Object(s.d)(C.a,{itemGrade:r.itemGrade,computedScore:(b||{}).score,maxScore:(b||{}).maxScore,isCumulativeGraded:A,viewFeedback:u?function(){Object(v.b)(e),a()}:void 0,isViewFeedbackButtonLinkStyle:!!m})}),statusIconType:Object(S.d)((r.itemGrade||{}).isPassed,A),statusIconTitle:Object(S.c)((r.itemGrade||{}).isPassed,A)})),Object(s.d)("div",{css:function css(e){return Object(s.c)({marginTop:e.spacing(12)})}},Object(s.d)(h.a,{computedItem:r,itemFeedbackType:y.c.Quiz})),i&&I&&c.a.cloneElement(i,{refetchCoverPageData:function refetchCoverPageData(){return I().then(function(){return r.refetch()})},nextItemUrl:n}))}return null})})},QuizCoverPage}(c.a.Component),M=Object(u.compose)(b.a,Object(p.a)(function(e){return{openAttemptPage:function openAttemptPage(){e.push({name:"quiz-attempt",params:e.params})},openSubmittedAttemptPage:function openSubmittedAttemptPage(){e.push({name:"quiz-view-attempt",params:e.params})}}}))(F);e.default=Object(m.a)(M)},mDy0:function(module,e,t){"use strict";var n=t("AeFk"),i=t("q1tI"),a=t.n(i),r=t("8Hdl"),o=t("Euzd"),c=t("2S0G"),s=t("vrZb"),u=t.n(s),d={root:function root(e){return Object(n.c)({marginBottom:e.spacing(48)})},instructions:function instructions(e){return Object(n.c)({marginTop:e.spacing(8)})},learningObjectiveContainer:function learningObjectiveContainer(e){return Object(n.c)({marginTop:e.spacing(32)})}},l=function LearningObjectivesContent(e){var t=e.itemId,i=e.courseSlug,a=void 0===i?"":i,s=e.learningObjectiveIds;return Object(n.d)("div",{css:d.root},Object(n.d)(r.a,{variant:"h1semibold",component:"h2"},u()("Review Learning Objectives")),Object(n.d)(r.a,{variant:"body2",css:d.instructions},u()("Review concepts related to your current learning objectives")),Object(n.d)("div",{css:d.learningObjectiveContainer},Object(n.d)(o.a,{itemId:t,courseSlug:a,learningObjectiveIds:s,removeParentItem:!0,removeFutureItems:!0},function(e){var t=e.learningObjectives;return Object(n.d)(c.a,{learningObjectives:t})})))};e.a=l},oX1x:function(module,e,t){"use strict";var n=t("VkAN"),i=t.n(n),a=t("q1tI"),r=t.n(a),o=t("sQ/U"),c=t("PDuk"),s=t("lTCR"),u=t.n(s),d=t("oJmH"),l=t.n(d),m=t("iC89"),b,p=u()(b||(b=i()(["\n  query CourseMessagesQuery($id: String!) {\n    CourseMessagesV1 @naptime {\n      findCourseMessages(id: $id) {\n        elements {\n          id\n          messages\n        }\n      }\n    }\n  }\n"]))),v=function CourseMessagesProvider(e){var t=e.courseSlug,n=e.children,i=o.a.get().id,a=Object(c.c)([Object(c.c)([i,t]),m.a.COURSE_GRADES,-1]);return r.a.createElement(d.Query,{query:p,variables:{id:a}},function(e){var t,i,a,r=e.loading,o=e.data,c=e.refetch,s=null==o?void 0:null===(t=o.CourseMessagesV1)||void 0===t?void 0:null===(i=t.findCourseMessages)||void 0===i?void 0:null===(a=i.elements)||void 0===a?void 0:a[0].messages;return n({loading:r,notifications:s,refetch:c})})};e.a=v},pRpZ:function(module,e,t){"use strict";var n=t("q1tI"),i=t.n(n),a=t("EqTq"),r=t("kvW3"),o=t("m10x"),c=t("USJv"),s=t("w+/x"),u=t("d3Ej"),d=t.n(u),l=t("FkXZ"),m=t.n(l),b=Object(a.a)("CoverPageNudges"),p=function LikelihoodNudge(e){var t=e.value,n=Math.ceil(t/100);return i.a.createElement("div",{className:b()},i.a.createElement("div",{className:b("svg-icon")},i.a.createElement(c.a,{size:48})),i.a.createElement("div",{className:b("message")},i.a.createElement(o.n,null,d()("Get closer to your goal")),i.a.createElement(r.b,{message:d()("You are {value} more likely to complete the course if you finish the assignment"),value:i.a.createElement("strong",null,n>1?n+d()(" times"):t+"%"),tagName:"p",rootClassName:b("info")})))},v=function SocialNudge(e){var t=e.value;return i.a.createElement("div",{className:b()},i.a.createElement("div",{className:b("svg-icon")},i.a.createElement(s.a,{size:48}),","),i.a.createElement("div",{className:b("message")},i.a.createElement(o.n,null,d()("People are making progress")),i.a.createElement(r.b,{message:d()("{numOfLearners} learners have recently completed this assignment"),numOfLearners:i.a.createElement("strong",null,t),tagName:"p",rootClassName:b("info")})))},g=function CoverPageNudges(e){var t=e.nudge,n=t.nudgeType,a=t.nudgeNumber;switch(n){case"social":return i.a.createElement(v,{value:a});case"likelihood":return i.a.createElement(p,{value:a});default:return null}};e.a=g},ryMZ:function(module,e,t){"use strict";var n=t("lSNA"),i=t.n(n),a=t("AeFk"),r=t("q1tI"),o=t.n(r),c=t("763+"),s=t("8Hdl"),u=t("PB6g"),d=function root(e){return Object(a.c)({whiteSpace:"nowrap","& + &":i()({marginLeft:e.spacing(16)},e.breakpoints.down("xs"),{marginLeft:0})})},l=function label(e){return Object(a.c)({marginRight:e.spacing(8)})},m=function CoverPagePhaseDetail(e){var t=e.label,n=e.details,i=e.ariaDetails,r=Object(c.a)();return Object(a.d)("div",{css:d(r)},Object(a.d)(s.a,{variant:"h4bold",component:"span",css:l(r),color:"supportText","data-test":"label"},t)," ",Object(a.d)(s.a,{variant:"body2",component:"span",color:"supportText","data-test":"content"},i&&Object(a.d)(u.b,{tagName:"span"},i),Object(a.d)("span",{"aria-hidden":Boolean(i)},n)))};e.a=m},"w+/x":function(module,e,t){"use strict";var n=t("q1tI"),i=t.n(n),a=t("MnCE"),r=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n=_objectWithoutPropertiesLoose(e,t),i,a;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++){if(i=r[a],t.indexOf(i)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,i))continue;n[i]=e[i]}}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n={},i=Object.keys(e),a,r;for(r=0;r<i.length;r++){if(a=i[r],t.indexOf(a)>=0)continue;n[a]=e[a]}return n}var o=function SvgaPen(e){var t=e.title,i=void 0===t?"Pen":t,a=_objectWithoutProperties(e,["title"]);return n.createElement(r.a,_extends({title:i},a,{viewBox:"0 0 36 44"}),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M36 25.855C36 35.845 20.836 44 10.895 44S0 35.846 0 25.855C0 15.865 13.185 8 23.127 8 33.067 8 36 15.864 36 25.855",fill:"#F3C800"}),n.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M21.907 4.781l6.751 12.248-10.823 17.146L7.253 17.181l6.999-12.452M8.428 4.081h19.359V1H8.427zM17.954 33.074V21.186"}),n.createElement("path",{d:"M15.23 18.272a2.723 2.723 0 1 1 5.447 0 2.723 2.723 0 0 1-5.446 0z",stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))};(o=Object(a.pure)(o)).displayName="SvgaPen",e.a=o}}]);
//# sourceMappingURL=91.c6ce6643495d0cb263ec.js.map