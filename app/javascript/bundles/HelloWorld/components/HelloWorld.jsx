import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {updateName} from '../actions/helloWorldActionCreators';

class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
    updateName: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h3>
          Hello, {this.props.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.props.name}
            onChange={(e) => this.props.updateName(e.target.value)}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: bindActionCreators(updateName, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
