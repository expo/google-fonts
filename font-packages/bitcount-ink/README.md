# @expo-google-fonts/bitcount-ink

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount-ink)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount-ink)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount-ink)

This package lets you use the [**Bitcount Ink**](https://fonts.google.com/specimen/Bitcount+Ink) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount Ink

![Bitcount Ink](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BitcountInk_100Thin`
- `BitcountInk_200ExtraLight`
- `BitcountInk_300Light`
- `BitcountInk_400Regular`
- `BitcountInk_500Medium`
- `BitcountInk_600SemiBold`
- `BitcountInk_700Bold`
- `BitcountInk_800ExtraBold`
- `BitcountInk_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount-ink expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount-ink/useFonts';
import { BitcountInk_100Thin } from '@expo-google-fonts/bitcount-ink/100Thin';
import { BitcountInk_200ExtraLight } from '@expo-google-fonts/bitcount-ink/200ExtraLight';
import { BitcountInk_300Light } from '@expo-google-fonts/bitcount-ink/300Light';
import { BitcountInk_400Regular } from '@expo-google-fonts/bitcount-ink/400Regular';
import { BitcountInk_500Medium } from '@expo-google-fonts/bitcount-ink/500Medium';
import { BitcountInk_600SemiBold } from '@expo-google-fonts/bitcount-ink/600SemiBold';
import { BitcountInk_700Bold } from '@expo-google-fonts/bitcount-ink/700Bold';
import { BitcountInk_800ExtraBold } from '@expo-google-fonts/bitcount-ink/800ExtraBold';
import { BitcountInk_900Black } from '@expo-google-fonts/bitcount-ink/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    BitcountInk_100Thin, 
    BitcountInk_200ExtraLight, 
    BitcountInk_300Light, 
    BitcountInk_400Regular, 
    BitcountInk_500Medium, 
    BitcountInk_600SemiBold, 
    BitcountInk_700Bold, 
    BitcountInk_800ExtraBold, 
    BitcountInk_900Black
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
          fontFamily: "BitcountInk_100Thin"
        }}>
          Bitcount Ink Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountInk_200ExtraLight"
        }}>
          Bitcount Ink Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountInk_300Light"
        }}>
          Bitcount Ink Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountInk_400Regular"
        }}>
          Bitcount Ink Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountInk_500Medium"
        }}>
          Bitcount Ink Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountInk_600SemiBold"
        }}>
          Bitcount Ink Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountInk_700Bold"
        }}>
          Bitcount Ink Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountInk_800ExtraBold"
        }}>
          Bitcount Ink Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountInk_900Black"
        }}>
          Bitcount Ink Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BitcountInk_100Thin](./100Thin/BitcountInk_100Thin.ttf.png)|![BitcountInk_200ExtraLight](./200ExtraLight/BitcountInk_200ExtraLight.ttf.png)|![BitcountInk_300Light](./300Light/BitcountInk_300Light.ttf.png)||
|![BitcountInk_400Regular](./400Regular/BitcountInk_400Regular.ttf.png)|![BitcountInk_500Medium](./500Medium/BitcountInk_500Medium.ttf.png)|![BitcountInk_600SemiBold](./600SemiBold/BitcountInk_600SemiBold.ttf.png)||
|![BitcountInk_700Bold](./700Bold/BitcountInk_700Bold.ttf.png)|![BitcountInk_800ExtraBold](./800ExtraBold/BitcountInk_800ExtraBold.ttf.png)|![BitcountInk_900Black](./900Black/BitcountInk_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount-ink` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount Ink page on Google Fonts](https://fonts.google.com/specimen/Bitcount+Ink) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount Ink on Google Fonts](https://fonts.google.com/specimen/Bitcount+Ink)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount-ink)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount-ink)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
