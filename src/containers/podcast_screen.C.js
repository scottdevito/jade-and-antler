import { connect } from 'react-redux';
import PodcastScreen from '../screens/podcast_screen';
import { getPodcastEpisodes } from '../actions/index';

const mapStateToProps = state => {
  return {
    podcastEpisodes: state.podcastEpisodes,
  };
};

const mapDispatchToProps = {
  getPodcastEpisodes,
};

const PodcastScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  PodcastScreen
);

export default PodcastScreenContainer;
