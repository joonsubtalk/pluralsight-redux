import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ''}
    };

    // for performance vs binding in render function
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    this.props.dispatch(courseAction.createCourse(this.state.course));
  }

  courseRow(course, index) {
    return (<div key={index}>{course.title}</div>);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>

        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
          />

        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save"
          />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps) {
  debugger;
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
