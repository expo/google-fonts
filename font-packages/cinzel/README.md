# @expo-google-fonts/cinzel

This package lets you use the [**Cinzel**](https://fonts.google.com/specimen/Cinzel) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cinzel

![Cinzel](./font-family.png)

This font family contains [3 styles](#gallery).

- `Cinzel_Regular400`
- `Cinzel_Bold700`
- `Cinzel_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cinzel expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Cinzel_Regular400, Cinzel_Bold700, Cinzel_Black900 } from '@expo-google-fonts/cinzel';

export default () => {
  let [fontsLoaded] = useFonts({
    Cinzel_Regular400,
    Cinzel_Bold700,
    Cinzel_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cinzel_Regular400' }}>
          Cinzel_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cinzel_Bold700' }}>
          Cinzel_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cinzel_Black900' }}>
          Cinzel_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Cinzel_Regular400
![Cinzel_Regular400](./1a1d67206903b7688f4187df3dd0563dce75a49b26d036c7e88798adcd6c8fab.ttf.png)

##### Cinzel_Bold700
![Cinzel_Bold700](./d385de045feb981ef4256fb3f82d128c1835f686ed5611dd1c5b01e8b615e7bb.ttf.png)

##### Cinzel_Black900
![Cinzel_Black900](./fbb068fbb60eb4c57957c490b9e8c4b00d9c8cc14bd064d85fca96516f5ae46f.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Cinzel on Google Fonts](https://fonts.google.com/specimen/Cinzel)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cinzel)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cinzel)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
