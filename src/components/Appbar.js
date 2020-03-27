import * as React from "react";
import { Appbar } from "react-native-paper";

const Header = ({ menu, title, navigation }) => (
  <Appbar.Header>
    {menu === true ? (
      <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
    ) : (
      <Appbar.BackAction onPress={() => navigation.goBack(null)} />
    )}

    <Appbar.Content
      titleStyle={{
        fontWeight: "bold",
        fontSize: 20
      }}
      title={title}
      subtitle={null}
    />
  </Appbar.Header>
);

export default Header;
