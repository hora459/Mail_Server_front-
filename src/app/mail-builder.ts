import { Mail } from "./mail"

export class MailBuilder {
mail:any
    MailBuilder(){
       this.mail=new Mail()
    }
    build_mail(from:any,to:any,subject:any,body:any,priority:any){
    this.mail.set_from(from)
    this.mail.set_to(to)
    this.mail.set_subject(subject)
    this.mail.set_body(body)
    this.mail.set_priority(priority)
    return this.mail;
    }
}
