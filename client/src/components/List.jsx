import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) =>
  <div>
    {props.students.map((student, i) => (
      <ListElement student={student} key={i} getStudents={props.getStudents} />
    ))}
  </div>


export default List