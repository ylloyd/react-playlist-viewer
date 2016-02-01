import React, {PropTypes, Component } from 'react';
import Item from "Item";
import Input from "Input";

export default class List extends Component {

    static propTypes = {
        title: PropTypes.string,
        items: PropTypes.array,
    };

    static defaultProps = {
        title: "",
        items: [],
    };

    state = {
        inputValue: ""
    };

    onChangeHandler = (value) => {
      this.setState({inputValue: value})
    };

    render() {

      const {
        title,
        items,
      } = this.props

      return (
        <div className="list">
            {
                <Input placeholder={title} onChange={this.onChangeHandler}/>
            }
            {
              items &&
              items.map((item, index) => {
                return (
                    item.name && item.name.toLowerCase().search(this.state.inputValue.toLowerCase())!=-1 &&
                    <Item key={index} name={item.name} />
                );
              })
            }
        </div>)

    }
}
