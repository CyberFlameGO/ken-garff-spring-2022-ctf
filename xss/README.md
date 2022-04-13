# XSS (Cross Site Scripting)

This challenge was fun, but took me a second as well, the way that the chat site we had to exploit worked is that it put the text it received from other users into list item elements in the HTML, by adding it using the innerHTML value. At the beginning I simply tried to insert a script element into it, but later discovered that browsers don't evaluate script tags when inserted with innerHTML, but it would still embed image, iframe, and other elements if inserted the same way. So we created an img tag that pointed to a non-existent image, and had the onerror event inject our script tag for us.

Later, I got annoyed with how the chat was formatted and wrote a second script to format the page so messages would not be cut off at the bottom of the page.
