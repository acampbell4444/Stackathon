import Double from '../components/Double';
import { connect } from 'react-redux';
 
 const mapStateToProps = (state) => {
 	let personA = state.form.double ? state.form.double.values ? state.form.double.values.personA ? state.form.double.values.personA : null : null : null
	let personB = state.form.double ? state.form.double.values ? state.form.double.values.personB ? state.form.double.values.personB : null : null : null
  return {
  		personA,
  		personB
  };
};

const mapDispatch = dispatch => {
	return {
	}
}

const DoubleContainer = connect(mapStateToProps, mapDispatch)(Double);

export default DoubleContainer;