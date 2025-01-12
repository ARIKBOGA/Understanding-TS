let userInput: unknown; // we dont know the type of userInput yet
let username: string;

userInput = 3;
userInput = "Max";

if (typeof userInput === "string") {
  username = userInput;
}


// unknown is more restrictive than any.
// any is more permissive

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // return;  Unreachable code detected. Type 'undefined' is not assignable to type 'never'.
} 

generateError("An error occurred!", 500);