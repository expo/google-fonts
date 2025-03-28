# @expo-google-fonts/grenze-gotisch

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/grenze-gotisch)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/grenze-gotisch)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/grenze-gotisch)

This package lets you use the [**Grenze Gotisch**](https://fonts.google.com/specimen/Grenze+Gotisch) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Grenze Gotisch

![Grenze Gotisch](./font-family.png)

This font family contains [9 styles](#-gallery).

- `GrenzeGotisch_100Thin`
- `GrenzeGotisch_200ExtraLight`
- `GrenzeGotisch_300Light`
- `GrenzeGotisch_400Regular`
- `GrenzeGotisch_500Medium`
- `GrenzeGotisch_600SemiBold`
- `GrenzeGotisch_700Bold`
- `GrenzeGotisch_800ExtraBold`
- `GrenzeGotisch_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/grenze-gotisch expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/grenze-gotisch/useFonts';
import { GrenzeGotisch_100Thin } from '@expo-google-fonts/grenze-gotisch/100Thin';
import { GrenzeGotisch_200ExtraLight } from '@expo-google-fonts/grenze-gotisch/200ExtraLight';
import { GrenzeGotisch_300Light } from '@expo-google-fonts/grenze-gotisch/300Light';
import { GrenzeGotisch_400Regular } from '@expo-google-fonts/grenze-gotisch/400Regular';
import { GrenzeGotisch_500Medium } from '@expo-google-fonts/grenze-gotisch/500Medium';
import { GrenzeGotisch_600SemiBold } from '@expo-google-fonts/grenze-gotisch/600SemiBold';
import { GrenzeGotisch_700Bold } from '@expo-google-fonts/grenze-gotisch/700Bold';
import { GrenzeGotisch_800ExtraBold } from '@expo-google-fonts/grenze-gotisch/800ExtraBold';
import { GrenzeGotisch_900Black } from '@expo-google-fonts/grenze-gotisch/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    GrenzeGotisch_100Thin, 
    GrenzeGotisch_200ExtraLight, 
    GrenzeGotisch_300Light, 
    GrenzeGotisch_400Regular, 
    GrenzeGotisch_500Medium, 
    GrenzeGotisch_600SemiBold, 
    GrenzeGotisch_700Bold, 
    GrenzeGotisch_800ExtraBold, 
    GrenzeGotisch_900Black
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GrenzeGotisch_100Thin"
        }}>
          Grenze Gotisch Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GrenzeGotisch_200ExtraLight"
        }}>
          Grenze Gotisch Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GrenzeGotisch_300Light"
        }}>
          Grenze Gotisch Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GrenzeGotisch_400Regular"
        }}>
          Grenze Gotisch Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GrenzeGotisch_500Medium"
        }}>
          Grenze Gotisch Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GrenzeGotisch_600SemiBold"
        }}>
          Grenze Gotisch Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GrenzeGotisch_700Bold"
        }}>
          Grenze Gotisch Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GrenzeGotisch_800ExtraBold"
        }}>
          Grenze Gotisch Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GrenzeGotisch_900Black"
        }}>
          Grenze Gotisch Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![GrenzeGotisch_100Thin](./100Thin/GrenzeGotisch_100Thin.ttf.png)|![GrenzeGotisch_200ExtraLight](./200ExtraLight/GrenzeGotisch_200ExtraLight.ttf.png)|![GrenzeGotisch_300Light](./300Light/GrenzeGotisch_300Light.ttf.png)||
|![GrenzeGotisch_400Regular](./400Regular/GrenzeGotisch_400Regular.ttf.png)|![GrenzeGotisch_500Medium](./500Medium/GrenzeGotisch_500Medium.ttf.png)|![GrenzeGotisch_600SemiBold](./600SemiBold/GrenzeGotisch_600SemiBold.ttf.png)||
|![GrenzeGotisch_700Bold](./700Bold/GrenzeGotisch_700Bold.ttf.png)|![GrenzeGotisch_800ExtraBold](./800ExtraBold/GrenzeGotisch_800ExtraBold.ttf.png)|![GrenzeGotisch_900Black](./900Black/GrenzeGotisch_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/grenze-gotisch` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Grenze Gotisch page on Google Fonts](https://fonts.google.com/specimen/Grenze+Gotisch) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Grenze Gotisch on Google Fonts](https://fonts.google.com/specimen/Grenze+Gotisch)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/grenze-gotisch)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/grenze-gotisch)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
