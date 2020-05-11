# @expo-google-fonts/sulphur-point

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sulphur-point)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sulphur-point)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sulphur-point)

This package lets you use the [**Sulphur Point**](https://fonts.google.com/specimen/Sulphur+Point) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Sulphur Point

![Sulphur Point](./font-family.png)

This font family contains [3 styles](#-gallery).

- `SulphurPoint_Light300`
- `SulphurPoint_Regular400`
- `SulphurPoint_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sulphur-point expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  SulphurPoint_Light300,
  SulphurPoint_Regular400,
  SulphurPoint_Bold700,
  useFonts,
} from '@expo-google-fonts/sulphur-point';

export default () => {
  let [fontsLoaded] = useFonts({
    SulphurPoint_Light300,
    SulphurPoint_Regular400,
    SulphurPoint_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'SulphurPoint_Light300' }}>
          SulphurPoint_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SulphurPoint_Regular400' }}>
          SulphurPoint_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SulphurPoint_Bold700' }}>
          SulphurPoint_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### SulphurPoint_Light300
![SulphurPoint_Light300](./a21388d3a52630430a38cfb9e7aefbfa4653889b768e5fdc07c3eaa76c4bc5f0.ttf.png)

##### SulphurPoint_Regular400
![SulphurPoint_Regular400](./fd7664cb5a15da70be5d1769533c9cfa5abe937f64ce7bc3cf0fd9e155151280.ttf.png)

##### SulphurPoint_Bold700
![SulphurPoint_Bold700](./27c023fb553e5fa85d985bf1965ac74cdc7ca09e715c656f8dfe82a44c53f18d.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sulphur-point` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sulphur Point page on Google Fonts](https://fonts.google.com/specimen/Sulphur+Point) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sulphur Point on Google Fonts](https://fonts.google.com/specimen/Sulphur+Point)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sulphur-point)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sulphur-point)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
