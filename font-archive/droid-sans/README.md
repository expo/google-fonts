# @expo-google-fonts/droid-sans

This package lets you use the [**Droid Sans**](https://fonts.google.com/specimen/Droid+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Droid Sans

![Droid Sans](./font-family.png)

This font family contains [2 styles](#gallery).

- `DroidSans_Regular400`
- `DroidSans_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/droid-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { DroidSans_Regular400, DroidSans_Bold700 } from '@expo-google-fonts/droid-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    DroidSans_Regular400,
    DroidSans_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'DroidSans_Regular400' }}>
          DroidSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DroidSans_Bold700' }}>
          DroidSans_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### DroidSans_Regular400
![DroidSans_Regular400](./b1efe4b6a8b73a7069e3a5ede472fb84130f7ffaaded682d112e93f0d0fa5a9f.ttf.png)

##### DroidSans_Bold700
![DroidSans_Bold700](./32b87a290fa91f892687dcef391f2b06945d1be8f3dc243b55ffb118388368de.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Droid Sans on Google Fonts](https://fonts.google.com/specimen/Droid+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/droid-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/droid-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
