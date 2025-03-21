# @expo-google-fonts/sansita

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sansita)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sansita)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sansita)

This package lets you use the [**Sansita**](https://fonts.google.com/specimen/Sansita) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Sansita

![Sansita](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Sansita_400Regular`
- `Sansita_400Regular_Italic`
- `Sansita_700Bold`
- `Sansita_700Bold_Italic`
- `Sansita_800ExtraBold`
- `Sansita_800ExtraBold_Italic`
- `Sansita_900Black`
- `Sansita_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/sansita expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Sansita_400Regular, Sansita_400Regular_Italic, Sansita_700Bold, Sansita_700Bold_Italic, Sansita_800ExtraBold, Sansita_800ExtraBold_Italic, Sansita_900Black, Sansita_900Black_Italic } from '@expo-google-fonts/sansita';

export default () => {

  let [fontsLoaded] = useFonts({
    Sansita_400Regular, 
    Sansita_400Regular_Italic, 
    Sansita_700Bold, 
    Sansita_700Bold_Italic, 
    Sansita_800ExtraBold, 
    Sansita_800ExtraBold_Italic, 
    Sansita_900Black, 
    Sansita_900Black_Italic
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sansita_400Regular"
        }}>
          Sansita Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sansita_400Regular_Italic"
        }}>
          Sansita Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sansita_700Bold"
        }}>
          Sansita Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sansita_700Bold_Italic"
        }}>
          Sansita Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sansita_800ExtraBold"
        }}>
          Sansita Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sansita_800ExtraBold_Italic"
        }}>
          Sansita Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sansita_900Black"
        }}>
          Sansita Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sansita_900Black_Italic"
        }}>
          Sansita Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Sansita_400Regular](./Sansita_400Regular.ttf.png)|![Sansita_400Regular_Italic](./Sansita_400Regular_Italic.ttf.png)|![Sansita_700Bold](./Sansita_700Bold.ttf.png)||
|![Sansita_700Bold_Italic](./Sansita_700Bold_Italic.ttf.png)|![Sansita_800ExtraBold](./Sansita_800ExtraBold.ttf.png)|![Sansita_800ExtraBold_Italic](./Sansita_800ExtraBold_Italic.ttf.png)||
|![Sansita_900Black](./Sansita_900Black.ttf.png)|![Sansita_900Black_Italic](./Sansita_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/sansita` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sansita page on Google Fonts](https://fonts.google.com/specimen/Sansita) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sansita on Google Fonts](https://fonts.google.com/specimen/Sansita)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sansita)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sansita)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
