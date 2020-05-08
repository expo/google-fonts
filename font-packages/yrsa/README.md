# @expo-google-fonts/yrsa

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/yrsa)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/yrsa)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/yrsa)

This package lets you use the [**Yrsa**](https://fonts.google.com/specimen/Yrsa) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Yrsa

![Yrsa](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Yrsa_Light300`
- `Yrsa_Regular400`
- `Yrsa_Medium500`
- `Yrsa_SemiBold600`
- `Yrsa_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/yrsa expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Yrsa_Light300,
  Yrsa_Regular400,
  Yrsa_Medium500,
  Yrsa_SemiBold600,
  Yrsa_Bold700,
} from '@expo-google-fonts/yrsa';

export default () => {
  let [fontsLoaded] = useFonts({
    Yrsa_Light300,
    Yrsa_Regular400,
    Yrsa_Medium500,
    Yrsa_SemiBold600,
    Yrsa_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Yrsa_Light300' }}>
          Yrsa_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Yrsa_Regular400' }}>
          Yrsa_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Yrsa_Medium500' }}>
          Yrsa_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Yrsa_SemiBold600' }}>
          Yrsa_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Yrsa_Bold700' }}>Yrsa_Bold700</Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Yrsa_Light300
![Yrsa_Light300](./b942444580e24561d6008f08b6b3145662d902d140408e9f6c92ee7cd5affa00.ttf.png)

##### Yrsa_Regular400
![Yrsa_Regular400](./9782370d37625db345595b8f48ae5156b4c8256cd4867b119af3114faa566686.ttf.png)

##### Yrsa_Medium500
![Yrsa_Medium500](./61c4e4c03498db5ec4f926576603b2102fac9f90b73b7aafe7e6ebadc30444b0.ttf.png)

##### Yrsa_SemiBold600
![Yrsa_SemiBold600](./dd8f96acf795a40fc16730d309bc4a64f1f21d96ac4e93763611cee5539b77f9.ttf.png)

##### Yrsa_Bold700
![Yrsa_Bold700](./94de8af1023c6dab0ffcb86966c85582afca7392a0c3377cd0f1cb536c9d095c.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/yrsa` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Yrsa page on Google Fonts](https://fonts.google.com/specimen/Yrsa) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Yrsa on Google Fonts](https://fonts.google.com/specimen/Yrsa)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/yrsa)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/yrsa)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
