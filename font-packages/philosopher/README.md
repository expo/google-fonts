# @expo-google-fonts/philosopher

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/philosopher)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/philosopher)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/philosopher)

This package lets you use the [**Philosopher**](https://fonts.google.com/specimen/Philosopher) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Philosopher

![Philosopher](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Philosopher_Regular400`
- `Philosopher_Regular400_Italic`
- `Philosopher_Bold700`
- `Philosopher_Bold700_Italic`

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
  Philosopher_Regular400,
  Philosopher_Regular400_Italic,
  Philosopher_Bold700,
  Philosopher_Bold700_Italic,
  useFonts,
} from '@expo-google-fonts/philosopher';

export default () => {
  let [fontsLoaded] = useFonts({
    Philosopher_Regular400,
    Philosopher_Regular400_Italic,
    Philosopher_Bold700,
    Philosopher_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_Regular400' }}>
          Philosopher_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_Regular400_Italic' }}>
          Philosopher_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_Bold700' }}>
          Philosopher_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_Bold700_Italic' }}>
          Philosopher_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Philosopher_Regular400
![Philosopher_Regular400](./51b0e57bc81490c490b7400858499b5823a13926de953476e8d40730ab9fc02f.ttf.png)

##### Philosopher_Regular400_Italic
![Philosopher_Regular400_Italic](./32aafaf60ca199b7f91291e6aa9e68b91df4b48f53246f454e7eddf8e25ff50c.ttf.png)

##### Philosopher_Bold700
![Philosopher_Bold700](./174ba5b59df6e5bdec8e23657ecdf679226b3b6f23f5625fa814540e88b30628.ttf.png)

##### Philosopher_Bold700_Italic
![Philosopher_Bold700_Italic](./aed7000bdaef8a04be340ee51e9ff7157c538442a3fda8daeee40a849eaf33cb.ttf.png)


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
