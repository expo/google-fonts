# @expo-google-fonts/nokora

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/nokora)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/nokora)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/nokora)

This package lets you use the [**Nokora**](https://fonts.google.com/specimen/Nokora) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Nokora

![Nokora](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Nokora_100Thin`
- `Nokora_200ExtraLight`
- `Nokora_300Light`
- `Nokora_400Regular`
- `Nokora_500Medium`
- `Nokora_600SemiBold`
- `Nokora_700Bold`
- `Nokora_800ExtraBold`
- `Nokora_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/nokora expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/nokora/useFonts';
import { Nokora_100Thin } from '@expo-google-fonts/nokora/100Thin';
import { Nokora_200ExtraLight } from '@expo-google-fonts/nokora/200ExtraLight';
import { Nokora_300Light } from '@expo-google-fonts/nokora/300Light';
import { Nokora_400Regular } from '@expo-google-fonts/nokora/400Regular';
import { Nokora_500Medium } from '@expo-google-fonts/nokora/500Medium';
import { Nokora_600SemiBold } from '@expo-google-fonts/nokora/600SemiBold';
import { Nokora_700Bold } from '@expo-google-fonts/nokora/700Bold';
import { Nokora_800ExtraBold } from '@expo-google-fonts/nokora/800ExtraBold';
import { Nokora_900Black } from '@expo-google-fonts/nokora/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Nokora_100Thin, 
    Nokora_200ExtraLight, 
    Nokora_300Light, 
    Nokora_400Regular, 
    Nokora_500Medium, 
    Nokora_600SemiBold, 
    Nokora_700Bold, 
    Nokora_800ExtraBold, 
    Nokora_900Black
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
          fontFamily: "Nokora_100Thin"
        }}>
          Nokora Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Nokora_200ExtraLight"
        }}>
          Nokora Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Nokora_300Light"
        }}>
          Nokora Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Nokora_400Regular"
        }}>
          Nokora Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Nokora_500Medium"
        }}>
          Nokora Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Nokora_600SemiBold"
        }}>
          Nokora Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Nokora_700Bold"
        }}>
          Nokora Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Nokora_800ExtraBold"
        }}>
          Nokora Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Nokora_900Black"
        }}>
          Nokora Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Nokora_100Thin](./100Thin/Nokora_100Thin.ttf.png)|![Nokora_200ExtraLight](./200ExtraLight/Nokora_200ExtraLight.ttf.png)|![Nokora_300Light](./300Light/Nokora_300Light.ttf.png)||
|![Nokora_400Regular](./400Regular/Nokora_400Regular.ttf.png)|![Nokora_500Medium](./500Medium/Nokora_500Medium.ttf.png)|![Nokora_600SemiBold](./600SemiBold/Nokora_600SemiBold.ttf.png)||
|![Nokora_700Bold](./700Bold/Nokora_700Bold.ttf.png)|![Nokora_800ExtraBold](./800ExtraBold/Nokora_800ExtraBold.ttf.png)|![Nokora_900Black](./900Black/Nokora_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/nokora` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Nokora page on Google Fonts](https://fonts.google.com/specimen/Nokora) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Nokora on Google Fonts](https://fonts.google.com/specimen/Nokora)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nokora)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nokora)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
