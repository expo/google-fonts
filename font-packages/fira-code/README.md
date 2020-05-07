# @expo-google-fonts/fira-code

This package lets you use the [**Fira Code**](https://fonts.google.com/specimen/Fira+Code) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Fira Code

![Fira Code](./font-family.png)

This font family contains [5 styles](#gallery).

- `FiraCode_Light300`
- `FiraCode_Regular400`
- `FiraCode_Medium500`
- `FiraCode_SemiBold600`
- `FiraCode_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/fira-code expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  FiraCode_Light300,
  FiraCode_Regular400,
  FiraCode_Medium500,
  FiraCode_SemiBold600,
  FiraCode_Bold700,
} from '@expo-google-fonts/fira-code';

export default () => {
  let [fontsLoaded] = useFonts({
    FiraCode_Light300,
    FiraCode_Regular400,
    FiraCode_Medium500,
    FiraCode_SemiBold600,
    FiraCode_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraCode_Light300' }}>
          FiraCode_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraCode_Regular400' }}>
          FiraCode_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraCode_Medium500' }}>
          FiraCode_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraCode_SemiBold600' }}>
          FiraCode_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraCode_Bold700' }}>
          FiraCode_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### FiraCode_Light300
![FiraCode_Light300](./53d9824e306c207a6de228abf02372c59c9b2166fc2a5b38d40d9f8b2cca4f53.ttf.png)

##### FiraCode_Regular400
![FiraCode_Regular400](./952b0d5a1d329fa4c8229aa97143ed9ff3f239f1b4bd84e4c14b6f4f1ccdd705.ttf.png)

##### FiraCode_Medium500
![FiraCode_Medium500](./eeca9b497781ac45524ddd9ca6fdfa383130e3d2a613045bc288fbeaf3796ce6.ttf.png)

##### FiraCode_SemiBold600
![FiraCode_SemiBold600](./9272ceedc952a0945683c249045952038f3cd3c1cf0bd0bfda3a07417e44fd48.ttf.png)

##### FiraCode_Bold700
![FiraCode_Bold700](./e534947b075377251fa622cf2ae6881dd4073346a5fefda144b1406f45b9ade9.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Fira Code on Google Fonts](https://fonts.google.com/specimen/Fira+Code)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fira-code)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fira-code)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
