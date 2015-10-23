// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.main', {
    url: '/main',
    views: {
      'tab-main': {
        templateUrl: 'templates/tab-main.html',
        controller: 'MainCtrl'
      }
    }
  })
  
  .state('tab.twisters', {
    url: '/twisters',
    views: {
        'tab-twisters': {
        templateUrl: 'templates/tab-twisters.html',
        controller: 'TwistCtrl'
        }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

var glossodetes = [
    "O Παπάς ο παχύς έφαγε παχιά φακή", 
    "Άσπρη πέτρα ξέξασπρη και απ'τον ήλιο ξεξασπρότερη", 
    "Νερό βαρέλι νεροβάρελο ποιος σε νεροβαρελόδενε",
    "Μια κούπα καπακοτή μια κούπα ξεκαπάκοτη"];

function randomInteger() 
{
      document.getElementById("tongueTwister").innerHTML=glossodetes[Math.floor(Math.random()*glossodetes.length)];

}

function startTimer() 
{
    var remaining=5;
    var interval=setInterval(function () 
    {
        document.getElementById("timer").innerHTML=remaining;
        if (--remaining<0) 
  {
        document.getElementById("tongueTwister").innerHTML="";
                document.getElementById("timer").innerHTML="";
    clearInterval(interval);
        }
    }, 1000);
};