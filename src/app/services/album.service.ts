import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Album } from 'src/app/entities/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private firestore: AngularFirestore) { }

  createAlbum(album: Album): any{
    delete album.id;
    return this.firestore.collection('albums').add(album);
  }
  readAlbums(): any {
    return this.firestore.collection('albums').snapshotChanges();
  }
  updateAlbum(album: Album, id: any): void{
    delete album.id;
    this.firestore// .doc('albums/' + album.id).update(album)
      .collection('albums')
      .doc(id)
      // .set(album)
      .update({
        name: album.name,
        band: album.band,
        genre: album.genre,
        label: album.label,
        producer: album.producer,
        releaseDate: album.releaseDate
      })
      .then(() => {
        console.log('Document written with ID: ' + id);
      })
      .catch(() => {
        console.error('Error adding document: ' + id);
      });
  }
  deleteAlbum(albumsId: string): void{
    this.firestore.doc('albums/' + albumsId).delete()
      .then(() => {
        console.log('Document deleted with ID:' + albumsId);
      })
      .catch(() => {
        console.error('Error deleting document: ' + albumsId);
      });
  }
}
