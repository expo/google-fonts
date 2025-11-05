# @expo-google-fonts/stack-sans-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/stack-sans-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/stack-sans-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/stack-sans-text)

This package lets you use the [**Stack Sans Text**](https://fonts.google.com/specimen/Stack+Sans+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Stack Sans Text

![Stack Sans Text](./font-family.png)

This font family contains [6 styles](#-gallery).

- `StackSansText_200ExtraLight`
- `StackSansText_300Light`
- `StackSansText_400Regular`
- `StackSansText_500Medium`
- `StackSansText_600SemiBold`
- `StackSansText_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/stack-sans-text expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/stack-sans-text/useFonts';
import { StackSansText_200ExtraLight } from '@expo-google-fonts/stack-sans-text/200ExtraLight';
import { StackSansText_300Light } from '@expo-google-fonts/stack-sans-text/300Light';
import { StackSansText_400Regular } from '@expo-google-fonts/stack-sans-text/400Regular';
import { StackSansText_500Medium } from '@expo-google-fonts/stack-sans-text/500Medium';
import { StackSansText_600SemiBold } from '@expo-google-fonts/stack-sans-text/600SemiBold';
import { StackSansText_700Bold } from '@expo-google-fonts/stack-sans-text/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    StackSansText_200ExtraLight, 
    StackSansText_300Light, 
    StackSansText_400Regular, 
    StackSansText_500Medium, 
    StackSansText_600SemiBold, 
    StackSansText_700Bold
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
          fontFamily: "StackSansText_200ExtraLight"
        }}>
          Stack Sans Text Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansText_300Light"
        }}>
          Stack Sans Text Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansText_400Regular"
        }}>
          Stack Sans Text Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansText_500Medium"
        }}>
          Stack Sans Text Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansText_600SemiBold"
        }}>
          Stack Sans Text Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansText_700Bold"
        }}>
          Stack Sans Text Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![StackSansText_200ExtraLight](./200ExtraLight/StackSansText_200ExtraLight.ttf.png)|![StackSansText_300Light](./300Light/StackSansText_300Light.ttf.png)|![StackSansText_400Regular](./400Regular/StackSansText_400Regular.ttf.png)||
|![StackSansText_500Medium](./500Medium/StackSansText_500Medium.ttf.png)|![StackSansText_600SemiBold](./600SemiBold/StackSansText_600SemiBold.ttf.png)|![StackSansText_700Bold](./700Bold/StackSansText_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/stack-sans-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Stack Sans Text page on Google Fonts](https://fonts.google.com/specimen/Stack+Sans+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Stack Sans Text on Google Fonts](https://fonts.google.com/specimen/Stack+Sans+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/stack-sans-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/stack-sans-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
