import React from 'react';
import { loadingService } from './LoadingService';
import './Loading.css';

export default class Loading extends React.Component {
  loadingService = loadingService;

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

    if (this.props.hasOwnProperty('loadingService')) {
      this.loadingService = this.props.loadingService;
    }

    this.loadingService._register(this);
  }

  componentWillUnmount() {
    this.loadingService._unregister(this);
  }

  render() {
    return this.state.show ? (
      <div className="loading">Carregando&#8230;</div>
    ) : null;
  }
}