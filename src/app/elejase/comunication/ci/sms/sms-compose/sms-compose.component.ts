// import { Component, OnInit } from '@angular/core';
// import {AppHttpService} from "../../services/app-http.service";
// import {Router} from "@angular/router";
// import swal from 'sweetalert2';
// declare var $: any;
//
// @Component({
//   selector: 'app-sms-compose',
//   templateUrl: './sms-compose.component.html',
//   styleUrls: [
//       '../sms/css/sms.component.css',
//       './sms-compose.component.css'
//   ]
// })
// export class SmsComposeComponent implements OnInit {
//   public mail: Object = {}
//
//     constructor(private httpService: AppHttpService,
//                 private router: Router,) {
//     }
//
//   ngOnInit() {
//       this.func()
//   }
//
//     func(){
//         var name = "Thomas";
//
//         function hideDialog() {
//             $("#compose-mail").removeClass("visible").addClass("hidden");
//         }
//
// // At the beginning, we hide the dialog:
//         hideDialog();
//
// // jQuery("#button-for-compose-mail").on("click", showDialog);
//
//         $("#button-for-compose-mail").on("click", function(){
//             $("#compose-mail").removeClass("hidden").addClass("visible");
//
//             // focus on input.
//             $("input#to").focus();
//
//             return false;
//         });
//
//         $("#close-button").on("click", function(){
//             hideDialog();
//         });
//
//         $("form").on("submit", function() {
//             hideDialog();
//
//             $("input#to").val("")
//             $("textarea#content").val("");
//
//             // stop browser default behavior.
//             // Don't return false if you really want to submit the form, unless you are using AJAX to send the form.
//             return false;
//         });
//
//
//
//
//     }
//
//     send() {
//         this.httpService.builder('mailing')
//             .store(this.mail)
//             .then(() => {
//                 swal(
//                     'Sucesso...',
//                     'Politico cadastrado com sucesso!',
//                     'success'
//                 )
//                 alert('clicou aqui')
//                 console.log('clickou aqui')
//                 this.router.navigate(['/mailing/']);
//             })
//     }
//
//     btn(){
//         alert('clicou aqui')
//         console.log('clickou aqui')
//     }
// }
