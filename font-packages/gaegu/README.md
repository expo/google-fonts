# @expo-google-fonts/gaegu

This package lets you use the [**Gaegu**](https://fonts.google.com/specimen/Gaegu) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Gaegu

![Gaegu](./font-family.png)

This font family contains [3 styles](#gallery).

- `Gaegu_Light300`
- `Gaegu_Regular400`
- `Gaegu_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gaegu expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Gaegu_Light300, Gaegu_Regular400, Gaegu_Bold700 } from '@expo-google-fonts/gaegu';

export default () => {
  let [fontsLoaded] = useFonts({
    Gaegu_Light300,
    Gaegu_Regular400,
    Gaegu_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gaegu_Light300' }}>
          Gaegu_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gaegu_Regular400' }}>
          Gaegu_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gaegu_Bold700' }}>
          Gaegu_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Gaegu_Light300
![Gaegu_Light300](./4b15c05b09479751067fd7c35435678b929504ea6e4a7e996ab5d09a77df6a9c.ttf.png)

##### Gaegu_Regular400
![Gaegu_Regular400](./aee336135ec347654a2f36421c05f5d68a6017eec18e264e58e7aeda0f702951.ttf.png)

##### Gaegu_Bold700
![Gaegu_Bold700](./047c721d06b371ebfb6f94beb758b1de181d8afc8c8e6eca6829405bd8a1cb91.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Gaegu on Google Fonts](https://fonts.google.com/specimen/Gaegu)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gaegu)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gaegu)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
