phoneNumber = str => {
  let newNum = validateNumber(str);
  return newNum ? "+1" + str.replace(/[^0-9]/g, "") : null;
};

validateNumber = str => {
  let validNum = str.match(/\d/g).length === 10;
  return validNum;
};
