# @expo-google-fonts/hanuman

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hanuman)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hanuman)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hanuman)

This package lets you use the [**Hanuman**](https://fonts.google.com/specimen/Hanuman) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Hanuman

![Hanuman](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Hanuman_100Thin`
- `Hanuman_200ExtraLight`
- `Hanuman_300Light`
- `Hanuman_400Regular`
- `Hanuman_500Medium`
- `Hanuman_600SemiBold`
- `Hanuman_700Bold`
- `Hanuman_800ExtraBold`
- `Hanuman_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/hanuman expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/hanuman/useFonts';
import { Hanuman_100Thin } from '@expo-google-fonts/hanuman/100Thin';
import { Hanuman_200ExtraLight } from '@expo-google-fonts/hanuman/200ExtraLight';
import { Hanuman_300Light } from '@expo-google-fonts/hanuman/300Light';
import { Hanuman_400Regular } from '@expo-google-fonts/hanuman/400Regular';
import { Hanuman_500Medium } from '@expo-google-fonts/hanuman/500Medium';
import { Hanuman_600SemiBold } from '@expo-google-fonts/hanuman/600SemiBold';
import { Hanuman_700Bold } from '@expo-google-fonts/hanuman/700Bold';
import { Hanuman_800ExtraBold } from '@expo-google-fonts/hanuman/800ExtraBold';
import { Hanuman_900Black } from '@expo-google-fonts/hanuman/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Hanuman_100Thin, 
    Hanuman_200ExtraLight, 
    Hanuman_300Light, 
    Hanuman_400Regular, 
    Hanuman_500Medium, 
    Hanuman_600SemiBold, 
    Hanuman_700Bold, 
    Hanuman_800ExtraBold, 
    Hanuman_900Black
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
          fontFamily: "Hanuman_100Thin"
        }}>
          Hanuman Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Hanuman_200ExtraLight"
        }}>
          Hanuman Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Hanuman_300Light"
        }}>
          Hanuman Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Hanuman_400Regular"
        }}>
          Hanuman Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Hanuman_500Medium"
        }}>
          Hanuman Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Hanuman_600SemiBold"
        }}>
          Hanuman Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Hanuman_700Bold"
        }}>
          Hanuman Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Hanuman_800ExtraBold"
        }}>
          Hanuman Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Hanuman_900Black"
        }}>
          Hanuman Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Hanuman_100Thin](./100Thin/Hanuman_100Thin.ttf.png)|![Hanuman_200ExtraLight](./200ExtraLight/Hanuman_200ExtraLight.ttf.png)|![Hanuman_300Light](./300Light/Hanuman_300Light.ttf.png)||
|![Hanuman_400Regular](./400Regular/Hanuman_400Regular.ttf.png)|![Hanuman_500Medium](./500Medium/Hanuman_500Medium.ttf.png)|![Hanuman_600SemiBold](./600SemiBold/Hanuman_600SemiBold.ttf.png)||
|![Hanuman_700Bold](./700Bold/Hanuman_700Bold.ttf.png)|![Hanuman_800ExtraBold](./800ExtraBold/Hanuman_800ExtraBold.ttf.png)|![Hanuman_900Black](./900Black/Hanuman_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/hanuman` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hanuman page on Google Fonts](https://fonts.google.com/specimen/Hanuman) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hanuman on Google Fonts](https://fonts.google.com/specimen/Hanuman)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hanuman)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hanuman)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
