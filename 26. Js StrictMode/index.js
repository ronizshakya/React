//"use strict"; Defines that JavaScript code should be executed in "strict mode".
"use strict";
x = 3.14;       // This will cause an error because x is not declared


"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}

//Writing to a get-only property is not allowed:

"use strict";
var obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error


"use strict";
delete Object.prototype; // This will cause an error

//Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.
"use strict";
var public = 1500;      // This will cause an error