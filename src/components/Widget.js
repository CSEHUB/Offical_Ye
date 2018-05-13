import React, {Component} from 'react';

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
            urls: ['http://www.gradesource.com/reports/3586/29656/index.html', 'http://www.gradesource.com/reports/7/29889/index.html', 'http://www.gradesource.com/reports/346/29648/index.html', 'http://www.gradesource.com/reports/288/29652/index.html'],
            userName: [1,2,3,4],
            password: [1,2,3,4],
            position: [1,2,3,4]
        }

    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    {this.state.courses.map((courseTitle, arrayIndex) => {
                        return (

                            <div className="Widget">
                                <div id="e" draggable="true" className="w-container">
                                    <div className="w-top">
                                    </div>
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
            </div>
        );
    }
}

export default Widget;