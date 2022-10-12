console.log(funl("str1234!@"))

function funl(str){
    if(str == "") return ""
    else return funl(str.substr(1)) + str.charAt(0)
}