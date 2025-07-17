# @expo-google-fonts/bitcount-single

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount-single)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount-single)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount-single)

This package lets you use the [**Bitcount Single**](https://fonts.google.com/specimen/Bitcount+Single) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount Single

![Bitcount Single](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BitcountSingle_100Thin`
- `BitcountSingle_200ExtraLight`
- `BitcountSingle_300Light`
- `BitcountSingle_400Regular`
- `BitcountSingle_500Medium`
- `BitcountSingle_600SemiBold`
- `BitcountSingle_700Bold`
- `BitcountSingle_800ExtraBold`
- `BitcountSingle_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount-single expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount-single/useFonts';
import { BitcountSingle_100Thin } from '@expo-google-fonts/bitcount-single/100Thin';
import { BitcountSingle_200ExtraLight } from '@expo-google-fonts/bitcount-single/200ExtraLight';
import { BitcountSingle_300Light } from '@expo-google-fonts/bitcount-single/300Light';
import { BitcountSingle_400Regular } from '@expo-google-fonts/bitcount-single/400Regular';
import { BitcountSingle_500Medium } from '@expo-google-fonts/bitcount-single/500Medium';
import { BitcountSingle_600SemiBold } from '@expo-google-fonts/bitcount-single/600SemiBold';
import { BitcountSingle_700Bold } from '@expo-google-fonts/bitcount-single/700Bold';
import { BitcountSingle_800ExtraBold } from '@expo-google-fonts/bitcount-single/800ExtraBold';
import { BitcountSingle_900Black } from '@expo-google-fonts/bitcount-single/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    BitcountSingle_100Thin, 
    BitcountSingle_200ExtraLight, 
    BitcountSingle_300Light, 
    BitcountSingle_400Regular, 
    BitcountSingle_500Medium, 
    BitcountSingle_600SemiBold, 
    BitcountSingle_700Bold, 
    BitcountSingle_800ExtraBold, 
    BitcountSingle_900Black
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
          fontFamily: "BitcountSingle_100Thin"
        }}>
          Bitcount Single Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingle_200ExtraLight"
        }}>
          Bitcount Single Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingle_300Light"
        }}>
          Bitcount Single Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingle_400Regular"
        }}>
          Bitcount Single Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingle_500Medium"
        }}>
          Bitcount Single Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingle_600SemiBold"
        }}>
          Bitcount Single Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingle_700Bold"
        }}>
          Bitcount Single Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingle_800ExtraBold"
        }}>
          Bitcount Single Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountSingle_900Black"
        }}>
          Bitcount Single Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BitcountSingle_100Thin](./100Thin/BitcountSingle_100Thin.ttf.png)|![BitcountSingle_200ExtraLight](./200ExtraLight/BitcountSingle_200ExtraLight.ttf.png)|![BitcountSingle_300Light](./300Light/BitcountSingle_300Light.ttf.png)||
|![BitcountSingle_400Regular](./400Regular/BitcountSingle_400Regular.ttf.png)|![BitcountSingle_500Medium](./500Medium/BitcountSingle_500Medium.ttf.png)|![BitcountSingle_600SemiBold](./600SemiBold/BitcountSingle_600SemiBold.ttf.png)||
|![BitcountSingle_700Bold](./700Bold/BitcountSingle_700Bold.ttf.png)|![BitcountSingle_800ExtraBold](./800ExtraBold/BitcountSingle_800ExtraBold.ttf.png)|![BitcountSingle_900Black](./900Black/BitcountSingle_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount-single` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount Single page on Google Fonts](https://fonts.google.com/specimen/Bitcount+Single) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount Single on Google Fonts](https://fonts.google.com/specimen/Bitcount+Single)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount-single)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount-single)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
