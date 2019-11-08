import { connect } from "react-redux";

import { incrementCurrent, randomIncrement } from "../store/actions";
import { fetchObjectives } from "../store/operations";
import { fromObjectives } from "../store/selectors";
import App from "../App";

const mapStateToProps = state => ({
  data: fromObjectives.data(state),
  currentDate: fromObjectives.currentDate(state),
  currentOvertarget: fromObjectives.currentOvertarget(state),
  nestedData: fromObjectives.nestedData(state)
});

const mapDispatchToProps = dispatch => ({
  fetchObjectives: () => dispatch(fetchObjectives()),
  incrementCurrent: index => dispatch(incrementCurrent(index)),
  randomIncrement: () => dispatch(randomIncrement())
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
