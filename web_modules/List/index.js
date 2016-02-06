import React, {PropTypes, Component } from 'react';
import Item from "Item";
import Input from "Input";

export default class List extends Component {

    static propTypes = {
        title: PropTypes.string,
        items: PropTypes.array,
        onInputChange: PropTypes.func,
        autoFilter: PropTypes.bool,
    };

    static defaultProps = {
        title: "",
        items: [],
        onInputChange: null,
        autoFilter: true,
    };

    state = {
        inputValue: ""
    };

    onChangeHandler = (value) => {
      this.setState({inputValue: value})
    };

    filterName = (item) => {
      return (item.name && item.name.toLowerCase().search(this.state.inputValue.toLowerCase())!=-1);
    };

    throttle(callback, delay) {
      var last;
      var timer;
      return (...args) => {
          var context = this;
          var now = +new Date();
          if (last && now < last + delay) {
              // le délai n'est pas écoulé on reset le timer
              clearTimeout(timer);
              timer = setTimeout(() => {
                  last = now;
                  callback.apply(context, args);
              }, delay);
          } else {
              last = now;
              callback.apply(context, args);
          }
      };
    };

    debounce = (callback, delay) => {
      var timer;
      return (...args)=> {
          var context = this;
          clearTimeout(timer);
          timer = setTimeout(()=>{
              callback.apply(context, args);
          }, delay)
      }
    };

    render() {

      const {
        title,
        items,
        onInputChange,
        autoFilter,
      } = this.props

      const onChangeHandler = (onInputChange) ? this.debounce(onInputChange,300) :  this.onChangeHandler

      return (
        <div className="list">
            {
                <Input placeholder={title} onChange={onChangeHandler}/>
            }
            {
              items &&
              items.map((item, index) => {
                return (
                    (!autoFilter || autoFilter && this.filterName(item)) &&
                    <Item key={index} name={item.name} />
                );
              })
            }
        </div>)

    }
}
