import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/core/productos.service';
import { UploadService } from 'src/app/services/core/upload.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  // producto: any;
  producto: any;
  // producto: any;

  plataformaBindingsList = [
    { value: 1, label: 'Xbox' },
    { value: 2, label: 'PS' },
    { value: 3, label: 'PC' },
  ];
  plataformaSelected = null;

  generoBindingsList = [
    { value: 1, label: 'Acción' },
    { value: 2, label: 'Disparos' },
    { value: 3, label: 'Estrategia' },
    { value: 4, label: 'Hack and Slash' },
    { value: 5, label: 'Simulación' },
    { value: 6, label: 'Deporte' },
    { value: 7, label: 'Carreras' },
    { value: 8, label: 'Aventura' },
    { value: 9, label: 'Rol' },
  ];
  generoSelected = null;

  clasificacionBindingsList = [
    { value: 1, label: 'TODOS' },
    { value: 2, label: 'TODOS + 10' },
    { value: 3, label: 'ADOLESCENTES' },
    { value: 4, label: 'MADURO +17' },
    { value: 5, label: 'ADULTOS ÚNICAMENTE +18' },
    { value: 6, label: 'CLASIFICACIÓN PENDIENTE' },
  ];
  clasificacionSelected = null;

  fechaLanzamiento: string;
  id: number;

  constructor(private router: ActivatedRoute, private productoSvc: ProductosService, private uploadSvc: UploadService) {
    this.router.params.subscribe((param: any) => {
      this.id = parseInt(param['id']);
      this.getProductoById(param['id']);
    }
    );
  }

  ngOnInit(): void {

  }

  getProductoById(id: string) {
    // this.productoSvc.getProductoById(id).subscribe((data: any[]) => {
    //   this.producto = data;
    // });

    this.productoSvc.getProductoById(id).subscribe((data: any) => {
      this.producto = data;
      this.plataformaSelected =
        this.plataformaBindingsList.find(x => x.value === data.producto.idPlataforma);
      ;
      this.generoSelected =
        this.generoBindingsList.find(x => x.value === data.producto.idGenero)
        ;
      this.clasificacionSelected =
        this.clasificacionBindingsList.find(x => x.value === data.producto.idClasificacion)
        ;
      this.fechaLanzamiento = new Date(data.producto.fechaLanzamiento).toISOString().split('T')[0];
    });
  }

  updateProducto = (form: NgForm) => {
    this.productoSvc.updateProduct(form, this.id);
  }




  //
  // Properties
  title = 'dropzone';
  formData = new FormData();
  files: File[] = [];
  isLoadingFile: boolean = false;
  loadingTitle: string = '';
  validateMessage: string[] = [];
  urlBase = '';
  filesData: any = {};

  // DropZone Events
  async onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  // Drop Zone Validations
  validateMinFiles() {
    let blnReturn: boolean = true;

    if (this.files.length < 1) {
      blnReturn = false;
      this.validateMessage[0] = `
      <b>Recuerde</b> que es necesario anexar el <b>Documento</b>
      en formato <b>PDF</b> (*.pdf), o bien en formato tipo <b>Imágen</b> (*.png|*.jpg)
      para poder completar su solicitud.
      `;
    }
    return blnReturn;
  }
  validateExtensionsFiles() {
    let blnReturn: boolean = true;

    if (this.files.length == 1) {
      let extFile = this.files[0].name.split('.').pop();
      if (extFile != 'pdf' && extFile != 'png' && extFile != 'jpg') {
        blnReturn = false;
        this.validateMessage[1] = `
        El tipo de archivo seleccionado <b>NO es valido</b>.
        Solo es permitido archivos en <b>formato PDF</b> (*.pdf)
        y tipo <b>Imágen</b> (*.png|*.jpg)
        `;
      }
    }
    return blnReturn;
  }
  // Businnes Logic Rules
  uploadFiles(id:string) {
    // Files Form Data
    this.files.forEach(file => {
      this.formData.append("files", file);
    });

    // Import Action
    this.isLoadingFile = true;
    this.loadingTitle = `Cargando ${this.files.length} Archivo(s)`;

    this.uploadSvc.uploadFiles(this.formData, id)
      .subscribe((result: any) => {
        // Not Loading
        this.isLoadingFile = false;
        // Clean Controls
        this._cleanFormData();
        // Get Data
        this.filesData = result

        this.productoSvc.updateImagen(id, (<any>result).name);

        // Show Alert
        // notice({
        //   text: "I'm a notice with modules, and my module options are checked by TypeScript.",
        //   modules: new Map([
        //     // This requires `"downlevelIteration": true` in your TypeScript config.
        //     ...defaultModules,
        //     [PNotifyConfirm, {
        //       confirm: true,
        //       buttons: [{
        //         text: 'Ok',
        //         primary: true,
        //         click: (notice: Notice) => notice.close()
        //       }]
        //       // ***
        //       // Notice the type assertion here. It tells TypeScript that the options
        //       // are for the Confirm module.
        //       // ***
        //     }] as ModuleEntry<typeof PNotifyConfirm>,
        //   ])
        // });
        // Show Attachments

      }, (err: any) => {
        console.log('Error al intentar importar el archivo:', err);

        // Clean Controls
        this._cleanFormData();
      });
  }

  // Private Functions and Methods
  private _cleanFormData() {
    this.files = [];
    this.isLoadingFile = false;
    this.formData = new FormData();
  }

}
