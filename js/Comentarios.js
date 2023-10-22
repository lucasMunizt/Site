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
            font-size: 1.02em;
          
        }

        .comentarios span{
            color: red;
        }
        `;

        return card;
    }


}
customElements.define('anotacao-2',Comentarios);




   