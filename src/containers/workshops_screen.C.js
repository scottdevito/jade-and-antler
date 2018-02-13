import { connect } from 'react-redux';
import WorkshopsScreen from '../screens/workshops_screen';
import { getWorkshops } from '../actions/index';

const mapStateToProps = state => {
  return {
    workshops: state.workshops,
  };
};

const mapDispatchToProps = {
  getWorkshops,
};

const WorkshopsScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  WorkshopsScreen
);

export default WorkshopsScreenContainer;
