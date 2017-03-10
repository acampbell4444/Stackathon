
import MultiFlyAdv from '../components/MultiFlyAdv';
import { connect } from 'react-redux';
// import {addItemToCart} from 'APP/app/reducers/bar'

const mapStateToProps = (state) => {
 	let personA = state.form.tripleAdv ? state.form.tripleAdv.values ? state.form.tripleAdv.values.personA ? state.form.tripleAdv.values.personA : null : null : null
	let personB = state.form.tripleAdv ? state.form.tripleAdv.values ? state.form.tripleAdv.values.personB ? state.form.tripleAdv.values.personB : null : null : null
	let personC = state.form.tripleAdv ? state.form.tripleAdv.values ? state.form.tripleAdv.values.personC? state.form.tripleAdv.values.personC : null : null : null
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

const MultiFlyAdvContainer = connect(mapStateToProps, mapDispatch)(MultiFlyAdv);

export default MultiFlyAdvContainer;