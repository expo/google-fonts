# @expo-google-fonts/rubik

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rubik)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rubik)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rubik)

This package lets you use the [**Rubik**](https://fonts.google.com/specimen/Rubik) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Rubik

![Rubik](./font-family.png)

This font family contains [10 styles](#-gallery).

- `Rubik_300Light`
- `Rubik_300Light_Italic`
- `Rubik_400Regular`
- `Rubik_400Regular_Italic`
- `Rubik_500Medium`
- `Rubik_500Medium_Italic`
- `Rubik_700Bold`
- `Rubik_700Bold_Italic`
- `Rubik_900Black`
- `Rubik_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/rubik expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Rubik_300Light,
  Rubik_300Light_Italic,
  Rubik_400Regular,
  Rubik_400Regular_Italic,
  Rubik_500Medium,
  Rubik_500Medium_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
  Rubik_900Black,
  Rubik_900Black_Italic,
} from '@expo-google-fonts/rubik';

export default () => {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_300Light_Italic,
    Rubik_400Regular,
    Rubik_400Regular_Italic,
    Rubik_500Medium,
    Rubik_500Medium_Italic,
    Rubik_700Bold,
    Rubik_700Bold_Italic,
    Rubik_900Black,
    Rubik_900Black_Italic,
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
            fontFamily: 'Rubik_300Light',
          }}>
          Rubik Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rubik_300Light_Italic',
          }}>
          Rubik Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rubik_400Regular',
          }}>
          Rubik Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rubik_400Regular_Italic',
          }}>
          Rubik Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rubik_500Medium',
          }}>
          Rubik Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rubik_500Medium_Italic',
          }}>
          Rubik Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rubik_700Bold',
          }}>
          Rubik Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rubik_700Bold_Italic',
          }}>
          Rubik Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rubik_900Black',
          }}>
          Rubik Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rubik_900Black_Italic',
          }}>
          Rubik Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Rubik_300Light
![Rubik_300Light](./Rubik_300Light.ttf.png)

##### Rubik_300Light_Italic
![Rubik_300Light_Italic](./Rubik_300Light_Italic.ttf.png)

##### Rubik_400Regular
![Rubik_400Regular](./Rubik_400Regular.ttf.png)

##### Rubik_400Regular_Italic
![Rubik_400Regular_Italic](./Rubik_400Regular_Italic.ttf.png)

##### Rubik_500Medium
![Rubik_500Medium](./Rubik_500Medium.ttf.png)

##### Rubik_500Medium_Italic
![Rubik_500Medium_Italic](./Rubik_500Medium_Italic.ttf.png)

##### Rubik_700Bold
![Rubik_700Bold](./Rubik_700Bold.ttf.png)

##### Rubik_700Bold_Italic
![Rubik_700Bold_Italic](./Rubik_700Bold_Italic.ttf.png)

##### Rubik_900Black
![Rubik_900Black](./Rubik_900Black.ttf.png)

##### Rubik_900Black_Italic
![Rubik_900Black_Italic](./Rubik_900Black_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/rubik` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Rubik page on Google Fonts](https://fonts.google.com/specimen/Rubik) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Rubik on Google Fonts](https://fonts.google.com/specimen/Rubik)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rubik)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rubik)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
