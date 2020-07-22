import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { getEntries, deleteEntry, addEntry } from '../../actions/entryActions';
import PropTypes from 'prop-types';

export class AssignBtn extends Component {
  componentDidMount() {
    this.props.getEntries();
  }

  state = {
    firstName: '',
    lastName: '',
    reason2: 'Customer Meeting',
    reason: [
      {
        id: 1,
        reasonName: 'Customer Meeting',
      },
      {
        id: 2,
        reasonName: 'Technical Equipment',
      },
      {
        id: 3,
        reasonName: 'Project Meeting',
      },
      {
        id: 4,
        reasonName: 'Subject Meeting',
      },
      {
        id: 5,
        reasonName: 'Prefered',
      },
    ],
  };

  onSubmit = e => {
    e.preventDefault();
    this.assignN(this.state.firstName, this.state.lastName, this.state.reason2);
    this.setState({ firstName: '' });
    this.setState({ lastName: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  assignN = (firstName, lastName, reason2) => {
    const newEntry = {
      firstName,
      lastName,
      reason: reason2,
    };
    this.props.addEntry(newEntry);
  };

  delEnt = id => {
    this.props.deleteEntry(id);
  };

  render() {
    const { entries } = this.props.entry;
    return (
      <div>
        <ul className='flex-shrink'>
          {entries.map(({ _id, firstName, lastName, reason }) => (
            <li key={_id} className='m-3 '>
              {firstName} {lastName} {reason}
              <button
                onClick={this.delEnt.bind(this, _id)}
                className='bg-gray-700 px-2 rounded-full curser-pointer float-right'
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <form
          onSubmit={this.onSubmit}
          className='flex flex-col min-w-full max-w-1 sm:max-w-none'
        >
          <input
            className='appearance-none  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 m-2 focus:outline-none focus:bg-white focus:border-gray-500 min-w-auto'
            name='firstName'
            type='text'
            placeholder='First Name'
            value={this.state.firstName}
            onChange={this.onChange}
          />
          <input
            className='appearance-none  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 m-2 focus:outline-none focus:bg-white focus:border-gray-500 min-w-auto'
            name='lastName'
            type='text'
            placeholder='Last Name'
            value={this.state.lastName}
            onChange={this.onChange}
          />
          <select
            className='appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 m-2 rounded focus:outline-none focus:bg-white focus:border-gray-500 min-w-auto'
            id='grid-state'
            name='reason2'
            value={this.state.reason2}
            onChange={this.onChange}
          >
            {this.state.reason.map(reason => (
              <option key={reason.id} reason={reason}>
                {reason.reasonName}
              </option>
            ))}
          </select>
          <input
            type='submit'
            className='bg-gray-400 rounded shadow-xl px-4 py-2 m-2 text-lg hover:bg-gray-700 inline-block min-w-auto'
            value='Assign'
            // onClick={this.onSubmit}
          />
        </form>
      </div>
    );
  }
}

AssignBtn.propTypes = {
  getEntries: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func.isRequired,
  addEntry: PropTypes.func.isRequired,
  entry: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  entry: state.entry,
});

export default connect(mapStateToProps, { getEntries, deleteEntry, addEntry })(
  AssignBtn
);
