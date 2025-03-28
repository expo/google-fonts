# @expo-google-fonts/wittgenstein

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/wittgenstein)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/wittgenstein)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/wittgenstein)

This package lets you use the [**Wittgenstein**](https://fonts.google.com/specimen/Wittgenstein) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Wittgenstein

![Wittgenstein](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Wittgenstein_400Regular`
- `Wittgenstein_500Medium`
- `Wittgenstein_600SemiBold`
- `Wittgenstein_700Bold`
- `Wittgenstein_800ExtraBold`
- `Wittgenstein_900Black`
- `Wittgenstein_400Regular_Italic`
- `Wittgenstein_500Medium_Italic`
- `Wittgenstein_600SemiBold_Italic`
- `Wittgenstein_700Bold_Italic`
- `Wittgenstein_800ExtraBold_Italic`
- `Wittgenstein_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/wittgenstein expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/wittgenstein/useFonts';
import { Wittgenstein_400Regular } from '@expo-google-fonts/wittgenstein/400Regular';
import { Wittgenstein_500Medium } from '@expo-google-fonts/wittgenstein/500Medium';
import { Wittgenstein_600SemiBold } from '@expo-google-fonts/wittgenstein/600SemiBold';
import { Wittgenstein_700Bold } from '@expo-google-fonts/wittgenstein/700Bold';
import { Wittgenstein_800ExtraBold } from '@expo-google-fonts/wittgenstein/800ExtraBold';
import { Wittgenstein_900Black } from '@expo-google-fonts/wittgenstein/900Black';
import { Wittgenstein_400Regular_Italic } from '@expo-google-fonts/wittgenstein/400Regular_Italic';
import { Wittgenstein_500Medium_Italic } from '@expo-google-fonts/wittgenstein/500Medium_Italic';
import { Wittgenstein_600SemiBold_Italic } from '@expo-google-fonts/wittgenstein/600SemiBold_Italic';
import { Wittgenstein_700Bold_Italic } from '@expo-google-fonts/wittgenstein/700Bold_Italic';
import { Wittgenstein_800ExtraBold_Italic } from '@expo-google-fonts/wittgenstein/800ExtraBold_Italic';
import { Wittgenstein_900Black_Italic } from '@expo-google-fonts/wittgenstein/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Wittgenstein_400Regular, 
    Wittgenstein_500Medium, 
    Wittgenstein_600SemiBold, 
    Wittgenstein_700Bold, 
    Wittgenstein_800ExtraBold, 
    Wittgenstein_900Black, 
    Wittgenstein_400Regular_Italic, 
    Wittgenstein_500Medium_Italic, 
    Wittgenstein_600SemiBold_Italic, 
    Wittgenstein_700Bold_Italic, 
    Wittgenstein_800ExtraBold_Italic, 
    Wittgenstein_900Black_Italic
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
          fontFamily: "Wittgenstein_400Regular"
        }}>
          Wittgenstein Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Wittgenstein_500Medium"
        }}>
          Wittgenstein Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Wittgenstein_600SemiBold"
        }}>
          Wittgenstein Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Wittgenstein_700Bold"
        }}>
          Wittgenstein Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Wittgenstein_800ExtraBold"
        }}>
          Wittgenstein Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Wittgenstein_900Black"
        }}>
          Wittgenstein Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Wittgenstein_400Regular_Italic"
        }}>
          Wittgenstein Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Wittgenstein_500Medium_Italic"
        }}>
          Wittgenstein Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Wittgenstein_600SemiBold_Italic"
        }}>
          Wittgenstein Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Wittgenstein_700Bold_Italic"
        }}>
          Wittgenstein Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Wittgenstein_800ExtraBold_Italic"
        }}>
          Wittgenstein Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Wittgenstein_900Black_Italic"
        }}>
          Wittgenstein Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Wittgenstein_400Regular](./400Regular/Wittgenstein_400Regular.ttf.png)|![Wittgenstein_500Medium](./500Medium/Wittgenstein_500Medium.ttf.png)|![Wittgenstein_600SemiBold](./600SemiBold/Wittgenstein_600SemiBold.ttf.png)||
|![Wittgenstein_700Bold](./700Bold/Wittgenstein_700Bold.ttf.png)|![Wittgenstein_800ExtraBold](./800ExtraBold/Wittgenstein_800ExtraBold.ttf.png)|![Wittgenstein_900Black](./900Black/Wittgenstein_900Black.ttf.png)||
|![Wittgenstein_400Regular_Italic](./400Regular_Italic/Wittgenstein_400Regular_Italic.ttf.png)|![Wittgenstein_500Medium_Italic](./500Medium_Italic/Wittgenstein_500Medium_Italic.ttf.png)|![Wittgenstein_600SemiBold_Italic](./600SemiBold_Italic/Wittgenstein_600SemiBold_Italic.ttf.png)||
|![Wittgenstein_700Bold_Italic](./700Bold_Italic/Wittgenstein_700Bold_Italic.ttf.png)|![Wittgenstein_800ExtraBold_Italic](./800ExtraBold_Italic/Wittgenstein_800ExtraBold_Italic.ttf.png)|![Wittgenstein_900Black_Italic](./900Black_Italic/Wittgenstein_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/wittgenstein` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Wittgenstein page on Google Fonts](https://fonts.google.com/specimen/Wittgenstein) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Wittgenstein on Google Fonts](https://fonts.google.com/specimen/Wittgenstein)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/wittgenstein)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/wittgenstein)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
