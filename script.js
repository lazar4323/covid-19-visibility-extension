replaceText(document.body)

function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    }else if(element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/deaths/gi)){
            element.parentElement.style.color = "gray"
            element.parentElement.style.backgroundColor = "gray"
        }
        if(element.textContent.match(/coronavirus/gi)){
            element.parentElement.style.color = "black"
            element.parentElement.style.backgroundColor = "black"
        }
        // element.textContent = element.textContent.replace(/coronavirus/gi, 'Nema')
    }
}