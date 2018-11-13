import PropTypes from 'prop-types';

const jobPropTypes = PropTypes.shape({
  jobExecutionId: PropTypes.string.isRequired,
  jobExecutionHrId: PropTypes.string.isRequired,
  jobProfileName: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  runBy: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  progress: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  startedDate: PropTypes.string.isRequired,
  completedDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
});

export default jobPropTypes;