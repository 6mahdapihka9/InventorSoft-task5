import {Component, OnInit, Output} from '@angular/core';
import { Album } from 'src/app/entities/album.model';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { AlbumService } from 'src/app/services/album.service';
import {DocumentChangeAction} from '@angular/fire/firestore';
import { AngularSvgIconModule } from 'angular-svg-icon';
@Component({
  selector: 'app-album-component',
  templateUrl: './album-component.component.html',
  styleUrls: ['./album-component.component.scss', './albums-adder.scss'],
  exportAs: 'ngForm'
})

export class AlbumComponentComponent implements OnInit {
  isAdderActive = true;
  albumObj: Album;
  allAlbums: DocumentChangeAction<unknown>[];
  isUpdating = false;
  areYouSureActive = true;
  albumForm: FormGroup;
  idToOperate: any;
  addOrEditText = 'Add album';
  // Упрощение доступа к директивам formControlName
  get name(): FormControl{
    return this.albumForm.get('name') as FormControl;
  }
  get band(): FormControl{
    return this.albumForm.get('band') as FormControl;
  }
  get genre(): FormControl{
    return this.albumForm.get('genre') as FormControl;
  }
  get label(): FormControl{
    return this.albumForm.get('label') as FormControl;
  }
  get producer(): FormControl{
    return this.albumForm.get('producer') as FormControl;
  }
  constructor(private AS: AlbumService) {
    this.albumForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      band: new FormControl(null, [Validators.required]),
      genre: new FormControl(null, [Validators.required]),
      label: new FormControl(null, [Validators.required]),
      producer: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.readAl();
  }
  activateAdder(): void {
    this.isAdderActive = !this.isAdderActive;
    this.addOrEditText = (!this.isUpdating) ? 'Add album' : 'Edit album' ;
  }
  activateAreYouSure(id: any): void{
    this.idToOperate = id;
    this.areYouSureActive = false;
  }
  closeFormAl(): void{
    this.activateAdder();
    this.albumForm.reset();
  }
  openUpdateFormAl(album: Album, id: any): void{
    this.isUpdating = true;
    this.activateAdder();
    this.idToOperate = id;
    this.name.setValue(album.name);
    this.band.setValue(album.band);
    this.genre.setValue(album.genre);
    this.label.setValue(album.label);
    this.producer.setValue(album.producer);
  }
  onSubmit(): void {
    if (!this.isUpdating){
      this.createAl();
    } else {
      this.updateAl();
    }
    this.isAdderActive = !this.isAdderActive;
  }
  createAl(): void {
    this.albumObj = {
      id: '' + this.allAlbums.length,
      name: this.name.value,
      band: this.band.value,
      genre: [this.genre.value],
      label: [this.label.value],
      producer: [this.producer.value],
      releaseDate: new Date()
    };
    this.save();
  }
  save(): void {
    this.AS.createAlbum(this.albumObj);
  }
  readAl(): void{
    this.AS.readAlbums().subscribe(data => (this.allAlbums = data));
  }
  // сравнить поля формы и альбома который редактируется
  // и передать как объект в сервис и апдейтнуьт по ид
  updateAl(): void{
    this.albumObj = {
      id: '' + this.idToOperate,
      name: this.name.value,
      band: this.band.value,
      genre: [this.genre.value],
      label: [this.label.value],
      producer: [this.producer.value],
      releaseDate: new Date()
    };
    this.AS.updateAlbum(this.albumObj, this.albumObj.id);
  }
  deleteAl(): void{
    this.AS.deleteAlbum(this.idToOperate);
  }
  changeList(genreListDiv: HTMLDivElement): void {
    console.log(genreListDiv.textContent);
  }
  deleteSpan(): void{

  }
  // (change)="changeList(genreListDiv)"
}
