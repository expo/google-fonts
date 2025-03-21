# @expo-google-fonts/merriweather

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/merriweather)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/merriweather)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/merriweather)

This package lets you use the [**Merriweather**](https://fonts.google.com/specimen/Merriweather) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Merriweather

![Merriweather](./font-family.png)

This font family contains [14 styles](#-gallery).

- `Merriweather_300Light`
- `Merriweather_400Regular`
- `Merriweather_500Medium`
- `Merriweather_600SemiBold`
- `Merriweather_700Bold`
- `Merriweather_800ExtraBold`
- `Merriweather_900Black`
- `Merriweather_300Light_Italic`
- `Merriweather_400Regular_Italic`
- `Merriweather_500Medium_Italic`
- `Merriweather_600SemiBold_Italic`
- `Merriweather_700Bold_Italic`
- `Merriweather_800ExtraBold_Italic`
- `Merriweather_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/merriweather expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Merriweather_300Light, Merriweather_400Regular, Merriweather_500Medium, Merriweather_600SemiBold, Merriweather_700Bold, Merriweather_800ExtraBold, Merriweather_900Black, Merriweather_300Light_Italic, Merriweather_400Regular_Italic, Merriweather_500Medium_Italic, Merriweather_600SemiBold_Italic, Merriweather_700Bold_Italic, Merriweather_800ExtraBold_Italic, Merriweather_900Black_Italic } from '@expo-google-fonts/merriweather';

export default () => {

  let [fontsLoaded] = useFonts({
    Merriweather_300Light, 
    Merriweather_400Regular, 
    Merriweather_500Medium, 
    Merriweather_600SemiBold, 
    Merriweather_700Bold, 
    Merriweather_800ExtraBold, 
    Merriweather_900Black, 
    Merriweather_300Light_Italic, 
    Merriweather_400Regular_Italic, 
    Merriweather_500Medium_Italic, 
    Merriweather_600SemiBold_Italic, 
    Merriweather_700Bold_Italic, 
    Merriweather_800ExtraBold_Italic, 
    Merriweather_900Black_Italic
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
          fontFamily: "Merriweather_300Light"
        }}>
          Merriweather Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_400Regular"
        }}>
          Merriweather Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_500Medium"
        }}>
          Merriweather Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_600SemiBold"
        }}>
          Merriweather Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_700Bold"
        }}>
          Merriweather Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_800ExtraBold"
        }}>
          Merriweather Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_900Black"
        }}>
          Merriweather Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_300Light_Italic"
        }}>
          Merriweather Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_400Regular_Italic"
        }}>
          Merriweather Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_500Medium_Italic"
        }}>
          Merriweather Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_600SemiBold_Italic"
        }}>
          Merriweather Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_700Bold_Italic"
        }}>
          Merriweather Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_800ExtraBold_Italic"
        }}>
          Merriweather Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Merriweather_900Black_Italic"
        }}>
          Merriweather Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Merriweather_300Light](./Merriweather_300Light.ttf.png)|![Merriweather_400Regular](./Merriweather_400Regular.ttf.png)|![Merriweather_500Medium](./Merriweather_500Medium.ttf.png)||
|![Merriweather_600SemiBold](./Merriweather_600SemiBold.ttf.png)|![Merriweather_700Bold](./Merriweather_700Bold.ttf.png)|![Merriweather_800ExtraBold](./Merriweather_800ExtraBold.ttf.png)||
|![Merriweather_900Black](./Merriweather_900Black.ttf.png)|![Merriweather_300Light_Italic](./Merriweather_300Light_Italic.ttf.png)|![Merriweather_400Regular_Italic](./Merriweather_400Regular_Italic.ttf.png)||
|![Merriweather_500Medium_Italic](./Merriweather_500Medium_Italic.ttf.png)|![Merriweather_600SemiBold_Italic](./Merriweather_600SemiBold_Italic.ttf.png)|![Merriweather_700Bold_Italic](./Merriweather_700Bold_Italic.ttf.png)||
|![Merriweather_800ExtraBold_Italic](./Merriweather_800ExtraBold_Italic.ttf.png)|![Merriweather_900Black_Italic](./Merriweather_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/merriweather` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Merriweather page on Google Fonts](https://fonts.google.com/specimen/Merriweather) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Merriweather on Google Fonts](https://fonts.google.com/specimen/Merriweather)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/merriweather)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/merriweather)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
