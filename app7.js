//var a = 0.1,
//    b = 0.2,
//    c = a + b;
//
//if ((parseFloat(c).toFixed(2)) === (parseFloat(0.3).toFixed(2))) {
//console.log ("Math is fun!");
//}
//


//var a = 0.1,
//
//b = 0.2,
//
//c = a + b;
//
//if ( c.toFixed(1) == 0.3) {
//
//    console.log ('Math is fun!');
//
//}

//var a = 13;
//
//var b = true;
//
//if (a) {
//
//console.log (Boolean(a)); //true
//
//}
//
//console.log (a == b); // false

//
//var extend = function (obj, extension) {
//
//    if (typeof obj === 'object' && typeof extension === 'object') {
//
//        for (var i in extension) {
//
////            if (extension.hasOwnProperty(i) && !obj.hasOwnProperty(i))
////
////                {
//
//                    obj[i] = extension[i];
//
////                    }
//
//            }
//
//        return obj;
//    }
//}
//
//var person = {
//    firstname : 'Gurkiran',
//    lastname : 'singh',
//    getname : function() {
//    return this.firstname + this.lastname;
//    }
//}
//
//// for (var i in person) {
////     console.log(person[i]);
//// }
//
//console.log(person);
//
//var person2 = {
//    firstname: 'akash',
//    age : '21'
//}
//
//person2.__proto__.haircolor = 'browm';
//console.log(person2);
//
//extend(person, person2);
// 
//
//console.log(person);
//console.log(person2);

//
//
//
//function hi(obj){
//    
//    return function sayHi(){
//        console.log('hI ' + obj.firstname );
//    }
//}
//
//var person = {
//    firstname : 'Gurkiran'
//}
//
//
//var greeting = hi(person);
//
//greeting();

//
//
//
//function Bear(name) {
//    this.name = name;
//}
//
//Bear.prototype  =  {
//    getName : function () {
//        return this.name;
//    }
//}
//var grizzly = new Bear('grizzly');
//
////console.log(grizzly.name);
//
//var polar = new Bear('polar');
//
//console.log(polar.getName());

    
//    function Person(name) {
//        this.name = name;
////        this.sayHi = function() {
////            console.log('Hi My name is '+ name);
////        }
//    }
//
//Person.prototype.sayHi = function(){
//    console.log('Hi my name is '+this.name);
//}
//    
//    var person1 = new Person('gurkiran');
//var person2 = new Person('akash');
//    
//    console.log(person1);
//console.log(person2);
//console.log(person1.sayHi());
//
//
//
//var bear = {
//    name : 'bear',
//    sayHi : function() {
//        console.log('Hi '+this.name)
//    }
//}
//
//
//var grizzly = Object.create(bear);
//
//grizzly.name = 'grizzly';
//
//
//console.log(grizzly);
//console.log(grizzly.sayHi());


//function Person(name){
//    // JS internals
//    
//    var _this ={};
//    
//    _this.__proto__ = Person.prototype;
//    
//    // Our code
//    
//    _this.name = name;
//    
//    _this.sayHi = function() {
//        return 'HI';
//    }
//    
//    // JS internals
//    
//    return _this;
//}
//
//
//var person1 = Person('Gurkiran');
//
//console.log(person1);



//
//var colors = ['red', 'green', 'blue'];
//
//colors['yellow'] = true;
//
//delete colors.red;
//
//console.log(colors.length);
//
//
//(function(v){
//    
//    var a=c=v;
//    
//    b = v || 2;
//    
//    add(a,b);
//    
//    
//    console.log(window.a, b, c.b);
//    
//    function add(a, x, y=1) {
//        var b = a+x+y;
//        
//        c = {b};
//        
//        a = c.b;
//    }
//    
//    
//}(0));



//var person1 = {
//    name: 'Gurkiran',
//    sayHi: function() {
//        console.log('Hello from '+this.name);
//    }
//}
//
//
////
////var person2 = {
////    name: 'akash',
////    haircolor: 'brown'
////}
//
//var person2 = Object.create(person1);
//
////
////person2.name = 'Akash';
////person2.haircolor = 'brown';
//
//person2 = {
//    name:'akash',
//    haircolor: 'brown'
//}
//
//console.log(person2);


