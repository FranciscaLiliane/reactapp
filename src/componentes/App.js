import React from "react";
import "./AppStyle.scss";

const title = process.env.REACT_APP_TITLE

export default class App extends React.Component{
    
  
    calcular() {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        document.getElementById("resultado").innerHTML = num1 + num2;
        console.log(title);
      }
     
    render(){
        return(
            <div class="conteiner">
               <h1 className="calculadora" >{title}</h1>
               <input type="number" class="form-control" className="numbEsquerdo" id="num1"/>
               <input type="number" class="form-control" className="numbDireito" id="num2"/>
               <button class="btn" onClick={this.calcular}>+</button>
               <h2 id="resultado"></h2>
            </div>

        );
    }
}

