# @expo-google-fonts/open-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/open-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/open-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/open-sans)

This package lets you use the [**Open Sans**](https://fonts.google.com/specimen/Open+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Open Sans

![Open Sans](./font-family.png)

This font family contains [10 styles](#-gallery).

- `OpenSans_300Light`
- `OpenSans_300Light_Italic`
- `OpenSans_400Regular`
- `OpenSans_400Regular_Italic`
- `OpenSans_600SemiBold`
- `OpenSans_600SemiBold_Italic`
- `OpenSans_700Bold`
- `OpenSans_700Bold_Italic`
- `OpenSans_800ExtraBold`
- `OpenSans_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/open-sans expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
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
            fontFamily: 'OpenSans_300Light',
          }}>
          Open Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'OpenSans_300Light_Italic',
          }}>
          Open Sans Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'OpenSans_400Regular',
          }}>
          Open Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'OpenSans_400Regular_Italic',
          }}>
          Open Sans Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'OpenSans_600SemiBold',
          }}>
          Open Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'OpenSans_600SemiBold_Italic',
          }}>
          Open Sans Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'OpenSans_700Bold',
          }}>
          Open Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'OpenSans_700Bold_Italic',
          }}>
          Open Sans Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'OpenSans_800ExtraBold',
          }}>
          Open Sans Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'OpenSans_800ExtraBold_Italic',
          }}>
          Open Sans Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### OpenSans_300Light
![OpenSans_300Light](./OpenSans_300Light.ttf.png)

##### OpenSans_300Light_Italic
![OpenSans_300Light_Italic](./OpenSans_300Light_Italic.ttf.png)

##### OpenSans_400Regular
![OpenSans_400Regular](./OpenSans_400Regular.ttf.png)

##### OpenSans_400Regular_Italic
![OpenSans_400Regular_Italic](./OpenSans_400Regular_Italic.ttf.png)

##### OpenSans_600SemiBold
![OpenSans_600SemiBold](./OpenSans_600SemiBold.ttf.png)

##### OpenSans_600SemiBold_Italic
![OpenSans_600SemiBold_Italic](./OpenSans_600SemiBold_Italic.ttf.png)

##### OpenSans_700Bold
![OpenSans_700Bold](./OpenSans_700Bold.ttf.png)

##### OpenSans_700Bold_Italic
![OpenSans_700Bold_Italic](./OpenSans_700Bold_Italic.ttf.png)

##### OpenSans_800ExtraBold
![OpenSans_800ExtraBold](./OpenSans_800ExtraBold.ttf.png)

##### OpenSans_800ExtraBold_Italic
![OpenSans_800ExtraBold_Italic](./OpenSans_800ExtraBold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/open-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Open Sans page on Google Fonts](https://fonts.google.com/specimen/Open+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Open Sans on Google Fonts](https://fonts.google.com/specimen/Open+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/open-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/open-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
