import React, { Component } from 'react';
import ModalForm from '../components/Modal';
import store from '../store';
import { connect } from 'react-redux';
import { createCommand} from '../reducers/command';

function mapDispatchToProps (dispatch) {
  return {
   addNewCommand: function (command) {
       dispatch(createCommand(command))
    }
  };
};

function mapStateToProps (state) {
  return {

  };
}

const ModalContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ModalForm);

export default ModalContainer

