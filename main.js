// Credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];

let input = document.getElementById('input');
let button = document.getElementById('button');
let output = document.getElementById('output');

let tester = () => {
  let str = input.value;
  let num = parseFloat(str);
  let arr = [...String(num)].map(Number);
  console.log(arr)
}

// Add your functions below:
function validateCred() {
  let str = input.value;
  let num = parseFloat(str);
  let numArr = [...String(num)].map(Number);
  console.log(numArr)
  let total = 0;
  for (let i = numArr.length - 1; i >= 0; i--) {
    let currValue = numArr[i]
    if ((numArr.length - 1 - i) % 2 === 1) {
      currValue *= 2;
      if (currValue > 9) {
        currValue -= 9;
      }
    }
    total += currValue;
  }
    if(total % 10 === 0){
    console.log('valid')
    output.innerHTML = 'Valid - Credit Card Number'
  }else {
    console.log('invalid')
    output.innerHTML = 'Invalid - Credit Card Number'
  }
  return total % 10 === 0;
}

button.addEventListener('click', validateCred)

// function findInvalidCards(cards) {
//   const invalid = [];

//   for (let i = 0; i < cards.length; i++) {
//     let currCred = cards[i];
//     if (!validateCred(currCred)) {
//       invalid.push(currCred);
//     }
//   }

//   return invalid;
// }

// // Test function
// console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
// console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers

// console.log(findInvalidCards(batch)); // Test what the mystery numbers are

// function idInvalidCardCompanies(invalidBatch) {
//   const companies = [];
//   for (let i = 0; i < invalidBatch.length; i++) {
//     switch (invalidBatch[i][0]) {
//       case 3:
//         if (companies.indexOf('Amex') === -1) {
//           companies.push('Amex');
//         }
//         break
//       case 4:
//         if (companies.indexOf('Visa') === -1) {
//           companies.push('Visa');
//         }
//         break
//       case 5:
//         if (companies.indexOf('Mastercard') === -1) {
//           companies.push('Mastercard');
//         }
//         break
//       case 6:
//         if (companies.indexOf('Discover') === -1) {
//           companies.push('Discover');
//         }
//         break
//       default:
//         console.log('Company not found');
//     }
//   }
//   return companies;
// }

// console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
// console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
// console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards

