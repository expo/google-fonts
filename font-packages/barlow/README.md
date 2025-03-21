# @expo-google-fonts/barlow

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/barlow)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/barlow)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/barlow)

This package lets you use the [**Barlow**](https://fonts.google.com/specimen/Barlow) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Barlow

![Barlow](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Barlow_100Thin`
- `Barlow_100Thin_Italic`
- `Barlow_200ExtraLight`
- `Barlow_200ExtraLight_Italic`
- `Barlow_300Light`
- `Barlow_300Light_Italic`
- `Barlow_400Regular`
- `Barlow_400Regular_Italic`
- `Barlow_500Medium`
- `Barlow_500Medium_Italic`
- `Barlow_600SemiBold`
- `Barlow_600SemiBold_Italic`
- `Barlow_700Bold`
- `Barlow_700Bold_Italic`
- `Barlow_800ExtraBold`
- `Barlow_800ExtraBold_Italic`
- `Barlow_900Black`
- `Barlow_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/barlow expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Barlow_100Thin, Barlow_100Thin_Italic, Barlow_200ExtraLight, Barlow_200ExtraLight_Italic, Barlow_300Light, Barlow_300Light_Italic, Barlow_400Regular, Barlow_400Regular_Italic, Barlow_500Medium, Barlow_500Medium_Italic, Barlow_600SemiBold, Barlow_600SemiBold_Italic, Barlow_700Bold, Barlow_700Bold_Italic, Barlow_800ExtraBold, Barlow_800ExtraBold_Italic, Barlow_900Black, Barlow_900Black_Italic } from '@expo-google-fonts/barlow';

export default () => {

  let [fontsLoaded] = useFonts({
    Barlow_100Thin, 
    Barlow_100Thin_Italic, 
    Barlow_200ExtraLight, 
    Barlow_200ExtraLight_Italic, 
    Barlow_300Light, 
    Barlow_300Light_Italic, 
    Barlow_400Regular, 
    Barlow_400Regular_Italic, 
    Barlow_500Medium, 
    Barlow_500Medium_Italic, 
    Barlow_600SemiBold, 
    Barlow_600SemiBold_Italic, 
    Barlow_700Bold, 
    Barlow_700Bold_Italic, 
    Barlow_800ExtraBold, 
    Barlow_800ExtraBold_Italic, 
    Barlow_900Black, 
    Barlow_900Black_Italic
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
          fontFamily: "Barlow_100Thin"
        }}>
          Barlow Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_100Thin_Italic"
        }}>
          Barlow Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_200ExtraLight"
        }}>
          Barlow Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_200ExtraLight_Italic"
        }}>
          Barlow Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_300Light"
        }}>
          Barlow Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_300Light_Italic"
        }}>
          Barlow Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_400Regular"
        }}>
          Barlow Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_400Regular_Italic"
        }}>
          Barlow Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_500Medium"
        }}>
          Barlow Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_500Medium_Italic"
        }}>
          Barlow Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_600SemiBold"
        }}>
          Barlow Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_600SemiBold_Italic"
        }}>
          Barlow Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_700Bold"
        }}>
          Barlow Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_700Bold_Italic"
        }}>
          Barlow Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_800ExtraBold"
        }}>
          Barlow Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_800ExtraBold_Italic"
        }}>
          Barlow Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_900Black"
        }}>
          Barlow Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Barlow_900Black_Italic"
        }}>
          Barlow Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Barlow_100Thin](./Barlow_100Thin.ttf.png)|![Barlow_100Thin_Italic](./Barlow_100Thin_Italic.ttf.png)|![Barlow_200ExtraLight](./Barlow_200ExtraLight.ttf.png)||
|![Barlow_200ExtraLight_Italic](./Barlow_200ExtraLight_Italic.ttf.png)|![Barlow_300Light](./Barlow_300Light.ttf.png)|![Barlow_300Light_Italic](./Barlow_300Light_Italic.ttf.png)||
|![Barlow_400Regular](./Barlow_400Regular.ttf.png)|![Barlow_400Regular_Italic](./Barlow_400Regular_Italic.ttf.png)|![Barlow_500Medium](./Barlow_500Medium.ttf.png)||
|![Barlow_500Medium_Italic](./Barlow_500Medium_Italic.ttf.png)|![Barlow_600SemiBold](./Barlow_600SemiBold.ttf.png)|![Barlow_600SemiBold_Italic](./Barlow_600SemiBold_Italic.ttf.png)||
|![Barlow_700Bold](./Barlow_700Bold.ttf.png)|![Barlow_700Bold_Italic](./Barlow_700Bold_Italic.ttf.png)|![Barlow_800ExtraBold](./Barlow_800ExtraBold.ttf.png)||
|![Barlow_800ExtraBold_Italic](./Barlow_800ExtraBold_Italic.ttf.png)|![Barlow_900Black](./Barlow_900Black.ttf.png)|![Barlow_900Black_Italic](./Barlow_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/barlow` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Barlow page on Google Fonts](https://fonts.google.com/specimen/Barlow) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Barlow on Google Fonts](https://fonts.google.com/specimen/Barlow)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/barlow)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/barlow)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
