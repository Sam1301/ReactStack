import { View, ListView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  componentWillMount() {
      // what data listview should use
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.DataSource = ds.cloneWithRows(this.props.libraries);
  }

  // returns single row jsx
  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.DataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
