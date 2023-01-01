import { Mail } from "./mail"

export class MailBuilder {

mail:any

    build_mail(from:any,to:any,subject:any,body:any,priority:any,attachment=new FormData()){
    this.mail=new Mail()
    this.mail.set_from(from)
    this.mail.set_to(to)
    this.mail.set_subject(subject)
    this.mail.set_body(body)
    this.mail.set_priority(priority)
    this.mail.set_attachment(attachment)
    return this.mail;
    }
}
