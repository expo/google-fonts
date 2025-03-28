# @expo-google-fonts/lexend

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lexend)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lexend)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lexend)

This package lets you use the [**Lexend**](https://fonts.google.com/specimen/Lexend) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lexend

![Lexend](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Lexend_100Thin`
- `Lexend_200ExtraLight`
- `Lexend_300Light`
- `Lexend_400Regular`
- `Lexend_500Medium`
- `Lexend_600SemiBold`
- `Lexend_700Bold`
- `Lexend_800ExtraBold`
- `Lexend_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/lexend expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/lexend/useFonts';
import { Lexend_100Thin } from '@expo-google-fonts/lexend/100Thin';
import { Lexend_200ExtraLight } from '@expo-google-fonts/lexend/200ExtraLight';
import { Lexend_300Light } from '@expo-google-fonts/lexend/300Light';
import { Lexend_400Regular } from '@expo-google-fonts/lexend/400Regular';
import { Lexend_500Medium } from '@expo-google-fonts/lexend/500Medium';
import { Lexend_600SemiBold } from '@expo-google-fonts/lexend/600SemiBold';
import { Lexend_700Bold } from '@expo-google-fonts/lexend/700Bold';
import { Lexend_800ExtraBold } from '@expo-google-fonts/lexend/800ExtraBold';
import { Lexend_900Black } from '@expo-google-fonts/lexend/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Lexend_100Thin, 
    Lexend_200ExtraLight, 
    Lexend_300Light, 
    Lexend_400Regular, 
    Lexend_500Medium, 
    Lexend_600SemiBold, 
    Lexend_700Bold, 
    Lexend_800ExtraBold, 
    Lexend_900Black
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
          fontFamily: "Lexend_100Thin"
        }}>
          Lexend Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lexend_200ExtraLight"
        }}>
          Lexend Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lexend_300Light"
        }}>
          Lexend Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lexend_400Regular"
        }}>
          Lexend Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lexend_500Medium"
        }}>
          Lexend Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lexend_600SemiBold"
        }}>
          Lexend Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lexend_700Bold"
        }}>
          Lexend Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lexend_800ExtraBold"
        }}>
          Lexend Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lexend_900Black"
        }}>
          Lexend Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Lexend_100Thin](./100Thin/Lexend_100Thin.ttf.png)|![Lexend_200ExtraLight](./200ExtraLight/Lexend_200ExtraLight.ttf.png)|![Lexend_300Light](./300Light/Lexend_300Light.ttf.png)||
|![Lexend_400Regular](./400Regular/Lexend_400Regular.ttf.png)|![Lexend_500Medium](./500Medium/Lexend_500Medium.ttf.png)|![Lexend_600SemiBold](./600SemiBold/Lexend_600SemiBold.ttf.png)||
|![Lexend_700Bold](./700Bold/Lexend_700Bold.ttf.png)|![Lexend_800ExtraBold](./800ExtraBold/Lexend_800ExtraBold.ttf.png)|![Lexend_900Black](./900Black/Lexend_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/lexend` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lexend page on Google Fonts](https://fonts.google.com/specimen/Lexend) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lexend on Google Fonts](https://fonts.google.com/specimen/Lexend)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lexend)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lexend)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
