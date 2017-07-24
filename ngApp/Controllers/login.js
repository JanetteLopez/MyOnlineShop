class Login{
    constructor($state){
        this.state = $state;
        this.email = "";
        this.password = "";
    }
    log(){
        this.state.go("home");
    }
}