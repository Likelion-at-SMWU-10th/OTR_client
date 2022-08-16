import React, { Component } from "react";
import axios from "axios";
import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import Footer from './components/Footer';
import DayOneCard from './components/DayOneCard';

class Post extends Component {
  state = {
    id: "",
    title: "",
    subtitle: "",
  };

  onIdChange = e => {
    this.setState({
        id: e.target.value
    });
  };

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubtitleChange = e => {
    this.setState({
      subtitle: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: this.state.id,
      title: this.state.title,
      subtitle: this.state.subtitle
    };
    axios
      .post("http://127.0.0.1:8000/QnA/question/", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
        <>
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <input
            placeholder="id" value={this.state.id}
            onChange={this.onIdChange} required
          />
          <textarea
            placeholder="title" value={this.state.title}
            onChange={this.onTitleChange} required
          />
            <textarea
            placeholder="subtitle" value={this.state.subtitle}
            onChange={this.onSubtitleChange} required
          />
          <button type="submit">Create Post</button>
        </form>

      </div>

    </>
    );
  }
}

export default Post;