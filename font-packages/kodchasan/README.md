# @expo-google-fonts/kodchasan

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kodchasan)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kodchasan)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kodchasan)

This package lets you use the [**Kodchasan**](https://fonts.google.com/specimen/Kodchasan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kodchasan

![Kodchasan](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Kodchasan_200ExtraLight`
- `Kodchasan_200ExtraLight_Italic`
- `Kodchasan_300Light`
- `Kodchasan_300Light_Italic`
- `Kodchasan_400Regular`
- `Kodchasan_400Regular_Italic`
- `Kodchasan_500Medium`
- `Kodchasan_500Medium_Italic`
- `Kodchasan_600SemiBold`
- `Kodchasan_600SemiBold_Italic`
- `Kodchasan_700Bold`
- `Kodchasan_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/kodchasan expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/kodchasan/useFonts';
import { Kodchasan_200ExtraLight } from '@expo-google-fonts/kodchasan/200ExtraLight';
import { Kodchasan_200ExtraLight_Italic } from '@expo-google-fonts/kodchasan/200ExtraLight_Italic';
import { Kodchasan_300Light } from '@expo-google-fonts/kodchasan/300Light';
import { Kodchasan_300Light_Italic } from '@expo-google-fonts/kodchasan/300Light_Italic';
import { Kodchasan_400Regular } from '@expo-google-fonts/kodchasan/400Regular';
import { Kodchasan_400Regular_Italic } from '@expo-google-fonts/kodchasan/400Regular_Italic';
import { Kodchasan_500Medium } from '@expo-google-fonts/kodchasan/500Medium';
import { Kodchasan_500Medium_Italic } from '@expo-google-fonts/kodchasan/500Medium_Italic';
import { Kodchasan_600SemiBold } from '@expo-google-fonts/kodchasan/600SemiBold';
import { Kodchasan_600SemiBold_Italic } from '@expo-google-fonts/kodchasan/600SemiBold_Italic';
import { Kodchasan_700Bold } from '@expo-google-fonts/kodchasan/700Bold';
import { Kodchasan_700Bold_Italic } from '@expo-google-fonts/kodchasan/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Kodchasan_200ExtraLight, 
    Kodchasan_200ExtraLight_Italic, 
    Kodchasan_300Light, 
    Kodchasan_300Light_Italic, 
    Kodchasan_400Regular, 
    Kodchasan_400Regular_Italic, 
    Kodchasan_500Medium, 
    Kodchasan_500Medium_Italic, 
    Kodchasan_600SemiBold, 
    Kodchasan_600SemiBold_Italic, 
    Kodchasan_700Bold, 
    Kodchasan_700Bold_Italic
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
          fontFamily: "Kodchasan_200ExtraLight"
        }}>
          Kodchasan Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kodchasan_200ExtraLight_Italic"
        }}>
          Kodchasan Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kodchasan_300Light"
        }}>
          Kodchasan Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kodchasan_300Light_Italic"
        }}>
          Kodchasan Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kodchasan_400Regular"
        }}>
          Kodchasan Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kodchasan_400Regular_Italic"
        }}>
          Kodchasan Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kodchasan_500Medium"
        }}>
          Kodchasan Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kodchasan_500Medium_Italic"
        }}>
          Kodchasan Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kodchasan_600SemiBold"
        }}>
          Kodchasan Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kodchasan_600SemiBold_Italic"
        }}>
          Kodchasan Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kodchasan_700Bold"
        }}>
          Kodchasan Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kodchasan_700Bold_Italic"
        }}>
          Kodchasan Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Kodchasan_200ExtraLight](./200ExtraLight/Kodchasan_200ExtraLight.ttf.png)|![Kodchasan_200ExtraLight_Italic](./200ExtraLight_Italic/Kodchasan_200ExtraLight_Italic.ttf.png)|![Kodchasan_300Light](./300Light/Kodchasan_300Light.ttf.png)||
|![Kodchasan_300Light_Italic](./300Light_Italic/Kodchasan_300Light_Italic.ttf.png)|![Kodchasan_400Regular](./400Regular/Kodchasan_400Regular.ttf.png)|![Kodchasan_400Regular_Italic](./400Regular_Italic/Kodchasan_400Regular_Italic.ttf.png)||
|![Kodchasan_500Medium](./500Medium/Kodchasan_500Medium.ttf.png)|![Kodchasan_500Medium_Italic](./500Medium_Italic/Kodchasan_500Medium_Italic.ttf.png)|![Kodchasan_600SemiBold](./600SemiBold/Kodchasan_600SemiBold.ttf.png)||
|![Kodchasan_600SemiBold_Italic](./600SemiBold_Italic/Kodchasan_600SemiBold_Italic.ttf.png)|![Kodchasan_700Bold](./700Bold/Kodchasan_700Bold.ttf.png)|![Kodchasan_700Bold_Italic](./700Bold_Italic/Kodchasan_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/kodchasan` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kodchasan page on Google Fonts](https://fonts.google.com/specimen/Kodchasan) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kodchasan on Google Fonts](https://fonts.google.com/specimen/Kodchasan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kodchasan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kodchasan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
