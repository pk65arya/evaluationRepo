//Question 2: OTP Generator with Expiry
//Create a system that generates a one-time password (OTP) that expires after one use.

// Requirements:
// 1️⃣ A new OTP is generated whenever generateOTP() is called.

// 2️⃣ getOTP() returns the OTP but clears it after one retrieval.

// 3️⃣ If getOTP() is called again before generating a new one, it should return "OTP expired" instead of the old OTP.

// Example:

// const otpSystem = createOTPSystem();
// console.log(otpSystem.generateOTP()); // "Your OTP is: 482193"
// console.log(otpSystem.getOTP());      // "482193"
// console.log(otpSystem.getOTP());      // "OTP expired"
// console.log(otpSystem.generateOTP()); // "Your OTP is: 739182"
// console.log(otpSystem.getOTP());      // "739182"
// console.log(otpSystem.getOTP());      // "OTP expired"

function createOTPSystem() {
  let otp;
  return {
    generateOTP() {
      otp = Math.random().toString().substring(2, 8);
      //  otp=Math.floor(Math.random()*1000000)
      return `Your OTP is: ${otp}`;
    },

    getOTP() {
      let temp = otp;
      otp = "";
      if (temp.length > 0) return temp;
      else return "OTP expired";
    },
  };
}

const otpSystem = createOTPSystem();
console.log(otpSystem.generateOTP());
console.log(otpSystem.getOTP());
console.log(otpSystem.getOTP());
console.log(otpSystem.generateOTP());
console.log(otpSystem.getOTP());
console.log(otpSystem.getOTP());
