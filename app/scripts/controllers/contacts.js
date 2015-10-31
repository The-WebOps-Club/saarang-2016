'use strict';

/**
 * @ngdoc function
 * @name saarang2016App.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('ContactsCtrl', function ($scope) {
   $scope.pageClass = "page-contact";
   $scope.contis = [
            {
            "name": "Secretary, Cultural Affairs (Arts)",
            "members": [
              {
                "name": "Aditya U",
                "email": "adi@saarang.org",
                "phone": "+919962971662",
                "img"  :"images/contact_images/AU.png"
              }
            ]
            },
            {
            "name": "Secretary, Cultural Affairs (Literary)",
            "members": [
              {
                "name": "Krishna Koushik",
                "email": "krishnakoushik@saarang.org",
                "phone": "+917418789160",
                "img"  :"images/contact_images/koushikvas.png"
              }
            ]
            },
            {
            "name": "Sponsorship & PR",
            "members": [
              {
                "name": "Anish Rathi",
                "email": "anish.rathi@saarang.org",
                "phone": "+919884685016",
                "img"  :"images/contact_images/rathi.png"
              },
              {
                "name": "Anirvan Bordoloi",
                "email": "anirvan.bordoloi@saarang.org",
                "phone": "+919962609617",
                "img"  :"images/contact_images/anirvan.png"
              },
              {
                "name": "Ashish Jha",
                "email": "ashish.jha@saarang.org",
                "phone": "+918695851252",
                "img"  :"images/contact_images/ashish.png"
              }
            ]
            },
            {
            "name": "Events",
            "members": [
              {
                "name": "Rushabh Menon",
                "email": "menon@saarang.org",
                "phone": "+919791057815",
                "img"  :"images/contact_images/rushabh.png"
              },
              {
                "name": "Srijith R",
                "email": "srijith@saarang.org",
                "phone": "+919176467000",
                "img"  :"images/contact_images/srijith.png"
              }
            ]
            },
            {
            "name": "Professional Shows",
            "members": [
              {
                "name": "Ashwin S Pothen",
                "email": "ashwin@saarang.org",
                "phone": "+919884300360",
                "img"  :"images/contact_images/pothen.png"
              },
              {
                "name": "Harshith Guntha",
                "email": "harshith.guntha@saarang.org",
                "phone": "+918056218712",
                "img"  :"images/contact_images/harshith.png"
              }
            ]
            },
            {
            "name": "Marketing & Sales",
            "members": [
              {
                "name": "Sri Krishna Koushik",
                "email": "koushik.esk@saarang.org",
                "phone": "+918124343670",
                "img"  :"images/contact_images/saikoushik.png"
              },
              {
                "name": "Sai Akhil Matha",
                "email": "akhil@saarang.org",
                "phone": "+918056128354",
                "img"  :"images/contact_images/matha.png"
              }
            ]
            },
            {
            "name": "Publicity",
            "members": [
              {
                "name": "Rinkesh Virani",
                "email": "rinkeshvirani@saarang.org",
                "phone": "+919884299313",
                "img"  :"images/contact_images/rinkesh.png"
              }
            ]
            },
            {
            "name": "Hospitality",
            "members": [
              {
                "name": "Sreeharsha Gunda",
                "email": "sreeharsha@saarang.org",
                "phone": "+919962663576",
                "img"  :"images/contact_images/sreeharsha.png"
              }
            ]
            },
            {
            "name": "Web & Mobile Operations",
            "members": [
              {
                "name": "Deepak Padamata",
                "email": "deepak@saarang.org",
                "phone": "+919789107938",
                "img"  :"images/contact_images/deepak.png"
              },
              {
                "name": "Aqel Ahammed",
                "email": "aqel@saarang.org",
                "phone": "+919633229144",
                "img"  :"images/contact_images/aqel.png"
              }
            ]
            },
            {
              "name":"Design and Media",
              "members":[
              {
                "name":"Manavala Thambi",
                "email":"ktmanav@saarang.org",
                "phone" :"+919962605305",
                "img"  :"images/contact_images/thambi.png"
              },
              {
                "name":"Rathees P",
                "email":"ratiz@saarang.org",
                "phone":"+919789575877",
                "img"  :"images/contact_images/rathees.png"
              },
              {
                "name": "Rahul K",
                "email": "rahul@saarang.org",
                "phone": "+919884299695",
                "img"  :"images/contact_images/rahul.png"
              }
              ]
            },
            {
              "name":"Finance",
               "members":[
               {
               "name":"Favas M P",
               "email":"favas@saarang.org", 
               "phone":"+917418304010",
               "img"  :"images/contact_images/favas.png"
               },
               {
                "name":"Srinivas Ramanand",
                "email":"ramanand@saarang.org", 
                "phone":"+918807488931",
                "img"  :"images/contact_images/ramanand.png"
               }
             ]  
            },
            {
              "name":"Facilities",
              "members" :[
              {
                "name":"Hari M",
                "email":"hari@saarang.org", 
                "phone":"+917708948827",
                "img"  :"images/contact_images/hari.png"
              },
              {
                "name":"Amar Siva Santosh",
                "email":"amar@saarang.org", 
                "phone":"+919952912020",
                "img"  :"images/contact_images/amar.png"
              }
              ]
            },
            {
              "name":"Safety & Security",
              "members":[
              {
                "name":"Bharadwaj M",
                "email":"bharadwaj@saarang.org",
                "phone": "+918056102507",
                "img"  :"images/contact_images/chinnu.png"  
              },
              {
                "name":"Ruth Babu Marpu",
                "email":"ruth.marpu@saarang.org",
                "phone": "+919043812280",
                "img"  :"images/contact_images/ruthbabu.png"
              }
              ]
            },
            {
              "name":"QMS",
              "members":[
              {
                "name":"Vidyadhar Mudium",
                "email":"vidyadhar@saarang.org",
                "phone":"+919952044531",
                "img"  :"images/contact_images/vidyadhar.png"
              }
              ]
            }];
  });
