
import MultiFly from '../components/MultiFly';
import { connect } from 'react-redux';
// import {addItemToCart} from 'APP/app/reducers/bar'

const mapStateToProps = (state) => {
  return {


  };
};

const mapDispatch = dispatch => {
	return {

	}
}

const MultiFlyContainer = connect(mapStateToProps, mapDispatch)(MultiFly);

export default MultiFlyContainer;