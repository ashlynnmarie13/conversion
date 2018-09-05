
From what I researched, it seems that the best choice overall would be to use a library to 
validate numbers, such as the google library https://github.com/googlei18n/libphonenumber.

However, if we had to use a function, this is the most efficient way that I could think of.

- The function first takes in a string
phoneNumber = str => {

- Then, it uses a callback function to validate whether or not the
user's input is a valid US phone number.
  let newNum = validateNumber(str);

- The callback function takes in the string and determines if the digits within
the string are exactly equal to 10 in length, which is the standard US Phone number length.
It returns a boolean value of "true" if the digits are equal to 10 and "false" if
they are not.

validateNumber = str => {
  let validNum = str.match(/\d/g).length === 10;
  return validNum;
};

- Finally, if the newNum is "true" (validated), then I add a "+1" to the beginning
of the string and replace all values that are not a number with an empty string.
If the newNum is "false", then it will return null.
- I used Twilio's documentation to figure out how a US E.164 number should look.
 (https://www.twilio.com/docs/glossary/what-e164)

  return newNum ? "+1" + str.replace(/[^0-9]/g, "") : null;
};

