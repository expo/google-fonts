# @expo-google-fonts/mozilla-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mozilla-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mozilla-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mozilla-text)

This package lets you use the [**Mozilla Text**](https://fonts.google.com/specimen/Mozilla+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mozilla Text

![Mozilla Text](./font-family.png)

This font family contains [6 styles](#-gallery).

- `MozillaText_200ExtraLight`
- `MozillaText_300Light`
- `MozillaText_400Regular`
- `MozillaText_500Medium`
- `MozillaText_600SemiBold`
- `MozillaText_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/mozilla-text expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/mozilla-text/useFonts';
import { MozillaText_200ExtraLight } from '@expo-google-fonts/mozilla-text/200ExtraLight';
import { MozillaText_300Light } from '@expo-google-fonts/mozilla-text/300Light';
import { MozillaText_400Regular } from '@expo-google-fonts/mozilla-text/400Regular';
import { MozillaText_500Medium } from '@expo-google-fonts/mozilla-text/500Medium';
import { MozillaText_600SemiBold } from '@expo-google-fonts/mozilla-text/600SemiBold';
import { MozillaText_700Bold } from '@expo-google-fonts/mozilla-text/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    MozillaText_200ExtraLight, 
    MozillaText_300Light, 
    MozillaText_400Regular, 
    MozillaText_500Medium, 
    MozillaText_600SemiBold, 
    MozillaText_700Bold
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
          fontFamily: "MozillaText_200ExtraLight"
        }}>
          Mozilla Text Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MozillaText_300Light"
        }}>
          Mozilla Text Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MozillaText_400Regular"
        }}>
          Mozilla Text Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MozillaText_500Medium"
        }}>
          Mozilla Text Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MozillaText_600SemiBold"
        }}>
          Mozilla Text Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MozillaText_700Bold"
        }}>
          Mozilla Text Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MozillaText_200ExtraLight](./200ExtraLight/MozillaText_200ExtraLight.ttf.png)|![MozillaText_300Light](./300Light/MozillaText_300Light.ttf.png)|![MozillaText_400Regular](./400Regular/MozillaText_400Regular.ttf.png)||
|![MozillaText_500Medium](./500Medium/MozillaText_500Medium.ttf.png)|![MozillaText_600SemiBold](./600SemiBold/MozillaText_600SemiBold.ttf.png)|![MozillaText_700Bold](./700Bold/MozillaText_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/mozilla-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mozilla Text page on Google Fonts](https://fonts.google.com/specimen/Mozilla+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mozilla Text on Google Fonts](https://fonts.google.com/specimen/Mozilla+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mozilla-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mozilla-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
