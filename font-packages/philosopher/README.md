# @expo-google-fonts/philosopher

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/philosopher)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/philosopher)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/philosopher)

This package lets you use the [**Philosopher**](https://fonts.google.com/specimen/Philosopher) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Philosopher

![Philosopher](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Philosopher_400Regular`
- `Philosopher_400Regular_Italic`
- `Philosopher_700Bold`
- `Philosopher_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/philosopher expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Philosopher_400Regular,
  Philosopher_400Regular_Italic,
  Philosopher_700Bold,
  Philosopher_700Bold_Italic,
} from '@expo-google-fonts/philosopher';

export default () => {
  let [fontsLoaded] = useFonts({
    Philosopher_400Regular,
    Philosopher_400Regular_Italic,
    Philosopher_700Bold,
    Philosopher_700Bold_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_400Regular' }}>
          Philosopher_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_400Regular_Italic' }}>
          Philosopher_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_700Bold' }}>
          Philosopher_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_700Bold_Italic' }}>
          Philosopher_700Bold_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Philosopher_400Regular
![Philosopher_400Regular](./Philosopher_400Regular.ttf.png)

##### Philosopher_400Regular_Italic
![Philosopher_400Regular_Italic](./Philosopher_400Regular_Italic.ttf.png)

##### Philosopher_700Bold
![Philosopher_700Bold](./Philosopher_700Bold.ttf.png)

##### Philosopher_700Bold_Italic
![Philosopher_700Bold_Italic](./Philosopher_700Bold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/philosopher` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Philosopher page on Google Fonts](https://fonts.google.com/specimen/Philosopher) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Philosopher on Google Fonts](https://fonts.google.com/specimen/Philosopher)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/philosopher)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/philosopher)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
