import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import {Header, Widget1} from './Header';
import SideMenu from "./SideMenu";
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import firebaseui from "firebaseui";

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
                                    <h5 className="modal-title" id="exampleModalLongTitle">Add New Website:</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Course Title: </label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                                   placeholder="CSE 105"/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Course URL: </label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                                   placeholder="https://piazza.com/class/jf0nahv4fyb1yp"/>
                                        </div>

                                    </form>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel
                                    </button>
                                    <button type="button" className="btn btn-primary">Save Course</button>
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


