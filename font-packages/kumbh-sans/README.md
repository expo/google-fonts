# @expo-google-fonts/kumbh-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kumbh-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kumbh-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kumbh-sans)

This package lets you use the [**Kumbh Sans**](https://fonts.google.com/specimen/Kumbh+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kumbh Sans

![Kumbh Sans](./font-family.png)

This font family contains [9 styles](#-gallery).

- `KumbhSans_100Thin`
- `KumbhSans_200ExtraLight`
- `KumbhSans_300Light`
- `KumbhSans_400Regular`
- `KumbhSans_500Medium`
- `KumbhSans_600SemiBold`
- `KumbhSans_700Bold`
- `KumbhSans_800ExtraBold`
- `KumbhSans_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/kumbh-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/kumbh-sans/useFonts';
import { KumbhSans_100Thin } from '@expo-google-fonts/kumbh-sans/100Thin';
import { KumbhSans_200ExtraLight } from '@expo-google-fonts/kumbh-sans/200ExtraLight';
import { KumbhSans_300Light } from '@expo-google-fonts/kumbh-sans/300Light';
import { KumbhSans_400Regular } from '@expo-google-fonts/kumbh-sans/400Regular';
import { KumbhSans_500Medium } from '@expo-google-fonts/kumbh-sans/500Medium';
import { KumbhSans_600SemiBold } from '@expo-google-fonts/kumbh-sans/600SemiBold';
import { KumbhSans_700Bold } from '@expo-google-fonts/kumbh-sans/700Bold';
import { KumbhSans_800ExtraBold } from '@expo-google-fonts/kumbh-sans/800ExtraBold';
import { KumbhSans_900Black } from '@expo-google-fonts/kumbh-sans/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    KumbhSans_100Thin, 
    KumbhSans_200ExtraLight, 
    KumbhSans_300Light, 
    KumbhSans_400Regular, 
    KumbhSans_500Medium, 
    KumbhSans_600SemiBold, 
    KumbhSans_700Bold, 
    KumbhSans_800ExtraBold, 
    KumbhSans_900Black
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
          fontFamily: "KumbhSans_100Thin"
        }}>
          Kumbh Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KumbhSans_200ExtraLight"
        }}>
          Kumbh Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KumbhSans_300Light"
        }}>
          Kumbh Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KumbhSans_400Regular"
        }}>
          Kumbh Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KumbhSans_500Medium"
        }}>
          Kumbh Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KumbhSans_600SemiBold"
        }}>
          Kumbh Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KumbhSans_700Bold"
        }}>
          Kumbh Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KumbhSans_800ExtraBold"
        }}>
          Kumbh Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KumbhSans_900Black"
        }}>
          Kumbh Sans Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![KumbhSans_100Thin](./100Thin/KumbhSans_100Thin.ttf.png)|![KumbhSans_200ExtraLight](./200ExtraLight/KumbhSans_200ExtraLight.ttf.png)|![KumbhSans_300Light](./300Light/KumbhSans_300Light.ttf.png)||
|![KumbhSans_400Regular](./400Regular/KumbhSans_400Regular.ttf.png)|![KumbhSans_500Medium](./500Medium/KumbhSans_500Medium.ttf.png)|![KumbhSans_600SemiBold](./600SemiBold/KumbhSans_600SemiBold.ttf.png)||
|![KumbhSans_700Bold](./700Bold/KumbhSans_700Bold.ttf.png)|![KumbhSans_800ExtraBold](./800ExtraBold/KumbhSans_800ExtraBold.ttf.png)|![KumbhSans_900Black](./900Black/KumbhSans_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/kumbh-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kumbh Sans page on Google Fonts](https://fonts.google.com/specimen/Kumbh+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kumbh Sans on Google Fonts](https://fonts.google.com/specimen/Kumbh+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kumbh-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kumbh-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
