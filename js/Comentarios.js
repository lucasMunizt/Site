class Comentarios extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build(){

   
        const componetRoot = document.createElement("div");
        componetRoot.setAttribute("class","container")
        
        const componet = document.createElement("div");
        componet.setAttribute("class","comentarios")
        
        const autor = document.createElement("strong");
        autor.textContent = this.getAttribute("autor");

        const paragraph = document.createElement("p");
        paragraph.textContent = this.getAttribute("paragraph");

        const fonte = document.createElement("span");
        fonte.textContent = this.getAttribute("fonte");

        componet.appendChild(autor);
        componet.appendChild(paragraph);
        componet.appendChild(fonte);
        componetRoot.appendChild(componet);

        return componetRoot;
    }
    styles(){
        const card = document.createElement("style");
        card.textContent =`
      
        .container{
            font-size: 1.00em;
          
        }

        .comentarios span{
            color: red;
        }
        `;

        return card;
    }


}
customElements.define('anotacao-2',Comentarios);


    // let slider = document.querySelector('.slides');
    // let sliders = document.querySelector('.slide');
    // let contador=0;
    // let pressend = false;
    // let startx;
    // let x;
    // slider.addEventListener('mousedown',(e)=>{
    //     pressend = true;
    //     startx = e.offsetX - sliders.offsetLeft;
    //     slider.style.cursor = 'grabbing'
    // })

    // slider.addEventListener('mouseenter',(e)=>{
    //     slider.style.cursor = 'grab' 
    // })

    // //  slider.addEventListener('mouseleave',()=>{
    // //      slider.style.cursor = 'default' 
    // //  })

    // slider.addEventListener('mouseup',(e)=>{
    //     slider.style.cursor = 'grab' 
    // })

    //  slider.addEventListener('mouseup',(e)=>{
    //      pressend = false; 
    //  })


    // slider.addEventListener('mousemove',(e)=>{
    //     contador++;
    //     if(!pressend) return;
    //     e.preventDefault();

    //     x = e.offsetX;

    //     sliders.style.trasform = `translateX(${-contador * 100})%`;
    //     Checkboundary()
    // })

    // function Checkboundary(){
    //     let outer = slider.getBoundingClientRect();
    //     let inner = sliders.getBoundingClientRect();
        
    //     if(parseInt(sliders.style.trasform)>0){
    //         contador = 0;
    //         sliders.style.trasform = '0px';
    //     }
    //     // else if(inner.right < outer.right){
    //     //     sliders.style.left = `-${inner.width - outer.width}px`;
    //     // }

    // }
   /* function ClikProximo(){
        let startx;
         let x;
        let slider = document.querySelector('.slides');
         let sliders = document.querySelector('.slide');
         teste = false;
         slider.addEventListener('click',(e)=>{
                 teste = true;
                 console.log()
             })
         
    }*/
    
   