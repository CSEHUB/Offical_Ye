import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header, Widget1} from './Header';
import SideMenu from "./SideMenu";
import {FIREBASE_CONFIG} from "./config";
import firebase from 'firebase';
import 'firebase/database';
import '../node_modules/firebaseui/dist/firebaseui.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

function makeWorkspace() {
    //var app = firebase.initializeApp(FIREBASE_CONFIG);
    var course = document.getElementById("course").value;

    firebase.auth().onAuthStateChanged( user => {
        if (user) {
            // If user state changes and 'user' exists, check Firebase Database for user
            const userReference = firebase.database().ref(`users/${user.uid}`);

             var data = {
                widgets:""
             }

            var wid = firebase.database().ref('workspaces').push(data).getKey();

            userReference.child("workspace").child(wid).set({name:course});
        }
    });
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        ReactDOM.render(<Header />, document.getElementById('topNav'));
        ReactDOM.render(<SideMenu />, document.getElementById('menu-side'));

    }

    render(){
        return(
            <Router>
                <div>

                    {/* Add Website Modal */}
                    <div className="modal fade" id="modal-addWebsite" tabIndex="-1" role="dialog"
                         aria-labelledby="AddWebsite" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Add New Workspace:</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Title: </label>
                                            <input id="course" type="text" className="form-control"
                                                   placeholder="CSE 105"/>
                                        </div>
                                    </form>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel
                                    </button>
                                    <button onClick={makeWorkspace} type="button" className="btn btn-primary" data-dismiss="modal">>Save Course</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </Router>

        );
    }

}

export default Dashboard;


