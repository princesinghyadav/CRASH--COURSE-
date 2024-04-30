function isPalindrome(N, str) {
    let i = 0;
    let j = N - 1;
    
    while (i < j) {
      while (!isAlphanumeric(str.charCodeAt(i))) {
        i++;
      }
      
      while (!isAlphanumeric(str.charCodeAt(j))) {
        j--;
      }
      
      const charI = str.charCodeAt(i);
      const charJ = str.charCodeAt(j);
      
  
      const charI_lowercase = (charI >= 65 && charI <= 90) ? (charI + 32) : charI;
      const charJ_lowercase = (charJ >= 65 && charJ <= 90) ? (charJ + 32) : charJ;
      
      if (charI_lowercase !== charJ_lowercase) {
        return false;
      }
      
      i++;
      j--;
    }
    
    return true;
  }
  
  function isAlphanumeric(charCode) {
    return (charCode >= 48 && charCode <= 57) || 
           (charCode >= 65 && charCode <= 90) || 
           (charCode >= 97 && charCode <= 122);
  }
  
  
  const testString =  "naman"
  const length = testString.length;
  console.log(isPalindrome(length, testString)); 
  