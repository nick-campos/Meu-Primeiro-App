import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
    name = "Nicolas";
    idButton = "botao";
    deveMostrarTitulo = true;
    listItems = ["um", "dois", "tres"]

    @Input("name") minhaProps!: string;

    @Output() emitindoValorName = new EventEmitter<string>();
  
// atualizaBooleano(valor: boolean){
//    this.meuBooleano = valor;
// }

submit(){
  this.emitindoValorName.emit(this.name);
  this.enviaFormularioService.enviaInformacaoParaBackend("enviando informação")
  }
}