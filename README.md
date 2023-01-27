<!-- // BINARY SAMPLE 
01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110
01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111 -->

<!-- 
01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110
01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111 -->


<!-- SHOULD WORK FOR THIS TOO, BUT DOESNT -->
<!-- 01000001011100100110010101101110001001110111010000100000011000100110111101101110
0110011001101001011100100110010101110011001000000110011001110101011011100010000100111111 -->

--------------------- POSSIBLE FUTURE IMPLEMENTATIONS ---------------------
1. option beside the binary entry to adjust the size of the text.
2. options between different types of conversion i.e. hexadecimal, duodecimal etc 
3. get import functionality working to improve modularity and readability of working code
<!-- 4. the code only works when the input is entered in 8 byte format: solution needed
	- run to split it up into 8 byte format if not already done !!!! SOLVED !!! -->




------------------------------------------------------------------------------------

--------------------- PLAN OF ATTACK ---------------------
1. When click on the sumbit button text becomes visible in the output box


------------------------------------------------------------------------------------

--------------------- THE BINARY TRANSLATION ---------------------
1. Once the sumbit is clicked all of the text in the input field is taken and stored
2. Store in array
3. Every 8 bit byte will be a single array placement value 
4. OKAY, previous points made might be redundant
5. We have the algorithm for the binary translation 
6. Implement into this application and see if it runs successfully
	- Can it be improved in anyway? 

------------------------------------------------------------------------------------

--------------------- STRING TO BINARY TRANSLATION ---------------------
1. function that takes string in from input
2. convert to decimal 
3. then from decimal convert to binary 
4. method returns a binary number

--------------------- THE OPTIONS ---------------------
1. These are all the possible options between string and binary
	- if string and string return STRING
	- if binary and binary return BINARY
	- if string to binary return BINARY 
	- if binary to string return STRING 

2. Error checking: 
	- basically needs to check when the input drop of string is picked that a string is entered


--------------------- 17th of August 2021 ---------------------
--------------------- COPY OPTION / POP UP WINDOW TO DISPLAY OPTION OF HOW TO COPY ---------------------
1. the select button is complete. maybe some styling features should be considered 
2. once the text is selected prompt the user with a screen to show them how to copy paste 
3. generally trying to avoid a simple copy button for the user as seems to be more hassle than its worth 
4. but with this avenue that can be explored, i can go down the route of checking the users os
	- by checking their os i can prompt them how to copy and paste e.g/ js = navigator properties  








01101010 01101111 01110010 01100100 01100001 01101110 00100000 01101101 01110101 01110010 011100100110000101111001
​
