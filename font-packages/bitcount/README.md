# @expo-google-fonts/bitcount

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount)

This package lets you use the [**Bitcount**](https://fonts.google.com/specimen/Bitcount) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount

![Bitcount](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Bitcount_100Thin`
- `Bitcount_200ExtraLight`
- `Bitcount_300Light`
- `Bitcount_400Regular`
- `Bitcount_500Medium`
- `Bitcount_600SemiBold`
- `Bitcount_700Bold`
- `Bitcount_800ExtraBold`
- `Bitcount_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount/useFonts';
import { Bitcount_100Thin } from '@expo-google-fonts/bitcount/100Thin';
import { Bitcount_200ExtraLight } from '@expo-google-fonts/bitcount/200ExtraLight';
import { Bitcount_300Light } from '@expo-google-fonts/bitcount/300Light';
import { Bitcount_400Regular } from '@expo-google-fonts/bitcount/400Regular';
import { Bitcount_500Medium } from '@expo-google-fonts/bitcount/500Medium';
import { Bitcount_600SemiBold } from '@expo-google-fonts/bitcount/600SemiBold';
import { Bitcount_700Bold } from '@expo-google-fonts/bitcount/700Bold';
import { Bitcount_800ExtraBold } from '@expo-google-fonts/bitcount/800ExtraBold';
import { Bitcount_900Black } from '@expo-google-fonts/bitcount/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Bitcount_100Thin, 
    Bitcount_200ExtraLight, 
    Bitcount_300Light, 
    Bitcount_400Regular, 
    Bitcount_500Medium, 
    Bitcount_600SemiBold, 
    Bitcount_700Bold, 
    Bitcount_800ExtraBold, 
    Bitcount_900Black
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
          fontFamily: "Bitcount_100Thin"
        }}>
          Bitcount Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitcount_200ExtraLight"
        }}>
          Bitcount Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitcount_300Light"
        }}>
          Bitcount Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitcount_400Regular"
        }}>
          Bitcount Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitcount_500Medium"
        }}>
          Bitcount Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitcount_600SemiBold"
        }}>
          Bitcount Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitcount_700Bold"
        }}>
          Bitcount Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitcount_800ExtraBold"
        }}>
          Bitcount Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitcount_900Black"
        }}>
          Bitcount Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Bitcount_100Thin](./100Thin/Bitcount_100Thin.ttf.png)|![Bitcount_200ExtraLight](./200ExtraLight/Bitcount_200ExtraLight.ttf.png)|![Bitcount_300Light](./300Light/Bitcount_300Light.ttf.png)||
|![Bitcount_400Regular](./400Regular/Bitcount_400Regular.ttf.png)|![Bitcount_500Medium](./500Medium/Bitcount_500Medium.ttf.png)|![Bitcount_600SemiBold](./600SemiBold/Bitcount_600SemiBold.ttf.png)||
|![Bitcount_700Bold](./700Bold/Bitcount_700Bold.ttf.png)|![Bitcount_800ExtraBold](./800ExtraBold/Bitcount_800ExtraBold.ttf.png)|![Bitcount_900Black](./900Black/Bitcount_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount page on Google Fonts](https://fonts.google.com/specimen/Bitcount) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount on Google Fonts](https://fonts.google.com/specimen/Bitcount)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
