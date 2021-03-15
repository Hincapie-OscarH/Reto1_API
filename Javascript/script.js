function Character(){
    let charId = document.getElementById("Captura").value
    let ID = Number.parseInt(charId);
    

    if(ID === 0){
        swal("Ingrese un número de personaje");
    }
    for(ID=1; ID <= charId  ; ID++){


        let url = `https://rickandmortyapi.com/api/character/${ID}`    
    fetch(url)
        .then(res => res.json())
        .then(data => {
        
        let html =
        `<section class="mt-4" id="aboutSection">
            <div class="px-5 col-lg-11 bg-primary d-flex flex-column align-items-center justify-content-center">
                <img class="img-fluid rounded-circle img-size w-50 mt-2" src="${data.image}" alt="characterPicture" id="charImg">
                    <header class="mt-3 text-center text-white">
                    <h3 class="font-weight-lighter" id="charName">
                    ${data.name}
                    </h3>
                    <h6 class="font-weight-lighter">
                        Species: <b id="charSpecies">${data.species}</b>
                    </h6>
                    <h6 class="font-weight-lighter">
                        Status: <b id="charStatus">${data.status}</b>
                    </h6>
                    <h6 class="font-weight-lighter">
                        Status: <b id="charGender">${data.gender}</b>
                    </h6>
                    <h6 class="font-weight-lighter">
                        Origin: <b id="charOrigin">${data.origin.name}</b>
                    </h6>
                </header>
            </div>
        </section>`

            document.getElementById("Contenido").innerHTML += html
       })
    }
    
        
}