//
//
//function Person(name, rank) {
//    this.name = name;
//    this.rank = rank;
//}
//
//Person.prototype = {
//    sayHi: function(){
//        console.log('Hi from '+this.name);
//    },
//    firePerson: function(person){
//        return false;
//    }
//}
//
//var gurkiran = new Person('gurkiran',1);
//
//var akash = new Person('akash', 2);
//
//function Manager(name, rank){
//    Person.call(this, name, rank);
//}
//
//
//Manager.prototype = Object.create(Person.prototype);
//Manager.prototype.firePerson =  function(person){
//        return this.rank > person.rank;
//    }
//
//
//var steve = new Manager('steve', 10);
//
//
//
//function Ceo(name, rank){
//    Manager.call(this,name, rank);
//}
//
//
//Ceo.prototype = Object.create(Manager.prototype);
//
//Ceo.prototype.giveRaise = function(){
//    return true;
//}
//
//var mark = new Ceo('mark', 1000);



//gurkiran.sayHi();
//akash.sayHi();
//console.log(gurkiran.firePerson(akash));
//console.log(akash.firePerson(gurkiran));
//console.log(steve.firePerson(akash));
//console.log(steve.firePerson(gurkiran));


//
//
//var person1 = {
//    name:'gurkiran',
//    haircolor: 'brown',
//    fire: function(){
//        return false;
//    }
//}
//
//var person2 = {
//    name: 'akash',
//    color:'black'
//}
//
//var person3 = Object.create(person1);
//
//person3.haircolor = 'black';
////person3.fire = function(){
////    return true;
////}
//
//console.log(person3);
//
//console.log('Hi from '+person3.name+ ' and I have '+person3.haircolor+' hair and I can fire ?'+person3.fire());

//
//
//var sentence = 'Hello there';
//var reversed = '';
//for(var i=sentence.length-1 ; i>=0; i--) {
//    reversed += sentence[i];
//}
//
//console.log(reversed);
//
//



//function compute(arr, low, high) {
//
//    var low_limit = low;
//    var high_limit = high;
//    
//    var sum1 =0;
//    var sum2 =0;
//    var limit = Math.floor((low+high)/2);
//    
//    for(var i=low; i<limit ;i++) {
//        sum1 += arr[i];
//    }
//    
//    for(var i=limit; i<high;i++) {
//        sum2 += arr[i];
//    }
//
//    
//    if( sum1 === sum2 ) {
//        console.log('true');
//        return true;
//    }else if (sum1 !== sum2) {
//       console.log('false');
//    }else {
//        compute(arr, )
//    }
//
//}
//
//
//var array = [1,2,2,1,2,2];
//
//compute(array,0,array.length);

//
//
//
//function splitArray(arr,low,high){
//  var l_sum=0,
//      r_sum=0;
//
//     if(low<=high){
//        
//         var mid=Math.floor((low+high)/2);
//
//          for(var i=low;i<=mid;i++){
//              
//              l_sum+=arr[i];
//          }
//          for(var j=mid+1;j<=arr.length-1;j++){
//               r_sum+=arr[j];
//          }
//
//          if(l_sum===r_sum){
//                return true;
//          }
//          else{
//           return splitArray(arr,low,mid-1);
//          }
//     }
//     else{
//       return false;
//       }
//     
//}
//var arr=[3,1,1,1,1,1];
//console.log(splitArray(arr,0,arr.length-1));

//
//var hello = [1,2,3,4,5,6];
//
//for(x in hello) {
//    console.log(x);
//}
//
//
//
//var set = [1,2,3,4,5,6,6];
//
//console.log(findMaxOccur(set));
//
//function findMaxOccur(arr) {
//    
//    if(arr.length === 0) {
//        return null;
//    }
//    
//    var result = {};
//    
//    var max = arr[0];
//    var count = 1;
//    
//    for(var i = 0; i < arr.length; i++) {
//        var el = arr[i];
//        
//        if(result[el] === null) {
//            result[el] = 1;
//            
//    
//        }else {
//            result[el]++;
//        }
//        
//        if(result[el] > count) {
//            max = el;
//            count = result[el];
//        }
//    }    
//    return el;
//}


//
//var obj = {
//    getname(name) {
//        console.log('hi: '+name );
//    }
//}
//
//obj.getname('gurkiran');