#form6
ng build new 

>start firebase, firestore, hosting, all defaults, yes single webpage
firebase init

>start angular, yes routing, css
ng new autobody
>>test, should see ng welcome page  
cd autobody 
ng serve
:42000

>connect firebase to angular 
ng build --prod
>>update firebase.json
>>before
```
  "hosting": {
    "public": "public",
```
>>after
```
  "hosting": {
    "public": "autobody/dist/autobody",
```

