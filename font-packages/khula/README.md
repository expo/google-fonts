# @expo-google-fonts/khula

This package lets you use the [**Khula**](https://fonts.google.com/specimen/Khula) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Khula

![Khula](./font-family.png)

This font family contains [5 styles](#gallery).

- `Khula_Light300`
- `Khula_Regular400`
- `Khula_SemiBold600`
- `Khula_Bold700`
- `Khula_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/khula expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Khula_Light300,
  Khula_Regular400,
  Khula_SemiBold600,
  Khula_Bold700,
  Khula_ExtraBold800,
} from '@expo-google-fonts/khula';

export default () => {
  let [fontsLoaded] = useFonts({
    Khula_Light300,
    Khula_Regular400,
    Khula_SemiBold600,
    Khula_Bold700,
    Khula_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Khula_Light300' }}>
          Khula_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Khula_Regular400' }}>
          Khula_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Khula_SemiBold600' }}>
          Khula_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Khula_Bold700' }}>
          Khula_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Khula_ExtraBold800' }}>
          Khula_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Khula_Light300
![Khula_Light300](./565c281fe5c11e451834dd30eda6e6d94a41c1a9c186c175541aa8ddef492d4f.ttf.png)

##### Khula_Regular400
![Khula_Regular400](./743e9de20b77192c80fd43452b591fcc85ef36aa1dd7746171503962b5687046.ttf.png)

##### Khula_SemiBold600
![Khula_SemiBold600](./af7d4733894aa875443cf8921445981662df9f4f3ee13e8cc151dee7c9ca5dde.ttf.png)

##### Khula_Bold700
![Khula_Bold700](./f8536c085e0c982334e632c44c763535658fd643b50254fb20784b8f377a6231.ttf.png)

##### Khula_ExtraBold800
![Khula_ExtraBold800](./976ee869557699be72a4b83bbb3362cc7be7de27930b5b671210b69063a49d2f.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Khula on Google Fonts](https://fonts.google.com/specimen/Khula)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/khula)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/khula)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
