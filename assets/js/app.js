document.getElementById("toggle").addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById("body").classList.toggle("overflow-hidden");
});
var lastScrollTop=0;

window.addEventListener("scroll",function(){
    var currentScroll=window.pageYOffset || document.body.scrolltop;
    if(currentScroll>lastScrollTop){
      document.getElementById("nav-header").classList.remove("header-in");
      document.getElementById("nav-header").style.opacity=0;
    }else{
      document.getElementById("nav-header").classList.add("header-in");
      document.getElementById("nav-header").classList.add("solid");
      document.getElementById("nav-header").style.opacity=1;
    if(currentScroll<=3){
      document.getElementById("nav-header").classList.remove("header-in");
      document.getElementById("nav-header").classList.remove("solid");
    }
  }
  lastScrollTop=currentScroll;
},false);

var coders = [{name:"Fiorella Quispe", url:"1.png"},
              {name:"Lourdes Vilchez", url:"2.png"},
              {name:"Leydi Maldonado", url:"3.png"},
              {name:"Miriam Mendoza", url:"5.png"},
              {name:"Elizabeth Condori", url:"6.png"},
              {name:"Arantza Burga", url:"7.png"},
              {name:"Grecia Rayme", url:"8.png"},
              {name:"Janine Vega", url:"9.png"},
              {name:"Rosario Felix", url:"10.png"},
              {name:"Jenny Velasquez", url:"12.png"},
              {name:"Nadia Cuadros", url:"13.png"},
              {name:"Michell More", url:"14.png"},
              {name:"Marilu Llamoca", url:"15.png"},
              {name:"Mariel Garcia", url:"16.png"},
              {name:"Fiorella Cisneros", url:"17.png"},
              {name:"Geraldine Chauca", url:"18.png"},
              {name:"Yelitza Choque", url:"19.png"},
              {name:"Stephanie Hiyagon", url:"20.png"},
              {name:"Rocio Emma Tapia", url:"21.png"},
              {name:"Danna Franco", url:"22.png"},
              {name:"Flor Retamozo", url:"23.png"},
              {name:"Nathaly Pacheco", url:"24.png"},
              {name:"Erika Vidal", url:"25.png"},
              {name:"Katherine Ortega", url:"26.png"},
              {name:"Brilly Majuan", url:"27.png"},
              {name:"Flor de cantuta Tello", url:"28.png"},
              {name:"Leslie Avendaño", url:"29.png"},
              {name:"Cindy Mendoza", url:"30.png"},
              {name:"Annia Flores", url:"31.png"},
              {name:"Betzi Loayza", url:"32.png"},
              {name:"Aida Sulca", url:"33.png"},
              {name:"Mimi Gutierrez", url:"34.png"},
              {name:"Nakarid Jave", url:"35.png"},
              {name:"Angie Condor", url:"36.png"},
              {name:"Maia Rojas", url:"37.png"},
              {name:"Ariana Cabana", url:"38.png"},
              {name:"Flor Condori", url:"39.png"},
              {name:"Mitchell Rodriguez", url:"40.png"},
              {name:"Naomi Villanueva", url:"41.png"},
              {name:"Mary Catillo", url:"42.png"},
              {name:"Miriam Peralta", url:"43.png"},
              {name:"Karin Alejo", url:"44.png"},
              {name:"Liliana Peña", url:"45.png"},
              {name:"Ruth Salvador", url:"46.png"},
              {name:"Wendy Reyes", url:"48.png"},
              {name:"Maria Grecia", url:"50.png"},
              {name:"Ana Durand", url:"51.png"},
              {name:"Glisse Jorge", url:"52.png"},
              {name:"Neiza Nuñez", url:"53.png"},
              {name:"Sandra Solorzano", url:"54.png"}];

    function divCoders(array){
      var galeria=document.getElementById("div-contenedor");
      var dfm=document.createDocumentFragment();
      array.forEach(function(elemento){
        var liContenedor=document.createElement("li");
        var divContenedor=document.createElement("div");
        var figureContenedor=document.createElement("figure");
        var imgContenedor=document.createElement("img");
        var figContenedor=document.createElement("figcaption");
        var spanContenedor=document.createElement("span");

        liContenedor.setAttribute("class","li-imagen");
        divContenedor.setAttribute("class","div-coders");
        figureContenedor.setAttribute("class","figuras");
        imgContenedor.setAttribute("class","imagen");
        spanContenedor.setAttribute("class","overlay");
        imgContenedor.setAttribute("src","assets/img/students" + "/" + elemento.url);

        spanContenedor.appendChild(document.createTextNode(elemento.name));
        figContenedor.appendChild(spanContenedor);
        figureContenedor.appendChild(figContenedor);
        figureContenedor.appendChild(imgContenedor);
        divContenedor.appendChild(figureContenedor);
        liContenedor.appendChild(divContenedor);

        dfm.appendChild(liContenedor);
        galeria.appendChild(dfm);
      });
    }
    divCoders(coders);
