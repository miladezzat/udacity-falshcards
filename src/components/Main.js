import * as React from "react";
import { StyleSheet, SafeAreaView, View, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { handleGetAllDecks } from "../store/actions/decks";

class Main extends React.Component {
  componentDidMount() {
    this.props.initilizeData();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {this.props.children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function mapDispatchToProps(dispatch) {
  return {
    initilizeData: () => {
      dispatch(handleGetAllDecks());
    }
  };
}

export default connect(null, mapDispatchToProps)(Main);
