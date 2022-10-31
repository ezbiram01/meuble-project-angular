import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Member1Service } from 'src/app/services/member1.service';

@Component({
  selector: 'app-list-memeber1',
  templateUrl: './list-memeber1.component.html',
  styleUrls: ['./list-memeber1.component.css']
})
export class ListMemeber1Component implements OnInit {
  Memberlist:any=[];
  constructor( private member1Service :Member1Service,
    private toastr: ToastrService) { }

ngOnInit(): void {
  this.getAllMember();
}

getAllMember(){
  this.member1Service.getALL().subscribe({
    next: (res) => {
      this.Memberlist = res ; 
    },
    error: (e) => console.error(e), 
  }) 
}



deleteMember(id:number){
  if (confirm('Voulez vous vraiment suppeime  cette Membres !!?')) {
  this.member1Service.delete(id).subscribe({
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
