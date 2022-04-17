# lol (what kind of name is this?)

I'll say this right here and now, I absolutely loathed this challenge. Included are the files that came from the challenge, however, they weren't all included off the bat otherwise it'd be the easiest challenge ever. The challenge was simply titled "lol" with a description once again simply saying "lol". Originally included was Matt.jpg, but was later changed to matt2.jpg, that part isn't important as both images have the same hidden content. Speaking of hidden content, opening either file in a hex editor reveals a string at the very end of the file. the string saying "the password is Graduation". Armed with the password, we ran the file through several steganography tools, one of them being steghide. Using it, we got the hidden content, which we first thought was jibberish, but was actually Base46 encoded (props for not using base64, it really threw us off.) After we realized it was base 46 (3 hours later) it gave us a link to a second image, simplyntitled "ye.png", we then proceeded to run through every steganography tool we could find, and absolutely nothing worked. Me seeing the stripe of pixels at the top, I immediately thought "Ooh, this might be ASCII encoded through RGB values!" Spoiler alert, it wasn't, but I spent 5 hours on it anyway, doing various math operations on all of the RGB values, bitmasking them, and even XORing them. After the 5 hours, I thought that maybe I should try finding the original file, turns out that was in the original. So i wasted.my tome for nothing. Eventually, after mostly giving up, A free hint was given, reading:

```text
A good CTF competitor has a very large arsenal of random stegonagraphy tools because they never know what the tool the competition might need, the first tool required for this challenge is fairly common, the second tool is very obscure. The second tool can be likened to lemon juice under the gaze of the EM radiation with the wavelength of 400 nanometers to 10 nanometers, but of course this tool is not analog and just uses 1's and 0's.
```

After passing it to my team, one of them said "you should try this tool called Digital Invisible Ink Toolkit" we threw it in, and FINALLY got it.

Total tome wasted: 8 hours.

Thank you for the new steganography tool, but it doesn't make me hate it any less.
