import React, { Component } from 'react';

import axios from 'axios';

import './App.css';

import TwoChoices from './Components/TwoChoices';
import Login from './Components/Login';
import EditList from './Components/EditList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userType: 'none',
      loginError: null,
      viewComponent: null
    }
    this._setUserType = this._setUserType.bind(this);
    this._teacherLogin = this._teacherLogin.bind(this);
    this._studentLogin = this._studentLogin.bind(this);
    this._setComponent = this._setComponent.bind(this);
    this._studentBtnClicked = this._studentBtnClicked.bind(this);
    this._studentEditBtnClicked = this._studentEditBtnClicked.bind(this);
    this._studentDeleteBtnClicked = this._studentDeleteBtnClicked.bind(this);
    this._studentNewBtnClicked = this._studentNewBtnClicked.bind(this);
  }

  // Set the component which should be on screen
  _setComponent(componentName) {
    this.setState({viewComponent: componentName})
  }

  // Set the user type either Teacher or Student
  _setUserType(userType) {
    this.setState({userType});
  }

  // Authentication for teacher
  _teacherLogin(credentials) {
    if (credentials.email === 'admin@admin.com' && credentials.password === '123') {
      this.setState({loggedIn: true});
    } else {
      this.setState({loginError: 'Email and/or password is incorrect'});
    }
  }

  // Authentication for student
  _studentLogin(credentials) {
    if (credentials.email === 'admin@admin.com' && credentials.password === '123') {
      this.setState({loggedIn: true});
    } else {
      this.setState({loginError: 'Email and/or password is incorrect'});
    }
  }

  // Not sure what to do
  _studentBtnClicked(id) {
    console.log('Student Btn :' + id);
  }

  // Should change view to a editable student for id passed
  _studentEditBtnClicked(id) {
    console.log('Student Edit Btn :' + id);
  }

  // Should delete the particular student for given id
  _studentDeleteBtnClicked(id) {
    console.log('Student Delete Btn :' + id);
  }

  // A view for creating a new student
  _studentNewBtnClicked() {
    console.log('Student New Btn :');
  }

  // Dummy ajax call to backend
  _fun() {
    axios.get('/')
    .then(function (response) {
      console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });

    axios.get('/users')
    .then(function (response) {
      console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {

    const welcome = (
      <TwoChoices heading="Login As" btn1txt="Teacher" btn2txt="Student"
        btn1Click={() => this._setUserType('teacher')} btn2Click={() => this._setUserType('student')} />
    );

    // Teacher Components
    const teacherLogin = (
      <Login heading="Teacher Login" onClick={this._teacherLogin} error={this.state.loginError} />
    );
    const teacherDash = (
      <TwoChoices heading="Teacher Dashboard" btn1txt="Students" btn2txt="Qiuzes"
        btn1Click={() => this._setComponent('studentList')}
        btn2Click={() => this._setComponent('quizList')} />
    );
    const studentList = (
      <EditList heading="Student List" itemClicked={this._studentBtnClicked}
        editBtnClicked={this._studentEditBtnClicked} deleteBtnClicked={this._studentDeleteBtnClicked}
        newBtnClicked={this._studentNewBtnClicked}
        items={[{id: '1', name: 'Student1'}, {id: '2', name: 'Student2'}, {id :'3', name: 'Stu333'}]} />
    );
    const quizList = (
      <EditList items={['Quiz1', 'Q2', 'QQQQuiz3']} />
    );

    // Student Components
    const studentLogin = (
      <Login heading="Student Login" onClick={this._studentLogin} error={this.state.loginError} />
    );
    const studentDash = (
      <div>Student Dash</div>
    );

    let retComp = <div>Empty</div>;

    if (this.state.userType === 'none') {
        retComp = welcome;
    } else if (this.state.userType === 'student') {
        if (!this.state.loggedIn) {
            retComp = studentLogin;
        }
        /* else if (!this.state.viewComponent){
            retComp = studentDash;
        } else if (this.state.viewComponent === 'quizList') {
            retComp = quizList;
        } else if (this.state.viewComponent === 'studentQuestion') {
            retComp = studentQuestion;
        } else if (this.state.viewComponent === 'studentResult') {
            retComp = studentResult;
        }*/ else {
            retComp = <div>student Default</div>;
        }
    } else if (this.state.userType === 'teacher') {
        if (!this.state.loggedIn) {
            retComp = teacherLogin;
        } else if (this.state.viewComponent === 'teacherDash'
                    || !this.state.viewComponent) {
            retComp = teacherDash;
        }
        else if (this.state.viewComponent === 'studentList') {
            retComp = studentList;
        }/* else if (this.state.viewComponent === 'studentEdit') {
            retComp = studentEdit;
        } else if (this.state.viewComponent === 'studentNew') {
            retComp = studentNew;
        } else if (this.state.viewComponent === 'quizList') {
            retComp = quizList;
        } else if (this.state.viewComponent === 'quizNew') {
            retComp = quizNew;
        } else if (this.state.viewComponent === 'questionList') {
            retComp = questionList;
        } else if (this.state.viewComponent === 'questionEdit') {
            retComp = questionEdit;
        } else if (this.state.viewComponent === 'questionNew') {
            retComp = questionNew;
        }*/ else {
            retComp = <div>Teacher Default</div>;
        }
    }

    return (
      <main>
        <div className="jumbotron">
          {retComp}
        </div>
      </main>
    )
  }
}

export default App;
