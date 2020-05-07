# @expo-google-fonts/gelasio

This package lets you use the [**Gelasio**](https://fonts.google.com/specimen/Gelasio) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Gelasio

![Gelasio](./font-family.png)

This font family contains [8 styles](#gallery).

- `Gelasio_Regular400`
- `Gelasio_Regular400_Italic`
- `Gelasio_Medium500`
- `Gelasio_Medium500_Italic`
- `Gelasio_SemiBold600`
- `Gelasio_SemiBold600_Italic`
- `Gelasio_Bold700`
- `Gelasio_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gelasio expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Gelasio_Regular400,
  Gelasio_Regular400_Italic,
  Gelasio_Medium500,
  Gelasio_Medium500_Italic,
  Gelasio_SemiBold600,
  Gelasio_SemiBold600_Italic,
  Gelasio_Bold700,
  Gelasio_Bold700_Italic,
} from '@expo-google-fonts/gelasio';

export default () => {
  let [fontsLoaded] = useFonts({
    Gelasio_Regular400,
    Gelasio_Regular400_Italic,
    Gelasio_Medium500,
    Gelasio_Medium500_Italic,
    Gelasio_SemiBold600,
    Gelasio_SemiBold600_Italic,
    Gelasio_Bold700,
    Gelasio_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_Regular400' }}>
          Gelasio_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_Regular400_Italic' }}>
          Gelasio_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_Medium500' }}>
          Gelasio_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_Medium500_Italic' }}>
          Gelasio_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_SemiBold600' }}>
          Gelasio_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_SemiBold600_Italic' }}>
          Gelasio_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_Bold700' }}>
          Gelasio_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_Bold700_Italic' }}>
          Gelasio_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Gelasio_Regular400
![Gelasio_Regular400](./2c178f975cfe7fd1383143d870be6652cd515bc4ce08487980cc8a24cb7d6658.ttf.png)

##### Gelasio_Regular400_Italic
![Gelasio_Regular400_Italic](./89d39a153c70693460a8dfc8abc227627e98f02a750210cdf30eafeaa3c07eff.ttf.png)

##### Gelasio_Medium500
![Gelasio_Medium500](./065abbe7b6a9053e634e391d0b4b626891e33a25a559b218467c09f92b7cbae7.ttf.png)

##### Gelasio_Medium500_Italic
![Gelasio_Medium500_Italic](./1f797bb1ec2839e88936d4386b44e04912d4d0dd8d71e154e831a3219ef0ccd2.ttf.png)

##### Gelasio_SemiBold600
![Gelasio_SemiBold600](./b65a3501691d4bc3cf001ba7b5ce1b366cf394b48c365a5cdd65d100d824c21b.ttf.png)

##### Gelasio_SemiBold600_Italic
![Gelasio_SemiBold600_Italic](./60cd6e57a0fbd73db6d7c92723083486d34b20aaca29bd13abfcdd63d30a6965.ttf.png)

##### Gelasio_Bold700
![Gelasio_Bold700](./f820053044147cdbb3843e05a662ec45de690ea2b00e3fa9d7b8ef154b1caa0c.ttf.png)

##### Gelasio_Bold700_Italic
![Gelasio_Bold700_Italic](./14cfaa5707e104d5c01401d62d8b27006faa96f78acc2952512962cd9a5059b1.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Gelasio on Google Fonts](https://fonts.google.com/specimen/Gelasio)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gelasio)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gelasio)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
