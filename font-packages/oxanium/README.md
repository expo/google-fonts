# @expo-google-fonts/oxanium

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/oxanium)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/oxanium)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/oxanium)

This package lets you use the [**Oxanium**](https://fonts.google.com/specimen/Oxanium) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Oxanium

![Oxanium](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Oxanium_ExtraLight200`
- `Oxanium_Light300`
- `Oxanium_Regular400`
- `Oxanium_Medium500`
- `Oxanium_SemiBold600`
- `Oxanium_Bold700`
- `Oxanium_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/oxanium expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Oxanium_ExtraLight200,
  Oxanium_Light300,
  Oxanium_Regular400,
  Oxanium_Medium500,
  Oxanium_SemiBold600,
  Oxanium_Bold700,
  Oxanium_ExtraBold800,
} from '@expo-google-fonts/oxanium';

export default () => {
  let [fontsLoaded] = useFonts({
    Oxanium_ExtraLight200,
    Oxanium_Light300,
    Oxanium_Regular400,
    Oxanium_Medium500,
    Oxanium_SemiBold600,
    Oxanium_Bold700,
    Oxanium_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oxanium_ExtraLight200' }}>
          Oxanium_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oxanium_Light300' }}>
          Oxanium_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oxanium_Regular400' }}>
          Oxanium_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oxanium_Medium500' }}>
          Oxanium_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oxanium_SemiBold600' }}>
          Oxanium_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oxanium_Bold700' }}>
          Oxanium_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oxanium_ExtraBold800' }}>
          Oxanium_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Oxanium_ExtraLight200
![Oxanium_ExtraLight200](./89daee61e7358c34dbacac977e9f2c92221971ab81d9345af9d294687a538ace.ttf.png)

##### Oxanium_Light300
![Oxanium_Light300](./fef895a1cf0e2e0ea02299a10df50702cff292d28fd9fba618f118b9d7f1cc70.ttf.png)

##### Oxanium_Regular400
![Oxanium_Regular400](./09fedc2fbf2c81af9711328c3b1fe1bf632512d8714d254cafe53fd7c9e23ebe.ttf.png)

##### Oxanium_Medium500
![Oxanium_Medium500](./f15be0f59920c03bbe89ad1bb66c9df4b660acb2c329f30e1d75e846e10e30d2.ttf.png)

##### Oxanium_SemiBold600
![Oxanium_SemiBold600](./c3a19352e2ab05f91352b26d6eeef4d8b57575350956c0a8d99d7824bfea43c6.ttf.png)

##### Oxanium_Bold700
![Oxanium_Bold700](./02e5724444f1a7053fc3043649b8c5b76a2f698757d9c678cc2e80dbaa8a221a.ttf.png)

##### Oxanium_ExtraBold800
![Oxanium_ExtraBold800](./1d805023212166271a84af73c8e13073ce5a29746483c5fa3ae9941eaa7577c8.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/oxanium` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Oxanium page on Google Fonts](https://fonts.google.com/specimen/Oxanium) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Oxanium on Google Fonts](https://fonts.google.com/specimen/Oxanium)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/oxanium)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/oxanium)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
