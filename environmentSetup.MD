
* Basic command.

* * * globally install
- npm install -g typescript

* * * to compile
- tsc filename.ts

* * * for creating tsconfig.json file
- tsc -init

In tsconfig.json file we can change the directory 

 "outDir": "./output", 
 "rootDir": "./src",  
Then we can run file using only “tsc” command

We can also on -w flag like that way “tsc -w” to start auto watch  mode  