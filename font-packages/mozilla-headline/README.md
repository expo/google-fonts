# @expo-google-fonts/mozilla-headline

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mozilla-headline)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mozilla-headline)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mozilla-headline)

This package lets you use the [**Mozilla Headline**](https://fonts.google.com/specimen/Mozilla+Headline) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mozilla Headline

![Mozilla Headline](./font-family.png)

This font family contains [6 styles](#-gallery).

- `MozillaHeadline_200ExtraLight`
- `MozillaHeadline_300Light`
- `MozillaHeadline_400Regular`
- `MozillaHeadline_500Medium`
- `MozillaHeadline_600SemiBold`
- `MozillaHeadline_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/mozilla-headline expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/mozilla-headline/useFonts';
import { MozillaHeadline_200ExtraLight } from '@expo-google-fonts/mozilla-headline/200ExtraLight';
import { MozillaHeadline_300Light } from '@expo-google-fonts/mozilla-headline/300Light';
import { MozillaHeadline_400Regular } from '@expo-google-fonts/mozilla-headline/400Regular';
import { MozillaHeadline_500Medium } from '@expo-google-fonts/mozilla-headline/500Medium';
import { MozillaHeadline_600SemiBold } from '@expo-google-fonts/mozilla-headline/600SemiBold';
import { MozillaHeadline_700Bold } from '@expo-google-fonts/mozilla-headline/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    MozillaHeadline_200ExtraLight, 
    MozillaHeadline_300Light, 
    MozillaHeadline_400Regular, 
    MozillaHeadline_500Medium, 
    MozillaHeadline_600SemiBold, 
    MozillaHeadline_700Bold
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
          fontFamily: "MozillaHeadline_200ExtraLight"
        }}>
          Mozilla Headline Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MozillaHeadline_300Light"
        }}>
          Mozilla Headline Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MozillaHeadline_400Regular"
        }}>
          Mozilla Headline Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MozillaHeadline_500Medium"
        }}>
          Mozilla Headline Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MozillaHeadline_600SemiBold"
        }}>
          Mozilla Headline Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MozillaHeadline_700Bold"
        }}>
          Mozilla Headline Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MozillaHeadline_200ExtraLight](./200ExtraLight/MozillaHeadline_200ExtraLight.ttf.png)|![MozillaHeadline_300Light](./300Light/MozillaHeadline_300Light.ttf.png)|![MozillaHeadline_400Regular](./400Regular/MozillaHeadline_400Regular.ttf.png)||
|![MozillaHeadline_500Medium](./500Medium/MozillaHeadline_500Medium.ttf.png)|![MozillaHeadline_600SemiBold](./600SemiBold/MozillaHeadline_600SemiBold.ttf.png)|![MozillaHeadline_700Bold](./700Bold/MozillaHeadline_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/mozilla-headline` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mozilla Headline page on Google Fonts](https://fonts.google.com/specimen/Mozilla+Headline) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mozilla Headline on Google Fonts](https://fonts.google.com/specimen/Mozilla+Headline)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mozilla-headline)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mozilla-headline)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
