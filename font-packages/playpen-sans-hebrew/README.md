# @expo-google-fonts/playpen-sans-hebrew

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playpen-sans-hebrew)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playpen-sans-hebrew)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playpen-sans-hebrew)

This package lets you use the [**Playpen Sans Hebrew**](https://fonts.google.com/specimen/Playpen+Sans+Hebrew) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playpen Sans Hebrew

![Playpen Sans Hebrew](./font-family.png)

This font family contains [8 styles](#-gallery).

- `PlaypenSansHebrew_100Thin`
- `PlaypenSansHebrew_200ExtraLight`
- `PlaypenSansHebrew_300Light`
- `PlaypenSansHebrew_400Regular`
- `PlaypenSansHebrew_500Medium`
- `PlaypenSansHebrew_600SemiBold`
- `PlaypenSansHebrew_700Bold`
- `PlaypenSansHebrew_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playpen-sans-hebrew expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playpen-sans-hebrew/useFonts';
import { PlaypenSansHebrew_100Thin } from '@expo-google-fonts/playpen-sans-hebrew/100Thin';
import { PlaypenSansHebrew_200ExtraLight } from '@expo-google-fonts/playpen-sans-hebrew/200ExtraLight';
import { PlaypenSansHebrew_300Light } from '@expo-google-fonts/playpen-sans-hebrew/300Light';
import { PlaypenSansHebrew_400Regular } from '@expo-google-fonts/playpen-sans-hebrew/400Regular';
import { PlaypenSansHebrew_500Medium } from '@expo-google-fonts/playpen-sans-hebrew/500Medium';
import { PlaypenSansHebrew_600SemiBold } from '@expo-google-fonts/playpen-sans-hebrew/600SemiBold';
import { PlaypenSansHebrew_700Bold } from '@expo-google-fonts/playpen-sans-hebrew/700Bold';
import { PlaypenSansHebrew_800ExtraBold } from '@expo-google-fonts/playpen-sans-hebrew/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    PlaypenSansHebrew_100Thin, 
    PlaypenSansHebrew_200ExtraLight, 
    PlaypenSansHebrew_300Light, 
    PlaypenSansHebrew_400Regular, 
    PlaypenSansHebrew_500Medium, 
    PlaypenSansHebrew_600SemiBold, 
    PlaypenSansHebrew_700Bold, 
    PlaypenSansHebrew_800ExtraBold
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
          fontFamily: "PlaypenSansHebrew_100Thin"
        }}>
          Playpen Sans Hebrew Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansHebrew_200ExtraLight"
        }}>
          Playpen Sans Hebrew Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansHebrew_300Light"
        }}>
          Playpen Sans Hebrew Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansHebrew_400Regular"
        }}>
          Playpen Sans Hebrew Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansHebrew_500Medium"
        }}>
          Playpen Sans Hebrew Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansHebrew_600SemiBold"
        }}>
          Playpen Sans Hebrew Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansHebrew_700Bold"
        }}>
          Playpen Sans Hebrew Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansHebrew_800ExtraBold"
        }}>
          Playpen Sans Hebrew Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlaypenSansHebrew_100Thin](./100Thin/PlaypenSansHebrew_100Thin.ttf.png)|![PlaypenSansHebrew_200ExtraLight](./200ExtraLight/PlaypenSansHebrew_200ExtraLight.ttf.png)|![PlaypenSansHebrew_300Light](./300Light/PlaypenSansHebrew_300Light.ttf.png)||
|![PlaypenSansHebrew_400Regular](./400Regular/PlaypenSansHebrew_400Regular.ttf.png)|![PlaypenSansHebrew_500Medium](./500Medium/PlaypenSansHebrew_500Medium.ttf.png)|![PlaypenSansHebrew_600SemiBold](./600SemiBold/PlaypenSansHebrew_600SemiBold.ttf.png)||
|![PlaypenSansHebrew_700Bold](./700Bold/PlaypenSansHebrew_700Bold.ttf.png)|![PlaypenSansHebrew_800ExtraBold](./800ExtraBold/PlaypenSansHebrew_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playpen-sans-hebrew` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playpen Sans Hebrew page on Google Fonts](https://fonts.google.com/specimen/Playpen+Sans+Hebrew) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playpen Sans Hebrew on Google Fonts](https://fonts.google.com/specimen/Playpen+Sans+Hebrew)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playpen-sans-hebrew)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playpen-sans-hebrew)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
