Feature: Login Amazon website

#Scenario: Test the Login feature in Amazon Website
#
#Given Amazon Website is opened
#When Click on signin button
#Then Enter valid Username
#And Enter correct Password
#Then Click on Login button
#Then User is on home page

Scenario Outline: 

Given Amazon Website is opened
When Click on signin button
Then Enter valid "<Username>"
And Enter correct "<Password>"
Then Click on Login button
Then User is on home page
Then User selects your wishlist
Then Scroll to an element
#Then Close the browser

Examples: 

|Username | Password |
|deepak.pedhagada@gmail.com	| deepak9985 |
#|dpk@amazon.com  | dpk9985 |