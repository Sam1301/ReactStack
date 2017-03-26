import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  renderDescription() {
      const { expanded, library } = this.props;
      if (expanded) {
        return (
          <CardSection>
            <Text>{library.description}</Text>
          </CardSection>
        );
      }
  }

  render() {
    const { id, title } = this.props.library;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectAction(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
