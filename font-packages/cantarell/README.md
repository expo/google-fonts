# @expo-google-fonts/cantarell

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cantarell)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cantarell)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cantarell)

This package lets you use the [**Cantarell**](https://fonts.google.com/specimen/Cantarell) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cantarell

![Cantarell](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Cantarell_Regular400`
- `Cantarell_Regular400_Italic`
- `Cantarell_Bold700`
- `Cantarell_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cantarell expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Cantarell_Regular400,
  Cantarell_Regular400_Italic,
  Cantarell_Bold700,
  Cantarell_Bold700_Italic,
} from '@expo-google-fonts/cantarell';

export default () => {
  let [fontsLoaded] = useFonts({
    Cantarell_Regular400,
    Cantarell_Regular400_Italic,
    Cantarell_Bold700,
    Cantarell_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cantarell_Regular400' }}>
          Cantarell_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cantarell_Regular400_Italic' }}>
          Cantarell_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cantarell_Bold700' }}>
          Cantarell_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cantarell_Bold700_Italic' }}>
          Cantarell_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Cantarell_Regular400
![Cantarell_Regular400](./1e62d82800c92f72ed501733b5d52d7b8a5d88d1c6315bfdaf7f8ce781108c00.ttf.png)

##### Cantarell_Regular400_Italic
![Cantarell_Regular400_Italic](./6d9559dd0df30daed7da97dc8ef05e7f39b72205fb9bd7a055ddaa5242afd36f.ttf.png)

##### Cantarell_Bold700
![Cantarell_Bold700](./db0c34021061680135f973a2cb5565811527ea91f2fa07d023f4e105eb6f45d3.ttf.png)

##### Cantarell_Bold700_Italic
![Cantarell_Bold700_Italic](./bb2c0f469972ec2016c3b8b8254ea0077f46207efb249afb3c4d356cf2c5418e.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cantarell` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cantarell page on Google Fonts](https://fonts.google.com/specimen/Cantarell) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cantarell on Google Fonts](https://fonts.google.com/specimen/Cantarell)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cantarell)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cantarell)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
