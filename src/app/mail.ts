export class Mail {
private from=''
private to=''
private subject=''
private body=''
private priority=0
private attachments:any
set_attachment(attachment:any)
{
    this.attachments=attachment;
}
get_attachments()
{
    return this.attachments
}
set_from(from:any){
this.from=from
}
get_from(){
return this.from
}
set_to(to:any){
this.to=to
}
get_to(){
return this.to
}
set_subject(subject:any){
this.subject=subject
}
get_subject(){
return this.subject
}
set_body(body:any){
this.body=body
}
get_body(){
return this.body
}
set_priority(priority:any){
    this.priority=priority
    }
get_priority(){
return this.priority
}

}
