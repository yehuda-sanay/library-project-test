import React    from "react";
import template from "./BooksTable.js";

class BooksTable extends React.Component {
  render() {
    return template.call(this);
  }
}

export default BooksTable;
