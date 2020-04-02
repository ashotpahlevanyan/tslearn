interface User {
    email: string;
    password: string;
}

interface ConfirmedUser extends User {
    isActive: true;
}

interface Admin extends ConfirmedUser {
    adminSince: Date;
}

export class AccountManager {
    users: User[] = new Array();

    /**
     * Create new user
     * @param email email address
     * @param password the users password
     * @return the new user account. Admin must activate
     * it using activateNewUser function
     * @see this.activateNewUser
     */

    register(email: string, password: string) :User {
        // eslint-disable-next-line no-throw-literal
        if(!email) throw 'Must provide an email';
        if(!password) throw 'Must provide a password';
        let user = { email, password };
        this.users.push(user);
        return user;
    }

    /**
     * Activate a new user account
     * @param approver The admin who is approving this new user
     * @param userToApprove Newly registered user, to be activated
     * @return The updated user object, now activated
     * */

    activateNewUser(approver: Admin, userToApprove: User): ConfirmedUser {
        if(!approver.adminSince) throw "Approver is not an Admin!";
        let toConfirm = userToApprove as ConfirmedUser;
        toConfirm.isActive = true;
        return toConfirm;
    }

    /**
     * Promote a normal user to admin
     * @param existingAdmin admin who is promoting another user
     * @param user an active user who you are making an admin
     * @return The updated user object, now can also be regarded as admin
     * */

    promoteToAdmin(existingAdmin: Admin, user: ConfirmedUser) {
        // eslint-disable-next-line no-throw-literal
        if(!existingAdmin.adminSince) throw "Not an Admin";
        if(user.isActive !== true) throw "User must be active in order to be promoted";
        let newAdmin = user as Admin;
        newAdmin.adminSince = new Date();
        return newAdmin;
    }
}

let admin: Admin = {email: 'a', password: 'b', isActive: true, adminSince: new Date()};
let user: ConfirmedUser = {email: 'a', password: 'b', isActive: true};

let am = new AccountManager();
am.promoteToAdmin(admin, user);

