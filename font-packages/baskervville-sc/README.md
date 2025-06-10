# @expo-google-fonts/baskervville-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/baskervville-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/baskervville-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/baskervville-sc)

This package lets you use the [**Baskervville SC**](https://fonts.google.com/specimen/Baskervville+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Baskervville SC

![Baskervville SC](./font-family.png)

This font family contains [4 styles](#-gallery).

- `BaskervvilleSC_400Regular`
- `BaskervvilleSC_500Medium`
- `BaskervvilleSC_600SemiBold`
- `BaskervvilleSC_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/baskervville-sc expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/baskervville-sc/useFonts';
import { BaskervvilleSC_400Regular } from '@expo-google-fonts/baskervville-sc/400Regular';
import { BaskervvilleSC_500Medium } from '@expo-google-fonts/baskervville-sc/500Medium';
import { BaskervvilleSC_600SemiBold } from '@expo-google-fonts/baskervville-sc/600SemiBold';
import { BaskervvilleSC_700Bold } from '@expo-google-fonts/baskervville-sc/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    BaskervvilleSC_400Regular, 
    BaskervvilleSC_500Medium, 
    BaskervvilleSC_600SemiBold, 
    BaskervvilleSC_700Bold
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
          fontFamily: "BaskervvilleSC_400Regular"
        }}>
          Baskervville SC Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BaskervvilleSC_500Medium"
        }}>
          Baskervville SC Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BaskervvilleSC_600SemiBold"
        }}>
          Baskervville SC Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BaskervvilleSC_700Bold"
        }}>
          Baskervville SC Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BaskervvilleSC_400Regular](./400Regular/BaskervvilleSC_400Regular.ttf.png)|![BaskervvilleSC_500Medium](./500Medium/BaskervvilleSC_500Medium.ttf.png)|![BaskervvilleSC_600SemiBold](./600SemiBold/BaskervvilleSC_600SemiBold.ttf.png)||
|![BaskervvilleSC_700Bold](./700Bold/BaskervvilleSC_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/baskervville-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Baskervville SC page on Google Fonts](https://fonts.google.com/specimen/Baskervville+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Baskervville SC on Google Fonts](https://fonts.google.com/specimen/Baskervville+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/baskervville-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/baskervville-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
