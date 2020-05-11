# @expo-google-fonts/yanone-kaffeesatz

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/yanone-kaffeesatz)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/yanone-kaffeesatz)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/yanone-kaffeesatz)

This package lets you use the [**Yanone Kaffeesatz**](https://fonts.google.com/specimen/Yanone+Kaffeesatz) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Yanone Kaffeesatz

![Yanone Kaffeesatz](./font-family.png)

This font family contains [4 styles](#-gallery).

- `YanoneKaffeesatz_ExtraLight200`
- `YanoneKaffeesatz_Light300`
- `YanoneKaffeesatz_Regular400`
- `YanoneKaffeesatz_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/yanone-kaffeesatz expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  YanoneKaffeesatz_ExtraLight200,
  YanoneKaffeesatz_Light300,
  YanoneKaffeesatz_Regular400,
  YanoneKaffeesatz_Bold700,
  useFonts,
} from '@expo-google-fonts/yanone-kaffeesatz';

export default () => {
  let [fontsLoaded] = useFonts({
    YanoneKaffeesatz_ExtraLight200,
    YanoneKaffeesatz_Light300,
    YanoneKaffeesatz_Regular400,
    YanoneKaffeesatz_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'YanoneKaffeesatz_ExtraLight200' }}>
          YanoneKaffeesatz_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'YanoneKaffeesatz_Light300' }}>
          YanoneKaffeesatz_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'YanoneKaffeesatz_Regular400' }}>
          YanoneKaffeesatz_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'YanoneKaffeesatz_Bold700' }}>
          YanoneKaffeesatz_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### YanoneKaffeesatz_ExtraLight200
![YanoneKaffeesatz_ExtraLight200](./9805245cc2de9c8da9ae786c7e17ac2da9f93c7b2ba3cc8f481e28eb05146193.ttf.png)

##### YanoneKaffeesatz_Light300
![YanoneKaffeesatz_Light300](./d9ed8432723bd4d507a98d52dc50b9852ac3d6456e0fbcf9bf639b19982af563.ttf.png)

##### YanoneKaffeesatz_Regular400
![YanoneKaffeesatz_Regular400](./c590a52e12f62af4fec495eae613bff7aa7763fb2c5bec48e1db96503ba91c1b.ttf.png)

##### YanoneKaffeesatz_Bold700
![YanoneKaffeesatz_Bold700](./5245342d46c5e01aaa2e808a7962687a57c7ffaad83ff05db327e9fbf28d79c0.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/yanone-kaffeesatz` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Yanone Kaffeesatz page on Google Fonts](https://fonts.google.com/specimen/Yanone+Kaffeesatz) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Yanone Kaffeesatz on Google Fonts](https://fonts.google.com/specimen/Yanone+Kaffeesatz)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/yanone-kaffeesatz)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/yanone-kaffeesatz)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
