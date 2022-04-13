# Login 2

I did not work on a script for Login 1 as Login 1 was simply a basic SQL injection payload, simply a payload that would escape the SQL query and force the query to return true.

The task for Login 2 was to not only login, but to use SQL injection to have the server login if the password met certain criteria. Criteria like password length and what character is at a specific index.

Those were the only two criteria we used in the script, but could've been expanded upon. When the expression we sent to the server returned true, the server would "login" and return status code `200 OK` instead of `401 Unauthorized`.

Armed with that knowledge we first manually checked if the password was formatted like a normal flag (starting with `flag{` and ending with `}`). Once we determined it was we began manually trying to find the length of the password.

The moment we hit 20 characters (not including the `flag{` and `}`) we quickly realized that "this is going to be such a daunting task." So I came over here to start working on this script.

The script uses the npm library called `node-fetch` which is a library that is supposed to be a near 1 to 1 implementation of its browser counterpart.

In the code there are two functions that generate an SQL injection that will check the length of the password and one that will check if a character is at a specific index.

To check if they are correct or not, there is another function that actually makes the calls to the login page that would give us our answer to our query. If the password is so long, or if the password has a specific character in a specific index, the server would return `200 OK`, otherwise it would be `401 Unauthorized`.
