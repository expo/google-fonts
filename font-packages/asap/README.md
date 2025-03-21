# @expo-google-fonts/asap

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/asap)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/asap)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/asap)

This package lets you use the [**Asap**](https://fonts.google.com/specimen/Asap) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Asap

![Asap](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Asap_100Thin`
- `Asap_200ExtraLight`
- `Asap_300Light`
- `Asap_400Regular`
- `Asap_500Medium`
- `Asap_600SemiBold`
- `Asap_700Bold`
- `Asap_800ExtraBold`
- `Asap_900Black`
- `Asap_100Thin_Italic`
- `Asap_200ExtraLight_Italic`
- `Asap_300Light_Italic`
- `Asap_400Regular_Italic`
- `Asap_500Medium_Italic`
- `Asap_600SemiBold_Italic`
- `Asap_700Bold_Italic`
- `Asap_800ExtraBold_Italic`
- `Asap_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/asap expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Asap_100Thin, Asap_200ExtraLight, Asap_300Light, Asap_400Regular, Asap_500Medium, Asap_600SemiBold, Asap_700Bold, Asap_800ExtraBold, Asap_900Black, Asap_100Thin_Italic, Asap_200ExtraLight_Italic, Asap_300Light_Italic, Asap_400Regular_Italic, Asap_500Medium_Italic, Asap_600SemiBold_Italic, Asap_700Bold_Italic, Asap_800ExtraBold_Italic, Asap_900Black_Italic } from '@expo-google-fonts/asap';

export default () => {

  let [fontsLoaded] = useFonts({
    Asap_100Thin, 
    Asap_200ExtraLight, 
    Asap_300Light, 
    Asap_400Regular, 
    Asap_500Medium, 
    Asap_600SemiBold, 
    Asap_700Bold, 
    Asap_800ExtraBold, 
    Asap_900Black, 
    Asap_100Thin_Italic, 
    Asap_200ExtraLight_Italic, 
    Asap_300Light_Italic, 
    Asap_400Regular_Italic, 
    Asap_500Medium_Italic, 
    Asap_600SemiBold_Italic, 
    Asap_700Bold_Italic, 
    Asap_800ExtraBold_Italic, 
    Asap_900Black_Italic
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
          fontFamily: "Asap_100Thin"
        }}>
          Asap Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_200ExtraLight"
        }}>
          Asap Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_300Light"
        }}>
          Asap Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_400Regular"
        }}>
          Asap Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_500Medium"
        }}>
          Asap Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_600SemiBold"
        }}>
          Asap Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_700Bold"
        }}>
          Asap Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_800ExtraBold"
        }}>
          Asap Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_900Black"
        }}>
          Asap Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_100Thin_Italic"
        }}>
          Asap Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_200ExtraLight_Italic"
        }}>
          Asap Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_300Light_Italic"
        }}>
          Asap Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_400Regular_Italic"
        }}>
          Asap Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_500Medium_Italic"
        }}>
          Asap Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_600SemiBold_Italic"
        }}>
          Asap Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_700Bold_Italic"
        }}>
          Asap Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_800ExtraBold_Italic"
        }}>
          Asap Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Asap_900Black_Italic"
        }}>
          Asap Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Asap_100Thin](./Asap_100Thin.ttf.png)|![Asap_200ExtraLight](./Asap_200ExtraLight.ttf.png)|![Asap_300Light](./Asap_300Light.ttf.png)||
|![Asap_400Regular](./Asap_400Regular.ttf.png)|![Asap_500Medium](./Asap_500Medium.ttf.png)|![Asap_600SemiBold](./Asap_600SemiBold.ttf.png)||
|![Asap_700Bold](./Asap_700Bold.ttf.png)|![Asap_800ExtraBold](./Asap_800ExtraBold.ttf.png)|![Asap_900Black](./Asap_900Black.ttf.png)||
|![Asap_100Thin_Italic](./Asap_100Thin_Italic.ttf.png)|![Asap_200ExtraLight_Italic](./Asap_200ExtraLight_Italic.ttf.png)|![Asap_300Light_Italic](./Asap_300Light_Italic.ttf.png)||
|![Asap_400Regular_Italic](./Asap_400Regular_Italic.ttf.png)|![Asap_500Medium_Italic](./Asap_500Medium_Italic.ttf.png)|![Asap_600SemiBold_Italic](./Asap_600SemiBold_Italic.ttf.png)||
|![Asap_700Bold_Italic](./Asap_700Bold_Italic.ttf.png)|![Asap_800ExtraBold_Italic](./Asap_800ExtraBold_Italic.ttf.png)|![Asap_900Black_Italic](./Asap_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/asap` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Asap page on Google Fonts](https://fonts.google.com/specimen/Asap) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Asap on Google Fonts](https://fonts.google.com/specimen/Asap)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/asap)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/asap)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
