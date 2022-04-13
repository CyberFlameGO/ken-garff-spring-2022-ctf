def a(_z):
  return [int(str(_c)[2:7]) for _c in _z]

def b(_z):
  return f([_c+61 for _c in _z])

def c(_z):
  return b([_c^86 for _c in _z])

def d(_z):
  return j([_c+19 for _c in _z])

def e(_z):
  return q([_c^43 for _c in _z])

def f(_z):
  return w([_c^4 for _c in _z])

def g(_z):
  return l([_c^51 for _c in _z])

def h(_z):
  return o([_c*54 for _c in _z])

def i(_z):
  return g([_c^99 for _c in _z])

def j(_z):
  return t([_c*48 for _c in _z])

def k(_z):
  return h([_c*51 for _c in _z])

def l(_z):
  return m([_c+5 for _c in _z])

def m(_z):
  return y([_c*22 for _c in _z])

def n(_z):
  return c([_c^47 for _c in _z])

def o(_z):
  return r([_c+85 for _c in _z])

def p(_z):
  return k([_c^57 for _c in _z])

def q(_z):
  return i([_c^35 for _c in _z])

def r(_z):
  return d([_c+88 for _c in _z])

def s(_z):
  return a([_c+10 for _c in _z])

def t(_z):
  return x([_c+42 for _c in _z])

def u(_z):
  print([ord(_c) for _c in _z])
  return p([ord(_c) for _c in _z])

def v(_z):
  return e([_c*30 for _c in _z])

def w(_z):
  return z([_c*38 for _c in _z])

def x(_z):
  return v([_c+39 for _c in _z])

def y(_z):
  return n([_c*60 for _c in _z])

def z(_z):
  return s([_c^42 for _c in _z])


def main():
  password = input("Password: ")
  if u(password) == [91163, 92240, 51916, 71270, 14287, 51916, 92240, 92240, 30408, 74502, 12132, 13209, 30408, 51378, 12132, 30408, 92778, 73425, 30408, 91701, 93318, 31485, 51916, 33102, 31485, 30408, 51916, 30408, 92240, 12132, 12132, 32563, 13209, 53533, 30408, 33102, 51916, 11594, 92240, 31485, 30408, 91163, 12132, 93318, 30408, 31485, 51916, 91701, 12671, 30408, 53533, 12132, 73425, 73425, 92778, 11594, 92240, 31485, 30408, 51916, 73425, 91701, 92778, 92778, 30408, 91701, 12671, 51916, 93318, 51916, 91701, 33102, 31485, 93318, 30408, 51916, 32025, 51378, 30408, 91701, 12132, 72347, 53533, 51916, 93318, 31485, 30408, 92778, 33102, 30408, 52994, 92778, 33102, 12671, 30408, 33102, 12671, 31485, 30408, 31485, 32025, 91701, 12132, 51378, 31485, 51378, 30408, 91163, 92240, 51916, 71270, 30408, 51378, 2140, 4295, 3211, 31485, 91701, 98901, 97830, 54071]:
    print("Password correct, the password is the flag!")
  else:
    print("Password incorrect, please try again")

if __name__ == "__main__":
  main()
