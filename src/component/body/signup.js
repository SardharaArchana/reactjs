import React, {Component} from 'react';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            cpassword: '',
            pnum: '',
            isValid: true,
            emailValid: true
        }
        this.onChange = this.onChange.bind(this);
        this.confirmPsd = this.confirmPsd.bind(this);
        this.val = this.val.bind(this);
        this.checkEmail = this.checkEmail.bind(this);

    }
    onChange(event) {
        const key = event.target.id;
        const value = event.target.value;
        let obj = {};
        obj[key] = event.target.value;
        this.setState(obj);
        this.props.click(key, value);
    };

    confirmPsd(e) {
        let valid = true;
        const cpsd = e.target.value;
        if (!cpsd.match(this.state.password))
            valid = false;
        this.setState({ isValid: valid });
    };
    checkEmail(e) {
        let ans = true;
        let email = e.target.value;
        let a = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        console.log(a.test(email));
        if (!a.test(email)) {
            ans = false;
        }
        this.setState({ emailValid: ans });

    };
    val() {
        let click=true;
        this.props.click(this.state.name, this.state.password,click);
        alert(this.state.name + '! you are registered successfully');
    }


    name() {
        return (<div>
            Enter  Name:<input type='text' onChange={e => this.onChange(e)} id='name' style={{ marginRight: '25px' }} />
        </div>);
    };
    email() {
        return (<div>
            Enter  Email:<input type='text' onBlur={this.checkEmail} onChange={e => this.onChange(e)} id='email' style={{ marginRight: '25px' }} />
        </div>);
    };
    password() {
        return (<div>
            Enter  password:<input type='password' onChange={e => this.onChange(e)} id='password' style={{ marginRight: '25px' }} />
        </div>);
    };
    cpassword() {
        return (<div>
            confirm  password:<input type='password' onBlur={this.confirmPsd} onChange={e => this.onChange(e)} id='cpassword' style={{ marginRight: '25px' }} />
        </div>);
    };
    pnum() {
        return (<div>
            Enter  phone number:<input type='number' onChange={e => this.onChange(e)} id='pnum' maxLength='10' style={{ marginRight: '25px' }} />
        </div>);
    };

    render() {
        const { name, password, cpassword, pnum, isValid, emailValid } = this.state;
        const divStyle = { margin:'5px', borderStyle: 'solid', background: '#9989', padding: '50px', width: 'fit-content' };
        const buttonStyle = { width: '100px', height: '50px', borderRadius: '10px' };
        return (
            <center>
            <div style={divStyle}>
                <h1>SignUp</h1><br/><br/>
                {this.name()}<br /><br />
                {this.email()}
                {emailValid ? null : <p style={{ color: 'red' }}>please enter the correct email</p>}<br /><br />
                {this.password()}<br /><br />
                {this.cpassword()}
                {isValid ? null : <p style={{ color: 'red' }}>please check password</p>}<br /><br />
                {this.pnum()}<br /><br />
                <center><button type='submit' onClick={this.val} style={buttonStyle} >register</button></center><br /><br />
                {console.log(isValid.toString())}
            </div> </center> 
        );

    }
}
export default SignUp;