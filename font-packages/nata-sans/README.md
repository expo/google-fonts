# @expo-google-fonts/nata-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/nata-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/nata-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/nata-sans)

This package lets you use the [**Nata Sans**](https://fonts.google.com/specimen/Nata+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Nata Sans

![Nata Sans](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NataSans_100Thin`
- `NataSans_200ExtraLight`
- `NataSans_300Light`
- `NataSans_400Regular`
- `NataSans_500Medium`
- `NataSans_600SemiBold`
- `NataSans_700Bold`
- `NataSans_800ExtraBold`
- `NataSans_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/nata-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/nata-sans/useFonts';
import { NataSans_100Thin } from '@expo-google-fonts/nata-sans/100Thin';
import { NataSans_200ExtraLight } from '@expo-google-fonts/nata-sans/200ExtraLight';
import { NataSans_300Light } from '@expo-google-fonts/nata-sans/300Light';
import { NataSans_400Regular } from '@expo-google-fonts/nata-sans/400Regular';
import { NataSans_500Medium } from '@expo-google-fonts/nata-sans/500Medium';
import { NataSans_600SemiBold } from '@expo-google-fonts/nata-sans/600SemiBold';
import { NataSans_700Bold } from '@expo-google-fonts/nata-sans/700Bold';
import { NataSans_800ExtraBold } from '@expo-google-fonts/nata-sans/800ExtraBold';
import { NataSans_900Black } from '@expo-google-fonts/nata-sans/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NataSans_100Thin, 
    NataSans_200ExtraLight, 
    NataSans_300Light, 
    NataSans_400Regular, 
    NataSans_500Medium, 
    NataSans_600SemiBold, 
    NataSans_700Bold, 
    NataSans_800ExtraBold, 
    NataSans_900Black
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
          fontFamily: "NataSans_100Thin"
        }}>
          Nata Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NataSans_200ExtraLight"
        }}>
          Nata Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NataSans_300Light"
        }}>
          Nata Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NataSans_400Regular"
        }}>
          Nata Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NataSans_500Medium"
        }}>
          Nata Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NataSans_600SemiBold"
        }}>
          Nata Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NataSans_700Bold"
        }}>
          Nata Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NataSans_800ExtraBold"
        }}>
          Nata Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NataSans_900Black"
        }}>
          Nata Sans Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NataSans_100Thin](./100Thin/NataSans_100Thin.ttf.png)|![NataSans_200ExtraLight](./200ExtraLight/NataSans_200ExtraLight.ttf.png)|![NataSans_300Light](./300Light/NataSans_300Light.ttf.png)||
|![NataSans_400Regular](./400Regular/NataSans_400Regular.ttf.png)|![NataSans_500Medium](./500Medium/NataSans_500Medium.ttf.png)|![NataSans_600SemiBold](./600SemiBold/NataSans_600SemiBold.ttf.png)||
|![NataSans_700Bold](./700Bold/NataSans_700Bold.ttf.png)|![NataSans_800ExtraBold](./800ExtraBold/NataSans_800ExtraBold.ttf.png)|![NataSans_900Black](./900Black/NataSans_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/nata-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Nata Sans page on Google Fonts](https://fonts.google.com/specimen/Nata+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Nata Sans on Google Fonts](https://fonts.google.com/specimen/Nata+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nata-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nata-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
