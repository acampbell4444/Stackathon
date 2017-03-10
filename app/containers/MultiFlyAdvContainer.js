
import MultiFlyAdv from '../components/MultiFlyAdv';
import { connect } from 'react-redux';
// import {addItemToCart} from 'APP/app/reducers/bar'

const mapStateToProps = (state) => {
  return {
    // active: state.bar.active,
    // etc: state.bar.etc

  };
};

const mapDispatch = dispatch => {
	return {
		// addPersonToBar (product) {
		// 	dispatch(addItemToCart(product));
		// }
	}
}

const MultiFlyAdvContainer = connect(mapStateToProps, mapDispatch)(MultiFlyAdv);

export default MultiFlyAdvContainer;