import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Member3Service } from 'src/app/services/member3.service';

@Component({
  selector: 'app-list-memeber3',
  templateUrl: './list-memeber3.component.html',
  styleUrls: ['./list-memeber3.component.css']
})
export class ListMemeber3Component implements OnInit {
  Memberlist:any=[];
  constructor( private member3Service :Member3Service,
    private toastr: ToastrService) { }

ngOnInit(): void {
  this.getAllMember();
}

getAllMember(){
  this.member3Service.getALL().subscribe({
    next: (res) => {
      this.Memberlist = res ; 
    },
    error: (e) => console.error(e), 
  }) 
}



deleteMember(id:number){
  if (confirm('Voulez vous vraiment suppeime  cette Membres !!?')) {
  this.member3Service.delete(id).subscribe({
    next: (res) => {
      if(res.status=="success"){
        this.toastr.success('Suppression effectuée avec success', 'Success', { timeOut: 2000, });
        this.getAllMember();
      }else{
        this.toastr.error('Erreur de Suppression', 'Erreur', { timeOut: 2000, });
      }
    },
    error: (e) => console.error(e), 
  }) 
}
}

getAllUsers() {
  throw new Error('Method not implemented.');
}

}
