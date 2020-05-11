# @expo-google-fonts/dm-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/dm-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/dm-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/dm-sans)

This package lets you use the [**DM Sans**](https://fonts.google.com/specimen/DM+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## DM Sans

![DM Sans](./font-family.png)

This font family contains [6 styles](#-gallery).

- `DMSans_Regular400`
- `DMSans_Regular400_Italic`
- `DMSans_Medium500`
- `DMSans_Medium500_Italic`
- `DMSans_Bold700`
- `DMSans_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/dm-sans expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  DMSans_Regular400,
  DMSans_Regular400_Italic,
  DMSans_Medium500,
  DMSans_Medium500_Italic,
  DMSans_Bold700,
  DMSans_Bold700_Italic,
  useFonts,
} from '@expo-google-fonts/dm-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    DMSans_Regular400,
    DMSans_Regular400_Italic,
    DMSans_Medium500,
    DMSans_Medium500_Italic,
    DMSans_Bold700,
    DMSans_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'DMSans_Regular400' }}>
          DMSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DMSans_Regular400_Italic' }}>
          DMSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DMSans_Medium500' }}>
          DMSans_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DMSans_Medium500_Italic' }}>
          DMSans_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DMSans_Bold700' }}>
          DMSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DMSans_Bold700_Italic' }}>
          DMSans_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### DMSans_Regular400
![DMSans_Regular400](./e518fdb0a5c0ebe0d1d1b02a9025067837e79d235418ab9dc8366e7ce87fad55.ttf.png)

##### DMSans_Regular400_Italic
![DMSans_Regular400_Italic](./de4a1215c7928ebdd157181021531f87614894038bb9396b05826b7ae9595611.ttf.png)

##### DMSans_Medium500
![DMSans_Medium500](./683cd0ce949642886f9652656cfe66d569a79d1530fcde104214769c266ae121.ttf.png)

##### DMSans_Medium500_Italic
![DMSans_Medium500_Italic](./c3126b61a6d535d42dd4e6e4eb66648863d4d4f9bf639d63da74d20cb3fa1fb4.ttf.png)

##### DMSans_Bold700
![DMSans_Bold700](./940d8601e85100233071b73474474f0ea11612beecddd6da32efb7cd8a3971bd.ttf.png)

##### DMSans_Bold700_Italic
![DMSans_Bold700_Italic](./579b8c8cd4a4fd71ee7ac563e399eacbcba63f3f8556516c95830d98bb9fbae9.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/dm-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [DM Sans page on Google Fonts](https://fonts.google.com/specimen/DM+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [DM Sans on Google Fonts](https://fonts.google.com/specimen/DM+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/dm-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/dm-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
