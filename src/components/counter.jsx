import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div align="center" className="container mt-4">
        {this.props.children}
        <span style={{ fontSize: 15 }} className={this.getBadgeClass()}>
          {this.formatvalue()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClass() {
    let clasess = "badge p-2 m-2 badge-";
    clasess += this.props.counter.value === 0 ? "warning" : "primary";
    return clasess;
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
