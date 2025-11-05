# @expo-google-fonts/stack-sans-headline

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/stack-sans-headline)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/stack-sans-headline)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/stack-sans-headline)

This package lets you use the [**Stack Sans Headline**](https://fonts.google.com/specimen/Stack+Sans+Headline) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Stack Sans Headline

![Stack Sans Headline](./font-family.png)

This font family contains [6 styles](#-gallery).

- `StackSansHeadline_200ExtraLight`
- `StackSansHeadline_300Light`
- `StackSansHeadline_400Regular`
- `StackSansHeadline_500Medium`
- `StackSansHeadline_600SemiBold`
- `StackSansHeadline_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/stack-sans-headline expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/stack-sans-headline/useFonts';
import { StackSansHeadline_200ExtraLight } from '@expo-google-fonts/stack-sans-headline/200ExtraLight';
import { StackSansHeadline_300Light } from '@expo-google-fonts/stack-sans-headline/300Light';
import { StackSansHeadline_400Regular } from '@expo-google-fonts/stack-sans-headline/400Regular';
import { StackSansHeadline_500Medium } from '@expo-google-fonts/stack-sans-headline/500Medium';
import { StackSansHeadline_600SemiBold } from '@expo-google-fonts/stack-sans-headline/600SemiBold';
import { StackSansHeadline_700Bold } from '@expo-google-fonts/stack-sans-headline/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    StackSansHeadline_200ExtraLight, 
    StackSansHeadline_300Light, 
    StackSansHeadline_400Regular, 
    StackSansHeadline_500Medium, 
    StackSansHeadline_600SemiBold, 
    StackSansHeadline_700Bold
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
          fontFamily: "StackSansHeadline_200ExtraLight"
        }}>
          Stack Sans Headline Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansHeadline_300Light"
        }}>
          Stack Sans Headline Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansHeadline_400Regular"
        }}>
          Stack Sans Headline Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansHeadline_500Medium"
        }}>
          Stack Sans Headline Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansHeadline_600SemiBold"
        }}>
          Stack Sans Headline Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansHeadline_700Bold"
        }}>
          Stack Sans Headline Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![StackSansHeadline_200ExtraLight](./200ExtraLight/StackSansHeadline_200ExtraLight.ttf.png)|![StackSansHeadline_300Light](./300Light/StackSansHeadline_300Light.ttf.png)|![StackSansHeadline_400Regular](./400Regular/StackSansHeadline_400Regular.ttf.png)||
|![StackSansHeadline_500Medium](./500Medium/StackSansHeadline_500Medium.ttf.png)|![StackSansHeadline_600SemiBold](./600SemiBold/StackSansHeadline_600SemiBold.ttf.png)|![StackSansHeadline_700Bold](./700Bold/StackSansHeadline_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/stack-sans-headline` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Stack Sans Headline page on Google Fonts](https://fonts.google.com/specimen/Stack+Sans+Headline) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Stack Sans Headline on Google Fonts](https://fonts.google.com/specimen/Stack+Sans+Headline)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/stack-sans-headline)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/stack-sans-headline)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
