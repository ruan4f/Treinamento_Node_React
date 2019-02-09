import React from 'react';
import { spinnerService } from './LoadingService';
import './loading.css';

export default class SpinnerSismed extends React.Component {
  spinnerService = spinnerService;

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  set show(show) {
    this.setState({ show });
  }

  get show() {
    return this.state.show;
  }

  get name() {
    return this.props.name;
  }

  get group() {
    return this.props.group;
  }

  componentWillMount() {
    this.setState({
      show: this.props.hasOwnProperty('show') ? this.props.show : false
    });

    if (this.props.hasOwnProperty('spinnerService')) {
      this.spinnerService = this.props.spinnerService;
    }

    this.spinnerService._register(this);
  }

  componentWillUnmount() {
    this.spinnerService._unregister(this);
  }

  render() {
    return this.state.show ? (
      <div className="loading">Carregando&#8230;</div>
    ) : null;
  }
}