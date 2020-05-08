# @expo-google-fonts/inika

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/inika)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/inika)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/inika)

This package lets you use the [**Inika**](https://fonts.google.com/specimen/Inika) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Inika

![Inika](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Inika_Regular400`
- `Inika_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/inika expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Inika_Regular400, Inika_Bold700 } from '@expo-google-fonts/inika';

export default () => {
  let [fontsLoaded] = useFonts({
    Inika_Regular400,
    Inika_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inika_Regular400' }}>
          Inika_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inika_Bold700' }}>
          Inika_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Inika_Regular400
![Inika_Regular400](./b4a85642ea25e8b6a0657684af8ab67401b31b1f39ef952616d46f1ee711107e.ttf.png)

##### Inika_Bold700
![Inika_Bold700](./e831ff700e7e5ee39b33fb1ae47d7f98ce526a136e1d90c4aaf1cbfbba0d4336.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/inika` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Inika page on Google Fonts](https://fonts.google.com/specimen/Inika) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Inika on Google Fonts](https://fonts.google.com/specimen/Inika)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inika)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inika)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
