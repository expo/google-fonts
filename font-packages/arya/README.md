# @expo-google-fonts/arya

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/arya)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/arya)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/arya)

This package lets you use the [**Arya**](https://fonts.google.com/specimen/Arya) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Arya

![Arya](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Arya_Regular400`
- `Arya_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/arya expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { Arya_Regular400, Arya_Bold700, useFonts } from '@expo-google-fonts/arya';

export default () => {
  let [fontsLoaded] = useFonts({
    Arya_Regular400,
    Arya_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arya_Regular400' }}>
          Arya_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arya_Bold700' }}>Arya_Bold700</Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Arya_Regular400
![Arya_Regular400](./98cf640f609db3f8940fc4bc1566dda034961cb11d23f71a277f3ab268c8859a.ttf.png)

##### Arya_Bold700
![Arya_Bold700](./6c168a53b559c7407d20692a42b94301046b15c4838d709b83992c32cab5732c.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/arya` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Arya page on Google Fonts](https://fonts.google.com/specimen/Arya) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Arya on Google Fonts](https://fonts.google.com/specimen/Arya)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/arya)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/arya)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
