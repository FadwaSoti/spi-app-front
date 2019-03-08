import { Component, State, Prop } from '@stencil/core';
import {RouterHistory} from "@stencil/router";

@Component({
    tag: 'formation-ajouter',
    styleUrl: 'formation-ajouter.scss'

})
export class AjouterEnseignant {
    @State() codeFormation: string;
    @State() debutAccreditation: Date;
    @State() diplome: string;
    @State() doubleDiplome: string;
    @State() finAccreditation: Date;
    @State() n0Annee: number;
    @State() nomFormation: string;

    @Prop() home : RouterHistory;

    reculer(){
        this.home.goBack();
      }

    postArticle(ens) {
    ens.preventDefault();
    console.log("!");
      const codeFormation = this.codeFormation;
      const debutAccreditation = this.debutAccreditation;
      const diplome = this.diplome;
      const doubleDiplome = this.doubleDiplome;
      const finAccreditation = this.finAccreditation;
      const n0Annee = this.n0Annee;
      const nomFormation = this.nomFormation;
     
    
    const payload = {
        codeFormation,
        debutAccreditation,
        diplome,
        doubleDiplome,
        finAccreditation,
        n0Annee,
        nomFormation,
    };
   
    

    fetch("https://api-dosispi.cleverapps.io/formations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(res) { this.reculer();
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  }

  componentWillLoad() {
    this.render();
  }
  
    render() {
        return (
            


    <form id="formee">
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <legend>&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;<b>Veuillez remplire le formulaire pour ajouter une formation : </b></legend>
        <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-half">

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>codeFormation:</b><input type="text" placeholder="Veuillez saisir le code de la formation..." class="input is-primary " onInput={(e: any) => (this.codeFormation = e.target.value)} />
                </p>
            </div>
        

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Date debut accreditation:</b><input type="text" placeholder="Veuillez saisir la date d'accreditation de la formation..." class="input is-primary " onInput={(e: any) => (this.debutAccreditation = e.target.value)} />
                </p>
            </div>
        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Diplome:</b><input type="text" placeholder="Veuillez saisir le diplome..." class="input is-primary " onInput={(e: any) => (this.diplome = e.target.value)} />
                </p>
            </div>
        
        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Double diplome:</b><input type="text" placeholder="Veuillez saisir s'il sagit d'un double diplome..." class="input is-primary " onInput={(e: any) => (this.doubleDiplome = e.target.value)} />
                </p>
            </div>
        </div>
       
        <div class="column is-half">
     
        
        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Date de fin d'ccreditation:</b><input type="text" placeholder="Veuillez saisir la date de fin d'accreditation..." class="input is-primary " onInput={(e: any) => (this.finAccreditation = e.target.value)} />
                </p>
            </div>
        
       
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Nombre d'années:</b><input type="text" placeholder="Veuillez saisir le nombres d'années de la formation..." class="input is-primary " onInput={(e: any) => (this.n0Annee = e.target.value)} />
                </p>
            </div>
    

        
            <div class="field">
                <p class="control is-expanded">
                <i class="fas fa-angle-double-right"></i>
                    <b>Nom de la formation:</b><input type="text" placeholder="Veuillez saisir le nom de la formation..." class="input is-primary " onInput={(e: any) => (this.nomFormation = e.target.value)} />
                </p>
            </div>
    
        </div>
         </div>
         
          <stencil-route-link url="/formation"  >
                  <button id="IdButton"
                          onClick={this.postArticle.bind(this)}
                          class="button is-link" 
                        >   Ajouter
                        </button>

               </stencil-route-link>&nbsp;&nbsp;

          <input type="reset" value="Vider les champs" class="button is-link" />
          <br></br><br></br>
          <br></br><br></br>
          <br></br><br></br>
          <br></br><br></br>
          <br></br>
 
          
  </form>
      
        );
    }
}