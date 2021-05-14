window.onload = () => {
    
    const homeButton = document.getElementById("Home")
    const homepage = document.getElementById("homepage")
    const addArea = document.getElementById("addArea")
    const nasaForm = document.getElementById("NASA-Form")
    const missionToMars = document.getElementById("Mission-To-Mars")
    const MMS = document.getElementById("MMS")
    const nasaSpacex = document.getElementById("nasa-spacex")
    const submitbtn = document.getElementById("submit")
 


    missionToMars.addEventListener('click', () => {
        homepage.style.display = "none"
        addArea.style.display = "flex"
        nasaForm.style.display = "flex"
        MMS.style.display = "flex"
        nasaForm.style.flexDirection = "column"
        nasaForm.style.justifyContent = "left"
        nasaForm.style.alignItems = "left"
    })

   homeButton.addEventListener('click', () => {
        homepage.style.display = "flex"
        addArea.style.display = "none"
        MMS.style.display = "none"
        nasaSpacex.style.width = "79.5rem"
        nasaSpacex.style.height = "28rem"
        nasaSpacex.style.marginTop = "1rem"
        nasaSpacex.style.marginLeft = "2rem"
        nasaSpacex.style.marginRight = "2rem"
        nasaSpacex.style.marginBottom = "1rem"
        nasaSpacex.style.float = "center"


    })


    
}    