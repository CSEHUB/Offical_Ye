import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom'

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
            website: ['Piazza', 'Gradescope', 'Gradesource', 'Autograder', 'Other'],
            widgetID: ['id0', 'id1', 'id2', 'id3', 'id4']
        }

    }

    render(){
        return(

            <div className="container-fluid">
                <div className="row">
                    {this.state.courses.map((courseTitle, arrayIndex) => {
                        return (
                    <div className="col-md-4  w-container-out">
                            <div className="w-top">
                                <div className="w-top-l">[X]</div>
                                <div className="w-top-r">[]</div>
                            </div>
                                <div id="e" draggable="true" className="w-container" data-toggle="modal" data-target={'#' + this.state.widgetID[arrayIndex]}>
                                    <div key={arrayIndex}>{this.state.website[arrayIndex]}</div>
                                    <div key={arrayIndex}>{nam}</div>
                                    <div key={arrayIndex}>{course.name}</div>
                                    <div key={arrayIndex}>{course.grades[0]}</div>
                                    <div key={arrayIndex}>{course.grades[1]}</div>
                                    <div key={arrayIndex}>{course.grades[2]}</div>
                            </div>
                    </div>
                        )
                    })}

                </div>


        {this.state.courses.map((courseTitle1, Index) => {
            return (
                <div key={Index} className="modal fade" id={this.state.widgetID[Index]} tabIndex="-1" role="dialog"
                     aria-labelledby={this.state.widgetID[Index]}  aria-hidden="true">
                    <div className="modal-dialog widget-modal modal-dialog-centered" role="document">
                        <div className="modal-content widget-modal-h">
                            <div className="modal-body widget-modal-h">
                                <iframe className="modal-full" src={this.state.urls[Index]}
                                        frameBorder="0" allow="autoplay; encrypted-media"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
            </div>

        );
    }
}

export default Widget;