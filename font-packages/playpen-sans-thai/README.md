# @expo-google-fonts/playpen-sans-thai

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playpen-sans-thai)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playpen-sans-thai)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playpen-sans-thai)

This package lets you use the [**Playpen Sans Thai**](https://fonts.google.com/specimen/Playpen+Sans+Thai) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playpen Sans Thai

![Playpen Sans Thai](./font-family.png)

This font family contains [8 styles](#-gallery).

- `PlaypenSansThai_100Thin`
- `PlaypenSansThai_200ExtraLight`
- `PlaypenSansThai_300Light`
- `PlaypenSansThai_400Regular`
- `PlaypenSansThai_500Medium`
- `PlaypenSansThai_600SemiBold`
- `PlaypenSansThai_700Bold`
- `PlaypenSansThai_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playpen-sans-thai expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playpen-sans-thai/useFonts';
import { PlaypenSansThai_100Thin } from '@expo-google-fonts/playpen-sans-thai/100Thin';
import { PlaypenSansThai_200ExtraLight } from '@expo-google-fonts/playpen-sans-thai/200ExtraLight';
import { PlaypenSansThai_300Light } from '@expo-google-fonts/playpen-sans-thai/300Light';
import { PlaypenSansThai_400Regular } from '@expo-google-fonts/playpen-sans-thai/400Regular';
import { PlaypenSansThai_500Medium } from '@expo-google-fonts/playpen-sans-thai/500Medium';
import { PlaypenSansThai_600SemiBold } from '@expo-google-fonts/playpen-sans-thai/600SemiBold';
import { PlaypenSansThai_700Bold } from '@expo-google-fonts/playpen-sans-thai/700Bold';
import { PlaypenSansThai_800ExtraBold } from '@expo-google-fonts/playpen-sans-thai/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    PlaypenSansThai_100Thin, 
    PlaypenSansThai_200ExtraLight, 
    PlaypenSansThai_300Light, 
    PlaypenSansThai_400Regular, 
    PlaypenSansThai_500Medium, 
    PlaypenSansThai_600SemiBold, 
    PlaypenSansThai_700Bold, 
    PlaypenSansThai_800ExtraBold
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
          fontFamily: "PlaypenSansThai_100Thin"
        }}>
          Playpen Sans Thai Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansThai_200ExtraLight"
        }}>
          Playpen Sans Thai Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansThai_300Light"
        }}>
          Playpen Sans Thai Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansThai_400Regular"
        }}>
          Playpen Sans Thai Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansThai_500Medium"
        }}>
          Playpen Sans Thai Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansThai_600SemiBold"
        }}>
          Playpen Sans Thai Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansThai_700Bold"
        }}>
          Playpen Sans Thai Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansThai_800ExtraBold"
        }}>
          Playpen Sans Thai Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlaypenSansThai_100Thin](./100Thin/PlaypenSansThai_100Thin.ttf.png)|![PlaypenSansThai_200ExtraLight](./200ExtraLight/PlaypenSansThai_200ExtraLight.ttf.png)|![PlaypenSansThai_300Light](./300Light/PlaypenSansThai_300Light.ttf.png)||
|![PlaypenSansThai_400Regular](./400Regular/PlaypenSansThai_400Regular.ttf.png)|![PlaypenSansThai_500Medium](./500Medium/PlaypenSansThai_500Medium.ttf.png)|![PlaypenSansThai_600SemiBold](./600SemiBold/PlaypenSansThai_600SemiBold.ttf.png)||
|![PlaypenSansThai_700Bold](./700Bold/PlaypenSansThai_700Bold.ttf.png)|![PlaypenSansThai_800ExtraBold](./800ExtraBold/PlaypenSansThai_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playpen-sans-thai` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playpen Sans Thai page on Google Fonts](https://fonts.google.com/specimen/Playpen+Sans+Thai) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playpen Sans Thai on Google Fonts](https://fonts.google.com/specimen/Playpen+Sans+Thai)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playpen-sans-thai)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playpen-sans-thai)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
