# @expo-google-fonts/<%= packageName %>

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/<%= packageName %>)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/<%= packageName %>)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/<%= packageName %>)

This package lets you use the [**<%= fontName %>**](https://fonts.google.com/specimen/<%- fontName.replace(/ /g, '+') %>) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## <%= fontName %>

![<%= fontName %>](./font-family.png)

This font family contains [<%= variantsCount %> style<%= variantsCount ? 's' : '' %>](#-gallery).

<%- fontVariants.map((fsv) => '- `' + fsv + '`').join('\n') %>

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/<%= packageName %> expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, <%- fontVariants.join(', ') %> } from '@expo-google-fonts/<%= packageName %>';

export default () => {

  let [fontsLoaded] = useFonts({
    <%- fontVariants.join(', \n    ') %>
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
<%- fontVariantsWithDisplayName.map(
          ({varName, displayName}) => `        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for \`fontFamily\` here; it expects a string!
          fontFamily: ${JSON.stringify(varName)}
        }}>
          ${displayName}
        </Text>`
        )
        .join('\n') %>
      </View>
    );
  }
};
```

## 🔡 Gallery

<%- variantsTable %>

## 👩‍💻 Use During Development

<%= devPackageDescription %>

## 📖 License

The `@expo-google-fonts/<%= packageName %>` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [<%= fontName %> page on Google Fonts](https://fonts.google.com/specimen/<%- fontName.replace(/ /g, '+') %>) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [<%= fontName %> on Google Fonts](https://fonts.google.com/specimen/<%- fontName.replace(/ /g, '+') %>)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/<%= packageName %>)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/<%= packageName %>)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
