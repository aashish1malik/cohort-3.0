// const a="aashish";
// console.log(a);
// console.log(1);
// console.log("hello"); 

function anagram(str1,str2){
    const sorteds1=str1.toLowerCase().split("").sort().join("");
    const sorteds2=str2.toLowerCase().split("").sort().join("");
    if(sorteds1==sorteds2){
        return true;
    }
    else {
        return false;
    }

}
console.log(anagram("spar","rasp"));

// git init                     # if not already initialized
// git remote set-url origin https://github.com/aashish1malik/jsquestion.git
// git add .                    # stage all files
// git commit -m "Initial commit"   # commit files
// git branch -M main           # rename the current branch to 'main'
// git push -u origin main      # push to GitHub
