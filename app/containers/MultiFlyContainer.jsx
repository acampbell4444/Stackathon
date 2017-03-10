
import MultiFly from '../components/MultiFly';
import { connect } from 'react-redux';
// import {addItemToCart} from 'APP/app/reducers/bar'

const mapStateToProps = (state) => {
 	let personA = state.form.triple ? state.form.triple.values ? state.form.triple.values.personA ? state.form.triple.values.personA : null : null : null
	let personB = state.form.triple ? state.form.triple.values ? state.form.triple.values.personB ? state.form.triple.values.personB : null : null : null
	let personC = state.form.triple ? state.form.triple.values ? state.form.triple.values.personC? state.form.triple.values.personC : null : null : null
  return {
  	personA,
  	personB,
  	personC
  };
};

const mapDispatch = dispatch => {
	return {

	}
}

const MultiFlyContainer = connect(mapStateToProps, mapDispatch)(MultiFly);

export default MultiFlyContainer;