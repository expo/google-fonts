# @expo-google-fonts/maitree

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/maitree)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/maitree)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/maitree)

This package lets you use the [**Maitree**](https://fonts.google.com/specimen/Maitree) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Maitree

![Maitree](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Maitree_ExtraLight200`
- `Maitree_Light300`
- `Maitree_Regular400`
- `Maitree_Medium500`
- `Maitree_SemiBold600`
- `Maitree_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/maitree expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Maitree_ExtraLight200,
  Maitree_Light300,
  Maitree_Regular400,
  Maitree_Medium500,
  Maitree_SemiBold600,
  Maitree_Bold700,
  useFonts,
} from '@expo-google-fonts/maitree';

export default () => {
  let [fontsLoaded] = useFonts({
    Maitree_ExtraLight200,
    Maitree_Light300,
    Maitree_Regular400,
    Maitree_Medium500,
    Maitree_SemiBold600,
    Maitree_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Maitree_ExtraLight200' }}>
          Maitree_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Maitree_Light300' }}>
          Maitree_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Maitree_Regular400' }}>
          Maitree_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Maitree_Medium500' }}>
          Maitree_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Maitree_SemiBold600' }}>
          Maitree_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Maitree_Bold700' }}>
          Maitree_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Maitree_ExtraLight200
![Maitree_ExtraLight200](./0739208db7083eb1320ec06ca68d5399840b972ed04401c338c373289f55ea74.ttf.png)

##### Maitree_Light300
![Maitree_Light300](./19f05ca05c789289a2d8b35a68f7d2eb186a1bdbb47ff7d630f96485b8d06f67.ttf.png)

##### Maitree_Regular400
![Maitree_Regular400](./acbe712e2f0c98c52be38409f5b250521e6124b9af003a579b4c94e4e1ad0f49.ttf.png)

##### Maitree_Medium500
![Maitree_Medium500](./40f80d32ae82b7f67fe5a2ba972ccaecdf4b1cafee213b04baf2deb885eaf0a5.ttf.png)

##### Maitree_SemiBold600
![Maitree_SemiBold600](./fa9e3fc69089c2a19cf33871b62432a04f1b7d8bbb7faa0150665802ed267f0e.ttf.png)

##### Maitree_Bold700
![Maitree_Bold700](./0dd3d4080658f7cdb11b91c35ec62b8ff94caac9d5808f03343f66556b2f0ed9.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/maitree` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Maitree page on Google Fonts](https://fonts.google.com/specimen/Maitree) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Maitree on Google Fonts](https://fonts.google.com/specimen/Maitree)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/maitree)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/maitree)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
