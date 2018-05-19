import sys

try:
    if len(sys.argv) == 2 and not sys.argv[1] == "":
        print("Hey " + sys.argv[1] + ". I- Python 3- hope that you're doing well!");
    else:
        print("Whoops!");
except:
    print("When you see this, please install the correct version of Python (Python 3 is used).");
