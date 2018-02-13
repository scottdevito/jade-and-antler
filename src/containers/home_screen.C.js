import { connect } from 'react-redux';
import HomeScreen from '../screens/home_screen';
import { submitEmailToMailingList, getWorkshops } from '../actions/index';

const mapStateToProps = state => {
  return {
    emailSubmitted: state.emailSubmitted,
    workshops: state.workshops,
  };
};

const mapDispatchToProps = {
  submitEmailToMailingList,
  getWorkshops,
};

const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  HomeScreen
);

export default HomeScreenContainer;
