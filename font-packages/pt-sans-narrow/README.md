# @expo-google-fonts/pt-sans-narrow

This package lets you use the [**PT Sans Narrow**](https://fonts.google.com/specimen/PT+Sans+Narrow) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## PT Sans Narrow

![PT Sans Narrow](./font-family.png)

This font family contains [2 styles](#gallery).

- `PTSansNarrow_Regular400`
- `PTSansNarrow_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/pt-sans-narrow expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { PTSansNarrow_Regular400, PTSansNarrow_Bold700 } from '@expo-google-fonts/pt-sans-narrow';

export default () => {
  let [fontsLoaded] = useFonts({
    PTSansNarrow_Regular400,
    PTSansNarrow_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSansNarrow_Regular400' }}>
          PTSansNarrow_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSansNarrow_Bold700' }}>
          PTSansNarrow_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### PTSansNarrow_Regular400
![PTSansNarrow_Regular400](./9d184233e6f48f81c6e510a1067d4f632052f899bf2f2bef4a69ab709bfe45a5.ttf.png)

##### PTSansNarrow_Bold700
![PTSansNarrow_Bold700](./a16a62299cf1143c59a4ec676c956c6831a90698fd830de4c85632a83c56d52c.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [PT Sans Narrow on Google Fonts](https://fonts.google.com/specimen/PT+Sans+Narrow)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pt-sans-narrow)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pt-sans-narrow)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
