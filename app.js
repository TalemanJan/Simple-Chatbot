let chat={
"what is your name?":"my name is chatbot",
"what do you do":"I answer question",
"where are you from":"I am from pakistan"

}



for(let key in chat){
    let question=prompt("ask a question")
if(question==key){
    document.write(chat[key])
}
else {
    document.write("ask a valid question")
}






}