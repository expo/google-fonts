# @expo-google-fonts/saira

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/saira)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/saira)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/saira)

This package lets you use the [**Saira**](https://fonts.google.com/specimen/Saira) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Saira

![Saira](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Saira_100Thin`
- `Saira_200ExtraLight`
- `Saira_300Light`
- `Saira_400Regular`
- `Saira_500Medium`
- `Saira_600SemiBold`
- `Saira_700Bold`
- `Saira_800ExtraBold`
- `Saira_900Black`
- `Saira_100Thin_Italic`
- `Saira_200ExtraLight_Italic`
- `Saira_300Light_Italic`
- `Saira_400Regular_Italic`
- `Saira_500Medium_Italic`
- `Saira_600SemiBold_Italic`
- `Saira_700Bold_Italic`
- `Saira_800ExtraBold_Italic`
- `Saira_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/saira expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Saira_100Thin, Saira_200ExtraLight, Saira_300Light, Saira_400Regular, Saira_500Medium, Saira_600SemiBold, Saira_700Bold, Saira_800ExtraBold, Saira_900Black, Saira_100Thin_Italic, Saira_200ExtraLight_Italic, Saira_300Light_Italic, Saira_400Regular_Italic, Saira_500Medium_Italic, Saira_600SemiBold_Italic, Saira_700Bold_Italic, Saira_800ExtraBold_Italic, Saira_900Black_Italic } from '@expo-google-fonts/saira';

export default () => {

  let [fontsLoaded] = useFonts({
    Saira_100Thin, 
    Saira_200ExtraLight, 
    Saira_300Light, 
    Saira_400Regular, 
    Saira_500Medium, 
    Saira_600SemiBold, 
    Saira_700Bold, 
    Saira_800ExtraBold, 
    Saira_900Black, 
    Saira_100Thin_Italic, 
    Saira_200ExtraLight_Italic, 
    Saira_300Light_Italic, 
    Saira_400Regular_Italic, 
    Saira_500Medium_Italic, 
    Saira_600SemiBold_Italic, 
    Saira_700Bold_Italic, 
    Saira_800ExtraBold_Italic, 
    Saira_900Black_Italic
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
          fontFamily: "Saira_100Thin"
        }}>
          Saira Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_200ExtraLight"
        }}>
          Saira Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_300Light"
        }}>
          Saira Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_400Regular"
        }}>
          Saira Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_500Medium"
        }}>
          Saira Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_600SemiBold"
        }}>
          Saira Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_700Bold"
        }}>
          Saira Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_800ExtraBold"
        }}>
          Saira Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_900Black"
        }}>
          Saira Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_100Thin_Italic"
        }}>
          Saira Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_200ExtraLight_Italic"
        }}>
          Saira Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_300Light_Italic"
        }}>
          Saira Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_400Regular_Italic"
        }}>
          Saira Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_500Medium_Italic"
        }}>
          Saira Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_600SemiBold_Italic"
        }}>
          Saira Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_700Bold_Italic"
        }}>
          Saira Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_800ExtraBold_Italic"
        }}>
          Saira Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Saira_900Black_Italic"
        }}>
          Saira Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Saira_100Thin](./Saira_100Thin.ttf.png)|![Saira_200ExtraLight](./Saira_200ExtraLight.ttf.png)|![Saira_300Light](./Saira_300Light.ttf.png)||
|![Saira_400Regular](./Saira_400Regular.ttf.png)|![Saira_500Medium](./Saira_500Medium.ttf.png)|![Saira_600SemiBold](./Saira_600SemiBold.ttf.png)||
|![Saira_700Bold](./Saira_700Bold.ttf.png)|![Saira_800ExtraBold](./Saira_800ExtraBold.ttf.png)|![Saira_900Black](./Saira_900Black.ttf.png)||
|![Saira_100Thin_Italic](./Saira_100Thin_Italic.ttf.png)|![Saira_200ExtraLight_Italic](./Saira_200ExtraLight_Italic.ttf.png)|![Saira_300Light_Italic](./Saira_300Light_Italic.ttf.png)||
|![Saira_400Regular_Italic](./Saira_400Regular_Italic.ttf.png)|![Saira_500Medium_Italic](./Saira_500Medium_Italic.ttf.png)|![Saira_600SemiBold_Italic](./Saira_600SemiBold_Italic.ttf.png)||
|![Saira_700Bold_Italic](./Saira_700Bold_Italic.ttf.png)|![Saira_800ExtraBold_Italic](./Saira_800ExtraBold_Italic.ttf.png)|![Saira_900Black_Italic](./Saira_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/saira` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Saira page on Google Fonts](https://fonts.google.com/specimen/Saira) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Saira on Google Fonts](https://fonts.google.com/specimen/Saira)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/saira)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/saira)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
