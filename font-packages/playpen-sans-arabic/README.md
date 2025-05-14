# @expo-google-fonts/playpen-sans-arabic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playpen-sans-arabic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playpen-sans-arabic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playpen-sans-arabic)

This package lets you use the [**Playpen Sans Arabic**](https://fonts.google.com/specimen/Playpen+Sans+Arabic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playpen Sans Arabic

![Playpen Sans Arabic](./font-family.png)

This font family contains [8 styles](#-gallery).

- `PlaypenSansArabic_100Thin`
- `PlaypenSansArabic_200ExtraLight`
- `PlaypenSansArabic_300Light`
- `PlaypenSansArabic_400Regular`
- `PlaypenSansArabic_500Medium`
- `PlaypenSansArabic_600SemiBold`
- `PlaypenSansArabic_700Bold`
- `PlaypenSansArabic_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playpen-sans-arabic expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playpen-sans-arabic/useFonts';
import { PlaypenSansArabic_100Thin } from '@expo-google-fonts/playpen-sans-arabic/100Thin';
import { PlaypenSansArabic_200ExtraLight } from '@expo-google-fonts/playpen-sans-arabic/200ExtraLight';
import { PlaypenSansArabic_300Light } from '@expo-google-fonts/playpen-sans-arabic/300Light';
import { PlaypenSansArabic_400Regular } from '@expo-google-fonts/playpen-sans-arabic/400Regular';
import { PlaypenSansArabic_500Medium } from '@expo-google-fonts/playpen-sans-arabic/500Medium';
import { PlaypenSansArabic_600SemiBold } from '@expo-google-fonts/playpen-sans-arabic/600SemiBold';
import { PlaypenSansArabic_700Bold } from '@expo-google-fonts/playpen-sans-arabic/700Bold';
import { PlaypenSansArabic_800ExtraBold } from '@expo-google-fonts/playpen-sans-arabic/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    PlaypenSansArabic_100Thin, 
    PlaypenSansArabic_200ExtraLight, 
    PlaypenSansArabic_300Light, 
    PlaypenSansArabic_400Regular, 
    PlaypenSansArabic_500Medium, 
    PlaypenSansArabic_600SemiBold, 
    PlaypenSansArabic_700Bold, 
    PlaypenSansArabic_800ExtraBold
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
          fontFamily: "PlaypenSansArabic_100Thin"
        }}>
          Playpen Sans Arabic Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansArabic_200ExtraLight"
        }}>
          Playpen Sans Arabic Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansArabic_300Light"
        }}>
          Playpen Sans Arabic Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansArabic_400Regular"
        }}>
          Playpen Sans Arabic Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansArabic_500Medium"
        }}>
          Playpen Sans Arabic Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansArabic_600SemiBold"
        }}>
          Playpen Sans Arabic Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansArabic_700Bold"
        }}>
          Playpen Sans Arabic Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansArabic_800ExtraBold"
        }}>
          Playpen Sans Arabic Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlaypenSansArabic_100Thin](./100Thin/PlaypenSansArabic_100Thin.ttf.png)|![PlaypenSansArabic_200ExtraLight](./200ExtraLight/PlaypenSansArabic_200ExtraLight.ttf.png)|![PlaypenSansArabic_300Light](./300Light/PlaypenSansArabic_300Light.ttf.png)||
|![PlaypenSansArabic_400Regular](./400Regular/PlaypenSansArabic_400Regular.ttf.png)|![PlaypenSansArabic_500Medium](./500Medium/PlaypenSansArabic_500Medium.ttf.png)|![PlaypenSansArabic_600SemiBold](./600SemiBold/PlaypenSansArabic_600SemiBold.ttf.png)||
|![PlaypenSansArabic_700Bold](./700Bold/PlaypenSansArabic_700Bold.ttf.png)|![PlaypenSansArabic_800ExtraBold](./800ExtraBold/PlaypenSansArabic_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playpen-sans-arabic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playpen Sans Arabic page on Google Fonts](https://fonts.google.com/specimen/Playpen+Sans+Arabic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playpen Sans Arabic on Google Fonts](https://fonts.google.com/specimen/Playpen+Sans+Arabic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playpen-sans-arabic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playpen-sans-arabic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
