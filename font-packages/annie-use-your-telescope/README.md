# @expo-google-fonts/annie-use-your-telescope

This package lets you use the [**Annie Use Your Telescope**](https://fonts.google.com/specimen/Annie+Use+Your+Telescope) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Annie Use Your Telescope

![Annie Use Your Telescope](./font-family.png)

This font family contains [1 style](#gallery).

- `AnnieUseYourTelescope_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/annie-use-your-telescope expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { AnnieUseYourTelescope_Regular400 } from '@expo-google-fonts/annie-use-your-telescope';

export default () => {
  let [fontsLoaded] = useFonts({
    AnnieUseYourTelescope_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AnnieUseYourTelescope_Regular400' }}>
          AnnieUseYourTelescope_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### AnnieUseYourTelescope_Regular400
![AnnieUseYourTelescope_Regular400](./65c0cd06d1ec2528de45688966f2971cf95fed9f810f246e08b4efd9e717d850.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Annie Use Your Telescope on Google Fonts](https://fonts.google.com/specimen/Annie+Use+Your+Telescope)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/annie-use-your-telescope)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/annie-use-your-telescope)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
