# Javascript-1.0
This is the very basic course of Javascript in which I covered almost all topics that are important to know for being a Javascript developer.
# Exercises:
# Exercise 1
Swapping variable's values:</br>
let a=10;</br>
let b=20;</br>
Using only one variable like c</br>
Output should look like: </br>
console.log(a); // => 20 </br>
console.log(b); // => 10 </br>
# Exercise 2
Calculate the area and circumference of a circle where radius is equal to 10.</br>
let r = 10; </br>
Output should look like: </br>
Print a label before each result i.e area of circle , circumference of circle </br>
console.log(circleCircum); // => 62.8 </br>
console.log(circleArea); // => 314 </br>
# Exercise 2.1
Write program for Pythagoras Theorem using Math().</br>
Find the Value of hypotenuse</br>
# Exercise 2.2
Write program for Einstein's Theory of Relativity using Math().</br>
Find the Value of Energy</br>
i.e E=mc^2</br>
# Exercise 2.3
Calculate Mass of earth using Math().</br>
# Exercise 2.4
Write program to find (a+b)^2 using Math().</br>
# Exercise 2.5
Write program to find (a+b)(a-b) using Math().</br>
# Exercise 3
Write a function that takes two numbers and return the maximum of the two.
# Exercise 4
Write function isLandscape(width,height) which take width and height, return true if Landscape else false.
# Exercise 5
fizzbuzz algorithm: </br>
write a function fizzbuzz(input), which take an input, if the number is divisable by 3 return string 'fizz',</br>
if the number is divisable by 5 return string 'buzz', if divisable by both 3 and 5 then return string 'fizzbuzz',</br>
if input is not a number return string 'Not a number'.</br>
Finally if input is number but not divisable by both simply return that number.
# Exercise 6
I want you to implement this function, checkSpeed(speed), this function takes a parameter that's the speed of a car.
Now in this program, I'm assuming that speed limit is 70 km an hour. So if a car is driving under the speed limit, we get this Ok message on the console. Similarly if we pass 70 here, so if somebody is driving exactly at the speed limit, we're still good. We still get the Ok message. Now for every five kilometers above the speed limit, they're going to get 1 point. So if I drive at 75 km an hour, I get 1 point here. But what if I drive at 72 km an hour? I'm still good. So for every 5 km, above the speed limit, we should give the driver 1 point. Now as part of calculating the point here, you will have to use one of the built in
 functions in JavaScript that is Math.floor. We can give this function a floating point number, like 1.3, let's say 1.3 points, and this will convert that to the greatest integer, for example if we go to the console here, and type math.floor of 1.3, we get 1. So you will have to use this function as part of your calculations okay, now here is a tip for you. Back to our checkSpeed function, what if you passed 80 here? We should get 2 points right? So we get 2 points, beautiful. Now what if we drive at 180 km an hour? Our license is suspended. So if a driver gets more than 12 points, then their license should be suspended.

# Exercise 7
 I want you to write a function called showNumbers(limit) that takes a parameter called limit. So we pass a number here, like 10, and when we call this function, we should call all the numbers from 0 to the number we supplied as the limit. Now next to each number if that number is even we should display the even number, otherwise we should display odd.
# Exercise 8
I want you to create a function called countTruthy(array) which takes an array and returns a number of truthy elements in this array. Now what are these truthy or false values, We studied about it earlier.
# Exercise 9
Here is another simple but great exercise, your job is to create a function called show properties. We pass an object here. And this function should display all the properties of this object that are of type string.
# Exercise 10
Here's another simple but great exercise that trains your programming brain. So I want you to create this function called sum(limit), we give it a limit and this function will return the sum of all the multiples of 3 and 5 from 0 up to this limit. Here's an example. What are the multiples of 3 and 5, between 0 and 10. Well, multiples of 3, are 3, 6, and 9 and multiples of 5 are 5 and 10, so I'm including this number that is passed as a limit. Now if you add these numbers together, the result will be 33, and that is the trouble of this function
# Exercise 11
we want to calculate the grade of a student. So here, are the marks of a student in different subjects, let marks=[80,80,50], we pass this array with this function, calculateGrade(marks), what this function does, is first it calculates the average grade. So what is the average here, 80 plus 80 plus 50, that comes to 210 divided by 3, so the average is 70. Now here we need a table to see what grade this average corresponds to. So if the average comes down to this range 1 to 59, the grade should be F, if it is between 60 and 69, that should be D, if it's between 70 and 79, that should be a C. If it's between 8- and 89, that should be a B. And finally if it's between 90 and 100, that should be an A
# Exercise 12
This exercise is a very popular exercise for junior programmers. </br>
use loops to print like that below output:</br>
First Task:</br>

*</br>
**</br>
***</br>
****</br>
*****</br>
Second Task:</br>
*****</br>
 ****</br>
  ***</br>
   **</br>
    *</br>
    
# Exercise 13
I want you to create this function, showPrimes(limit), that takes a limit, and shows all the prime numbers up to this limit. So here are the prime numbers that we have, up to 20, we got 2, 3, 5, 7 and so on.

# Exercise 14
I want you to write a logic which shows us the desired output for a given array.<br>
Example below show a sample output.<br>
const arr = [1, 1, 2, 3, 5];<br>
output =><br>
A - 1<br>
A - 1<br>
B - 2<br>
A - 3<br>
B - 5<br>
if the number change the letter also change.<br>
Here is your task<br>
const arr = [1, 2, 2, 3, 4, 6, 6];<br>
your output should be like below<br>
output =><br>
A - 1<br>
B - 2<br>
B - 2<br>
A - 3<br>
B - 4<br>
A - 6<br>
A - 6<br>

# Exercise 15
I want you to create a function which remove duplication from an array and make it unique.<br />
For example: const arr = [1,2,2,3,3,3,4,4,5,6,6];<br>
result:[1,2,3,4,5,6];<br>
# Exercise 16
I want you to merge arrays, which is inside an object<br>
For example: const obj = { 1:[1,2,3],2:[4,5,6],3:[7,8,9]}<br>
output should be: [1,2,3,4,5,6,7,8,9].<br>
# Exercise 17
In this exercise you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.<br>
filter_list([1,2,'a','b']) ==> [1,2]<br>
filter_list([1,'a','b',0,15]) ==> [1,0,15]<br>
filter_list([1,2,'aasf','1','123',123]) ==> [1,2,123]<br>
# Exercise 18
In this exercise, you are asked to square every digit of a number and concatenate them.<br>
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.<br>
Note: The function accepts an integer and returns an integer<br>
# Exercise 19
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.<br>
The binary number returned should be a string.<br>
Examples:<br>
add_binary(1, 1) == "10" (1 + 1 = 2 in decimal or 10 in binary)<br>
add_binary(5, 9) == "1110" (5 + 9 = 14 in decimal or 1110 in binary)<br>
# Exercise 20
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.<br>
Examples input/output:<br>
XO("ooxx") => true<br>
XO("xooxx") => false<br>
XO("ooxXm") => true<br>
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true<br>
XO("zzoo") => false<br>
# Exercise 21
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.<br>
Examples<br>
    16  -->  1 + 6 = 7<br>
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6<br>
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6<br>
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2<br>
# Exercise 22
Given an integral number, determine if it's a square number:<br>
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.<br>
The tests will always use some integral number, so don't worry about that in dynamic typed languages.<br>
Examples<br>
-1  =>  false<br>
 0  =>  true<br>
 3  =>  false<br>
 4  =>  true<br>
25  =>  true<br>
26  =>  false
