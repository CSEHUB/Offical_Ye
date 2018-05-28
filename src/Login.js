import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import 'firebase/database';
import '../node_modules/firebaseui/dist/firebaseui.css';
import {FIREBASE_CONFIG} from "./config";
import Dashboard from "./Dashboard";
//import Form from './components/Form.js'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn : false,
            user : this.props.user
        }


        // Initialize the FirebaseUI Widget using Firebase.
    }
    componentDidMount() {
        var uiConfig = {
            signInSuccessUrl: '/dashboard',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                //firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                //firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>'
        };
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
      ui.start('#firebaseui-auth-container', uiConfig);
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
      );
    }
    componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({user});
            this.initiUser(user);
            console.log(this.state.user);
        }else{
            this.setState({user:null});
            console.log(this.state.user);
        }

    });
  }
  initiUser(user){
    const usersRef = firebase.database().ref("users");
    usersRef.child(user.uid).on('value',(snapshot)=>{
    //console.log(JSON.stringify(snapshot.val()));
        if(snapshot.val()==null){
            const userRef = firebase.database().ref("users/"+user.uid);
            const user_info = {
                username: user.displayName,
                email: user.email,
                workspaces: {
                    "default": true
                },
                background_color: "default"
            }
        userRef.set(user_info);
        }
    });
  }

  render(){
        if (!this.state.isSignedIn) {
        return(
         <div>
          <div className="centerWrapper">
          <div className="full-w-h" id="firebaseui-auth-container"></div>
          </div>
         </div>
         );
        }else{
          return(
            <Dashboard />
          );
        }
  }
}

export default Login;
