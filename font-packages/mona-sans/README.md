# @expo-google-fonts/mona-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mona-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mona-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mona-sans)

This package lets you use the [**Mona Sans**](https://fonts.google.com/specimen/Mona+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mona Sans

![Mona Sans](./font-family.png)

This font family contains [16 styles](#-gallery).

- `MonaSans_200ExtraLight`
- `MonaSans_300Light`
- `MonaSans_400Regular`
- `MonaSans_500Medium`
- `MonaSans_600SemiBold`
- `MonaSans_700Bold`
- `MonaSans_800ExtraBold`
- `MonaSans_900Black`
- `MonaSans_200ExtraLight_Italic`
- `MonaSans_300Light_Italic`
- `MonaSans_400Regular_Italic`
- `MonaSans_500Medium_Italic`
- `MonaSans_600SemiBold_Italic`
- `MonaSans_700Bold_Italic`
- `MonaSans_800ExtraBold_Italic`
- `MonaSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/mona-sans expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, MonaSans_200ExtraLight, MonaSans_300Light, MonaSans_400Regular, MonaSans_500Medium, MonaSans_600SemiBold, MonaSans_700Bold, MonaSans_800ExtraBold, MonaSans_900Black, MonaSans_200ExtraLight_Italic, MonaSans_300Light_Italic, MonaSans_400Regular_Italic, MonaSans_500Medium_Italic, MonaSans_600SemiBold_Italic, MonaSans_700Bold_Italic, MonaSans_800ExtraBold_Italic, MonaSans_900Black_Italic } from '@expo-google-fonts/mona-sans';

export default () => {

  let [fontsLoaded] = useFonts({
    MonaSans_200ExtraLight, 
    MonaSans_300Light, 
    MonaSans_400Regular, 
    MonaSans_500Medium, 
    MonaSans_600SemiBold, 
    MonaSans_700Bold, 
    MonaSans_800ExtraBold, 
    MonaSans_900Black, 
    MonaSans_200ExtraLight_Italic, 
    MonaSans_300Light_Italic, 
    MonaSans_400Regular_Italic, 
    MonaSans_500Medium_Italic, 
    MonaSans_600SemiBold_Italic, 
    MonaSans_700Bold_Italic, 
    MonaSans_800ExtraBold_Italic, 
    MonaSans_900Black_Italic
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
          fontFamily: "MonaSans_200ExtraLight"
        }}>
          Mona Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_300Light"
        }}>
          Mona Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_400Regular"
        }}>
          Mona Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_500Medium"
        }}>
          Mona Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_600SemiBold"
        }}>
          Mona Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_700Bold"
        }}>
          Mona Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_800ExtraBold"
        }}>
          Mona Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_900Black"
        }}>
          Mona Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_200ExtraLight_Italic"
        }}>
          Mona Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_300Light_Italic"
        }}>
          Mona Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_400Regular_Italic"
        }}>
          Mona Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_500Medium_Italic"
        }}>
          Mona Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_600SemiBold_Italic"
        }}>
          Mona Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_700Bold_Italic"
        }}>
          Mona Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_800ExtraBold_Italic"
        }}>
          Mona Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MonaSans_900Black_Italic"
        }}>
          Mona Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MonaSans_200ExtraLight](./MonaSans_200ExtraLight.ttf.png)|![MonaSans_300Light](./MonaSans_300Light.ttf.png)|![MonaSans_400Regular](./MonaSans_400Regular.ttf.png)||
|![MonaSans_500Medium](./MonaSans_500Medium.ttf.png)|![MonaSans_600SemiBold](./MonaSans_600SemiBold.ttf.png)|![MonaSans_700Bold](./MonaSans_700Bold.ttf.png)||
|![MonaSans_800ExtraBold](./MonaSans_800ExtraBold.ttf.png)|![MonaSans_900Black](./MonaSans_900Black.ttf.png)|![MonaSans_200ExtraLight_Italic](./MonaSans_200ExtraLight_Italic.ttf.png)||
|![MonaSans_300Light_Italic](./MonaSans_300Light_Italic.ttf.png)|![MonaSans_400Regular_Italic](./MonaSans_400Regular_Italic.ttf.png)|![MonaSans_500Medium_Italic](./MonaSans_500Medium_Italic.ttf.png)||
|![MonaSans_600SemiBold_Italic](./MonaSans_600SemiBold_Italic.ttf.png)|![MonaSans_700Bold_Italic](./MonaSans_700Bold_Italic.ttf.png)|![MonaSans_800ExtraBold_Italic](./MonaSans_800ExtraBold_Italic.ttf.png)||
|![MonaSans_900Black_Italic](./MonaSans_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/mona-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mona Sans page on Google Fonts](https://fonts.google.com/specimen/Mona+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mona Sans on Google Fonts](https://fonts.google.com/specimen/Mona+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mona-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mona-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
