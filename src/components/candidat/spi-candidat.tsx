import {Component, Prop, State, Method} from '@stencil/core';
import { Enseingnant } from '../../global/enseignant';


@Component({
  tag: 'spi-candidat',
  styleUrl: 'candidat.scss',
  shadow: true
})
export class candidat {
  
@State() data :any[] ;
@Prop()
     name: string='/fetch/';
     
    apiRootUrl: string = 'https://dosispi.cleverapps.io/enseignants';
     @Prop() enseignant :Enseingnant
@Method()
    load () {
    
      fetch(`${this.apiRootUrl}`).then(rsp => {
        return   rsp.json();
    
      }).then(data => {
        this.data = data;
    
      }).catch((err) => {
        console.error('Could not load data', err);
      }); 
    }
  
    componentWillLoad() { 
      console.log('Component is being rendered');
  
      this.load();
    }
    componentDidLoad() {
      this.load();
  
      console.log('Component has been rendered');
    }
  
    componentDidUpdate() {
      this.load();
  
      console.log('Component did update');
    }

  render() {
    if(this.data && this.data.length>0 ) {
      return (
      <div>

{
  this.data.map((data: Enseingnant) =>
                  
<div>
    <div class="card">
  <header class="card-header">
        <p class="card-header-title">{data.nom} {data.prenom}</p>
        <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>

  <div class="card-content">
    <div class="content">
      Mobile: {data.mobile} <br></br>
      Email UBO: {data.emailUbo}
      <br></br>
    </div>
  </div>

  <footer class="card-footer">
    <a href="/candidat-detail" class="card-footer-item">Details</a>
    <a href="#" class="card-footer-item">Modifier</a>
    <a href="#" class="card-footer-item">Supprimer</a>
  </footer>
</div>
  </div>
  )}          

    
      </div>
      );
      }else{
        return"nothing found!"
      }

  }
}