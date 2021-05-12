window.onload = () => {
    const homeButton = document.getElementById("Home")
    const homepage = document.getElementById("homepage")
    const addArea = document.getElementById("addArea")
    const nasaForm = document.getElementById("NASA-Form")
    const missionToMars = document.getElementById("Mission-To-Mars")
    


    missionToMars.addEventListener('click', () => {
        homepage.style.display = "none"
        addArea.style.display = "flex"
        nasaForm.style.display = "flex"
        nasaForm.style.flexDirection = "column"
        nasaForm.style.justifyContent = "justify"
        nasaForm.style.alignItems = "center"
    })

   homeButton.addEventListener('click', () => {
        homepage.style.display = "flex"
        addArea.style.display = "none"
    })

    

 

    


}    