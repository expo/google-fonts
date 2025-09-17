# @expo-google-fonts/bitcount-single-ink

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount-single-ink)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount-single-ink)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount-single-ink)

This package lets you use the [**Bitcount Single Ink**](https://fonts.google.com/specimen/Bitcount+Single+Ink) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount Single Ink

![Bitcount Single Ink](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BitcountSingleInk_100Thin`
- `BitcountSingleInk_200ExtraLight`
- `BitcountSingleInk_300Light`
- `BitcountSingleInk_400Regular`
- `BitcountSingleInk_500Medium`
- `BitcountSingleInk_600SemiBold`
- `BitcountSingleInk_700Bold`
- `BitcountSingleInk_800ExtraBold`
- `BitcountSingleInk_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount-single-ink expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount-single-ink/useFonts';
import { BitcountSingleInk_100Thin } from '@expo-google-fonts/bitcount-single-ink/100Thin';
import { BitcountSingleInk_200ExtraLight } from '@expo-google-fonts/bitcount-single-ink/200ExtraLight';
import { BitcountSingleInk_300Light } from '@expo-google-fonts/bitcount-single-ink/300Light';
import { BitcountSingleInk_400Regular } from '@expo-google-fonts/bitcount-single-ink/400Regular';
import { BitcountSingleInk_500Medium } from '@expo-google-fonts/bitcount-single-ink/500Medium';
import { BitcountSingleInk_600SemiBold } from '@expo-google-fonts/bitcount-single-ink/600SemiBold';
import { BitcountSingleInk_700Bold } from '@expo-google-fonts/bitcount-single-ink/700Bold';
import { BitcountSingleInk_800ExtraBold } from '@expo-google-fonts/bitcount-single-ink/800ExtraBold';
import { BitcountSingleInk_900Black } from '@expo-google-fonts/bitcount-single-ink/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    BitcountSingleInk_100Thin, 
    BitcountSingleInk_200ExtraLight, 
    BitcountSingleInk_300Light, 
    BitcountSingleInk_400Regular, 
    BitcountSingleInk_500Medium, 
    BitcountSingleInk_600SemiBold, 
    BitcountSingleInk_700Bold, 
    BitcountSingleInk_800ExtraBold, 
    BitcountSingleInk_900Black
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
          fontFamily: "BitcountSingleInk_100Thin"
        }}>
          Bitcount Single Ink Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingleInk_200ExtraLight"
        }}>
          Bitcount Single Ink Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingleInk_300Light"
        }}>
          Bitcount Single Ink Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingleInk_400Regular"
        }}>
          Bitcount Single Ink Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingleInk_500Medium"
        }}>
          Bitcount Single Ink Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingleInk_600SemiBold"
        }}>
          Bitcount Single Ink Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingleInk_700Bold"
        }}>
          Bitcount Single Ink Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingleInk_800ExtraBold"
        }}>
          Bitcount Single Ink Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingleInk_900Black"
        }}>
          Bitcount Single Ink Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BitcountSingleInk_100Thin](./100Thin/BitcountSingleInk_100Thin.ttf.png)|![BitcountSingleInk_200ExtraLight](./200ExtraLight/BitcountSingleInk_200ExtraLight.ttf.png)|![BitcountSingleInk_300Light](./300Light/BitcountSingleInk_300Light.ttf.png)||
|![BitcountSingleInk_400Regular](./400Regular/BitcountSingleInk_400Regular.ttf.png)|![BitcountSingleInk_500Medium](./500Medium/BitcountSingleInk_500Medium.ttf.png)|![BitcountSingleInk_600SemiBold](./600SemiBold/BitcountSingleInk_600SemiBold.ttf.png)||
|![BitcountSingleInk_700Bold](./700Bold/BitcountSingleInk_700Bold.ttf.png)|![BitcountSingleInk_800ExtraBold](./800ExtraBold/BitcountSingleInk_800ExtraBold.ttf.png)|![BitcountSingleInk_900Black](./900Black/BitcountSingleInk_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount-single-ink` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount Single Ink page on Google Fonts](https://fonts.google.com/specimen/Bitcount+Single+Ink) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount Single Ink on Google Fonts](https://fonts.google.com/specimen/Bitcount+Single+Ink)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount-single-ink)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount-single-ink)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
