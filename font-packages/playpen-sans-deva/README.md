# @expo-google-fonts/playpen-sans-deva

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playpen-sans-deva)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playpen-sans-deva)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playpen-sans-deva)

This package lets you use the [**Playpen Sans Deva**](https://fonts.google.com/specimen/Playpen+Sans+Deva) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playpen Sans Deva

![Playpen Sans Deva](./font-family.png)

This font family contains [8 styles](#-gallery).

- `PlaypenSansDeva_100Thin`
- `PlaypenSansDeva_200ExtraLight`
- `PlaypenSansDeva_300Light`
- `PlaypenSansDeva_400Regular`
- `PlaypenSansDeva_500Medium`
- `PlaypenSansDeva_600SemiBold`
- `PlaypenSansDeva_700Bold`
- `PlaypenSansDeva_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playpen-sans-deva expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playpen-sans-deva/useFonts';
import { PlaypenSansDeva_100Thin } from '@expo-google-fonts/playpen-sans-deva/100Thin';
import { PlaypenSansDeva_200ExtraLight } from '@expo-google-fonts/playpen-sans-deva/200ExtraLight';
import { PlaypenSansDeva_300Light } from '@expo-google-fonts/playpen-sans-deva/300Light';
import { PlaypenSansDeva_400Regular } from '@expo-google-fonts/playpen-sans-deva/400Regular';
import { PlaypenSansDeva_500Medium } from '@expo-google-fonts/playpen-sans-deva/500Medium';
import { PlaypenSansDeva_600SemiBold } from '@expo-google-fonts/playpen-sans-deva/600SemiBold';
import { PlaypenSansDeva_700Bold } from '@expo-google-fonts/playpen-sans-deva/700Bold';
import { PlaypenSansDeva_800ExtraBold } from '@expo-google-fonts/playpen-sans-deva/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    PlaypenSansDeva_100Thin, 
    PlaypenSansDeva_200ExtraLight, 
    PlaypenSansDeva_300Light, 
    PlaypenSansDeva_400Regular, 
    PlaypenSansDeva_500Medium, 
    PlaypenSansDeva_600SemiBold, 
    PlaypenSansDeva_700Bold, 
    PlaypenSansDeva_800ExtraBold
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
          fontFamily: "PlaypenSansDeva_100Thin"
        }}>
          Playpen Sans Deva Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansDeva_200ExtraLight"
        }}>
          Playpen Sans Deva Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansDeva_300Light"
        }}>
          Playpen Sans Deva Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansDeva_400Regular"
        }}>
          Playpen Sans Deva Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansDeva_500Medium"
        }}>
          Playpen Sans Deva Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansDeva_600SemiBold"
        }}>
          Playpen Sans Deva Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansDeva_700Bold"
        }}>
          Playpen Sans Deva Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaypenSansDeva_800ExtraBold"
        }}>
          Playpen Sans Deva Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlaypenSansDeva_100Thin](./100Thin/PlaypenSansDeva_100Thin.ttf.png)|![PlaypenSansDeva_200ExtraLight](./200ExtraLight/PlaypenSansDeva_200ExtraLight.ttf.png)|![PlaypenSansDeva_300Light](./300Light/PlaypenSansDeva_300Light.ttf.png)||
|![PlaypenSansDeva_400Regular](./400Regular/PlaypenSansDeva_400Regular.ttf.png)|![PlaypenSansDeva_500Medium](./500Medium/PlaypenSansDeva_500Medium.ttf.png)|![PlaypenSansDeva_600SemiBold](./600SemiBold/PlaypenSansDeva_600SemiBold.ttf.png)||
|![PlaypenSansDeva_700Bold](./700Bold/PlaypenSansDeva_700Bold.ttf.png)|![PlaypenSansDeva_800ExtraBold](./800ExtraBold/PlaypenSansDeva_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playpen-sans-deva` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playpen Sans Deva page on Google Fonts](https://fonts.google.com/specimen/Playpen+Sans+Deva) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playpen Sans Deva on Google Fonts](https://fonts.google.com/specimen/Playpen+Sans+Deva)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playpen-sans-deva)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playpen-sans-deva)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
