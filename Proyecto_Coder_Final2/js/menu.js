programarMenuInicial();

const mainContainer = document.getElementById("appContainer");

function programarMenuInicial() {


      cargarPosts();
   
}

function cargarPosts() {
   fetch('http://127.0.0.1:5500/js/data/menues.json')
      .then((response) => response.json())
      .then((json) => mostrarDatos(json))
      .catch(() => alert("intente de nuevo"))
}

function mostrarDatos(data) {
  const div = document.getElementById("appContainer");
   div.innerText = "";
   data.forEach(blogPost => {
 
      const { img, nombre,valor, id } = blogPost

      const divPost = document.createElement("div");
      divPost.innerHTML = ` <div>
                            <img src='${img}'/> 
                            <p>
                           ${nombre}
                          </p>
                          <p>
                          ${valor}
                         </p>
                        </div>
                         
                       
                          
                                         
      `
      div.appendChild(divPost)

   })
}
