const Employee={
    firstname:"happy",
    lastname:"nayak",
    getFullName:function(){
        console.log(`${this.firstname} ${this.lastname} and city is ${this.city}`);
    }
}
// Employee.getFullName();

const customer={
    firstname:"bijesh",
    lastname:"kumar"
}

Employee.getFullName.call(customer,'delhi');
Employee.getFullName.apply(customer,['goa']);