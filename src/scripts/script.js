function displayImgs(data) {
    let images = data.message
    images.forEach((img, index) => {
        let newImg = document.createElement("img")
        newImg.id = `dog-img${index+1}`
        newImg.src = img
        document.body.appendChild(newImg)
    })
}


const button = document.querySelector("#generate")
button.addEventListener("click", (event) => {
    event.preventDefault()
    let breedInput = document.querySelector("#breed-input").value
    fetch(`https://dog.ceo/api/breed/${breedInput}/images/random/3`)
        .then(body => {
            return body.json()
        })
        .then(data => displayImgs(data))
        .catch(error => console.log(error))
})