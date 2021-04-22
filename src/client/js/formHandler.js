import { validateUrl } from "./checkURL"
import "babel-polyfill"
const postData = async (url = '',data = {}) => {
    const responseData = await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try{
        return await responseData.json()
    }catch(e){
        console.log(e)
    }
}

const handleSubmit = async (event) => {
    event.preventDefault()
    let entryURL = document.getElementById("article-url").value
    if(validateUrl(entryURL)){
        postData('http://localhost:8081/add' , {url: entryURL} ).then(responseData => {
            document.getElementById('text').innerHTML = `Text: ${responseData.text}`
            document.getElementById('agreement').innerHTML = `Agreement: ${responseData.agreement}`
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${responseData.subjectivity}`
            document.getElementById('confidence').innerHTML = `Confidence: ${responseData.confidence}`
            document.getElementById('irony').innerHTML = `Irony: ${responseData.irony}`
            document.getElementById('score_tag').innerHTML = `Score_tag: ${responseData.score_tag}`

    })
    }else{
        alert("Please, Enter a valid URL")
    }
}

export{
    handleSubmit
}