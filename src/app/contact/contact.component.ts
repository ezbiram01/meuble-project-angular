import { Component, OnInit } from '@angular/core';


import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(public translate: TranslateService) { }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_kqpuc77',
        'template_fwpz3ri',
        e.target as HTMLFormElement,
        'DcV5ahlXimcYlAx-0'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
     // location.reload();
    }

 

  ngOnInit(): void {
  }

}
