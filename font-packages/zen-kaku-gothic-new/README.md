# @expo-google-fonts/zen-kaku-gothic-new

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/zen-kaku-gothic-new)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/zen-kaku-gothic-new)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/zen-kaku-gothic-new)

This package lets you use the [**Zen Kaku Gothic New**](https://fonts.google.com/specimen/Zen+Kaku+Gothic+New) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Zen Kaku Gothic New

![Zen Kaku Gothic New](./font-family.png)

This font family contains [5 styles](#-gallery).

- `ZenKakuGothicNew_300Light`
- `ZenKakuGothicNew_400Regular`
- `ZenKakuGothicNew_500Medium`
- `ZenKakuGothicNew_700Bold`
- `ZenKakuGothicNew_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/zen-kaku-gothic-new expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/zen-kaku-gothic-new/useFonts';
import { ZenKakuGothicNew_300Light } from '@expo-google-fonts/zen-kaku-gothic-new/300Light';
import { ZenKakuGothicNew_400Regular } from '@expo-google-fonts/zen-kaku-gothic-new/400Regular';
import { ZenKakuGothicNew_500Medium } from '@expo-google-fonts/zen-kaku-gothic-new/500Medium';
import { ZenKakuGothicNew_700Bold } from '@expo-google-fonts/zen-kaku-gothic-new/700Bold';
import { ZenKakuGothicNew_900Black } from '@expo-google-fonts/zen-kaku-gothic-new/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    ZenKakuGothicNew_300Light, 
    ZenKakuGothicNew_400Regular, 
    ZenKakuGothicNew_500Medium, 
    ZenKakuGothicNew_700Bold, 
    ZenKakuGothicNew_900Black
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
          fontFamily: "ZenKakuGothicNew_300Light"
        }}>
          Zen Kaku Gothic New Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZenKakuGothicNew_400Regular"
        }}>
          Zen Kaku Gothic New Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZenKakuGothicNew_500Medium"
        }}>
          Zen Kaku Gothic New Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZenKakuGothicNew_700Bold"
        }}>
          Zen Kaku Gothic New Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZenKakuGothicNew_900Black"
        }}>
          Zen Kaku Gothic New Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ZenKakuGothicNew_300Light](./300Light/ZenKakuGothicNew_300Light.ttf.png)|![ZenKakuGothicNew_400Regular](./400Regular/ZenKakuGothicNew_400Regular.ttf.png)|![ZenKakuGothicNew_500Medium](./500Medium/ZenKakuGothicNew_500Medium.ttf.png)||
|![ZenKakuGothicNew_700Bold](./700Bold/ZenKakuGothicNew_700Bold.ttf.png)|![ZenKakuGothicNew_900Black](./900Black/ZenKakuGothicNew_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/zen-kaku-gothic-new` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Zen Kaku Gothic New page on Google Fonts](https://fonts.google.com/specimen/Zen+Kaku+Gothic+New) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Zen Kaku Gothic New on Google Fonts](https://fonts.google.com/specimen/Zen+Kaku+Gothic+New)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zen-kaku-gothic-new)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zen-kaku-gothic-new)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
