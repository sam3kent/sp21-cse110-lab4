Part 1a:
    1. values added: 20
    2. final result: 20
    3. ERROR: Because let was used to declare variable result, it can't be used outside
        its block in line 13 so it causes an error.
    4. ERROR: Same reason as above, result is used outside it's scope and causes an error
    5. ERROR: Line 7 trys to reassign variable result which is a constant variable which can't be
        reassigned so it causes an error
    6. ERROR: Same as above, can't reassign a constant variable

Part 1b:
    1. 3 will be printed because it has access to i since i was declared using var. It prints 3
        because that was when the loop broke because 3 wasn't less than the length of prices.
    2. 150 is printed b/c discountedPrice was declared using var so line 13 has access to it and
        150 = 300 * (1 - .5) from the line 7 equation.
    3. 150 will again be printed because it was the last price to go through the loop so that's
        what finalPrice was left at and that's what 300 and the discount, through the two formulas,
        outputted.
    4. The function will return the array [50, 100, 150] as those are the outputs from the loop's
        formula that were pushed into the array discounted.
    5. ERROR: line 12 tries to access i outside of its scope, since it was declared with let, so
        to line 12 i doesn't exsist.
    6. ERROR: Line 13 tries to access discountedPrice outside of its scope b/c it was declared using
        let
    7. Prints 150 because finalPrice was declared in the same scope as line 14 and 150 was the last
        value to be stored in it.
    8. It returns [50, 100, 150], the array that was built in the loop using the formulas inside it.
    9. ERROR: Line 11 tries to access i outside i's scope since it was defined using let
    10. 3 gets printed because that's the length of the prices array and nothing can change it after
        it was assigned in line 4.
    11. [50,100,150] the array created in the loop is returned. There aren't any problems creating it
        because the const variable in line 7 is basically recreated each loop and thus the program
        never actually tries to reassign a const variable.
    12. A. student.name
        B. student['Grade Year']
        C. student.greeting()
        D. student['Favorite Teacher'].name
        E. student.courseLoad[0]
    13. A. '32' b/c ints map to their string representation
        B. 1 b/c you can't subtract from a string so 3 becomes an int and you get 3-2
        C. 3 b/c null is nothing as an int
        D. '3null' b/c now that 3 is a string, null can easily be added on as a string
        E. 4 b/c true gets converted to 1 to add to 3
        F. 0 b/c false is 0 and null is nothing as an int
        G. '3undefined' b/c underfined gets changed to a string to add onto 3 as a string
        H. NaN b/c undefined is undefined so trying to subtract it from 3 creates more undefined
    14. A. true b/c 2 is greater than 1, 2 gets converted to an int
        B. false b/c the first character in the string was checked and 2 isn't less than 1
        C. true b/c '2' gets converted to int and 2 == 2
        D. false b/c === is a strict check with not converting types and 2 != '2'
        E. false b/c true = 1 in int form
        F. true b/c Boolean() returns true for any value not 0,-0,null,false,NaN,undfined, or ""
    15. == will convert types to check for equality while === is a strict check that doesn't convert
        types.
    16. part1b-question16.js
    17. The result is [2,4,6] b/c we passed doSomething as our callback function. In the loop of
        modifyArray, the callback function is called on each number in the array which just doubles
        the number and returns it, so the new array is double that of the original and is done through the callback function passed in when modifyArray was first called.
    18. part1b-question18.js
    19. 1 4 3 2 b/c 1 and 4 aren't in a setTimeout() so they executed in order and then 3 is next
        even though the timer is 0 because it goes on the next event cycle and then finaly 2 because
        its delay was 1000.