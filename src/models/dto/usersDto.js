class UserDto {
    constructor({ name, email, password, cart }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.cart = cart;
    }
}

export default UserDto;