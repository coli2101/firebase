import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string;
  correo: string;
  mensajeInput: string;
  mensajes: Observable<any[]>;
  mensajesRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase){
    this.mensajesRef = db.list('mensajes');
    this.mensajes = this.mensajesRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  title = 'clase-firebase';

  enviarMensaje(){
    this.mensajesRef.push({nombre:this.nombre,correo:this.correo,mensaje:this.mensajeInput});
  }

  borrar(key: string){
    this.mensajesRef.remove(key);
  }


}
