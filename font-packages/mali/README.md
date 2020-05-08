# @expo-google-fonts/mali

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mali)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mali)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mali)

This package lets you use the [**Mali**](https://fonts.google.com/specimen/Mali) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Mali

![Mali](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Mali_ExtraLight200`
- `Mali_ExtraLight200_Italic`
- `Mali_Light300`
- `Mali_Light300_Italic`
- `Mali_Regular400`
- `Mali_Regular400_Italic`
- `Mali_Medium500`
- `Mali_Medium500_Italic`
- `Mali_SemiBold600`
- `Mali_SemiBold600_Italic`
- `Mali_Bold700`
- `Mali_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/mali expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Mali_ExtraLight200,
  Mali_ExtraLight200_Italic,
  Mali_Light300,
  Mali_Light300_Italic,
  Mali_Regular400,
  Mali_Regular400_Italic,
  Mali_Medium500,
  Mali_Medium500_Italic,
  Mali_SemiBold600,
  Mali_SemiBold600_Italic,
  Mali_Bold700,
  Mali_Bold700_Italic,
} from '@expo-google-fonts/mali';

export default () => {
  let [fontsLoaded] = useFonts({
    Mali_ExtraLight200,
    Mali_ExtraLight200_Italic,
    Mali_Light300,
    Mali_Light300_Italic,
    Mali_Regular400,
    Mali_Regular400_Italic,
    Mali_Medium500,
    Mali_Medium500_Italic,
    Mali_SemiBold600,
    Mali_SemiBold600_Italic,
    Mali_Bold700,
    Mali_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_ExtraLight200' }}>
          Mali_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_ExtraLight200_Italic' }}>
          Mali_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_Light300' }}>
          Mali_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_Light300_Italic' }}>
          Mali_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_Regular400' }}>
          Mali_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_Regular400_Italic' }}>
          Mali_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_Medium500' }}>
          Mali_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_Medium500_Italic' }}>
          Mali_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_SemiBold600' }}>
          Mali_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_SemiBold600_Italic' }}>
          Mali_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_Bold700' }}>Mali_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mali_Bold700_Italic' }}>
          Mali_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Mali_ExtraLight200
![Mali_ExtraLight200](./e492669e95f03389c8fdab60ebc0fc25dc89f921dfa3b4156ed4ee3556b26a22.ttf.png)

##### Mali_ExtraLight200_Italic
![Mali_ExtraLight200_Italic](./9c4049d3990bfb82d515b0f6b44c0669352cf1d4f0ad71a6c39c4d800d91afc5.ttf.png)

##### Mali_Light300
![Mali_Light300](./7ea3a4d356e5cb938ea97489c60b148dd2e33b9bdc641f01c245b965a8028725.ttf.png)

##### Mali_Light300_Italic
![Mali_Light300_Italic](./4aec4ec351696e4bc5a49deed841e02a84880d0fdc72dafdedce7154770dd8d0.ttf.png)

##### Mali_Regular400
![Mali_Regular400](./cc1fb36bca8387ebe3fdb1a9052a01ed8312a51a3ac265b51d93b7a6bf6ae45c.ttf.png)

##### Mali_Regular400_Italic
![Mali_Regular400_Italic](./575418ad9604b624f1d09cbaa0d15edbdec2653423419c83fae61131d0f0fdc5.ttf.png)

##### Mali_Medium500
![Mali_Medium500](./56baed7152d5e08635cc8a9e3a241afd0e7659f30374cb82033266959d273382.ttf.png)

##### Mali_Medium500_Italic
![Mali_Medium500_Italic](./d1e4f0963402e82a0e541cc7ff0d371c1311270840c7059b94bd710b0953210a.ttf.png)

##### Mali_SemiBold600
![Mali_SemiBold600](./3d34348744efcb7d239f7d07237bf644507c1d98545de940f5e36475267d7937.ttf.png)

##### Mali_SemiBold600_Italic
![Mali_SemiBold600_Italic](./56a65ebf56f24e0082786c224207d28f9e3ac7d58473839ef4e014f58dddc92e.ttf.png)

##### Mali_Bold700
![Mali_Bold700](./7d22887c912c6d24c96e8a7bd85a8bec285b2f6e82cb0f1239c7d62df8d66db1.ttf.png)

##### Mali_Bold700_Italic
![Mali_Bold700_Italic](./0cf0f0229db8cba537f46efd1c9a4734268f6011e5e10fc1ad8981849edfc421.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/mali` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mali page on Google Fonts](https://fonts.google.com/specimen/Mali) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mali on Google Fonts](https://fonts.google.com/specimen/Mali)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mali)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mali)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
