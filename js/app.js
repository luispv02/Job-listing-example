//Mostramos el archivo .JSON en CONSOLA o HTML  ----- AJAX
const xhttp = new XMLHttpRequest();//Hacemos la solicitud

xhttp.open('GET', 'data.json', true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        //console.log(this.responseText);//Muestra el .json en texto
        let datos = JSON.parse(this.responseText);//Muestra el .json en objetos 
        console.log(datos)
        let resultado = document.querySelector('#items');
        resultado.innerHTML = '';

        for(let i of datos){
            //console.log(i.company)
            resultado.innerHTML += `
                <div class="job">
                    <img src="${i.logo}"></img>
                    <div class="flex-one one">
                        <p class="company">${i.company}</p>
                        <p class="new">${i.new}</p>
                        <p class="featured">${i.featured}</p>
                        <p class="position">${i.position}</p>
                        <p class="postedAt">${i.postedAt}</p>
                        <li class="contract">${i.contract}</li>
                        <li class="location">${i.location}</li>
                    </div>
                    
                    <div class="flex-two two">    
                        <a href="#" class="role">${i.role}</a>
                        <a href="#" class="level">${i.level}</a>
                        <a href="#" class="languages">${i.languages}</a>
                        <a href="#" class="tools">${i.tools}</a>
                    </div>
                </div>
            `
        }
    }
};
