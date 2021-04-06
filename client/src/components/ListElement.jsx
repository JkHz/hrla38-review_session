import React from 'react';
import axios from 'axios';

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: '',
      updateSelected: false
    }
    this.updateName = this.updateName.bind(this);
    this.editMode = this.editMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  updateName(e) {
    e.preventDefault();

    axios.put(`/api/students/${this.props.student.id}`, {
      "newName": this.state.newName
    })
      .then(() => this.props.getStudents())
      .then(() => this.toggleUpdate())
      .catch((err) => console.error(err))
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value})
  }

  editMode() {
    return ( this.state.updateSelected ) ? (
      <form onSubmit={this.updateName}>
        <input type="text" name="newName" onChange={this.handleChange}></input>
        <button type="submit" value="Submit">Submit</button>
      </form>
    ) : null
  }

  toggleUpdate() {
    this.setState({ updateSelected: !this.state.updateSelected})
  }

  render() {
    return (
      <div>
        <div>{this.props.student.name}</div>
        <div>
          {this.editMode()}
          <button onClick={this.toggleUpdate}>Update</button>
        </div>
        <img src={this.props.student.imgurl}></img>
      </div>
    )
  }
}


export default ListElement
