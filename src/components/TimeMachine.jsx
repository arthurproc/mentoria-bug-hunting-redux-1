/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';

class TimeMachine extends Component {
  renderTimeFound = () => {
    const { timestamp } = this.props;
    return (
      <div className="row">
        <section className="text-center">
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Tempo encontrado</h1>
              <p className="lead text-muted">
                {timestamp.substring(6, 8)}
                /
                {timestamp.substring(4, 6)}
                /
                {timestamp.substring(0, 4)}
              </p>
              <p className="lead text-muted">
                {timestamp.substring(8, 10)}
                :
                {timestamp.substring(10, 12)}
                {' '}
                {timestamp.substring(12, 14)}
                s
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };

  render() {
    const { isLoading, closest } = this.props;
    return (
      <div className="container h-100">
        <div className="row">
          <div className="col-md-12">
            <h1>Máquina do tempo</h1>
          </div>
        </div>
        { isLoading ? <LoadingSpinner /> : (
          <>
            { closest.available && this.renderTimeFound() }
            { closest.available
              && (
                <iframe
                  src={ closest.url || '' }
                  width="100%"
                  title="description"
                  height="100%"
                />
              )}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  closest: state.archived_snapshots.closest || {},
  timestamp: state.archived_snapshots.closest.timestamp,
  isLoading: state.loading,
});

TimeMachine.propTypes = {
  closest: PropTypes.shape({
    available: PropTypes.bool,
    url: PropTypes.string,
  }).isRequired,
  timestamp: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(TimeMachine);
