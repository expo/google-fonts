# @expo-google-fonts/news-cycle

This package lets you use the [**News Cycle**](https://fonts.google.com/specimen/News+Cycle) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## News Cycle

![News Cycle](./font-family.png)

This font family contains [2 styles](#gallery).

- `NewsCycle_Regular400`
- `NewsCycle_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/news-cycle expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { NewsCycle_Regular400, NewsCycle_Bold700 } from '@expo-google-fonts/news-cycle';

export default () => {
  let [fontsLoaded] = useFonts({
    NewsCycle_Regular400,
    NewsCycle_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'NewsCycle_Regular400' }}>
          NewsCycle_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NewsCycle_Bold700' }}>
          NewsCycle_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### NewsCycle_Regular400
![NewsCycle_Regular400](./9dc74270959405ee468a6ea83452b01a8075067bf71cb96c8097511477f8aec6.ttf.png)

##### NewsCycle_Bold700
![NewsCycle_Bold700](./301d13c6e3a40093c2244566226928b2e8bd2843d5cb06302c5c30b44c3d4bc2.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [News Cycle on Google Fonts](https://fonts.google.com/specimen/News+Cycle)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/news-cycle)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/news-cycle)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
