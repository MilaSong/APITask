# APITask
Input rows, columns and tilt angle, the module is drawn on canvas element with respective rows and columns and tilted by the given angle.

### Example:
<kbd>![image](https://user-images.githubusercontent.com/47258444/60266785-13e3aa00-98e9-11e9-9254-9ccbc05f2bc3.png)</kbd>

# API usage

API request is sent to <i>/api/values</i> url.
Request is in JSON format with 2 integer values coresponding to rows and columns.
API calculates the module size (if the count of modules is higher than 10, the module size is 20x20px, otherwise it is 10x10px) and returns it as an integer value wrapped in response status object.
