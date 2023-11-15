import { galleryItems } from './gallery-items.js';

// Change code below this line



const galeria = document.querySelector(".gallery");

/* creo los a, li de las img  */
const imgs =(()=>{
    galleryItems.forEach((x)=>{
        
        const li = document.createElement("li");
        galeria.appendChild(li);
        li.classList.toggle("gallery__item");

        const a = document.createElement("a"); 
        a.href=x.original;
        li.appendChild(a);   
        a.classList.add("gallery__link");
       
        const img = document.createElement("img");
        img.src= x.preview;      
        img.alt= x.description;
        img.classList.add("gallery__image");
        a.append(img);

    })
})

imgs();

/* agrandar imagen  */
galeria.addEventListener("click", (evento)=>{
    evento.preventDefault();
    const newImg = evento.target.parentElement.href;
    instan(newImg);    
})



function instan(event){
    const instance = basicLightbox.create(`<img src="${event}" width="800" height="600">`);
    instance.show();
    document.addEventListener("keydown", event => {
        if(event.code == "Escape"){     
          instance.close();
        }
    
    });

    
}