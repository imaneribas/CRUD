export class UserModel {
    public id: string;
    public Nom: string;
    public Prenom: string;
    public email: string;
    public jobTitle: string;
    public Telephone: string;
    public roles?: string[];
    
    // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
    constructor(id?: string, userName?: string, fullName?: string, email?: string, jobTitle?: string, phoneNumber?: string, roles?: string[]) {

        this.id = id;
        this.Nom= userName;
        this.Prenom = fullName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.Telephone = phoneNumber;
        this.roles = roles;
    }
}