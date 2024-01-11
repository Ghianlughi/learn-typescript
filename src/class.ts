        // export class User {
        //     constructor(public name: string, public age: number) {
        //     }
        // }

        // let user = new User("Ghianlughi", 18);
        // console.log(user);\

            export class User {
                name: string;

                constructor(name: string, public age: number){
                    this.name = name;
                }

                setName(value:string): void {
                    this.name + value;
                }
                getName = (): string  => {
                    return this.name; 
                }
            }

            // public = bisqa di akses di semua class / dari luar class
            // protected = hanya bisa di akses dari class tersebut, dann kelaas turunannya\
            // private = hanya bisa di akses dari class itu sendiri

            // latihan awal 
            class Admin extends User {
                read: boolean = true ;
                write: boolean  = true ;
                phone: string;
                private _email: string = ""
                static getRolaeName: string = "Admin";

                constructor(phone:string, name: string, age:number){
                    super(name,age);
                    this.phone = phone
                }

                static getNameRole(){
                    return "Haloo broo"
                }

                getRole(): { read: boolean, write:boolean } {
                    return {
                        read: this.read,
                        write: this.write
                    };
                } ;

                set email(value: string){
                    if(value.length < 5){
                        this._email = "email anada salah"
                    }else {
                        this._email = value  
                    }
                    
                }
                get email(): string {
                    return this._email;
                }
            }

            let admin = Admin.getNameRole();
            console.log(admin);


