# @expo-google-fonts/ubuntu

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ubuntu)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ubuntu)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ubuntu)

This package lets you use the [**Ubuntu**](https://fonts.google.com/specimen/Ubuntu) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ubuntu

![Ubuntu](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Ubuntu_300Light`
- `Ubuntu_300Light_Italic`
- `Ubuntu_400Regular`
- `Ubuntu_400Regular_Italic`
- `Ubuntu_500Medium`
- `Ubuntu_500Medium_Italic`
- `Ubuntu_700Bold`
- `Ubuntu_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ubuntu expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';

export default () => {
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Ubuntu_300Light',
          }}>
          Ubuntu Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Ubuntu_300Light_Italic',
          }}>
          Ubuntu Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Ubuntu_400Regular',
          }}>
          Ubuntu Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Ubuntu_400Regular_Italic',
          }}>
          Ubuntu Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Ubuntu_500Medium',
          }}>
          Ubuntu Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Ubuntu_500Medium_Italic',
          }}>
          Ubuntu Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Ubuntu_700Bold',
          }}>
          Ubuntu Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Ubuntu_700Bold_Italic',
          }}>
          Ubuntu Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Ubuntu_300Light
![Ubuntu_300Light](./Ubuntu_300Light.ttf.png)

##### Ubuntu_300Light_Italic
![Ubuntu_300Light_Italic](./Ubuntu_300Light_Italic.ttf.png)

##### Ubuntu_400Regular
![Ubuntu_400Regular](./Ubuntu_400Regular.ttf.png)

##### Ubuntu_400Regular_Italic
![Ubuntu_400Regular_Italic](./Ubuntu_400Regular_Italic.ttf.png)

##### Ubuntu_500Medium
![Ubuntu_500Medium](./Ubuntu_500Medium.ttf.png)

##### Ubuntu_500Medium_Italic
![Ubuntu_500Medium_Italic](./Ubuntu_500Medium_Italic.ttf.png)

##### Ubuntu_700Bold
![Ubuntu_700Bold](./Ubuntu_700Bold.ttf.png)

##### Ubuntu_700Bold_Italic
![Ubuntu_700Bold_Italic](./Ubuntu_700Bold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ubuntu` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ubuntu page on Google Fonts](https://fonts.google.com/specimen/Ubuntu) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ubuntu on Google Fonts](https://fonts.google.com/specimen/Ubuntu)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ubuntu)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ubuntu)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
