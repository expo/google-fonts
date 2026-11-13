# @expo-google-fonts/agrave-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/agrave-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/agrave-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/agrave-pro)

This package lets you use the [**Agrave Pro**](https://fonts.google.com/specimen/Agrave+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Agrave Pro

![Agrave Pro](./font-family.png)

This font family contains [7 styles](#-gallery).

- `AgravePro_100Thin`
- `AgravePro_200ExtraLight`
- `AgravePro_300Light`
- `AgravePro_400Regular`
- `AgravePro_500Medium`
- `AgravePro_600SemiBold`
- `AgravePro_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/agrave-pro expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/agrave-pro/useFonts';
import { AgravePro_100Thin } from '@expo-google-fonts/agrave-pro/100Thin';
import { AgravePro_200ExtraLight } from '@expo-google-fonts/agrave-pro/200ExtraLight';
import { AgravePro_300Light } from '@expo-google-fonts/agrave-pro/300Light';
import { AgravePro_400Regular } from '@expo-google-fonts/agrave-pro/400Regular';
import { AgravePro_500Medium } from '@expo-google-fonts/agrave-pro/500Medium';
import { AgravePro_600SemiBold } from '@expo-google-fonts/agrave-pro/600SemiBold';
import { AgravePro_700Bold } from '@expo-google-fonts/agrave-pro/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    AgravePro_100Thin, 
    AgravePro_200ExtraLight, 
    AgravePro_300Light, 
    AgravePro_400Regular, 
    AgravePro_500Medium, 
    AgravePro_600SemiBold, 
    AgravePro_700Bold
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
          fontFamily: "AgravePro_100Thin"
        }}>
          Agrave Pro Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AgravePro_200ExtraLight"
        }}>
          Agrave Pro Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AgravePro_300Light"
        }}>
          Agrave Pro Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AgravePro_400Regular"
        }}>
          Agrave Pro Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AgravePro_500Medium"
        }}>
          Agrave Pro Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AgravePro_600SemiBold"
        }}>
          Agrave Pro Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AgravePro_700Bold"
        }}>
          Agrave Pro Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AgravePro_100Thin](./100Thin/AgravePro_100Thin.ttf.png)|![AgravePro_200ExtraLight](./200ExtraLight/AgravePro_200ExtraLight.ttf.png)|![AgravePro_300Light](./300Light/AgravePro_300Light.ttf.png)||
|![AgravePro_400Regular](./400Regular/AgravePro_400Regular.ttf.png)|![AgravePro_500Medium](./500Medium/AgravePro_500Medium.ttf.png)|![AgravePro_600SemiBold](./600SemiBold/AgravePro_600SemiBold.ttf.png)||
|![AgravePro_700Bold](./700Bold/AgravePro_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/agrave-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Agrave Pro page on Google Fonts](https://fonts.google.com/specimen/Agrave+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Agrave Pro on Google Fonts](https://fonts.google.com/specimen/Agrave+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/agrave-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/agrave-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
