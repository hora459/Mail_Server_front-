import { Mail } from "./mail"

export class MailBuilder {

mail:any

    build_mail(from:any,to:any,subject:any,body:any,priority:any,attachment:any,date:any){
    this.mail=new Mail()
    this.mail.from=from
    this.mail.to=to
    this.mail.subject=subject
    this.mail.body=body
    this.mail.priority=priority
    this.mail.attachment=attachment
    this.mail.date=date
    return this.mail;
    }
}