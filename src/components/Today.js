import React, { Component } from "react";
import Moment from "react-moment";

export default class Today extends Component {
  render() {
    const date = new Date();
    return <Moment format="MMM D, YYYY">{date}</Moment>;
  }
}
