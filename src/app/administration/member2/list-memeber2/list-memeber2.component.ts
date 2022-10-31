import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Member2Service } from 'src/app/services/member2.service';

@Component({
  selector: 'app-list-memeber2',
  templateUrl: './list-memeber2.component.html',
  styleUrls: ['./list-memeber2.component.css']
})
export class ListMemeber2Component implements OnInit {
  Memberlist:any=[];

  
  constructor( private member2Service :Member2Service,
    private toastr: ToastrService) { }

ngOnInit(): void {
  this.getAllMember();
}


getAllMember(){
  this.member2Service.getALL().subscribe({
    next: (res) => {
      this.Memberlist = res ; 
    },
    error: (e) => console.error(e), 
  }) 
}



deleteMember(id:number){
  if (confirm('Voulez vous vraiment suppeime  cette Membres !!?')) {
  this.member2Service.delete(id).subscribe({
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
