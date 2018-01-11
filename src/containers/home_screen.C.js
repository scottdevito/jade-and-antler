import { connect } from 'react-redux';
import HomeScreen from '../screens/home_screen';
import { submitEmailToMailingList } from '../actions/index';

const mapStateToProps = state => {
  return {
    emailSubmitted: state.emailSubmitted,
  };
};

const mapDispatchToProps = {
  submitEmailToMailingList,
};

const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  HomeScreen
);

export default HomeScreenContainer;
