import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom'
import logo from './res/images/Logo.png'
import gradesourceLogo from './res/images/GradeSource_logo.png'
import piazzaLogo from './res/images/Piazza_logo.png'
import autograderLogo from './res/images/Autograder_Logo.png'
import gradescopeLogo from './res/images/Gradescope_logo.png'


import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';


var CSE110 = {
    "name":"GradeScope",
    "class":"CSE 140",
    "grades":[ "HW1: 2.0 / 8.0", "Midterm: 88.0 / 400.0" ]
}
var CSE100 = {
    "name":"GradeScope",
    "class":"CSE 140",
    "grades":[ "Midterm 1: 92.0 / 100.0", "Midterm 2: 88.0 / 100.0" ]
}
var CSE20 = {
    "name":"GradeScope",
    "class":"CSE 140",
    "grades":[ "course grade: 92.0 / 100.0" ]
}
var CSE30 = {
    "name":"GradeScope",
    "class":"CSE 140",
    "grades":[ "Widgets are cool" ]
}

var nam = "yest";
var course;


class Widget extends Component {
    constructor(name) {
        { /*  super(prop); */ }
        super();
        nam = name;


        if(name == "CSE100") {
            course = CSE100;
        }
        if(name == "CSE110") {
            course = CSE110;
        }
        if(name == "CSE30") {
            course = CSE30;
        }


        this.state = {
            courses: ['CSE100', 'CSE110', 'CSE20', 'CSE30', 'CSE 140'],
            urls: ['https://piazza.com/', 'http://www.gradesource.com/reports/7/29889/index.html', 'https://gradescope.com/embed/', 'https://autograder.ucsd.edu/', 'https://www.youtube.com/embed/dQw4w9WgXcQ'],
            userName: [1,2,3,4],
            password: [1,2,3,4],
            position: [1,2,3,4],
            website: ['Piazza', 'Gradesource', 'Gradescope', 'Autograder', 'Other'],
            widgetID: ['id0', 'id1', 'id2', 'id3', 'id4']
        }

    }



    render(){
        return(

            <div className="container-fluid">
                <div className="row">
                    {/* Load/render widgets you see on screen intially */}
                    {/* Modals (see below this) and widgets are connected via id's */}
                    {/* I imported a library for easy if/if-else/then etc.. tags */}
                    {this.state.courses.map((courseTitle, arrayIndex) => {
                        return (


                            <If condition={this.state.website[arrayIndex] == 'Gradesource'}>

                                {/* If Gradesource, display scraped data from secret number */}
                            <Then>
                            <div className="col-md-4  w-container-out">
                                <div className="w-top">
                                    <div className="w-top-l">[X]</div>
                                    <div className="w-top-r">[] [ ] [   ]</div>
                                </div>
                                <div id="e" draggable="true" className="w-container" data-toggle="modal"
                                     data-target={'#' + this.state.widgetID[arrayIndex]}>
                                    <div key={arrayIndex}>{this.state.website[arrayIndex]}</div>
                                    <div key={arrayIndex}>{nam}</div>
                                    <div key={arrayIndex}>{course.name}</div>
                                    <div key={arrayIndex}>{course.grades[0]}</div>
                                    <div key={arrayIndex}>{course.grades[1]}</div>
                                    <div key={arrayIndex}>{course.grades[2]}</div>
                                    <img className="widgetLogo" src={gradesourceLogo}/>
                                </div>
                            </div>
                            </Then>


                                {/* If piazza, just show logo */}
                                <ElseIf condition={this.state.website[arrayIndex] == 'Piazza'}>
                                    <div className="col-md-4  w-container-out">
                                        <div className="w-top">
                                            <div className="w-top-l">[X]</div>
                                            <div className="w-top-r">[] [ ] [   ]</div>
                                        </div>
                                        <div id="e" draggable="true" className="w-container" data-toggle="modal"
                                             data-target={'#' + this.state.widgetID[arrayIndex]}>
                                            <div className="text-center widgetTitle" key={arrayIndex}>{nam}</div>
                                            <img className="widgetLogo" src={piazzaLogo}/>
                                        </div>
                                    </div>

                                </ElseIf>

                                {/* If Gradescope, just show logo */}
                                <ElseIf condition={this.state.website[arrayIndex] == 'Gradescope'}>
                                    <div className="col-md-4  w-container-out">
                                        <div className="w-top">
                                            <div className="w-top-l">[X]</div>
                                            <div className="w-top-r">[] [ ] [   ]</div>
                                        </div>
                                        <div id="e" draggable="true" className="w-container" data-toggle="modal"
                                             data-target={'#' + this.state.widgetID[arrayIndex]}>
                                            <div className="text-center widgetTitle" key={arrayIndex}>{nam}</div>
                                            <img className="widgetLogo" src={gradescopeLogo}/>
                                        </div>
                                    </div>

                                </ElseIf>


                                {/* If Autograder, just show logo */}
                                <ElseIf condition={this.state.website[arrayIndex] == 'Autograder'}>
                                    <div className="col-md-4  w-container-out">
                                        <div className="w-top">
                                            <div className="w-top-l">[X]</div>
                                            <div className="w-top-r">[] [ ] [   ]</div>
                                        </div>
                                        <div id="e" draggable="true" className="w-container" data-toggle="modal"
                                             data-target={'#' + this.state.widgetID[arrayIndex]}>
                                            <div className="text-center widgetTitle" key={arrayIndex}>{nam}</div>
                                            <img className="widgetLogo" src={autograderLogo}/>
                                        </div>
                                    </div>

                                </ElseIf>



                                {/* If Other website, just show CSEHUB logo */}
                                <ElseIf condition={this.state.website[arrayIndex] == 'Other'}>
                                    <div className="col-md-4  w-container-out">
                                        <div className="w-top">
                                            <div className="w-top-l">[X]</div>
                                            <div className="w-top-r">[] [ ] [   ]</div>
                                        </div>
                                        <div id="e" draggable="true" className="w-container" data-toggle="modal"
                                             data-target={'#' + this.state.widgetID[arrayIndex]}>
                                            <div className="text-center widgetTitle" key={arrayIndex}>Other Website</div>
                                            <img className="widgetLogo" src={logo}/>
                                        </div>
                                    </div>

                                </ElseIf>
                        </If>
                        )
                    })}
                </div>


                {/* Load widget modals at the bottom of screen with pre-loaded iframes. Initially set to display:'none' until user clicks on widget */}
                {/* Modals and widgets are connected via id's */}
        {this.state.courses.map((courseTitle1, Index) => {
            return (
                <div key={Index} className="modal fade" id={this.state.widgetID[Index]} tabIndex="-1" role="dialog"
                     aria-labelledby={this.state.widgetID[Index]}  aria-hidden="true">
                    <div className="modal-dialog widget-modal modal-dialog-centered" role="document">
                        <div className="modal-content widget-modal-h">
                            <div className="modal-body widget-modal-h">


                                <If condition={this.state.website[Index] == 'Gradescope'}>
                                    <Then>
                                        <p>SEE HOW GRADESCOPE BLOCKS THE IFRAME FROM POPPING UP???? </p>
                                        <a target="_blank" href="https://stackoverflow.com/a/35790513">Click this text to learn more....</a>
                                    </Then>
                                </If>


                                <iframe className="modal-full" src={this.state.urls[Index]}
                                        frameBorder="0" allow="autoplay; encrypted-media"></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            )
        })}








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

        );
    }
}

export default Widget;
