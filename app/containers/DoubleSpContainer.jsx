
import DoubleSp from '../components/DoubleSp';
import { connect } from 'react-redux';

let spotOne, spotTwo, spotThree, spotFour, position


const mapStateToProps = (state) => {
	let personA = state.form.doubleSp ? state.form.doubleSp.values ? state.form.doubleSp.values.personA ? state.form.doubleSp.values.personA : null : null : null
	let personB = state.form.doubleSp ? state.form.doubleSp.values ? state.form.doubleSp.values.personB ? state.form.doubleSp.values.personB : null : null : null
	
  
  return {
 
  		personA,
  		personB
  };
};

const mapDispatch = dispatch => {
	return {
	}
}

const DoubleSpContainer = connect(mapStateToProps, mapDispatch)(DoubleSp);

export default DoubleSpContainer;



