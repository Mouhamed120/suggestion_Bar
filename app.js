const input = document.querySelector("input")
let data = [
    "Mouhamed NDAO","Moustapha NDIAYE","Mamadou NDAO","Karim NDAO","Matar Sène","Alassane Seck","Adama FALL",
    "Doudou DIALLO","Aliou DIOUP AP","Marc AHETO","Lamp FAYE","Sidy Cissé","Thierno BA","Fallou Mbengue","Fallou FALL",
    "Bibi sy","Mady Sène","Sohna","Khady DIOP","Oumy YADE","Ndaye Fatou YADE","Babacar SARR","Atoumane Faye",
    "Albert SARR","Abba BOYE","Anta TOURE","Tidiane DIEHIOU","Cheikh Diop","Youssou DIOM","Zoubey ka","Mbouhamed Mbodj",
    "Chekh Ibrahim Thioune","Mr. NGUER","Abib WADE","Lamine NDAO"
]

const ul = document.querySelector(".auto-complete-box")


input.onkeyup = (e) =>{
    const req = e.target.value.toLocaleLowerCase()
    if(req !== ""){

        let tabs = data.filter(elt => elt.toLocaleLowerCase().includes(req))
        if(tabs.length > 0){
            ul.classList.add("show")
            // Appel à la fonction display()
            display(tabs)

            const links = document.querySelectorAll("li")
           
            links.forEach(li => {
                li.addEventListener("click" , () =>{
                 
                   input.value = li.textContent

                })
                
                if(li.innerText === ""){
                    ul.removeChild(li)
                }
            })
            input.className = ""
        
        }else{
            
            input.className = "red"

        }
        //   input.className = ""


    }else{
        ul.innerHTML = ""
        ul.classList.remove("show")
        input.className = ""
        
    }
  
}






const display = (tabs) =>{
    
         ul.innerHTML = tabs.map((elt) =>{
            //   console.log(elt);
              return `<li>${elt}<li>`
          }).join("")

        

}

