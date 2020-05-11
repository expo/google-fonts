# @expo-google-fonts/kalam

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kalam)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kalam)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kalam)

This package lets you use the [**Kalam**](https://fonts.google.com/specimen/Kalam) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Kalam

![Kalam](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Kalam_Light300`
- `Kalam_Regular400`
- `Kalam_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/kalam expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Kalam_Light300,
  Kalam_Regular400,
  Kalam_Bold700,
  useFonts,
} from '@expo-google-fonts/kalam';

export default () => {
  let [fontsLoaded] = useFonts({
    Kalam_Light300,
    Kalam_Regular400,
    Kalam_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kalam_Light300' }}>
          Kalam_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kalam_Regular400' }}>
          Kalam_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kalam_Bold700' }}>
          Kalam_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Kalam_Light300
![Kalam_Light300](./acc410247649f3164d61952a81b88737fb56977ac409e4d5f35d960e3b13747a.ttf.png)

##### Kalam_Regular400
![Kalam_Regular400](./546c956074b4cd1c7d9936a82b03a712ec46df693b5a0faa80d4233f6bc17d2c.ttf.png)

##### Kalam_Bold700
![Kalam_Bold700](./d48470c951c546b15999abb42141211e85484cffff16ce7612d07676efb9d0d8.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kalam` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kalam page on Google Fonts](https://fonts.google.com/specimen/Kalam) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kalam on Google Fonts](https://fonts.google.com/specimen/Kalam)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kalam)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kalam)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
